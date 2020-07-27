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
    setIplSeasons(state, datasets) {
      const seasonList = datasets.map(({ season }) => season);
      state.iplSeasons = [...new Set(seasonList)].sort((cur, nxt) => nxt - cur);
    }
  },
  getters: {
    getDataBySeason: (state) => (seasonYear) => {
      return state.datasets.filter(({ season }) => season === seasonYear);
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
