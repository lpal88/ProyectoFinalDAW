<template>
    <button class="menu__button" @click="toggleHidden(selector)">
    <img class="menu__image" src="../assets/images/menu (1).svg" alt="botón menú principal">
    </button>
    <nav class="header__menu" :hidden="isHidden" ref="element">
        <ul class="menu__list">
            <li class="list__item"><router-link to="/">inicio</router-link></li>
            <li class="list__item"><router-link to="/contact">contacto</router-link></li>
            <li class="list__item"><router-link to="/about">sobre nosotras</router-link></li>
            <li class="list__item"><router-link to="/create">Crear Agenda</router-link></li>
        </ul>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            isHidden: false,
            selector: ".my-selector"
        };
    },
    methods: {
        toggleHidden(selector) {
        const element = this.$refs.element;
        this.isHidden = !this.isHidden;
        }
    }
    
}
</script>

<style scoped>

</style>