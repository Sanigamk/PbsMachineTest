import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Whypbs from "./Page/Section6/Whypbs";
import Grid from "./Page/Section2/Grid";
import About from "./Page/Section2/About";
import OurService from "./Page/Section4/OurService";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      <OurService />
      <Whypbs />
    </>
  );
}

export default App;
