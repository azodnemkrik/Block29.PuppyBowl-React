import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const NewPlayerForm = ({ allPlayers, setAllPlayers }) => {
	const navigate = useNavigate()

	const addPlayer = async (formData) => {
		try {
			const newPlayer = {
				name: formData.get("name"),
				breed: formData.get("breed"),
				status: formData.get("status"),
				imageUrl: formData.get("imageUrl"),
			}
			const { data } = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-am-PUPPIES/players", newPlayer)
			setAllPlayers([...allPlayers, data])
			navigate('/players')
		} catch (error) {
			console.error(error)
		}
	}

	const onChangeValue = (event) => {
		console.log(event.target.value);
	}


	return (
		<div>
			<h3>Add a New Player here!</h3>
			<div className="formContainer">
				<form action={addPlayer} className="addPlayerform">
					<label>
						Name: <input type="text" className="addPlayerInputText" name="name" />
					</label>
					<br />
					<label>
						Breed: <input type="text" className="addPlayerInputText" name="breed" />
					</label>
					<br />
					<label>
						Image URL:<input type="url" className="addPlayerInputText" name="imageUrl" />
					</label>
					<br />
					<label>
						Team ID:<input type="text" className="addPlayerInputText" name="teamId" />
					</label>
					<br />
					<label>
						<h4>Select Status</h4>
						<div>
							<div onChange={onChangeValue}>
								<label>
									Bench
									<input type="radio" name="status" value="bench" />
								</label>
								<label>
									Field
									<input type="radio" name="status" value="field" />
								</label>
							</div>
						</div>
					</label>
					<br />
					<div>
						<button className="domButton">Submit</button><br/>
						<Link to="/players" className="backButton domButton">Back to All Players</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default NewPlayerForm