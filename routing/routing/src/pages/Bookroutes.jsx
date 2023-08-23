import { Route,Routes } from "react-router-dom"
import Books from "./Books"
import Newbook from "./Newbook"
import Dictionary from "./Dictionary"
import Booklayout from "./Booklayout"
export default function Bookroutes(){
    return (<> 
    <Booklayout/>  
    <Routes>
        <Route index element={<Books/>}/>
        <Route path=":id" element={<Newbook/>}/>
        <Route path="new" element={<Dictionary/>}/>
    </Routes>
    </>)
}