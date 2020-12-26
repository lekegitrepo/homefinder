import axios from 'axios';
import { postFormRequest, getHomesListRequest } from '../../services/apiRequests.services';

jest.mock('axios');

describe('API POST Requests', () => {
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

describe('API GET Requests', () => {
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
  ]

  axios.get.mockResolvedValue({ data });
  test('axios request', () => {
    axios.get = jest.fn(() => Promise.resolve({ data }));

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    getHomesListRequest('homes');
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
