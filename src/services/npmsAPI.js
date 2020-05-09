const npms = (search) => {
  return fetch(`https://api.npms.io/v2/search?q=${encodeURI(search)}`)
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
};

export default npms;
