import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Cars from './components/Cars/Cars';
import FAQs from './components/FAQs/FAQs';

function App() {
  return (
    <div>
      <Header></Header>
      <Cars></Cars>
      <FAQs></FAQs>
    </div>
  );
}

export default App;
