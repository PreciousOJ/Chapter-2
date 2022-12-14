import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetails';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='preciousoj' />} />
          <Route path='/projects' element={<Projects userName='preciousoj' />} />
          <Route
            path='/projects/:name'
            element={<ProjectDetail userName='preciousoj ' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;