import { Link } from "react-router-dom";

const AllPlayers = ({ allPlayers }) => {
	return (
		<div>
			<h3>Check out all our Puppy Players!</h3>
			<div className="puppiesList">
				<br />
				{
					allPlayers.map((player) => {
						return (
							<Link to={`/players/${player.id}`}>
								<div key={player.id} className="puppyCard">
									<img src={player.imageUrl} />
									<h3>{player.name}</h3>
								</div>
							</Link>

							/*
								<a href=#${puppy.name}>
									<div class="puppyCard">
											<img src="${puppy.imageUrl}" />
											<h3>${puppy.name}</h3>
									</div> 
								</a>
							*/
						);
					})
				}
			</div>
		</div>
	);
};

export default AllPlayers;
