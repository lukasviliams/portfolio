<template>
  <div>
    <fylo-hero />
    <fylo-content />
    <fylo-router />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
import FyloContent from '../components/Fylo-content.vue'
import FyloHero from '../components/Fylo-hero.vue'
import FyloRouter from '../components/Fylo-router.vue'
export default {
  components: { FyloHero, FyloContent, FyloRouter, FooterContact, FooterComponent },

}
</script>

<style>

</style>