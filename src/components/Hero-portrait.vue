<template>
  <div class="hero_portrait-component">
    <picture>
      <source
        media="(max-width: 670px)"
        srcset="../assets/images/homepage/mobile/image-homepage-profile.jpg"
      >
      <source
        media="(max-width: 950px)"
        srcset="../assets/images/homepage/tablet/image-homepage-profile.jpg"
      >
      <source
        media="(max-width: 1500px)"
        srcset="../assets/images/homepage/desktop/image-homepage-profile.jpg"
      >
      <img
        class="hero_portrait_image-img"
        src="../assets/images/homepage/desktop/image-homepage-profile@2x.jpg"
        alt="img"
      >
    </picture>
    <div class="hero_portrait_text-parrent">
      <div class="line" />
      <div class="hero_portrait_text-container">
        <p class="font-h2">
          About Me
        </p>
        <p class="font-body1">
          I’m a junior front-end developer looking for a new role in an exciting company. 
          I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
          When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
          I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. 
          When I’m not coding, you’ll find me outdoors. 
          I love being out in nature whether that’s going for a walk, run or cycling. 
          I’d love you to check out my work.
        </p>
      </div>
      <button class="btn-secondary">
        Go to portfolio
      </button>
      <div class="line" />
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  name:'HeroPortrait', 
  setup() {
    onMounted(()=>{
      const portrait = document.querySelector('.hero_portrait-component')
      // console.log(portrait);
      const visiblePortrait = function (entries) {
        const entry = entries[0]
        // console.log(entry);
        if(entry.isIntersecting) {
          portrait.classList.add('visible')
        }
      }
      const observer = new IntersectionObserver(visiblePortrait, {
        root: null, 
        threshold: .5
      })

      observer.observe(portrait)
    })
  }

}
</script>

<style scoped>
.hero_portrait-component{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10vw;
  margin: 20vh 0 14vh 8vw;
  width: 90vw;
  opacity: 0;
  transition: opacity 1s ease;
}
.hero_portrait_image-img{
  height: 100%;
  width: auto;
  max-height: 60rem;
}
.hero_portrait_text-parrent{
  height: 60rem;
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.line{
  width: 100%;
  height: 1px;
  background-color: rgba(51,50,61, .2);
}
.font-h2{
  text-align: left;
  margin-bottom: 3rem;
}
.font-body1{
  text-align: left;
}
/* ********************Anoimation************************* */
.visible{
  opacity: 1;
}
/* ***************Responsive design*********************** */
@media only screen and (max-width: 1220px) {
  .hero_portrait_text-parrent{
    width: 30vw;
  }
}
@media only screen and (max-width: 1100px) {
  .hero_portrait-component{
    gap: 5vw;
  }
  .hero_portrait_image-img{
    max-height: 40rem;
  }
  .hero_portrait_text-parrent {
    height: 40rem;
    width: 50vw;
  }
  .font-h2{
    margin-bottom: 1.5rem;
  }
}
@media only screen and (max-width: 950px) {
  .hero_portrait_image-img {
    max-height: 60rem;
  }
  .hero_portrait_text-parrent{
    height: 60rem;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 670px) {
  .hero_portrait-component {
    flex-direction: column;
    margin-top: 10vh;
    margin-left: 0;
  }
  .hero_portrait_text-parrent{
    height: fit-content;
    width: 80%;
  }
  .hero_portrait_text-container{
    margin-top: 3rem;
  }
  .font-body1 { 
    margin-bottom: 2rem;
  }
  .btn-secondary {
    margin-bottom: 4rem;
  }
}
@media only screen and (max-width: 450px) {
  .hero_portrait-component {
    width: fit-content;
  }
}
@media only screen and (max-width: 400px) {
  .font-h2 {
    font-size: 40px;
  }
  .btn-secondary {
    width: 202px;
  }
}
</style>