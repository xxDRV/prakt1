import { Routes, Route } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<TasksPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </div>
  );
}


export default App;
