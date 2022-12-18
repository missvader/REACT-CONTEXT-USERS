import './App.css';
//importamos componentes 
import UserList from './components/UserList';
import Profile from './components/Profile';

//CONTEXT
import UserState from './context/User/UserState';

function App() {
  return (
    <UserState>
      <UserList/>
      <Profile/>
    </UserState>
  );
}

export default App;
