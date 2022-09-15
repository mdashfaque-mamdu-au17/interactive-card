import logo from './logo.svg';
import './App.css';
import CardDetailsForm from './components/CardDetailsForm';

function App() {
  return (
    <div className="font-spaceGrotesk">
      <div>
        <div className="flex justify-center px-6">
          <CardDetailsForm />
        </div>
      </div>
    </div>
  );
}

export default App;
