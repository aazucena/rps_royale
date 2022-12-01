
import { createStore } from 'framework7';

const store = createStore({
  state: {
    mute: false,
  },
  getters: {
    mute({state}) {
      return state.mute
    }
  },
  actions: {
    toggleMute({state}) {
      state.mute = !state.mute
    }
  },
})
export default store;
