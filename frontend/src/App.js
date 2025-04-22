import TitleHeader from './components/pageComponents/TitleHeader';
import logo from './assets/test_images/mickey_mouse.png';
import CustomBodyCard from './components/pageComponents/CustomBodyCard';

function App() {
  return (

    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Main content pushes footer down */}
      <main style={{ flex: 1, padding: '2rem' }}>
        <TitleHeader
          profileImage={logo}
          companyName="Wally Mart"
          motto="Always low prices. Always."
          headerBgColor="#0047BA"
          headerTextColor="#FFFFFF"
          headerFont="Segoe UI, sans-serif"
          headerFontSize="20px"
          navBgColor="#F3F4F6"
          navTextColor="#333333"
          navFont="Helvetica Neue, sans-serif"
          navFontSize="15px"
          hoverColor="#0071DC"
          navLinks={[
            { label: 'Departments', href: '#' },
            { label: 'Services', href: '#' },
            { label: 'Pharmacy Delivery', href: '#' },
            { label: "Mother's Day", href: '#' },
            { label: 'Dinner Solutions', href: '#' },
            { label: 'Registry', href: '#' },
          ]}
        />
        <h1>Welcome to Our Site!</h1>
        <p>This is a demo showcasing our custom business page.</p>

        {/* Option 1: Responsive with aspect ratio */}
        <CustomImage src={mickey} responsive useAspectRatio aspectRatio="4/3" /> 

        {/* Option 2: Responsive with fluid breakpoints */}
        <CustomImage src={mickey} responsive />
        <SpinningImage src={mickey} responsive useAspectRatio aspectRatio='4/3'/>

        <CustomBodyCard imageSrc={mickey} imagePosition="right"
                        title='test title' text='this is a simple test paragraph that is kinda long cuz it needs testing for the test' 
                        backgroundColor="red" width='800px' height='auto'/>
        
      </main>

      

      {/* Footer stays at the bottom */}
      <BusinessFooter
        backgroundColor="#111"
        backgroundImage="none"
        leftContent={[
          { text: 'Pioneer One LLC', font: 'Roboto', fontSize: '1.25rem', textColor: '#fff' },
          { text: '123 Tech Avenue, Charlotte, NC', font: 'Roboto', fontSize: '1rem', textColor: '#ccc' },
          { text: '(704) 123-4567', font: 'Courier', fontSize: '1rem', textColor: '#ccc' },
          { text: 'support@pioneerone.com', font: 'Courier', fontSize: '1rem', textColor: '#ccc' },
        ]}
        rightContent={[
          { text: 'Privacy Policy', href: '/privacy', font: 'Roboto', fontSize: '1.25rem', textColor: '#ccc' },
          { text: 'Terms of Service', href: '/terms', font: 'Roboto', fontSize: '1.25rem', textColor: '#ccc' },
          { text: 'Contact Us', href: '/contact', font: 'Roboto', fontSize: '1.25rem', textColor: '#ccc' },
        ]}
        socialIcons={[
          { name: 'Instagram', href: 'https://instagram.com' },
          { name: 'Facebook', href: 'https://facebook.com' },
          { name: 'LinkedIn', href: 'https://linkedin.com' },
          { name: 'Twitter', href: 'https://twitter.com' },
          { name: 'YouTube', href: 'https://youtube.com' },
        ]}
        iconColor="#aaa"
        hoverColor="#fff"
      />
    </div>
  );
}

export default App