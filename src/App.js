import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardItem from './components/Card/Card';
import { Container, Grid } from '@mui/material';
import CardList from './components/CardList/CardList';
import SnackBar from './components/SnackBar/SnackBar';



function App() {
  return (
    //JSX
    <div className="App">
      <NavBar /> 
        <div className="general-container">
          <CardList />
        </div>
    </div>

  );
}

export default App;
