const state = {
  courts: [],
};

axios
  .get("/api/courts")
  .then((res) => res.data)
  .then((courts) => {
    state.courts = courts;
  });
console.log(state);
