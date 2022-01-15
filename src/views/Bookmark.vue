<template>
  <div class="bookmark">
    <IndexHero />
    <index-content />
    <index-router />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue';
import FooterContact from '../components/Footer-contact.vue';
import IndexContent from '../components/Index-content.vue';
import IndexHero from "../components/index-hero.vue";
import IndexRouter from '../components/Index-router.vue';
export default {
    components: { IndexHero, IndexContent, FooterComponent, FooterContact, IndexRouter }
}
</script>

<style>
</style>