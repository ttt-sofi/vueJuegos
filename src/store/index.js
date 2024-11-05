
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    juegos: [] 
  },
  mutations: {
    setJuegos(state, juegos) {
      state.juegos = juegos;
    },
    incrementStock(state, index) {
        state.juegos[index].stock++;
    },
    decrementStock(state, index) {
        state.juegos[index].stock--;
    },
  },
  
  actions: {
    async fetchJuegos({ commit }) {
      try {
        const response = await axios.get('/src/db/juegos.json');
        commit('setJuegos', response.data);
      } catch (error) {
        console.error('Error al cargar los datos de juegos:', error);
      }
    },
    incrementStock({ commit }, index) {
      commit('incrementStock', index);
    },
    decrementStock({ commit }, index) {
      commit('decrementStock', index);
    },
  },
  getters: {

  }
});
