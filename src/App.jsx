import './App.css';	
import NavBar from "./components/NavBar"
import AllPlayers from "./components/AllPlayers"
import NewPlayerForm from "./components/NewPlayerForm"
import SinglePlayer from "./components/SinglePlayer"
import Home from './components/Home';
import { useEffect, useState } from "react"
import { Routes , Route, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios'
import Search from './components/Search';

function App() {
	const location = useLocation()
	const {pathname} = location

	const [ allPlayers , setAllPlayers ] = useState([])
	const [ searchResults , setSearchResults ] = useState([])

	const navigate = useNavigate()

	useEffect(() => {
		const fetchPlayers = async () => {
			try {
				const { data } = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players")
				console.log(data.data.players)
				setAllPlayers(data.data.players)
			} catch (error) {
				console.error(error)
			}
		}
		fetchPlayers()
	}, [])

	const checkDelete = (id) => {
		console.log("!!", id)
		console.log("Are you sure?")
		// if(event.target.classList.contains("deleteButton")){
		if (confirm("Seriously?")) {
			console.log("You pressed OK!")
			deletePlayer(id)
			navigate('/players')
		} else {
			console.log("You pressed Cancel!")
			navigate('/players')
		// }
		}
	}

	const deletePlayer = async (id) => {
		console.log("deletePlayer fired, passing in: " + id)
		try {
			await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players/${id}`)
			const updatedPlayers = allPlayers.filter((player)=>{
				return player.id !==id
			})
			setAllPlayers(updatedPlayers)
		} catch (error) {
			console.error(error)
		}
		navigate('/players')
	}

	return (
		<div>
			<NavBar pathname={pathname}/>			
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/players'  element={<AllPlayers allPlayers={allPlayers} checkDelete={checkDelete} deletePlayer={deletePlayer} searchResults={searchResults} setSearchResults={setSearchResults}/>}></Route>
				<Route path='/players/:id'  element={<SinglePlayer allPlayers={allPlayers} setAllPlayers={setAllPlayers}  checkDelete={checkDelete} deletePlayer={deletePlayer}/>}></Route>
				<Route path='/addplayer' element={<NewPlayerForm allPlayers={allPlayers} setAllPlayers={setAllPlayers}/>}></Route>
				<Route path='/players/search/?' element={<Search allPlayers={allPlayers} checkDelete={checkDelete} deletePlayer={deletePlayer}/>}/>
			</Routes>
		</div>

	)
}

export default App
