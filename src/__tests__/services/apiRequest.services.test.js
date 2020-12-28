import axios from 'axios';
import {
         postFormRequest,
         getHomesListRequest,
         postFavouriteHomeRequest,
         deleteFavouriteHomeRequest,
         getFavouriteHomesRequest,
       } from '../../services/apiRequests.services';

jest.mock('axios');

const data = [
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
];

describe('API POST Requests for user', () => {
  const resp = {
    id: 1,
    fullname: 'John Doe',
    username: 'JohnD',
    email: 'john@gmail.com',
  };
  test('axios request', () => {
    axios.post = jest.fn(() => Promise.resolve({ resp }));

    axios.post.mockImplementationOnce(() => Promise.resolve({
      data: resp,
    }));

    postFormRequest('sign_up', resp);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });

  test('post request for user', () => postFormRequest('sign_up', resp).then(data => {
    expect(data.resp).toEqual(resp);
  }));

  test('post bad request for user', () => postFormRequest('sign_', resp).catch(err => {
    expect(err).toEqual(new Error());
  }));
});

describe('API GET Requests for home list', () => {
  axios.get.mockResolvedValue({ data });
  test('axios request', () => {
    axios.get = jest.fn(() => Promise.resolve({ data }));

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    getHomesListRequest('homes');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('get request for homes list', () => getHomesListRequest('homes').then(res => {
    expect(res.data).toEqual(data);
  }));

  test('get bad request for homes list', () => getHomesListRequest('hmes').catch(err => {
    expect(err).toEqual(new Error());
  }));
});

describe('API Requests for favourite home', () => {
  describe('API Get request', () => {
    axios.get.mockResolvedValue({ data });
    test('axios request', () => {
      axios.get = jest.fn(() => Promise.resolve({ data }));

      axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

      getFavouriteHomesRequest('favourites');
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('get request for favourite homes list', () => getFavouriteHomesRequest('favourites').then(res => {
      expect(res.data).toEqual(data);
    }));

    test('get bad request for favourite homes list', () => getFavouriteHomesRequest('favouri').catch(err => {
      expect(err).toEqual(new Error());
    }));
  });

  describe('API Post request', () => {
    axios.post.mockResolvedValue({ data });
    test('axios request', () => {
      axios.post = jest.fn(() => Promise.resolve({ data }));

      axios.post.mockImplementationOnce(() => Promise.resolve({ data }));

      postFavouriteHomeRequest('homes', data[0].id);
      expect(axios.post).toHaveBeenCalledTimes(1);
    });

    test('post request for favourite home', () => postFavouriteHomeRequest('homes', data[1].id).then(res => {
      expect(res.data[1]).toEqual(data[1]);
    }));

    test('post bad request for homes list', () => postFavouriteHomeRequest('home', 45).catch(err => {
      expect(err).toEqual(new Error());
    }));
  })

  describe('API Delete request', () => {
    axios.delete.mockResolvedValue({ data });
    test('axios request', () => {
      axios.delete = jest.fn(() => Promise.resolve({ }));

      axios.delete.mockImplementationOnce(() => Promise.resolve({ data }));

      deleteFavouriteHomeRequest('favourites', data[0].id);
      expect(axios.delete).toHaveBeenCalledTimes(1);
    });

    test('delete home from favourite list', () => deleteFavouriteHomeRequest('favourites', data[1].id).then(resp => {
      expect(resp).toEqual({});
    }));

    test('bad delete request', () => deleteFavouriteHomeRequest('favourit', data[1].id).catch(err => {
      expect(err).toEqual(new Error());
    }));
  });
});
