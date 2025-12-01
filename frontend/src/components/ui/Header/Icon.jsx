import { Link } from "react-router-dom";
import DexShop from "../../../assets/DexShop-Logo-2-removebg.png";

function Icon() {
  return (
    <Link to="/" className="pl-4 h-full flex items-center justify-center">
      <img src={DexShop} alt="DexShop" className="w-52 h-full"/>
      {/* <h1 className="text-3xl font-bold font">DexShop</h1> */}
    </Link>
  );
}

export default Icon;
