import './App.css'
import Home from './Home';
import Customers from './Users'
import { UserProvider } from './provider/UserProvider'

function App() {

  return (
    <UserProvider>
      <Home/>
      <Customers />
    </UserProvider>
  );
}

export default App
