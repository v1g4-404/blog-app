import { Routes, Route } from 'react-router-dom';
import Home from "../src/assets/Pages/Home";
import Banner from "../src/assets/Pages/Banner";
import Detail from "../src/assets/Pages/Detail";
import Contact from "../src/assets/Pages/Contact";

function App() {
  return (
    <>
      <Home />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App