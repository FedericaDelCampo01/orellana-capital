import React from 'react';
import { trackEvent } from '../Utility/AnalyticsHelpers';

interface ServiceCardProps {
  title: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const handleServiceCardClick = (title: string, onSelect: () => void) => {
  trackEvent('button_click', {
    button_name: `Service Card ${title}`,
    section: 'Services'
  });
  onSelect();
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, isSelected, onSelect }) => {
  return (
    <button onClick={() => handleServiceCardClick(title, onSelect)} className="w-full group">
      <div 
        className={`rounded-xl p-4 md:px-6 flex-1 transition-all duration-300 ease-in-out overflow-hidden text-left 
        ${isSelected ? 'h-[220px] md:h-[180px] bg-white' : 'h-[60px] bg-dark-blue'}`}
      >
        <h2 className={`text-base sm:text-lg md:text-xl font-medium ${isSelected ? 'text-dark-blue mb-4' : 'text-white mb-0'} transition-all duration-300 `}>
          {title}
        </h2>
        <div className={`transition-all duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 -translate-y-2'}`}>
          <p className="text-dark-blue text-sm font-light">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ServiceCard;
