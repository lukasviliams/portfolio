<template>
  <div class="hero_component_parrent">
    <div class="hero_image-container">
      <picture>
        <source
          media="(min-width: 769px)"
          srcset="../assets/images/homepage/desktop/image-homepage-hero.jpg"
        >
        <source
          media="(min-width: 376px)"
          srcset="../assets/images/homepage/tablet/image-homepage-hero.jpg"
        >
        <source
          media="(min-width: 1px)"
          srcset="../assets/images/homepage/mobile/image-homepage-hero.jpg"
        >
        <img
          class="hero_image-img"
          src="../assets/images/homepage/desktop/image-homepage-hero.jpg"
          alt="img"
        >
      </picture>
    </div>
    <div class="hero_text-parrent">
      <div class="hero_text-content">
        <p class="font-h1">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </p>
        <button class="btn-primary">
          <svg
            class="btn-svg"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="14"
          >
            <g
              fill="none" 
              fill-rule="evenodd" 
              stroke="#5FB4A2"
            >
              <path 
                d="M0 9l8 4 8-4"
              />
              <path
                opacity=".5" 
                d="M0 5l8 4 8-4"
              />
              <path
                opacity=".25" 
                d="M0 1l8 4 8-4"
              />
            </g>
          </svg>
          About me
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.hero_component_parrent{
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(16, 1fr);
}
.hero_image-container{
  grid-column: 3 / span 20;
  grid-row: 1 / span 16;
}
.hero_image-img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}
.hero_text-parrent {
  grid-column: 3 / span 8;
  grid-row: 7 / span 10;
  background-color: #ffffff;
}
.hero_text-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.font-h1{
  padding-top: 20%;
  padding-right: 18%;
  text-align: left;
}
</style>