import './App.css';
import image from './grocery.jpg';
import { GroceryList } from './GroceryList';
import imageTwo from './trolley.jpg';

function App() {
  return (
    <div className='app'>
      <img src={image} alt="grocery" width="400px" height="300px"/>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <img src={imageTwo} alt="trolley" width="400px" height="300px"/> 
    </div>
  );
}

export default App;
