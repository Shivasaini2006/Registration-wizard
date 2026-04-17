import React from 'react';
import { useFormContext } from 'react-hook-form';

const inputClasses = "w-full py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-black bg-transparent outline-none transition-colors text-gray-900 text-sm mb-1";
const labelClasses = "block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 mt-5";
const errorClasses = "text-xs text-red-500 mt-1";
const btnClasses = "w-full py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all mt-8 shadow-md transform hover:-translate-y-0.5";

const Step1 = ({ onNext }) => {
  const { register, formState: { errors }, trigger } = useFormContext();

  const handleNext = async () => {
    const isStepValid = await trigger(['firstName', 'lastName', 'dateOfBirth']);
    if (isStepValid) onNext();
  };

  return (
    <div className="animate-in fade-in duration-300">
      <div className="space-y-1">
        <div>
          <label className={labelClasses} htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" className={inputClasses} placeholder="John" {...register('firstName')} />
          {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" className={inputClasses} placeholder="Doe" {...register('lastName')} />
          {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="dateOfBirth">Date of Birth</label>
          <input id="dateOfBirth" type="date" className={inputClasses} {...register('dateOfBirth')} />
          {errors.dateOfBirth && <p className={errorClasses}>{errors.dateOfBirth.message}</p>}
        </div>
      </div>

      <button type="button" onClick={handleNext} className={btnClasses}>
        Continue
      </button>
    </div>
  );
};

export default Step1;
