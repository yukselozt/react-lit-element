import "./App.css";
import React from "react";
import { ResetTheName } from "./components/ResetTheName/ResetTheName";

function App() {
  return (
    <main className="App">
      <h1>Count !</h1>
      <ResetTheName name="Yüksel" />
    </main>
  );
}

// const MyReactComponent = memo(function Greeting() {
//   console.log(
//     "MyReactComponent was rendered at",
//     new Date().toLocaleTimeString()
//   );
//   return <h3>Hello</h3>;
// });

export default App;
