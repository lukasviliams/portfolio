<template>
  <div id="nav">
    <div class="navigation_container">
      <div class="svg_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="32"
        ><path
          fill="#33323D"
          fill-rule="evenodd"
          d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
        /></svg>
      </div>
      <div
        ref="links"
        class="links_container"
      >
        <router-link :to="{name:'Home'}">
          Home
        </router-link> 
        <router-link :to="{name:'Portfolio'}">
          Portfolio
        </router-link>
        <router-link :to="{name: 'Contact'}">
          Contact me
        </router-link>
      </div>
      <div
        class="hamburger_container"
        @click="handleHamburger"
      >
        <svg
          ref="hamburger"
          class="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="13"
        ><g
          fill="#33323D"
          fill-rule="evenodd"
        ><path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" /></g></svg>
        <svg
          ref="close"
          class="close"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
        ><path
          fill="#33323D"
          fill-rule="evenodd"
          d="M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"
        /></svg>
      </div>
    </div>
    <!-- Buttons -->
    <!-- <button class="btn-primary">
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
    <button class="btn-secondary">
      Contact me
    </button> -->
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup() {
    const links = ref(null)
    const hamburger = ref(null)
    const close =ref(null)
    const handleHamburger = () =>{
      hamburger.value.classList.toggle('isinvisible')
      close.value.classList.toggle('display_inline-block')
      links.value.classList.toggle('nav_animation')
    } 

    return {handleHamburger, links, hamburger, close}
  },
}
</script>

<style>
#app {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--grayish-dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
}
.navigation_container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8vh 8vw 0 8vw;
  position: relative;
}
.links_container{
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav a {
  color: var(--grayish-dark-blue);
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: var(--slightly-desaturated-cayn)
}
.hamburger, .close, .hamburger_container{
  display: none;
} 
/* **********************Router animations ****************************/
.fade-enter-active, 
.fade-leave-active{
  transition: all .2s ease-in;
}
.fade-enter-from{
  opacity: 0;
} 
.fade-leave-to{
  opacity: 0;
}
/* **********************responsive desingn ****************************/
@media only screen and (max-width: 450px) {

  .navigation_container{
    margin: 2vh 8vw 0 8vw;
  }
  .links_container{
    display: flex;
    position: absolute;
    z-index: 100;
    top: 8vh;
    right: 0;
    width: 22rem;
    height: 19rem;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--grayish-dark-blue);

    transition: all .5s ease-in-out;
    transform: translateX(1000px);
  }
    #nav a {
    color: #ffffff;
  }
  .hamburger_container{
    display: block;
    height: 100%;
    width: 5rem;
  }
  .hamburger {
    display: inline-block;
  }
}

/* **********************Animation ****************************/
.nav_animation{
  transform: translateX(0);
}
.isinvisible {
  display: none;
}
.display_inline-block{
  display: inline-block;
}
</style>
