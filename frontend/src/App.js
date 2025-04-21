import React from 'react';
import BusinessFooter from './components/pageComponents/BusinessFooter';

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
        <h1>Welcome to Our Site!</h1>
        <p>This is a demo showcasing our custom business footer.</p>
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

export default App;
