import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datasets: [],
    iplSessions: []
  },
  mutations: {
    setDatasets(state, datasets) {
      state.datasets = datasets;
    }
  },
  actions: {
    fetchDatasets(store, url) {
      Vue.http
        .get(url)
        .then((response) => {
          store.commit('setDatasets', response.body);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    }
  },
  modules: {}
});
