import { HashRouter } from 'react-router-dom';
import RoutesNav from './RoutesNav';
import Header from './components/Header';
import './styles/app.css';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <RoutesNav />
      </HashRouter>
    </div>
  );
}

export default App;
