<template>
  <div>
    <manage-hero />
    <manage-content />
    <manage-router />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
import FooterContact from '../components/Footer-contact.vue'
import ManageContent from '../components/Manage-content.vue'
import ManageHero from '../components/Manage-hero.vue'
import ManageRouter from '../components/Manage-router.vue'
export default {
  components: { ManageHero, ManageContent, ManageRouter, FooterContact, FooterComponent },

}
</script>

<style>

</style>