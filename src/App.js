import React from "react";
import "./App.css";
import CompC from "./components/Context/CompC";
import { UserProvider } from "./components/Context/userContext";
import LifecycleA from "./components/LifecycleExam/LifecycleA";
function App() {
  return (
    <div className="App">
      {/* <UserProvider value="chong">
        <CompC></CompC>
      </UserProvider> */}

      <LifecycleA></LifecycleA>

      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={isLoggedIn => (isLoggedIn ? "chong" : "Guest")} /> */}
    </div>
  );
}

export default App;
