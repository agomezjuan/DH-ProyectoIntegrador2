import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PlannerContext = createContext();

export const PlannerProvider = ({ children }) => {
  const [day, setDay] = useState('');

  return (
    <PlannerContext.Provider value={{ day, setDay }}>
      {children}
    </PlannerContext.Provider>
  );
};

PlannerProvider.propTypes = {
  children: PropTypes.node.isRequired
};
