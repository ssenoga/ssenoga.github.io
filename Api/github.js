class Github {
	constructor() {
		this.client_id = '922ac6fa0d5e4a9dc17f';
		this.client_secret = 'c03021357d19871fe5aa7844380629aa3b878cb9';
		this.repo_count = 5;
		this.repo_sort = 'created: asc';
	}

	// get users
	async getUsers(user){
		const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		// get repos
		const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await userResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		}
	}
}