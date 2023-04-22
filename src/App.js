
import './App.css';
import Section2 from './components/AboutusSection2';
import AcademicSection from './components/AcademicSection';
import CampusLifeSection from './components/CampusLifeSection';
import EventsSection from './components/Evennt/EventsSection';
import UpCommintEvent from './components/Evennt/UpCommingEvents';
import Bootom from './components/Footer/Bootom';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section2/>
      <AcademicSection/>
      <EventsSection/>
      <UpCommintEvent/>
      <CampusLifeSection/>
      <hr class="my-3"/>
      <Bootom/>
      <Footer/>
      
    </div>
  );
}

export default App;
