import Link from "next/link";
import "./header.css";

export default function NavigationBar() {
	return (
		<nav className="navbar background-green">
			<Link
				className="navbar-link background-green"
				href={"/"}>
				Willkommen
			</Link>
			<Link
				className="navbar-link background-green"
				href={"/"}>
				SpeiseKarte
			</Link>
			<Link
				className="navbar-link background-green"
				href={"/"}>
				Galerie
			</Link>
			<Link
				className="navbar-link background-green"
				href={"/"}>
				Uber Uns
			</Link>
			<Link
				className="navbar-link background-green"
				href={"/"}>
				To-Go
			</Link>
		</nav>
	);
}
