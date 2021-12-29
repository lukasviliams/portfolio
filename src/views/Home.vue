<template>
  <div class="home">
    <img
      alt="Vue logo" 
      src="../assets/logo.png"
    >
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: { FooterComponent },
}
</script>
