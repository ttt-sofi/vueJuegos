# Tienda de Videojuegos

Una aplicación dinámica para gestionar el inventario de videojuegos. Permite incrementar o decrementar el stock de cada juego en tiempo real y visualizar datos organizados en una tabla.

## Características
- **Gestión de Inventario:** Incrementa y decrementa el stock de videojuegos directamente desde la interfaz.
- **Datos Locales:** Los datos de los videojuegos se cargan desde un archivo JSON simulado como backend.
- **Renderizado Dinámico:** Uso de `v-for` para generar filas dinámicas en una tabla basada en los datos cargados.
- **Validaciones:** Evita que el stock sea negativo.

## Tecnologías Utilizadas
- **Vue.js:** Framework principal para la construcción de la interfaz.
- **Vuex:** Manejo de estado global para sincronizar y actualizar datos del inventario.
- **Axios:** Carga de datos desde un archivo JSON local.
- **CSS:** Estilización básica para la tabla y los botones.

