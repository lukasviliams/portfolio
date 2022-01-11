<template>
  <div class="portfolio_page">
    <portfolio-index />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
import PortfolioIndex from '../components/Portfolio-index.vue'
export default {
  components: { FooterComponent, FooterContact, PortfolioIndex },

}
</script>

<style>

</style>