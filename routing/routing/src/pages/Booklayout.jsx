import {Link, Outlet}from "react-router-dom"
export default function Booklayout(){
    return (
        <>
        <Link to ={"/books/1"}>Book1</Link>
        <br />
        <Link to ={"/books/2"}>Book2</Link>
        <br />
        <Link to ={"/books/new"}>Dictionary</Link>
        <Outlet context={{hello :"world"}}/>        
        </>
    )
}