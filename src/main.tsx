import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
(window as any).global = window;
ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)
