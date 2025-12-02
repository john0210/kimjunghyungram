import './App.css';
import Header from './componets/common/Header.jsx';
import ProtectedRouter from './routes/ProtectedRouter.jsx';

function App() {
  
  return (
    <>
      <Header />
      <ProtectedRouter />
    </>
  )
}

export default App;
