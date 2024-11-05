<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <br />

    <table class="game-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegos" :key="index">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>
            <button @click="incrementStock(index)" class="action-btn">+</button>
            <button @click="decrementStock(index)" class="action-btn">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["incrementStock", "decrementStock"]),
  },
    created() {
      this.$store.dispatch("fetchJuegos"); 
    },
};
</script>

<style scoped>

h1 {
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: lightblue;
}


.game-table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.game-table th,
.game-table td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  color: darkblue;
}

.game-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.game-table td {
  background-color: #ffffff;
}

/* Estilos para los botones de acciones */
.action-btn {
  background-color: darkgreen;
  color: white;
  border: none;
  padding: 5px 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0 2px;
  transition: background-color 0.3s ease;
}

.action-btn:hover {
  background-color: #45a049;
}

.action-btn:active {
  background-color: #388e3c;
}
</style>
