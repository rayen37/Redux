
import './App.css';
import Addtodo from './components/Addtodo';
import Todolist from './components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"lightblue" , padding :" 50px 0px" , fontFamily:"Lucida Calligraphy"}}>TODO LIST</h1>
      <span>
   <Addtodo />
   <Todolist />
   </span>
    </div>
  );
}

export default App;
