// wrap array in an IIFE
let pokemonRepository = (function () {
  // initialise empty array to push pokémon items into
  let pokemonList = [];
  // search input
  let searchInput = document.querySelector("#filter_pokemons");
  // API Url to fetch data from
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // function to add anything to pokemonList within the repository / check type of item = object
  function add(pokemon) {
    // Validation of item
    if (typeof pokemon === "object") {
      pokemonList.push(pokemon);
    } else alert("not possible");
  }
  // function to return list
  function getAll() {
    return pokemonList;
  }

  // function to create html-tree of pokemon-List
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("list-group-item", "list-group-item-action");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-outline-warning", "btn-lg");
    button.setAttribute("data-target", "#pokemonModal");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("style", "color: #9F40A0");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    // add event listener to each newly created button for each Pokémon in the list and call function passing pokemon object when button clicked
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // Add loadList() function as a return key
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // loadDetails function GET pokemon (item) details from object on URL
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // add details to item pokemon
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
        pokemon.weight = details.weight;
        pokemon.height = details.height;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // function showDetails with then to return JSON response
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  // function showModal
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    // let modalHeader = $('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    //creating element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    // creating img in modal content
    let imageElementFront = $(
      '<img class="modal-img" alt="Front of ' +
        pokemon.name +
        '" ' +
        'style="width:50%">'
    );
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $(
      '<img class="modal-img" alt="Back of ' +
        pokemon.name +
        '" ' +
        ' style="width:50%">'
    );
    imageElementBack.attr("src", pokemon.imageUrlBack);
    // creating element for height in modal content
    let heightElement = $("<p>" + "Height : " + pokemon.height + "</p>");
    // creating element for weight in modal content
    let weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");
    // creating element for type in modal content
    let typesDiv = document.createElement("div");
    typesDiv.classList.add("type-wrapper");
    typesDiv.classList.add("row");

    pokemon.types.forEach((type) => {
      let typesElement = document.createElement("span");
      let typesText = document.createElement("p");
      typesText.innerText = type.type.name;
      typesElement.classList.add("type");
      typesElement.classList.add("col");
      typesElement.classList.add(type.type.name);
      typesElement.appendChild(typesText);
      typesDiv.appendChild(typesElement);
    });

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesDiv);

    $("#pokemonModal").modal("toggle");
  }

  //add event listener to search bar
  searchInput.addEventListener("input", function () {
    let listPokemon = document.querySelectorAll("li");
    let value = searchInput.value.toUpperCase();

    listPokemon.forEach(function (pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(value) > -1) {
        pokemon.style.display = "";
      } else {
        pokemon.style.display = "none";
      }
    });
  });

  // return all functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  };
})();

// Load data from API
pokemonRepository.loadList().then(function () {
  // forEach loop to iterate over array / repository
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
