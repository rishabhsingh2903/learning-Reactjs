import {Link,Route, Routes} from "react-router-dom"
import Signin from "./pages/Signin"

import Notfound from "./pages/Notfound"

import Bookroutes from "./pages/Bookroutes"
export default function App(){
  return( 
    <>
    {/*hard coded the route location using location keyword (not necessary) */}
    <Routes location="/books">
      <Route path="/books" element={<h1>rendering two compents with same route</h1>}/>
    </Routes>
  <nav>
    <ul>
      <li><Link to="/" replace>Home</Link></li>
      <li><Link to="/books" reloadDocument>Books</Link></li>

    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Signin />}/>
    <Route path="/books/*" element={<Bookroutes/>}/>
      {/* <Route index element={<Books/>}/>
      <Route path=":id" element={<Newbook/>}/>
      <Route path="new" element={<Dictionary/>}/> */}
    {/* <Route path="/books" element={<Books />}/>
    <Route path="/books/:id" element={<Newbook />}/>
    <Route path="/books/new" element={<Dictionary/>}/> */}
    <Route path="*" element={<Notfound />}/>
  </Routes>
  </>)
}