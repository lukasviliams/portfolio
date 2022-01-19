<template>
  <div class="contact_page">
    <contact-content />
    <contact-form />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import ContactContent from '../components/Contact-content.vue'
import ContactForm from '../components/Contact-form.vue'
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
export default {
  components: { FooterComponent, FooterContact, ContactContent, ContactForm },

}
</script>

<style>

</style>