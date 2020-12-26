import axios from 'axios';
// import Axios from 'axios';
import { postFormRequest } from '../../services/apiRequests.services';

jest.mock('axios');

describe('API Requests', () => {
  const resp = {
                id: 1,
                fullname: 'John Doe',
                username: 'JohnD',
                email: 'john@gmail.com'
              }
  test('axios request', () => {
    axios.post = jest.fn(() => Promise.resolve({resp}));

    axios.post.mockImplementationOnce(() =>
        Promise.resolve({
            data: resp
        })
    );

    postFormRequest('sign_up', resp);
    expect(axios.post).toHaveBeenCalledTimes(1);
  })

  test('post request for user', () => {
    return postFormRequest('sign_up', resp).then(data => {
      expect(data.resp).toEqual(resp);
    });
  })

  test('post bad request for user', () => {
    return postFormRequest('sign_', resp).catch(err => {
      expect(err).toEqual(new Error());
    });
  })
})
