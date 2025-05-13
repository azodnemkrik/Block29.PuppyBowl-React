const EditPlayerForm = ({player , allPlayers , setAllPlayers}) => {

    const EditPlayer = (formData) => {
		try {
			const EditedPlayer = {
				name: formData.get("name"), 
				breed: formData.get("breed"),
				imageUrl: formData.get("imageUrl"),
				teamId: formData.get("teamId"),

			}
		} catch (error) {
			console.error(error)
		}
	}

    return(
        		<div>
			<h4>Edit this Player!</h4>
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

export default EditPlayerForm