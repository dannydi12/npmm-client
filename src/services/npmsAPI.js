const npmsURL = 'https://api.npms.io';

const npms = {
  searchPackages: (search) => {
    return fetch(`${npmsURL}/v2/search?q=${encodeURI(search)}`).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
  getPackageInfo: (name) => {
    return fetch(`${npmsURL}/v2/package/${name}`).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
};

export default npms;
