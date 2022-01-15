<template>
  <div class="index_parrent">
    <div class="index_container-1">
      <div class="line" />
      <p class="font-h2">
        Bookmark
      </p>
      <p class="font-body2">
        This project required me to build a fully responsive landing page to the designs provided. 
        I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.
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
    <div class="index_container-2">
      <p class="font-h3">
        Project Background
      </p>
      <p class="font-body2">
        This project was a front-end challenge from Frontend Mentor. 
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
          <source>
          <source>
          <source>
          <img
            class="imgContainer-img"
            src="../assets/images/detail/desktop/image-bookmark-preview-1@2x.jpg"
            alt="Could not fetch img please check the source"
          >
        </picture>
      </div>
      <div class="imgContainer">
        <picture>
          <source>
          <source>
          <source>
          <img
            class="imgContainer-img"
            src="../assets/images/detail/desktop/image-bookmark-preview-2@2x.jpg"
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
</style>