import { CiMemoPad } from "react-icons/ci";


function Navbar() {
  return (
    <nav className="w-full bg-slate-700 p-3 flex justify-center items-center text-emerald-500 text-4xl font-primary font-black">
    <CiMemoPad size={50} color="#34d399"/>
    <span className="pl-2">Keeper</span>

    </nav>
  )
}

export default Navbar