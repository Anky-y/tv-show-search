const form = document.querySelector(`#searchForm`);
form.addEventListener(`submit`, async function (e) {
  e.preventDefault();
  const userSearch = form.elements.query.value;
  const config = { params: { q: userSearch } };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  makeShows(res.data);
  form.elements.query.value = ``;
});

const makeShows = function (shows) {
  for (eachShow of shows) {
    if (eachShow.show.image) {
      const img = document.createElement(`img`);
      img.src = eachShow.show.image.medium;
      document.body.append(img);
    }
  }
};
