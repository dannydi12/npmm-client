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
  getCollections: (type = undefined) => {
    return fetch(
      `${config.API_ENDPOINT}/api/collections${type ? `?type=${type}` : ''}`,
      {
        method: 'get',
        headers: {
          Authorization: `Bearer ${TokenService.getAuthToken()}`,
        },
      }
    )
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
  createCollection: (name, isLaunchPad = false) => {
    return fetch(`${config.API_ENDPOINT}/api/collections`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        isLaunchPad,
      }),
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
  updateCollection: (id, name, isLaunchPad) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'patch',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        isLaunchPad,
      }),
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
  deleteCollection: (id) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'delete',
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
      .then((collection) => id)
      .catch((err) => {
        return 'There was an issue';
      });
  },
  addPackage: (name, collectionId) => {
    return fetch(`${config.API_ENDPOINT}/api/packages`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        collectionId,
      }),
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
  deletePackage: (name, collectionId) => {
    return fetch(`${config.API_ENDPOINT}/api/packages`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        collectionId,
      }),
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
};

export default npms;
