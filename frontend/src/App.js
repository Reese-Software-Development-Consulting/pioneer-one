import TitleHeader from './components/pageComponents/TitleHeader';
import logo from './assets/test_images/mickey_mouse.png';

function App() {
  return (
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
  );
}

export default App