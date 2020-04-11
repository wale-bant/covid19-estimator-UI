import React, { createContext, useState } from 'react';
import covid19ImpactEstimator from './components/Estimator/index';

const Context = createContext();

export default function ContextProvider({ children }) {
  const [result, setResult] = useState({
    impact: null, severeImpact: null,
  });
  const [state, setState] = useState({
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
    },
    periodType: 'days',
    timeToElapse: '',
    reportedCases: '',
    population: '',
    totalHospitalBeds: '',
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { impact, severeImpact } = covid19ImpactEstimator(state);
    setResult(() => ({ impact, severeImpact }));
    setDialogOpen((prev) => !prev);
  };

  return (
    <Context.Provider value={{
      state,
      result,
      handleChange,
      handleSubmit,
      dialogOpen,
      setDialogOpen,
    }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context };
