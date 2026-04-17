import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

const inputClasses = "w-full py-2 border-0 border-b border-gray-300 focus:ring-0 focus:border-black bg-transparent outline-none transition-colors text-gray-900 text-sm mb-1";
const labelClasses = "block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1 mt-5";
const errorClasses = "text-xs text-red-500 mt-1";
const btnClasses = "flex-1 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-0.5";
const btnBackClasses = "py-3 px-6 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all";

const Step2 = ({ onNext, onBack }) => {
  const { register, formState: { errors }, trigger } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = async () => {
    const isStepValid = await trigger(['email', 'password', 'confirmPassword']);
    if (isStepValid) onNext();
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="space-y-1">
        <div>
          <label className={labelClasses} htmlFor="email">Email</label>
          <input id="email" type="email" className={inputClasses} placeholder="you@example.com" {...register('email')} />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="password">Password</label>
          <div className="relative">
            <input id="password" type={showPassword ? 'text' : 'password'} className={inputClasses} placeholder="••••••••" {...register('password')} />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-gray-600" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className={errorClasses}>{errors.password.message}</p>}
        </div>

        <div>
          <label className={labelClasses} htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} className={inputClasses} placeholder="••••••••" {...register('confirmPassword')} />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400 hover:text-gray-600" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && <p className={errorClasses}>{errors.confirmPassword.message}</p>}
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-8">
        <button type="button" onClick={onBack} className={btnBackClasses}>Back</button>
        <button type="button" onClick={handleNext} className={btnClasses}>Continue</button>
      </div>
    </div>
  );
};

export default Step2;
