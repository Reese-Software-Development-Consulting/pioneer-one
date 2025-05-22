import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Typography,
} from '@mui/material';

const BodyGrid = ({
  children,
  padding = '32px',
  gap = '24px',
  width = '100%',
  rows = 2,
  columns = 3,
  itemWidth = 200,
}) => {
  const itemsPerPage = rows * columns;
  const totalItems = React.Children.count(children);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const paginatedChildren = React.Children.toArray(children).slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Box sx={{ width, padding }}>
      <Grid
        container
        spacing={parseInt(gap)}
        justifyContent="center"
        wrap="wrap"
      >
        {paginatedChildren.map((child, index) => (
          <Grid item key={index}>
            <Box sx={{ width: `${itemWidth}px` }}>
              {child}
            </Box>
          </Grid>
        ))}
      </Grid>

      {totalPages > 1 && (
        <Box
          sx={{
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <Button
            variant="outlined"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Typography variant="body2">
            Page {currentPage + 1} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            disabled={currentPage >= totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BodyGrid;