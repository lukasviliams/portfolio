<template>
  <div class="hero_parrent">
    <div class="hero_container">
      <picture>
        <source
          media="(max-width:450px)"
          srcset="../assets/images/detail/mobile/image-fylo-hero@2x.jpg"
        >
        <source
          media="(max-width:768px)"
          srcset="../assets/images/detail/tablet/image-fylo-hero@2x.jpg"
        >
        <source
          media="(max-width: 1200px)"
          srcset="../assets/images/detail/desktop/image-fylo-hero.jpg"
        >
        <img
          class="hero_img"
          src="../assets/images/detail/desktop/image-fylo-hero@2x.jpg"
          alt="Could not fetch img please check the source"
        >
      </picture>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .hero_parrent {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(16, 1fr);
    margin-top: 10vh;
  }

  .hero_container {
    grid-column: 3 /23;
    grid-row: 1 / 16;
  }
  .hero_img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    display: block;
  }
  @media only screen and (max-width: 450px) {
    .hero_parrent {
      margin-top: 5vh;
    }
  }
</style>