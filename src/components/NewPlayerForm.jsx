import { Link } from "react-router-dom"
import axios from "axios"

const NewPlayerForm = ({ allPlayers , setAllPlayers }) => {

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
		} catch (error) {
			console.error(error)
		}
	}


	return (
		<div>
			<h3>This is the NewPlayerForm!</h3>
			<div className="formContainer">
				<form action={addPlayer}>
					<label>
						Name: <input type="text" name="name" />
					</label>
					<br />
					<label>
						Breed: <input type="text" name="breed" />
					</label>
					<br />
					<label>
						Image URL:<input type="url" name="imageUrl" />
					</label>
					<br />
					<label>
						Team ID:<input type="text" name="teamId" />
					</label>
					<br />
					<label>
						<h4>Select Status</h4>
						<div>
							<div class="two-column-layout">
								<div className="layoutRow">
									<label>
										Bench
										<input type="radio" id="bench" name="status" value="bench" checked />
									</label>
								</div>
								<div className="layoutRow">
									<label>
										Field
										<input type="radio" id="field" name="status" value="field" />
									</label>
								</div>
							</div>
						</div>
					</label>
					<br />
					<button>Submit</button>
				</form>
				<Link to="/players">Back to All Players</Link>
			</div>
		</div>
	)
}

export default NewPlayerForm