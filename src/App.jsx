import './App.css';	
import NavBar from "./components/NavBar"
import AllPlayers from "./components/AllPlayers"
import NewPlayerForm from "./components/NewPlayerForm"
import SinglePlayer from "./components/SinglePlayer"
import Home from './components/Home';
import { useEffect, useState } from "react"
import { Routes , Route, useLocation } from "react-router-dom"
import axios from 'axios'

function App() {
	const location = useLocation()
	const {pathname} = location

	const [ allPlayers , setAllPlayers ] = useState([])

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

	return (
		<div>
			<NavBar pathname={pathname}/>			
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/players'  element={<AllPlayers allPlayers={allPlayers} />}></Route>
				<Route path='/players/:id'  element={<SinglePlayer />}></Route>
				<Route path='/addplayer' element={<NewPlayerForm allPlayers={allPlayers} setAllPlayers={setAllPlayers}/>}></Route>
			</Routes>
		</div>

	)
}

export default App
