import './App.css';
import Header from './component/modules/Header/Header'
import SpeechSection from './component/templates/SpeechSection/SpeechSection';
import AboutSection from './component/templates/AboutSection/AboutSection'
import InfoSection from './component/templates/InfoSection/InfoSection';
import Footer from './component/modules/Footer/Footer'
function App() {
  return (
    <>
      <Header/>
      <SpeechSection/>
      <AboutSection/>
      <InfoSection/>
      <Footer/>
    </>
  );
}

export default App;
