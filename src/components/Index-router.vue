<template>
  <div class="index_router_parrent">
    <div class="index_router_container">
      <div class="left_container">
        <div class="control_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
          ><path
            fill="none"
            stroke="#33323D"
            d="M9 0L1 8l8 8"
          /></svg>
          <router-link
            :to="{name: 'Manage'}"
          >
            Manage
          </router-link>
          <p>previous project</p>
        </div>
      </div>
      <div class="right_container">
        <router-link :to="{name:'Insure'}">
          Insure
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.index_router_container{
    margin: 5vh 8vw 0 8vw;
    display: flex;
    justify-content: space-between;
}
</style>