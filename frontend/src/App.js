import SimpleHeader from './components/pageComponents/SimpleHeader';
import logo from './assets/test_images/mickey_mouse.png';

function App() {
  return (
    <SimpleHeader
      profileImage={logo}
      title="Pita Wheel"
      backgroundColor="#1E1E1E"
      font="Montserrat, sans-serif"
      fontSize="20px"
      navAlignment="center"
      textColor="#FFFFFF"
      hoverColor="#FFD700"
      height="80px"
      navLinks={[
        { label: 'Home', href: '#' },
        { label: 'Menu', href: '#' },
        { label: 'Jobs', href: '#' }
      ]}
    />
  );
}

export default App