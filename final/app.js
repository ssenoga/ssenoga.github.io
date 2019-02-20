class Http {
	http = new XMLHttpRequest();

	get(url,cb){
		http.get("GET",url,true);
		http.onload = cb();

		http.send();
	}
}