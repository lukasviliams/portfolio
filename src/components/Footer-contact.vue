<template>
  <div class="footer_contact-parrent">
    <div class="footer_contact-container">
      <p class="font-h2">
        Interested in doing a project together?
      </p>
      <div class="line" />
      <button class="btn-secondary">
        Contact me
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'FooterComponent', 
  setup() {
    onMounted(()=>{
      const footer = document.querySelector('.footer_contact-container')

      const movingFooter = function(entries) {
        const entry = entries[0]
        // console.log(entry);
        if(entry.isIntersecting) {
          footer.classList.add('visible')
        }
      }

      const observer = new IntersectionObserver(movingFooter, {
        root:null, 
        threshold: 0,
      })
      observer.observe(footer)



    })
  }
}
</script>

<style scoped>
.footer_contact-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 8vw 14vh 8vw;
    transition: all 1s ease;
    opacity: 0;
}
.font-h2{
    width: 35rem;
}
.line{
    width: calc(100% - (38rem + 192px));
    border-bottom: 1px solid var(--grayish-dark-blue);;
}
.visible{
  opacity: 1;
}

/* ***************************Responsive design*************************** */

@media only screen and (max-width: 670px) {
.footer_contact-container {
  flex-direction: column;
  margin-bottom: 8vh;
  margin-left: 0;
}
.font-h2 {
  margin-bottom: 5vh;
}
.line {
  display: none;
}
}
@media only screen and (max-width: 450px) {
  .footer_contact-container {
    margin-right: 0;
  }
  .font-h2{
    font-size: 40px;
  }
}
</style>