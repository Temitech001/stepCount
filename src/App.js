// import { useState } from 'react';

// const messages = [
//   'Learn React',
//   'Applly for jobs',
//   'seek for advice',
//   'read novels',
//   'sleep',
// ];

// // const step = 2;

// function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handleNext() {
//     if (step < 5) setStep(step + 1);
//   }
//   function handlePrevious() {
//     if (step > 1) setStep(step - 1);
//   }
//   return (
//     <>
//       <button
//         className="btn"
//         style={{ backgroundColor: '#7950f2' }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         &times{' '}
//       </button>
//       {isOpen && (
//         <div className="steps  w-[100%] s my-[auto]">
//           <div className="numbers">
//             <div className={step >= 1 ? 'active' : ''}>1</div>
//             <div className={step >= 2 ? 'active' : ''}>2</div>
//             <div className={step >= 3 ? 'active' : ''}>3</div>
//             <div className={step >= 4 ? 'active' : ''}>4</div>
//             <div className={step >= 5 ? 'active' : ''}>5</div>
//           </div>
//           <p className=" ">
//             step {step}: {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               onClick={handlePrevious}
//               style={{ backgroundColor: '#7950f2', color: '#fff' }}
//             >
//               previous
//             </button>
//             <button
//               onClick={handleNext}
//               style={{ backgroundColor: '#7950f2', color: '#fff' }}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;

iimport { useState } from 'react';

const messages = [
  'Learn React',
  'Apply for jobs',
  'Seek for advice',
  'Read novels',
  'Sleep',
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 5) setStep(step + 1);
  }

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: '#7950f2' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps p-4">
          <div className="numbers flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((number) => (
              <div
                key={number}
                className={`${
                  step >= number ? 'bg-blue-500' : 'bg-gray-300'
                } h-6 w-6 rounded-full flex items-center justify-center text-white`}
              >
                {number}
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons flex justify-center mt-4">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              className="px-4 py-2 mr-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              className="px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
