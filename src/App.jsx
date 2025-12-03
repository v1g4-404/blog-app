import { Routes, Route, Link } from 'react-router-dom';
import Home from "../src/Pages/Home";
import Banner from "../src/Pages/Banner";
import Detail from "../src/Pages/Detail";
import Contact from "../src/Pages/Contact";

export default function App() {
  return (
    <>

      <Banner />

      <Routes>
        <Route path='/'>
          <Route index={true} element={<Home />} />
          <Route path='posts/:id' element={<Detail />} />
        </Route>
        <Route path='contact' element={<Contact />} />

      </Routes>
    </>
  )
}

