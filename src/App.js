import { Button,Link } from "./lib/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Button text={"click!"} primary={false} />
      <br></br>
      <Link text={"Google"} to={"https://www.google.com"} />
    </div>
  );
}

export default App;
