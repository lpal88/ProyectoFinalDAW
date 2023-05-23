<template>
   
    <div id="agenda__container">
        <div class="background__profile"></div>
    <button class="profile__button">
        <span class="material-symbols-outlined">account_circle</span>
    </button>
    <div class="background__menu"></div>
    <Navbar />
        <h1 class="agenda__title">Crea una agenda</h1>
        <section class="agenda__search">
          <!--   <input type="text" name="picto-to-search" id="picto-to-search"> -->
        </section>
        <section class="agenda__pictos">
            <div class="pictos__categoriesContainer">
                <img src="" alt="favoritos" class="category__icon">
                <img src="" alt="en casa" class="category__icon">
                <img src="" alt="fuera de casa" class="category__icon">
            </div>
            <div class="pictos__separator"></div>
            <div class="pictos__dbContainer">
            <!--     <ul class="list">
                    <li v-for="picto in pictos" :key="picto.id" class="list__pictos"><img :src=picto.pictogram></li>
                </ul> -->
    <!--             <img :src=pictos[3].pictogram.data> -->

                <img :src="`data:image/png;base64,${pictos[3].pictogram.data}`">
<!--                <p>{{ pictos[3] }}</p> -->
            </div>
            <div class="pictos__moreOptions">
                <img src="" alt="buscar en ARASAAC" class="moreOptions__icon">
                <img src="" alt="subir imagen" class="moreOptions__icon">
            </div>
        </section>
        <section class="agenda__board">
            <input type="text" name="agenda-name" id="agenda-name" placeholder="Pon un título a la agenda">
            <div class="board__timingContainer">
                <img src="" alt="Mañana" class="board__timing">
                <img src="" alt="Tarde" class="board__timing">
                <img src="" alt="Noche" class="board__timing">
            </div>
            <div class="board__forMyPictos"></div>
        </section>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';
import {mapActions, mapState, mapGetters} from "vuex"
export default {
    name: 'Create&modifyAgenda',
    components: {
        Navbar
    },
    data() {
        return {
            pictos: [],
  
}
}, 
// mapActions --> ('module name', {method name: 'action name'})
// Not executed yet
    methods: {
        ...mapActions('pictograms', {
            fetchPictos:'fetchPictos'
        }),
},
// to execute the previous action
    async created() {
        await this.fetchPictos() // updating state
        this.pictos = this.$store.state.pictograms.items //storing in a new variable
        // console.log(this.pictos)
    },

}

</script>

<style lang="scss" scoped>
@import '../scss/utilities/variables';
@import '../scss/layouts/agenda.scss';
@import '../scss/layouts/navigation';
</style>