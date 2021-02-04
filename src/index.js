// dependencies
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components
import App from './App';

// styles
import './App.css';

// attach app to dom
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
