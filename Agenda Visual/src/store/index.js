import { createStore } from 'vuex'
import board from './modules/board'
import pictograms from './modules/pictograms'


const store = createStore({
    modules:{
      board,
      pictograms,
    },})

export default store