const addFavourite = (homeObj) => {
  return {
    type: 'ADD_HOME',
    payload: homeObj,
  }
}

const removeFavourite = (homeObj) => {
  return {
    type: 'REMOVE_HOME',
    payload: homeObj,
  }
}

export default { addFavourite, removeFavourite }
