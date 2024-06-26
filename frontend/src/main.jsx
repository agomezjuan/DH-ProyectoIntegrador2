import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { PlannerProvider } from './context/PlannerContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PlannerProvider>
        <App />
      </PlannerProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
