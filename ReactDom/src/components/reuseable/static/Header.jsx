import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div  >
      <Link to="/"  className="bg-red-500 p-2.5 m-1.5">Home</Link>
      <Link to="/about" className="bg-red-500 p-2.5 m-1.5">About</Link>
      <Link to="/contact" className="bg-red-500 p-2.5 m-1.5">Contact</Link>
    </div>
  )
}


export default Header
