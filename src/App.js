import { useState } from 'react';

const messages = [
  'Learn React',
  'Applly for jobs',
  'seek for advice',
  'read novels',
  'sleep',
];

// const step = 2;

function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    setStep(step + 1);
  }
  function handlePrevious() {
    setStep(step - 1, 0);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? 'active' : ''}>1</div>
        <div className={step >= 2 ? 'active' : ''}>2</div>
        <div className={step >= 3 ? 'active' : ''}>3</div>
        <div className={step >= 4 ? 'active' : ''}>4</div>
        <div className={step >= 5 ? 'active' : ''}>5</div>
      </div>
      <p className=" ">
        step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
