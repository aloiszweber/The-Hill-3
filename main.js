

const getAllCharacter = async () => { 
    let response = await fetch("https://character-database.becode.xyz/characters"); // put the array of my promise from the database in the variable response
    let data = await response.json(); // put the value (an array) of response with the json format in the data variable

    var character = document.querySelector('.character'); // selection of the div with character as classname

    data.forEach(element => {

        let cloneCharacter = document.importNode(character, true); // creation of a clone of the div with character as classname
        // with its children

        let nameCharacter = cloneCharacter.querySelector('.name'); // taking of the clone child (tag h3) with name as the classname
        let descriptionCharacter = cloneCharacter.querySelector('.description'); // taking of the clone child (tag "p") with description as the classname
        let imageCharacter = cloneCharacter.querySelector('.image'); // taking of the clone child (tag "img") with image as the classname
        let link = cloneCharacter.querySelector('a'); // taking of the clone child (tag "a")
        console.log(link);

        nameCharacter.innerHTML = element.name; // adding of the name of the character from the database to the clone child (classname: name)
        descriptionCharacter.innerHTML = element.shortDescription; // adding of the name of the character from the database to the clone child (classname: description)
        imageCharacter.src = `data:image/gif;base64,${element.image}` // adding of the image of the character from the database to the clone child (classname: image)
        link.href = `character.html?id=${element.id}`; // adding the 'path' value with the current id to the property href to the tag a in the variable link

        let target = document.getElementById("container"); // selection of the container (main content) as a target
        target.appendChild(cloneCharacter); // adding the clone of character (and its content) to the target (main content) 
        
        
    });

    character.style.display = "none";
    

}

getAllCharacter();



