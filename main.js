

const getAllCharacter = async () => { 
    let reponse = await fetch("https://character-database.becode.xyz/characters");
    let data = await reponse.json();
    let placeOfHeroes = document.getElementsByTagName('main');

    
    let character = document.querySelector('.character');
    console.log(character);

    data.forEach(element => {

        let cloneCharacter = document.importNode(character, true);

        let nameCharacter = cloneCharacter.querySelector('.name');
        let descriptionCharacter = cloneCharacter.querySelector('.description');

        nameCharacter.innerHTML = element.name;
        descriptionCharacter.innerHTML = element.description;

        let target = document.getElementById("container");
        target.appendChild(cloneCharacter);
        console.log(target);

        
    });
}

getAllCharacter();

