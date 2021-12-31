<template>
  <div class="home">
    <hero-component />
    <hero-portrait />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
import HeroComponent from '../components/Hero-component.vue'
import HeroPortrait from '../components/Hero-portrait.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { FooterComponent, FooterContact, HeroComponent, HeroPortrait },
}
</script>
