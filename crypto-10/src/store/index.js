import { createStore } from "vuex";
import TransaccionesServices from "./../services/TransaccionesServices.js";

export default createStore({
  state: {
    idUsuario: "",
    transacciones: [],
    coinBuscada: "",
    totalDineroEstadoActual: null,
    showModal: false
  },
  state: {
  },
  mutations: {
    toggleModal(state, isShown) {
      state.showModal = isShown;
    },
    modificarIdUsuario(state, idUsuario) {
      debugger;
      state.idUsuario = idUsuario;
    },
    cargarTransacciones(state) {
      TransaccionesServices.getTransacciones(state.idUsuario)
        .then((response) => {
          state.transacciones = response.data;
        })
        .catch(() => {
          alert("Error");
        });
    },
    modificarcoinBuscada(state, coinBuscada) {
      state.coinBuscada = coinBuscada;
    },
    modificarTotalDineroEstadoActual(state, totalDineroEstadoActual) {
      state.totalDineroEstadoActual = totalDineroEstadoActual;
    },
  },
  actions: {},
  modules: {},
});
