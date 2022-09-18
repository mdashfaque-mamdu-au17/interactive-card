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
    <main className="font-spaceGrotesk">
      <section className="lg:grid lg:grid-cols-2">
        <div>
          <CardAnimate cardDetails={cardDetails} />
        </div>

        <div className="lg:flex lg:items-center lg:justify-around 2xl:justify-start">
          {showThankYou ? (
            <div className="px-6 mt-[91px] flex justify-center lg:mt-0">
              <ThankYou setShowThankYou={setShowThankYou} />
            </div>
          ) : (
            <div className="flex justify-center px-6 mt-[91px] lg:mt-0">
              <CardDetailsForm
                setCardDetails={setCardDetails}
                cardDetails={cardDetails}
                setShowThankYou={setShowThankYou}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
