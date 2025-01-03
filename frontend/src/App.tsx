import { Link, Route, Routes } from 'react-router-dom';
import { TacticsPage } from './pages/TacticsPage/TacticsPage';

function App() {
  return (
    <div className='flex'>
      <nav>
        <Link to="/" />
        <Link to="/tactics" />
        <Link to="/team-report" />
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Link to="/tactics">go to tactics</Link>} />
          <Route path='/tactics' element={<TacticsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
