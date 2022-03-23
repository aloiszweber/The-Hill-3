

const getAllCharacter = async () => { 
    let response = await fetch("https://character-database.becode.xyz/characters"); // put the array of my promise from the database in the variable response
    let data = await response.json(); // put the value (an array) of response with the json format in the data variable

    var character = document.querySelector('.character'); // selection of the div with character as classname

    data.forEach(element => {

        let cloneCharacter = document.importNode(character, true); // creation of a clone of the div with character as classname
        // with its children

        let nameCharacter = cloneCharacter.querySelector('.name'); // taking of the clone child (tag h3) with name as the classname
        let descriptionCharacter = cloneCharacter.querySelector('.description'); // taking of the clone child (tag "p") with description as the classname
        let pictureCharacter = cloneCharacter.querySelector('.pictures'); // taking of the clone child (tag "img") with pictures as the classname


        nameCharacter.innerHTML = element.name; // adding of the name of the character from the database to the clone child (classname: name)
        descriptionCharacter.innerHTML = element.description; // adding of the name of the character from the database to the clone child (classname: description)
        pictureCharacter.innerHTML = element.pictures // adding of the picture of the character from the database to the clone child (classname: pictures)


        let target = document.getElementById("container"); // selection of the container (main content) as a target
        target.appendChild(cloneCharacter); // adding the clone of character (and its content) to the target (main content)

        
    });

    character.style.display = "none";

}

getAllCharacter();

