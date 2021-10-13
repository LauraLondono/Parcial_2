import './App.css';
import useWindowSize from "./components/useWindowSize";
import HeaderLayout from './components/HeaderLayout';
import PinterestLayout from './components/PinterestLayout';
import FooterLayout from "./components/FooterLayout";

const App = () => {

  const { width } = useWindowSize();

  return (
    <div>
      {/* Iphone x */}
    {width < 500 && (
      <>
      <HeaderLayout />
      <PinterestLayout /> 
      <FooterLayout />
      </>
    )}
      {/* Else */}
      {width > 500 && (
      <>
      <HeaderLayout />
      <PinterestLayout /> 
      </>
    )}
           
    </div>
  );
};

export default App;
