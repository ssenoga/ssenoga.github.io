// int github
const github = new Github();

// int UI
const ui = new UI();

// get user input
const userText = document.getElementById('searchUser');

userText.addEventListener("keyup",(e) =>{
	const userData = e.target.value;
	if(userData !== ""){
		github.getUsers(userData).then(data =>{
			if(data.profile.message === "Not Found"){
			// show alert
			ui.showAlert('User Not Found', 'alert alert-danger');

			} else {
				// show profile
				ui.showProfile(data.profile);
				ui.showRepo(data.repos);
			}
		});
	} else {
		// clear profile
		ui.clearProfile();
	}
});