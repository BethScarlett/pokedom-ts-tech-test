import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";
import { Pokemon } from "./data/types";

const cardContainer = document.querySelector(".card-container");
const searchName = document.querySelector<HTMLInputElement>(".searchName");
const searchNumber = document.querySelector<HTMLInputElement>(".searchNumber");
const searchType = document.querySelector<HTMLInputElement>(".searchType");

if (!cardContainer || !searchName || !searchNumber || !searchType) {
  throw new Error("Error");
}

const renderCardsByNumber = (numOfResults: number) => {
  cardContainer.innerHTML = "";

  for (let i: number = 0; i < numOfResults; i++) {
    cardContainer.innerHTML += `<div class=card><img src=${
      pokemonArray[i].sprite
    } alt=Pokemon class=card__image /><div class=card__content><h1 class=card__heading>${
      pokemonArray[i].name.charAt(0).toUpperCase() +
      pokemonArray[i].name.slice(1)
    }
        </h1><label for= class=card__text>${
          pokemonArray[i].name.charAt(0).toUpperCase() +
          pokemonArray[i].name.slice(1)
        } (#${pokemonArray[i].id}) is a ${pokemonArray[i].types.join(
      " & "
    )} type</label></div></div>`;
  }
};
renderCardsByNumber(151);

const handleSearchName = () => {
  const searchTerm = searchName.value;
  let filteredNameArr: Pokemon[] = [];
  pokemonArray.filter((pokemon) => {
    if (pokemon.name.includes(searchTerm)) {
      filteredNameArr.push(pokemon);
    }
  });
  renderCardsByName(filteredNameArr);
};

const renderCardsByName = (filteredNameArr: Pokemon[]) => {
  cardContainer.innerHTML = "";
  for (let i: number = 0; i < filteredNameArr.length; i++) {
    cardContainer.innerHTML += `<div class=card><img src=${
      filteredNameArr[i].sprite
    } alt=Pokemon class=card__image /><div class=card__content><h1 class=card__heading>${
      filteredNameArr[i].name.charAt(0).toUpperCase() +
      filteredNameArr[i].name.slice(1)
    }
          </h1><label for= class=card__text>${
            filteredNameArr[i].name.charAt(0).toUpperCase() +
            filteredNameArr[i].name.slice(1)
          } (#${filteredNameArr[i].id}) is a ${filteredNameArr[i].types.join(
      " & "
    )} type</label></div></div>`;
  }
};

const handleSearchNumber = () => {
  if (!searchNumber.value) {
    renderCardsByNumber(151);
  } else {
    renderCardsByNumber(Number(searchNumber.value));
  }
};

const handleSearchType = () => {
  const searchTerm = searchType.value;
  if (searchTerm !== "All") {
    let filteredNameArr: Pokemon[] = [];

    pokemonArray.filter((pokemon) => {
      if (searchTerm == "all") {
        filteredNameArr.push(pokemon);
      } else if (pokemon.types.includes(searchTerm)) {
        filteredNameArr.push(pokemon);
      }
    });
    renderCardsByType(filteredNameArr);
  } else {
    renderCardsByNumber(151);
  }
};

const renderCardsByType = (filteredNameArr: Pokemon[]) => {
  cardContainer.innerHTML = "";
  for (let i: number = 0; i < filteredNameArr.length; i++) {
    cardContainer.innerHTML += `<div class=card><img src=${
      filteredNameArr[i].sprite
    } alt=Pokemon class=card__image /><div class=card__content><h1 class=card__heading>${
      filteredNameArr[i].name.charAt(0).toUpperCase() +
      filteredNameArr[i].name.slice(1)
    }
            </h1><label for= class=card__text>${
              filteredNameArr[i].name.charAt(0).toUpperCase() +
              filteredNameArr[i].name.slice(1)
            } (#${filteredNameArr[i].id}) is a ${filteredNameArr[i].types.join(
      " & "
    )} type</label></div></div>`;
  }
};

searchName.addEventListener("input", handleSearchName);
searchNumber.addEventListener("input", handleSearchNumber);
searchType.addEventListener("change", handleSearchType);
