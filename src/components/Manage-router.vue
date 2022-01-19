<template>
  <div class="index_router_parrent">
    <div class="index_router_container">
      <div class="left_container">
        <svg
          class="arrow_left"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
        ><path
          fill="none"
          stroke="#33323D"
          d="M9 0L1 8l8 8"
        /></svg>
        <div class="control_container-left">
          <router-link
            class="font-h3"
            :to="{name: 'Fylo'}"
          >
            Fylo
            <p class="font-body1">
              Previous project
            </p>
          </router-link>       
        </div>
      </div>
      <div class="right_container">
        <div class="control_container-right">
          <router-link 
            class="font-h3"
            :to="{name:'Bookmark'}"
          >
            Bookmark
            <p class="font-body1">
              next project
            </p>
          </router-link>
        </div>
        <svg
          class="arrow_right"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="16"
        ><path
          fill="none"
          stroke="#33323D"
          d="M1 0l8 8-8 8"
        /></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.index_router_parren{
    margin-top: 8vh;
    margin-bottom: 8vh;
}
.index_router_container{
    margin: 5vh 8vw 15vh 8vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13.2rem;
    border-top: 1px solid rgba(51,50,61, .2);
    border-bottom: 1px solid rgba(51,50,61, .2);
}
.left_container{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    border-right: 1px solid rgba(51,50,61, .2);
}
.right_container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    height: 100%;
}
.font-h3 {
  text-transform: none;
}
.control_container-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.font-body1 {
    text-transform: none;
    color: rgba(50,51,61,.5);
}
.arrow_left {
    margin-right: 3rem;
}
.arrow_right {
    margin-left: 3rem;
}
@media only screen and (max-width: 800px) {
  .index_router_container {
    margin: 3vh 8vw 10vh 8vw;
  }
}
@media only screen and (max-width: 540px) {
  .right_container, .left_container {
    flex-direction: column;
    justify-content: center;
  }
  .right_container {
    align-items: flex-end;
  }
  .left_container{
    align-items: flex-start;
  }
  .arrow_left, .arrow_right {
    margin: 0;
  }
  .arrow_right {
    order: 0;
  }
  .control_container-right{
    order: 1;
  }
}
@media only screen and (max-width: 450px) {
  .font-h3 {
    color: var(--grayish-dark-blue);
  }
}
</style>