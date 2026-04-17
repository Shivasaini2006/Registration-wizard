import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from './validation/schema';

import ProgressBar from './components/ProgressBar';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Success from './components/Success';

function App() {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm({
    resolver: zodResolver(registrationSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = (data) => {
    console.log('Final Form Data:', data);
    setIsSuccess(true);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen w-full bg-[#fdfaf8] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="w-full max-w-[1000px] bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-50">
        <div className="hidden md:flex flex-col w-[45%] p-10 relative bg-[#faebea] overflow-hidden">
          <div className="text-xl font-mono font-bold z-20 text-gray-900 tracking-tight">Prodesk IT</div>
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f7b7b9] rounded-full blur-[2px] z-0"></div>
          <div className="flex-1 flex items-center justify-center relative mt-4 z-10 w-full h-full">
            <img src="/hero-image.png" alt="Hero" className="absolute bottom-0 h-[105%] max-w-none object-cover drop-shadow-2xl translate-y-4" />
          </div>
        </div>

        <div className="w-full md:w-[55%] p-8 md:p-14 flex flex-col justify-between">
          <div>
            {!isSuccess && (
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Create your account</h1>
                <ProgressBar currentStep={step} totalSteps={3} />
              </div>
            )}

            <div className="flex-1 flex flex-col justify-center">
              {isSuccess ? (
                <Success />
              ) : (
                <FormProvider {...methods}>
                  <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-sm">
                    {step === 1 && <Step1 onNext={nextStep} />}
                    {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
                    {step === 3 && <Step3 onBack={prevStep} onSubmit={methods.handleSubmit(onSubmit)} />}
                  </form>
                </FormProvider>
              )}
            </div>
          </div>

          {!isSuccess && step === 1 && (
            <div className="mt-8 text-xs font-semibold text-gray-800 flex items-center">
              <span>Already have an account?</span>
              <a href="#" className="text-rose-500 hover:text-rose-600 transition-colors ml-1">Sign in</a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
