import config from '../config';
import TokenService from './token-service';

const npms = {
  getCollectionInfo: (id) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
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
    ).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
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
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
  updateCollection: (id, name) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        isLaunchPad: false,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
  deleteCollection: (id) => {
    return fetch(`${config.API_ENDPOINT}/api/collections/${id}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : id
    );
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
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
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
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : name
    );
  },
};

export default npms;
