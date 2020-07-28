import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datasets: [],
    iplSeasons: []
  },
  mutations: {
    setDatasets(state, datasets) {
      state.datasets = datasets;
    },
    setIplSeasons(state, datasets = []) {
      state.iplSeasons = datasets.reduce((result, elem) => {
        const { season } = elem;
        if (!result[season]) {
          result[season] = [elem];
        } else {
          result[season].push(elem);
        }
        return result;
      }, {});
    }
  },
  getters: {
    getDataBySeason: (state) => (seasonYear) => {
      return state.iplSeasons[seasonYear];
    },
    seasonYears: (state) => {
      return Object.keys(state.iplSeasons).sort((cur, nxt) => nxt - cur);
    }
  },
  actions: {
    async fetchDatasets(store, url) {
      try {
        const response = await fetch(url);
        const resposeJson = await response.json();
        store.commit('setDatasets', resposeJson);
        store.commit('setIplSeasons', resposeJson);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {}
});
