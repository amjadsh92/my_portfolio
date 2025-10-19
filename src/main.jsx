import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-dark-indigo/theme.css';

import 'primeicons/primeicons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PrimeReactProvider>
    <App />
    </PrimeReactProvider>
  </StrictMode>,
)
