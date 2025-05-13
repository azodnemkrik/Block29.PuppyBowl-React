import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"


const Search = ({ allPlayers }) => {

	const [searchParams, setSearchParamas] = useSearchParams()
	const [searchResults, setSearchResults] = useState([])

	const nameSearch = searchParams.get("player")
	const navigate = useNavigate()

	// console.log("nameSearch", nameSearch)

	useEffect(() => {
		const result = allPlayers.filter((player) => {
			return player.name.toLowerCase().includes(nameSearch)
		})
		console.log("result", result)
		setSearchResults(result)
	}, [allPlayers])

	const clearSearch = () => {
		setSearchResults([])
		navigate('/players')
	}


	return (
		<div>
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
				}
			</div>
			<button onClick={(() => { clearSearch() })}>Clear Search Results</button>
		</div>
	)
}

export default Search