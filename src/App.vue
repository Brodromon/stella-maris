<template>
  <div id="app">
    <Header :class="{homepage: currentRoute}"/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

import $ from 'jquery'

export default {
  components: { Header },
  data() {
    return {
      currentRoute: null
    }
  },
  mounted() {
    $(document).ready(() => {
      $(window).on('scroll', () => {
        let wHeight = $(window).height();
        console.log($(document).scrollTop())
        if($(document).scrollTop() > wHeight) {

          $('#header-wrapper').css('height', 50);
          $('#header-wrapper').css('padding', '0 6%');
          $('#header-wrapper').css('justify-content', 'space-between');

          $('#nav').removeClass('nav-show');
          
          $('#nav').css('display', 'none');
          $('#nav').css('right', '-50%');
          
          $('#nav-small').addClass('show');
          $('#features').css('z-index', '0')

        } else if ($(document).scrollTop() < 10) {

          $('#header-wrapper').css('height', 110);
          $('#header-wrapper').css('padding', '0 8%');
          $('#header-wrapper').css('justify-content', 'center');
          
          $('#nav').css('display', 'flex');
          setTimeout(() => {
            $('#nav').css('right', '8%');
          }, 100);
          $('#nav-small').removeClass('show');

          $('#features').css('z-index', '2')

        } else if (($(document).scrollTop() <= wHeight) && $('#header-wrapper').hasClass('scrolling')) {

          $('#hav').addClass('bg-brown');
        }
      })
    })
  },
  updated() {
    this.currentRoute = this.$router.currentRoute.name == "Home"
  },
  created() {
    this.currentRoute = this.$router.currentRoute.name == "Home" ? true : false
  }
}


</script>

<style lang="scss">
@import 'assets/styles/colors';

* {
  color: $black;
}
body {
  margin: 0;
  padding: 0;
}
  .homepage {
    position: fixed !important;
    left: 0;
    right: 0;
  }

.image_ {
  background: #b5b5b5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 100%;
}
</style>
