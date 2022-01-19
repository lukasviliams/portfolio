<template>
  <div class="index_parrent">
    <div class="index_container-wrapper">
      <div class="index_container-1">
        <div class="line" />
        <p class="font-h2">
          Fylo
        </p>
        <p class="font-body2">
          This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
          I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.
        </p>
        <p class="font-body1">
          Interaction Design / Front End Development
        </p>
        <p class="font-body1">
          HTML / CSS / JS
        </p>
        <button class="btn-secondary">
          Visit website
        </button>
        <div class="line" />
      </div>
      <div class="index_container-inner">
        <p class="body_font-inner">
          This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. 
          I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.
        </p>
      </div>
    </div>
    <div class="index_container-2">
      <p class="font-h3">
        Project Background
      </p>
      <p class="font-body2">
        This project was a front-end  challenge from Frontend Mentor. 
        It’s a platform that enables you to practice building websites to a design and project brief. 
        Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. 
        Creating these projects has helped me refine my workflow and solve real-world coding problems. 
        I’ve learned something new with each project, helping me to improve and adapt my style.
      </p>
      <p class="font-h3">
        Static preview
      </p>
      <div class="imgContainer">
        <picture>
          <source
            media="(max-width: 375px)"
            srcset="../assets/images/detail/mobile/image-fylo-preview-1@2x.jpg"
          >
          <source
            media="(max-width:768px)"
            srcset="../assets/images/detail/tablet/image-fylo-preview-1@2x.jpg"
          >
          <img
            class="imgContainer-img"
            src="../assets/images/detail/desktop/image-fylo-preview-1@2x.jpg"
            alt="Could not fetch img please check the source"
          >
        </picture>
      </div>
      <div class="imgContainer">
        <picture>
          <source
            media="(max-width:375px)"
            srcset="../assets/images/detail/mobile/image-fylo-preview-2@2x.jpg"
          >
          <source
            media="(max-width: 768px)"
            srcset="../assets/images/detail/tablet/image-fylo-preview-2@2x.jpg"
          >
          <img
            class="imgContainer-img"
            src="../assets/images/detail/desktop/image-fylo-preview-2@2x.jpg"
            alt="Could not fetch img please check the source"
          >
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.index_parrent {
  margin-top: 5vh;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}
.index_container-wrapper{
  display: flex;
}
.index_container-1{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 8vw;
}
.line{
  width: 100%;
  height: 1px;
  background-color: rgba(51,50,61, .2);
}
.line:nth-child(1) {
    margin-bottom: 4vh;
}
.font-h2, .font-h3 {
    margin-bottom: 4vh;
}
.font-body2{
    text-align: left;
    margin-bottom: 3vh;
}

.body_font-inner {
    font-family: 'Public Sans', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 0;

    text-align: left;
    display: none;
}
.index_container-1 > .font-body2 {
    height: 15rem;
    width: 35rem;
}
.font-body1{
    color: var(--slightly-desaturated-cayn);
    font-weight: bold;
    margin-bottom: 3vh;
}
.btn-secondary{
    width: 17.5rem;
    margin-bottom: 4vh;
}
.index_container-2{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 8vw;
}
.index_container-2 > .font-body2 {
    height: 18rem;
    width: 63.5rem;
}
.imgContainer{
  max-width: 63.5rem;
}
.imgContainer-img{
  width: 100%;
  height: auto;
}
@media only screen and (max-width: 1250px) {
  .index_parrent {
    flex-direction: column;
    align-items: center;
  }

  .index_container-1 > .font-body2 {
    display: none;
  }
  .body_font-inner {
    width: 34rem;
    height: 15rem;
    display: flex;
    margin-top: 4vh;
  }
  .index_container-1 {
    margin: 0;
  }
  .line {
    display: none;
  }
  .index_container-wrapper {
    width: 84%;
    justify-content: space-evenly ;
    border-top: 1px solid rgba(51,50,61, .2);
    border-bottom: 1px solid rgba(51,50,61, .2);
    margin-bottom: 5vh;
  }
  .font-body1 {
    margin-bottom: 1rem;
  }
  .font-h2 {
    margin-top: 4vh;
    margin-bottom: 3vh;
  }
  .index_container-2 {
    width: 84%;
    margin: 0;
    align-items: center;
  }
}
@media only screen and (max-width: 850px) {
  .index_container-wrapper {
    justify-content: space-between;
  }
  .font-body1 {
    font-size: 13px;
  }
  .index_container-2 {
    align-items: flex-start;
  }
  .imgContainer-img {
    margin-bottom: 3vh;
  }
}

@media only screen and (max-width: 730px) {
  .index_container-1 > .font-body2 {
    display: block;
  }
  .body_font-inner {
    display: none;
  }
  .index_container-1 {
    width: 100%;
    align-items: center;
  }
  .index_container-2 {
    align-items: center;
  }
  .imgContainer {
    width: 43rem;
  }
  .index_container-2 > .font-body2 {
    height: fit-content;
    width: 43rem;
}
}
@media only screen and (max-width: 540px) {
  .imgContainer, .index_container-2 > .font-body2  {
    width: 100%;
  }
  .index_container-2, .index_container-1 {
    align-items: flex-start;
  }
}
</style>