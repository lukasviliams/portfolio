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
      <div class="links_container">
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
    <router-view />
  </div>
</template>

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
  width: 80vw;
  padding-top: 5rem ;
}
.links_container{
  width: 20%;
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
}

#nav a.router-link-exact-active {
  color: var(--slightly-desaturated-cayn)
}
</style>
