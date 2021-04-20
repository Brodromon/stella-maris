<template>
    <div class="footer_wrapper">
        <div class="footer_logo">
            logo
        </div>
        <div class="footer_menu">
            <ul>
                <router-link to="/">Главная</router-link> |
                <router-link to="/rooms">Номера</router-link>
                <router-link to="/about">Скадовск</router-link>
                <router-link to="/contacts">Контакты</router-link>
                <router-link to="/about">О нас</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped>

    .footer_wrapper {
        display: flex;
        align-items: center;
        height: 30px;
        background: #fff;
        justify-content: space-around;
        ul {
            margin: 0;
        }
    }

</style>