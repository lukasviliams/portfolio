<template>
  <div>
    <insure-hero />
    <insure-content />
    <insure-router />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
import InsureContent from '../components/Insure-content.vue'
import InsureHero from '../components/Insure-hero.vue'
import InsureRouter from '../components/Insure-router.vue'
export default {
  components: { InsureHero, InsureContent, InsureRouter, FooterContact, FooterComponent },

}
</script>

<style>

</style>