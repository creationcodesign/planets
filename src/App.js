import { HashRouter } from 'react-router-dom';
import './styles/app.css';
import RoutesNav from './RoutesNav';
import Header from './components/Header';

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
