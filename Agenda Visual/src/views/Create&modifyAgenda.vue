<template>
    <div id="agenda__container">
        <div class="background__profile"></div>
    <button class="profile__button">
        <span class="material-symbols-outlined">account_circle</span>
    </button>
       <div class="background__menu"></div>

    <Navbar />
        <h1 class="agenda__title">Crea una agenda</h1>
        <section class="agenda__search"></section>
        <section class="agenda__pictos"></section>
        <section class="agenda__board"></section>
    </div>

</template>

<script>
import Navbar from '../components/Navbar.vue';


</script>

<style lang="scss" scoped>
@import '../scss/utilities/variables';
@import '../scss/layouts/agenda.scss';
</style>