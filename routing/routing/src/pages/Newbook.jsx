import { useParams,useOutletContext } from "react-router-dom"
export default function Newbook(){
    const {id}= useParams()
    // const obj=useOutletContext()
    return (

    <>
    <h1>NewBook{id}</h1>

    </>)
}