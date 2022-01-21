<template>
  <div class="hero_component_parrent">
    <div class="hero_image-container">
      <picture>
        <source
          media="(max-width:450px)"
          srcset="../assets/images/homepage/mobile/image-homepage-hero.jpg"
        >
        <source
          media="(max:width:768px)"
          srcset="../assets/images/homepage/tablet/image-homepage-hero.jpg"
        >
        <source
          media="(max-width: 1440px)"
          srcset="../assets/images/homepage/desktop/image-homepage-hero.jpg"
        >
        <img
          class="hero_image-img"
          src="../assets/images/homepage/desktop//image-homepage-hero@2x.jpg"
          alt="img"
        >
      </picture>
    </div>
    <div class="hero_text-parrent">
      <div class="hero_text-content">
        <p class="font-h1">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </p>
        <a
          href="#about"
          class="btn-primary"
        >
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
        </a>
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
  margin-top: 10vh;
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
  object-fit: fill;
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
.btn-primary{
  font-weight: 400;
}

/* *****************Responsive design ***************************/
@media only screen and (max-width: 1100px) {
  .hero_component_parrent {
    grid-template-rows: repeat(12, 1fr);
  }
  .font-h1{
    letter-spacing: -0.36px;
    font-size: 40px;
    padding: 0;
  }
.hero_image-container{
  grid-row: 1 / span 12;
}
.hero_text-parrent {
  grid-column: 3 / span 15;
  grid-row: 8 / span 5;
} 
.hero_text-content{
  width: 40rem;
}
}
@media only screen and (max-width: 950px){
  .hero_component_parrent {
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  .hero_image-container{
  grid-column: 3 / span 20;
  grid-row: 1 / span 6 ;
}
.hero_text-parrent {
  grid-row: 4 / span 3  ;
}
}
@media only screen and (max-width: 900px) {
.font-h1 {
    font-size: 35px;
  }
}
@media only screen and (max-width: 800px) {
.hero_text-parrent {
  grid-row: 4 / span 3  ;
}
}
@media only screen and (max-width: 670px) {
  .hero_component_parrent{
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(9, 1fr);
  }
.hero_text-parrent {
  grid-column: 3 / span 20;
  grid-row: 7 / span 3  ;
}
.hero_text-content{
  width: 100%;
}
.font-h1 {
  margin-bottom: 2rem;
}
}
@media only screen and (max-width: 562px) {
.hero_component_parrent {
  grid-template-rows: repeat(7, 1fr);
  margin-top: 5vh;
}
.hero_image-container{
  grid-column: 3 / span 20;
  grid-row: 1 / span 4 ;
}
.hero_text-parrent {
  grid-row: 5 / span 3  ;
}
}
@media only screen and (max-width:450px) {
.hero_component_parrent {
  grid-template-rows: repeat(5, 1fr);
}
.hero_image-container{
  grid-column: 3 / span 21;
  grid-row: 1 / span 3 ;
}
.hero_text-parrent {
  grid-column: 3 / span 21;
  grid-row: 4 / span 2  ;
}
.font-h1 {
  font-size: 40px;
  line-height: 42px;
}
}
</style>