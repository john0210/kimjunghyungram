import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header.jsx';
// import ProtectedRouter from './routes/ProtectedRouter.jsx';

function App() {
  
  return (
    <>
      <Header />
      {/* <ProtectedRouter /> */}
      <Outlet />
    </>
  )
}

export default App;
