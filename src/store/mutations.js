export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || []
}

export function setSearchByLetter(state, meals) {
  state.searchByLetter = meals || []
}

export function setSearchByIngredients(state, meals) {
  state.searchByIngredients = meals || []
}