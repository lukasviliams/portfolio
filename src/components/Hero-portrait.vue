<template>
  <div class="hero_portrait-component">
    <div class="hero_portrait_image-container">
      <picture>
        <source>
        <source>
        <source>
        <img
          class="hero_portrait_image-img"
          src="../assets/images/homepage/desktop/image-homepage-profile.jpg"
          alt="img"
        >
      </picture>
    </div>
    <div class="hero_portrait_text-container">
      <div class="line" />
      <div class="hero_portrait_text-container">
        <p class="font-h2">
          About me
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
        <button class="btn-secondary">
          Go to portfolio
        </button>
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.line{
    width: 10rem;
    border-bottom: 1px solid var(--grayish-dark-blue);;
}
</style>