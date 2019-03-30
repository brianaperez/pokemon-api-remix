let request = new XMLHttpRequest();
let url = "https://pokeapi.co/api/v2/type";
request.open("GET", url, true);
request.onload = function(){
    //Assigning data from API request to variable "data"
    let data = JSON.parse(this.response);
    console.log (data)
    //Storing element with id of "pokelist" to the variable pokeList
    let pokeList = document.getElementById('pokelist');
    let row = null;
    let pokemonCounter = 0;
    
    if(request.status >= 200 && request.status <400){
        data.results.forEach(pokemon =>{
            //when counter is at 4, new row will be created
            if (pokemonCounter % 4 == 0){
                row = document.createElement('div');
                row.className = "row";
                pokeList.appendChild(row);
            }
            //Create a new div of col-3 which fits 4 to a row
            let card = document.createElement('div');
            card.className = "col-3 pokemon";
            
            //Displaying Pokemons Name
            let p =document.createElement('p');
            p.textContent = pokemon.name;
            
            //Append the names to the column div and column to the row
            card.appendChild(p);
            row.appendChild(card);
            pokemonCounter++;
        });
    }
};
request.send();
