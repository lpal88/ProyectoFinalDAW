<template>
    <header>
        <h1 class="header__logo">Agenda Visual.</h1>
        <img class="header__image" src="" alt="">
        <button @click="toggleHidden(selector)"><img src="../assets/images/menu.svg" alt=""></button>
        <nav class="header__menu" :hidden="isHidden" ref="element">
            <ul class="menu__list">
                <li class="list__item"><a class="item__link" href="#">Inicio</a></li>
                <li class="list__item"><a class="item__link" href="#">Acceso</a></li>
                <li class="list__item"><a class="item__link" href="#">Sobre nosotras</a></li>
                <li class="list__item"><a class="item__link" href="#">Contacto</a></li>
            </ul>
        </nav>
    </header>
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