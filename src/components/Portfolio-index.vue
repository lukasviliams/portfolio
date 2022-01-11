<template>
  <div class="index_parrent">
    <div
      class="index_container"
    >
      <div class="index_container_image-container">
        <picture>
          <img
            class="index_container_image-img"
            src="../assets/images/portfolio/desktop/image-portfolio-manage.jpg"
            alt="Could not check img please check source"
          >
        </picture>
      </div>
      <div class="index_container_text-parrent">
        <div class="line" />
        <div class="index_container_text-container">
          <p class="font-h2">
            Manage
          </p>
          <p class="font-body1">
            This project required me to build a fully responsive landing page to the designs provided. 
            I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
          </p>
          <button class="btn-secondary">
            View project
          </button>
        </div>
        <div class="line" />
      </div>
    </div>
    <div class="index_container-2">
      <div class="index_container_text-parrent">
        <div class="line" />
        <div class="index_container_text-container">
          <p class="font-h2">
            Bookmark
          </p>
          <p class="font-body1">
            This project required me to build a fully responsive landing page to the designs provided. 
            I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.
          </p>
          <button class="btn-secondary">
            View project
          </button>
        </div>
        <div class="line" />
      </div>
      <div class="index_container_image-container">
        <picture>
          <img
            class="index_container_image-img"
            src="../assets/images/portfolio/desktop/image-portfolio-bookmark.jpg"
            alt="Could not check img please check source"
          >
        </picture>
      </div>
    </div>
    <div class="index_container">
      <div class="index_container_image-container">
        <picture>
          <img
            class="index_container_image-img"
            src="../assets/images/portfolio/desktop/image-portfolio-insure.jpg"
            alt="Could not check img please check source"
          >
        </picture>
      </div>
      <div class="index_container_text-parrent">
        <div class="line" />
        <div class="index_container_text-container">
          <p class="font-h2">
            Insure
          </p>
          <p class="font-body1">
            This was a small project which mostly consisted of HTML and CSS. 
            I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.
          </p>
          <button class="btn-secondary">
            View project
          </button>
        </div>
        <div class="line" />
      </div>
    </div>
    <div class="index_container-2">
      <div class="index_container_text-parrent">
        <div class="line" />
        <div class="index_container_text-container">
          <p class="font-h2">
            Fylo
          </p>
          <p class="font-body1">
            This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
            I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.
          </p>
          <button class="btn-secondary">
            View project
          </button>
        </div>
        <div class="line" />
      </div>
      <div class="index_container_image-container">
        <picture>
          <img
            class="index_container_image-img"
            src="../assets/images/portfolio/desktop/image-portfolio-fylo.jpg"
            alt="Could not check img please check source"
          >
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'PortfolioIndex', 
  setup() {
    onMounted(()=> {
      // Select class for element on mounted 
      const index = document.querySelectorAll('.index_container') 
      const indexTwo = document.querySelectorAll('.index_container-2') 

      // Function for observer
      const obsCallIndex = function (entries) {
          entries.forEach(entry => {
            entry.target.classList.toggle('default', entry.isIntersecting)
            if(entry.isIntersecting) obsLeft.unobserve(entry.target)
          });
      }
      const obsCallIndexTwo = function (entries) {
        entries.forEach(entry =>{
          entry.target.classList.toggle('default', entry.isIntersecting)
          console.log(entry);
          if(entry.isIntersecting) obsRight.unobserve(entry.target)
        })
      }

      const obsRight = new IntersectionObserver(obsCallIndexTwo, {
        root: null, 
        threshold: 0
      })

      const obsLeft = new IntersectionObserver ( obsCallIndex, {
        root: null, 
        threshold: 0
      })

      // Calling observer for Each element 
      index.forEach(index =>{
        obsLeft.observe(index)
      })
      indexTwo.forEach(indexTwo =>{
        obsRight.observe(indexTwo)
      })

    })
  }

}
</script>

<style scoped>
.index_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10vh 0vw 14vh 8vw;
    height: 50rem;
    gap: 7vw;
    transform: translateX(100%);
    transition: all 1s ease-in;
}
.index_container-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10vh 0vw 14vh 8vw;
  height: 50rem;
  gap: 7vw;
  transform: translateX(-100%);
  transition: all 1s ease-in;
}
.index_container_image-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
.index_container_text-parrent{
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.line{
  width: 80%;
  height: 1px;
  background-color: rgba(51,50,61, .2);
}
.index_container_text-container {
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.font-h2{
  margin-bottom: 4rem;
}
.font-body1{
  text-align: left;
  margin-bottom: 3rem;
}
.btn-secondary{
  width: 17.5rem;
}
/* *****************************Responsive design **********************************/
@media only screen and (max-width: 1250px){
  .index_container_image-img{
    height: auto;
    width: 44rem;
  }
  .index_container_text-container {
    height: 80%;
  }

}

@media only screen and (max-width:1000px) {
.index_container_image-img{
  width: 34rem;
}
.index_container_text-container {
  height: 90%;
}
}
@media only screen and (max-width:920px) {
.index_container_text-container {
  height: 90%;
}
.font-body1{
  font-size: 15px;
}
}

/* *****************************Animation **********************************/
.default {
  transform: translateX(0);
}

</style>