import NavigationBar from "./navigation";
import "./header.css";

export default function PageHeader() {
	return (
		<header>
			<div className="background-green header-text">
				Wir haben geöffnet - Reservierungen oder Bestellungen unter 09333 / 8140
			</div>
			<NavigationBar />
		</header>
	);
}
