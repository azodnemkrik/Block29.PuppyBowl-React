import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'


const AllPlayers = ({ allPlayers, searchResults, setSearchResults, checkDelete }) => {

	const navigate = useNavigate()

	const searchForPlayers = (formData) => {
		const target = formData.get("searchBar").toLowerCase()
		navigate(`/players/search/?player=${target}`)


		// const result = allPlayers.filter((player) => {
		// 	return player.name.toLowerCase().includes(target)
		// })
		// console.log(result)
		// setSearchResults(result)
	}
	useGSAP(() => {
		gsap.from(".puppyCardContainer", {
			 duration:.45 , scale: 0 , y: 300 , ease: 'back.out' , boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)" , stagger: .05 
		});
	})


	return (
		<div>
			<h3>Check out all our Puppy Players!</h3>
			<h3>Search for a specific Player by name:</h3>
			<form action={searchForPlayers}>
				<input name="searchBar" type="text" /><button>Submit</button>
			</form>

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
										{/* <button className="deleteButton domButton" onClick={(event) => {
											event.stopPropagation(); // Prevent the Link from being triggered
											checkDelete(player.id)
										}} id={player.id} name={player.name}>Delete</button> */}
									</div>
								</Link>
								<a className="deleteButton domButton" onClick={() => { checkDelete(player.id) }} id={player.id} name={player.name}>Delete Player</a>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default AllPlayers;
