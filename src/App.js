import './App.css';
import './fonts/SF-Pro-Display-Regular.woff'
import Header from './Sections/Header/Header';
import Navigation from './Sections/Navigation/Navigation';
import MainSection from './Sections/MainSection/MainSection';


function App() {
  return (
    <div className='main'>
      <Header></Header>
      <MainSection></MainSection>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
