import React from 'react';
import { useFormContext } from 'react-hook-form';

const btnClasses = "flex-1 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-0.5";
const btnBackClasses = "py-3 px-6 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all shadow-sm";

const Step3 = ({ onBack, onSubmit }) => {
  const { getValues } = useFormContext();
  const data = getValues();

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 space-y-4 mb-2">
        <div>
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Personal Info</h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <span className="text-gray-500">First Name:</span>
            <span className="font-semibold text-gray-900">{data.firstName}</span>
            <span className="text-gray-500">Last Name:</span>
            <span className="font-semibold text-gray-900">{data.lastName}</span>
            <span className="text-gray-500">Date of Birth:</span>
            <span className="font-semibold text-gray-900">{data.dateOfBirth}</span>
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 border-b border-gray-200 pb-1">Account Info</h3>
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <span className="text-gray-500">Email:</span>
            <span className="font-semibold text-gray-900 truncate">{data.email}</span>
            <span className="text-gray-500">Password:</span>
            <span className="font-semibold text-gray-900">••••••••</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 mt-8">
        <button type="button" onClick={onBack} className={btnBackClasses}>Edit</button>
        <button type="button" onClick={onSubmit} className={btnClasses}>Create Account</button>
      </div>
    </div>
  );
};

export default Step3;
