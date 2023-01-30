import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
       <h2> Learn Redux</h2>
      <User 
      data ={{
        name:"Ajinkya",
        designation:"Jr Software Developer"
      }}
        />
    </div>
  );
}

export default App;
