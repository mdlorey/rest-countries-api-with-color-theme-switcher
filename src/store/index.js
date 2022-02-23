import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import Axios from 'axios';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'rest-countries-api',
  storage: window.localStorage,
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    darkMode: false,
    countries: [],
    countryList: {},
    filters: {
      term: '',
      region: null,
    },
    regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  },
  getters: {
    getCountry: (state) => (cca2) => state.countries.find((country) => country.cca2 === cca2),
  },
  mutations: {
    setCountries(state, countries) {
      state.countries = countries;
    },
    setCountryList(state, countries) {
      state.countryList = {};
      countries.forEach((country) => {
        state.countryList[country.alpha3Code] = country.name;
      });
    },
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    updateSearchTerm(state, term) {
      state.filters.term = term;
    },
    updateRegion(state, region) {
      state.filters.region = region;
    },
  },
  actions: {
    async set({ commit }) {
      const { data } = await Axios.get('https://restcountries.com/v3.1/all');
      commit('setCountries', data);
      commit('setCountryList', data);
    },
    toggleDarkMode: ({ commit }) => {
      commit('toggleDarkMode');
    },
    updateSearchTerm: ({ commit }, term) => {
      commit('updateSearchTerm', term);
    },
    updateRegion: ({ commit }, region) => {
      commit('updateRegion', region);
    },
  },
  modules: {
  },
});
