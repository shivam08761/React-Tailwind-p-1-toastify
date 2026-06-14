import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import App from './App.jsx'
import Wrapper from './Wrapper.jsx';

createRoot(document.getElementById('root')).render(

<Wrapper>
  <ToastContainer position="top-center" />
<App />
</Wrapper>



)
