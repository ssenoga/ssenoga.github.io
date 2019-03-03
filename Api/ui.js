class UI {
	constructor(){
		this.profile = document.getElementById('userProfile');
	}
	showProfile(user) {
		this.profile.innerHTML = `
		<div class="card card-body">
			<div class = "row">
				<div class = "col-md-4">
					<img class="img-fluid mb-2 rounded" src ="${user.avatar_url}">
					<a class = "btn btn-primary btn-block mb-2" href="${user.html_url}">View profile</a>
				</div>
				<div class ="col-md-8">
					<span class ="badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
					<span class ="badge badge-secondary mb-1">Public Gists: ${user.public_gists}</span>
					<span class ="badge badge-success mb-1">Followers: ${user.followers}</span>
					<span class ="badge badge-danger">Following: ${user.following}</span>
					<br><br><br>
					<ul class="list-group">
						<li class="list-group-item">Location: ${user.location}</li>
						<li class="list-group-item">Website/Blog: ${user.blog}</li>
						<li class="list-group-item">Created: ${user.created_at}</li>
						<li class="list-group-item">Company: ${user.company}</li>
					</ul>
				</div>
			</div>
		</div>
		<h3 class="page-heading mb-3">Recent repos</h3>
		<div id="repos"></div>
		`;
	}

	// show repos
	showRepo(repos){
		let output = ``;
		repos.forEach((repo) => {
			output += `
				<div class="card card-body">
						<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}" target = "_blank">${repo.name}</a>
						</div>
						<div class="col-md-6">
							<span class ="badge badge-primary mb-1">Stars ${repo.stargazers_count}</span>
							<span class ="badge badge-secondary mb-1">Watches ${repo.watchers_count}</span>
							<span class ="badge badge-success mb-1">Forks ${repo.forks_count}</span>

						</div>
						</div>
			   </div>
			`;
		});
		

		document.querySelector('#repos').innerHTML = output;
	}
	// show alert
	showAlert(message,className){
		this.clearAlert();
		// create adiv for alert message
		const div = document.createElement('div');
		// add style class to the new div
		div.className = className;
		// create text message for the alert
		div.appendChild(document.createTextNode(message));
		// get aparent element to hold the div
		const container = document.querySelector('.searchContainer');
		// get asibling for the div
		const search = document.querySelector('.search');
		// insert the div in the parent 
		container.insertBefore(div, search);
		// display the alert message for only 3 seconds
		setTimeout(() =>{
			this.clearAlert();
		},3000)
	}

	// clear the alert pop-up
	clearAlert(){
		const alert = document.querySelector('.alert');
		if(alert){
			alert.remove();
		}
	}

	// clear profile
	clearProfile() {
		this.profile.innerHTML = '';
	}
}