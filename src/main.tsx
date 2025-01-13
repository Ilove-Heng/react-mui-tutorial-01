import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css'
import App from './App.tsx'

// Create a new QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60, // 1 hour
    }
  }
});

let rootElement: HTMLElement | null = null;

if(typeof document !== 'undefined') {
  rootElement = document.getElementById('root');
}

if(rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <NuqsAdapter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </NuqsAdapter>
      </LocalizationProvider>
    </StrictMode>
  )
}
