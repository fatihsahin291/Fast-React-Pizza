import { Link } from "react-router-dom";
import SearchOrder from "../features/order/Searchorder";

function Header() {
	return (
		<header>
			<Link to="/">Fast React Pizza</Link>
			<SearchOrder />
			<p>jdhfskjdfh</p>
		</header>
	);
}

export default Header;
