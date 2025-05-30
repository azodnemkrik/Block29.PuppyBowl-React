import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import gsap from "gsap";
import { useGSAP } from '@gsap/react'


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

	useGSAP(() => {
		searchResults.length > 0 ? (
			gsap.from(".puppyCardContainer", {
				duration:.45 , scale: 0 , y: 300 , ease: 'back.out' , boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)" , stagger: .05 
			})
		):(
			console.log("Loading...")
		)
	})

	const clearSearch = () => {
		setSearchResults([])
		navigate('/players')
	}


	return (
		<div>
			<button className="clearSearchButton domButton" onClick={(() => { clearSearch() })}>Clear Search Results</button>
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
									</div>
								</Link>
								<a className="deleteButton domButton" onClick={() => { checkDelete(player.id) }} id={player.id} name={player.name}>Delete Player</a>
							</div>
						);
					})
				}
			</div>
		</div>
	)
}

export default Search