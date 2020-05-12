import config from '../config';
import TokenService from './token-service';

const npms = {
  getCollectionInfo: (id) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        return res.json();
      })
      .then((collection) => collection)
      .catch((err) => {
        return 'There was an issue';
      });
  },
  getCollections: () => {
    return fetch(`${config.API_ENDPOINT}/api/collections`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        return res.json();
      })
      .then((packs) => packs)
      .catch((err) => {
        return 'There was an issue';
      });
  },
};

export default npms;
