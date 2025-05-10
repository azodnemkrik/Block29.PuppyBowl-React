import { Link } from "react-router-dom"

const NavBar = ({ pathname }) => {
	return (
		<div>
			<div>
				<img className="float mainLogo" src="https://bestfriends.org/sites/default/files/media-icon/PB_xxi_2d_logo_vector_1_color.png" />
			</div>
			<nav>
				<Link to='/' className={ pathname === "/" ? "selected" : ""}>Home</Link>
				<Link to='/players' className={ pathname === "/players" ? "selected" : ""}>All Players</Link>
				<Link to='/players/:id' className={ pathname === "/players:id" ? "selected" : ""}>Single Player</Link>
				<Link to='/addplayer' className={ pathname === "/addplayer" ? "selected" : ""}>Add New Player</Link>
			</nav>
		</div>
	)
}


export default NavBar