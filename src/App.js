import './App.css';
import CardDetailsForm from './components/CardDetailsForm';
import CardAnimate from './components/CardAnimate';
import { useState } from 'react';
import ThankYou from './components/ThankYou';
import { useEffect } from 'react';

function App() {
  const [cardDetails, setCardDetails] = useState({
    firstName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!showThankYou) {
      setCardDetails({
        firstName: '',
        cardNumber: '',
        month: '',
        year: '',
        cvv: '',
      });
    }
  }, [showThankYou]);
  return (
    <div className="font-spaceGrotesk">
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <CardAnimate cardDetails={cardDetails} />
        </div>

        {showThankYou ? (
          <div className="px-6 mt-[91px] flex justify-center">
            <ThankYou setShowThankYou={setShowThankYou} />
          </div>
        ) : (
          <div className="flex justify-center px-6 mt-[91px]">
            <CardDetailsForm
              setCardDetails={setCardDetails}
              cardDetails={cardDetails}
              setShowThankYou={setShowThankYou}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
