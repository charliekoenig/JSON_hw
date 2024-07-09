i = 0;

function parseData() {
    word = document.getElementById("word").value;
    word = word.split(' ')[0];
    console.log(word);
	
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

    definition = document.getElementById("def");
    partOfSpeech = document.getElementById("pS");

    definitionText = "<strong>Definition: </strong>"
    partOfSpeechText = "<strong>Part of Speech: </strong>"

    response = fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            if (i >= jsonData[0].meanings.length) {
                i = jsonData[0].meanings.length - 1;
            }
            definition.innerHTML = definitionText + jsonData[0].meanings[i].definitions[0].definition;
            partOfSpeech.innerHTML = partOfSpeechText + jsonData[0].meanings[i].partOfSpeech;
        });
}

function next() {
    i += 1;
    parseData();
}


function prev() {
    i > 0? i -= 1 : i=0;
    parseData();
}
