/* eslint-disable vue/no-multiple-template-root */
<template>
  <div id="nav">
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
    <router-view />
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
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* ******************Buttons********************* */
/* Primary button */
.btn-primary{
  width: 200px;
  height: 48px;
  font-family: 'Public Sans', sans-serif;
  text-transform: uppercase;
  color: #ffffff;
  background-color: var(--dark-blue);
  border: none;

  display: flex;
  justify-content: flex-start;
  gap: 20%;
  align-items: center;

  transition: all .2s ease-in;
}
.btn-primary:hover{
  background-color: var(--slightly-desaturated-cayn);
}
.btn-primary:hover svg g{
  transition: all .2s ease-in;
  stroke: #ffffff;
}
.btn-primary:disabled{
  background-color: var(--light-gray)
}
.btn-primary:disabled svg g{
  stroke: #ffffff;
}
.btn-primary:active{
  background-color: rgb(220, 220, 220);
}
.btn-primary:active svg g{
  stroke: #ffffff;
}
</style>
