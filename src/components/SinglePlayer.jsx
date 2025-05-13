import { Link, useNavigate, useParams } from "react-router-dom"
import EditPlayer from "./EditPlayer"

const SinglePlayer = ({ allPlayers, setAllPlayers, checkDelete }) => {

	const navigate = useNavigate()
	const params = useParams()
	const id = params.id * 1
	const player = allPlayers.find((player) => {
		return player.id === id
	})
	console.log(player)

	return (
		<div>
			<h3>This is the SinglePlayer!</h3>
			<EditPlayer player={player} allPlayers={allPlayers} setAllPlayers={setAllPlayers}/>
			{
				player ? (
					<div className="singlePlayerContainer">
						<div className="singlePlayer two-column-layout">
							<div className="layoutColumn">
								<img src={player.imageUrl} />
							</div>
							<div className="playerStatsColumn">
								<p className="luckiestGuyFont">Name:
								<span> {player.name}</span></p>
								<p className="luckiestGuyFont">Breed:
								<span> {player.breed}</span></p>
								<p className="luckiestGuyFont">Status:
								<span> {player.status}</span></p>
								<p className="luckiestGuyFont">TeamId:
								<span> {player.teamId ? player.teamId :" Unassigned"}</span></p>
								<br />
								<a className="deleteButton domButton" onClick={() => { checkDelete(player.id) }} id={player.id} name={player.name}>Delete Player</a>
								<a className="backButton domButton" onClick={() => { navigate('/players') }}>Back to All Players</a>
							</div>
						</div>
					</div>
				) : (<h3>Loading</h3>)
			}
		</div>
	)
}

export default SinglePlayer