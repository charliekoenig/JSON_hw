function getData() {
    index = document.getElementById("siteNames").selectedIndex;
	website = document.getElementById("siteNames").options[index].value.toLowerCase();
    url = "https://www." + website + ".com/";

    response = fetch("https://api.websitecarbon.com/site?url=" + url)
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            console.log(jsonData);
        });
}
