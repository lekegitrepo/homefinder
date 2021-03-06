import favouriteHomes from '../../reducers/favouriteHomes.reducer';
import actions from '../../actions/index.actions';

const { homeActions } = actions;

const homesFavList = {
  favourites: [
    {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 3,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
  ],
};

const itemToDelete = {
  id: 2,
  home: 'Mansion',
  description: 'This is a beautiful house',
  location: 'Urban',
};

const itemToAdd = {
  id: 4,
  home: 'Manor',
  description: 'This is a beautiful house',
  location: 'Countryside',
};

const updateHomeFavList = {
  favourites: [
    {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 3,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
    {
      id: 4,
      home: 'Manor',
      description: 'This is a beautiful house',
      location: 'Countryside',
    },
  ],
};

const FavList = {
  favourites: [
    {
      id: 1,
      home: 'Apartment',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 2,
      home: 'Mansion',
      description: 'This is a beautiful house',
      location: 'Urban',
    },
    {
      id: 4,
      home: 'cottage',
      description: 'This is a beautiful house',
      location: 'Country side',
    },
  ],
};

describe('Add item to the favourite homes list', () => {
  test('default state', () => {
    const defaultState = favouriteHomes({ favourites: [] }, {});
    expect(defaultState).toEqual({ favourites: [] });
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
    expect(updateState.length).toEqual(FavList.favourites.length);
  });
});
