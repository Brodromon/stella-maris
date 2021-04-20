<template>
  <div class="home">
    <Banner />
    <Features />
    <Contacts />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/HomeBanner'
import Features from '@/components/Home/Features.vue';
import Contacts from '@/components/Home/Contacts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Home",
  components: {Banner, Features, Contacts, Footer}
};
</script>
