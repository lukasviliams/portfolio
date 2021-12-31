<template>
  <div class="contact_page">
    <p>Contact me page</p>
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
export default {
  components: { FooterComponent, FooterContact },

}
</script>

<style>

</style>