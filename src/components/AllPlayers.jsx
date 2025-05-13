import axios from "axios";
import { Link } from "react-router-dom";

const AllPlayers = ({ allPlayers, searchResults, setSearchResults, checkDelete }) => {

	const searchForPlayers = (formData) => {
		const target = formData.get("searchBar").toLowerCase()
		const result = allPlayers.filter((player) => {
			return player.name.toLowerCase().includes(target)
		})
		console.log(result)
		setSearchResults(result)
	}


	return (
		<div>
			<h3>Check out all our Puppy Players!</h3>
			<h3>Search for a specific Player by name:</h3>
			<form action={searchForPlayers}>
				<input name="searchBar" type="text" /><button>Submit</button>
			</form>

			{
				searchResults.length > 0 ? (
					<div>
						<button onClick={()=>{setSearchResults([])}}>Clear Search Results</button>

						<div className="puppiesList">
							<br />
							{
								searchResults.map((player) => {
									return (
										<div key={player.id} className="puppyCardContainer">
											<Link to={`/players/${player.id}`}>
												<div className="puppyCard">
													<img src={player.imageUrl} />
													<p>{player.name}</p>
													<button className="deleteButton domButton" onClick={() => { checkDelete(player.id) }} id={player.id} name={player.name}>Delete</button>
												</div>
											</Link>
										</div>
									);
								})
							}<br />
						</div>
					</div>
				) : (

					<div className="puppiesList">
						<br />
						{
							allPlayers.map((player) => {
								return (
									<div key={player.id} className="puppyCardContainer">
										<Link to={`/players/${player.id}`}>
											<div className="puppyCard">
												<img src={player.imageUrl} />
												<p>{player.name}</p>
												<button className="deleteButton domButton" onClick={() => { checkDelete(player.id) }} id={player.id} name={player.name}>Delete</button>
											</div>
										</Link>
									</div>
								);
							})
						}
					</div>
				)
			}
		</div>
	);
};

export default AllPlayers;
