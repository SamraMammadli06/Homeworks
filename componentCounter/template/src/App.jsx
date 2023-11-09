import { useState } from "react";
import P from "./components/P/P";
import Button from "./components/Button/Button";

function App() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
	  setCount(count + 1);
	};
  
	const handleDecrement = () => {
	  setCount(count - 1);
	};
  
	return (
	  <>
		<Button onClick={handleDecrement}>-</Button>
		<P>{count}</P>
		<Button onClick={handleIncrement}>+</Button>
	  </>
	);

}

export default App;
