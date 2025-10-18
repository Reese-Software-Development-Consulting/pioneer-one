import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Product } from '../../models/Product';
import { ProductCard } from './ProductCard';
import { ProductDialog } from './ProductDialog';
import PositionEnum from '../../enums/PositionEnum';

interface ProductRowProps {
  title: string;
  titlePosition?: keyof typeof PositionEnum;
  titleBold?: boolean;
  titleFont?: string;
  titleColor?: string;
  LoadProducts: () => Promise<Product[]>;
}

export const ProductRow: React.FC<ProductRowProps> = ({
  title,
  titlePosition = 'LEFT',
  titleBold = false,
  titleFont = 'Arial',
  titleColor = '#000',
  LoadProducts,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hovering, setHovering] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    LoadProducts().then(products => {
      setProducts(products);
    });
  }, [LoadProducts]);

  useEffect(() => {
    const updateArrows = () => {
      if (containerRef.current) {
        const el = containerRef.current;
        setShowLeftArrow(el.scrollLeft > 0);
        setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
      }
    };
    updateArrows();
    const container = containerRef.current;
    container?.addEventListener('scroll', updateArrows);
    return () => container?.removeEventListener('scroll', updateArrows);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const justifyMap = {
    LEFT: 'flex-start',
    CENTER: 'center',
    RIGHT: 'flex-end',
  };

  return (
    <Box sx={{ my: 4, px: 2 }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Box
            sx={{
                display: 'flex',
                justifyContent: justifyMap[titlePosition],
                mb: 2,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                fontWeight: titleBold ? 'bold' : 'normal',
                fontFamily: titleFont,
                color: titleColor,
                }}
            >
                {title}
            </Typography>
        </Box>

      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {hovering && showLeftArrow && (
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: 0,
              zIndex: 2,
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
            }}
          >
            <ArrowBackIos />
          </IconButton>
        )}

        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'visible',
            gap: 2,
            scrollBehavior: 'smooth',
            paddingTop: '10px',
            paddingBottom: '10px',
            px: 4,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.item_id}
              product={product}
              handleButtonClick={() => console.log('Add to cart', product)}
              handleDoubleClick={(p) => setSelectedProduct(p)}
            />
          ))}
        </Box>

        {hovering && showRightArrow && (
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: 0,
              zIndex: 2,
              backgroundColor: 'rgba(255,255,255,0.8)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        )}
      </Box>

      {selectedProduct && (
        <ProductDialog
          open={true}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          handleButtonClick={(p) => {
            console.log('Dialog Add to Cart:', p);
            setSelectedProduct(null);
          }}
        />
      )}
    </Box>
  );
};
