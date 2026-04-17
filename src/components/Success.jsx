import React from 'react';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
      <div className="flex justify-center mb-6">
        <CheckCircle className="text-green-500 h-20 w-20" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Success!</h2>
      <p className="text-gray-600 mb-8 max-w-sm mx-auto">
        Your registration has been completed successfully. We're excited to have you on board!
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
      >
        Start Over
      </button>
    </div>
  );
};

export default Success;
