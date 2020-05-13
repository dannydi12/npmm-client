const npmsURL = 'https://api.npms.io';

const npms = {
  searchPackages: (search) => {
    return fetch(`${npmsURL}/v2/search?q=${encodeURI(search)}`).then((res) => {
      if (!res.ok) {
        Promise.reject(res.error);
      }
      return res.json();
    });
  },
  getPackageInfo: (name) => {
    return fetch(`${npmsURL}/v2/package/${encodeURI(name)}`).then((res) => {
      if (!res.ok) {
        Promise.reject(res.error);
      }
      return res.json();
    });
  },
};

export default npms;
