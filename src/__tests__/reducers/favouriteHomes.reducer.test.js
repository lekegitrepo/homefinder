import favouriteHomes from '../../reducers/favouriteHomes.reducer';
import actions from '../../actions/index.actions';

const { homeActions } = actions;

const homesFavList = [
  {
    fav: {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 1,
    picked: true,
  },
  {
    fav: {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 3,
    picked: true,
  },
  {
    fav: {
      id: 3,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
    homeId: 4,
    picked: true,
  },
];

const itemToDelete = {
  id: 2,
  home: 'Mansion',
  description: 'This is a beautiful house',
  location: 'Urban',
};

const itemToAdd = {
  fav: {
    id: 4,
    home: 'Manor',
    description: 'This is a beautiful house',
    location: 'Countryside'
  },
  homeId: 6,
  picked: true,
};

const updateHomeFavList = [
  {
    fav: {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 1,
    picked: true,
  },
  {
    fav: {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 2,
    picked: true,
  },
  {
    fav: {
      id: 3,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
    homeId: 4,
    picked: true,
  },
  {
    fav: {
      id: 4,
      home: 'Manor',
      description: 'This is a beautiful house',
      location: 'Countryside'
    },
    homeId: 6,
    picked: true,
  },
];

const FavList = [
  {
    fav: {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 1,
    picked: true,
  },
  {
    fav: {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    homeId: 3,
    picked: true,
  },
  {
    fav: {
      id: 4,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
    homeId: 5,
    picked: true,
  },
];

describe('Add item to the favourite homes list', () => {
  test('default state', () => {
    const defaultState = favouriteHomes([], {});
    expect(defaultState).toEqual([]);
  });

  test('set the initial state', () => {
    const initialState = favouriteHomes(homesFavList, {});
    expect(initialState).toEqual(homesFavList);
  });

  test('add item to the list', () => {
    const { addFavourite } = homeActions;
    const action = addFavourite(itemToAdd);
    const updateState = favouriteHomes(homesFavList, action);
    expect(updateState.length).toEqual(updateHomeFavList.length);
  });
});

describe('remove item from the list', () => {
  test('delete a item in the list', () => {
    const { removeFavourite } = homeActions;
    const action = removeFavourite(itemToDelete);
    const updateState = favouriteHomes(updateHomeFavList, action);
    console.log('This is updateState:', updateState);
    console.log('This is FavList:', FavList);
    expect(updateState.length).toEqual(FavList.length);
  });
});
