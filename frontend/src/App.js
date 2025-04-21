import './styles/App.css';
import React from 'react';
import Footer from './components/pageComponents/LinkFooter';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Main content area */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to Our Site!</h1>
        <p>This is a demo showcasing our custom social icon footer.</p>
      </main>

      {/* Footer */}
      <Footer
        backgroundColor="#111"
        iconColor="#aaa"
        hoverColor="#fff"
        icons={[
          { name: 'Instagram', href: 'https://instagram.com' },
          { name: 'Facebook', href: 'https://facebook.com' },
          { name: 'LinkedIn', href: 'https://linkedin.com' },
          { name: 'Twitter', href: 'https://twitter.com' },
          { name: 'YouTube', href: 'https://youtube.com' },
          { name: 'Discord', href: 'https://discord.com' },
          { name: 'Twitch', href: 'https://twitch.tv' },
          { name: 'Apple', href: 'https://apple.com' },
          { name: 'Android', href: 'https://android.com' },
          { name: 'TikTok', href: 'https://tiktok.com' },
        ]}
      />
    </div>
  );
};

export default App;
