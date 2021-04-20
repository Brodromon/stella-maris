<template>
    <div id="header-wrapper">
        <div id="header_logo">
            <div id="logo">
                SM
            </div>
        </div>
        <div id="nav">
            <router-link to="/">Главная</router-link>
            <router-link to="/rooms">Номера</router-link>
            <router-link to="/skadovsk">Скадовск</router-link>
            <router-link to="/contacts">Контакты</router-link>
            <router-link to="/about">О нас</router-link>
        </div>
        <div id="nav-small">
            <router-link to="/">Главная</router-link>
            <router-link to="/rooms">Номера</router-link>
            <router-link to="/skadovsk">Скадовск</router-link>
            <router-link to="/contacts">Контакты</router-link>
            <router-link to="/about">О нас</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="scss">

@import '../assets/styles/colors';

    #header-wrapper {
        height: 105px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 8%;
        // background: #ffeae080;
        font-weight: lighter;
        transition: .6s ease;
        z-index: 1;
        &.homepage {
            #nav {
                a {
                    color: #fff;
                }
            }
        }
        &::after {
            transition: .3s ease;
        }
        &.bg-brown {
            animation: navScrolling .9s ease;
        }
        &.scrolling::after {
            content: '';
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(116,55,39,1) 40%, rgba(116,55,39,1) 60%, rgba(2,0,36,1) 100%);
        }
        #header_logo  {
            font-family: 'Tangerine', cursive;
            font-size: 37px;
            position: relative;
            #logo {
                position: relative;
            }
            &::before {
                height: 70px;
                width: 70px;
                left: -1px;
                top: -20px;
                background: #7437278f;
                border: 3px #0e0955 solid;
                position: absolute;
                content: '';
                transform: rotate(45deg);
            }
        }
        #nav {
            position: absolute;
            right: 8%;
            display: flex;
            flex-direction: column;
            top: 34px;
            transition: .3s ease;
            a {
                margin: 27px 0;
                text-decoration: none;
                font-family: 'Roboto Condensed';
                border-radius: 25px;
                font-size: 20px;
                font-weight: normal;
                transition: .3s ease;
                color: #000;
                text-align: right;
                position: relative;
                &.router-link-exact-active.router-link-active {
                    font-weight: normal;
                    padding: 1px 7px;
                    &::after {
                        content: '';
                        border: 3px #fadacc solid;
                        border-radius: 25px;
                        width: calc(100% + 60px);
                        height: calc(100% + 16px);
                        top: -12px;
                        position: absolute;
                        right: -11px;
                    }
                }
            }
        }
        #nav-small {
            top: -200%;
            display: none;
            &.show {
                animation: showSmall .3s ease;
                position: absolute;
                right: 8%;
                display: flex;
                flex-direction: row;
                top: 10px;
                background: $lightbrown;
                border-radius: 25px;
                padding: 10px;
                a {
                    color: #fff;
                    font-size: 16px;
                    margin: 0 4px;
                    padding: 4px 10px;
                    border-radius: 25px;
                    font-family: 'Roboto Condenced';
                    text-decoration: none;
                    &.router-link-exact-active.router-link-active {
                        border: 3px $skinny solid;
                    }
                    &::after {
                        display: none;
                    }
                }
            }
        }
    }

    .nav-show {
        animation: navShow .3s ease;
    }

    @keyframes navScrolling {
        0% {
            background: none;
        }
        30% {
            background: transparent;
        }
        100% {
            background: #A4542E;
        }
    }
    @keyframes showSmall {
        0% {
            top: -10px;
        }
    }
    @keyframes navShow {
        0% {
            display: flex;
        }
        10% {
            right: 8%;
        }
    }
</style>