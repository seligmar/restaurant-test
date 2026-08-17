import Link from "next/link";
import Image from "next/image";
import "./header.css";

export default function NavigationBar() {
	return (
		<nav className="navbar background-green">
			<Image />
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
