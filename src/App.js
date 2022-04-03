import logo from './logo.svg';
import './App.css';
import ReUsNavBar from './reUsableComponents/ReUsNavBar/ReUsNavBar';
import ReUsFooter from './reUsableComponents/ReUsFooter/ReUsFooter';
import ReUsAccordion from './reUsableComponents/ReUsAccordion/ReUsAccordion';
import ReUsAlert from './reUsableComponents/ReUsAlert/ReUsAlert';
import ReUsModal from './reUsableComponents/ReUsModal/ReUsModal';

function App() {
  return (
    <div className="mainApp">

      <ReUsNavBar />
      <ReUsAccordion />
      <ReUsAlert />
      <ReUsModal />
      <ReUsFooter />









    </div>
  );
}

export default App;
