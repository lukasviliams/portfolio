<template>
  <div class="contact_page">
    <contact-content />
    <contact-form />
    <footer-component />
  </div>
</template>

<script>
import ContactContent from '../components/Contact-content.vue'
import ContactForm from '../components/Contact-form.vue'
import FooterComponent from '../components/Footer-component.vue'
export default {
  components: { FooterComponent, ContactContent, ContactForm },

}
</script>

<style>

</style>