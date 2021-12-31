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
export default {

}
</script>

<style scoped>
.footer_contact-parrent{
  padding: 5rem 15rem 15vh 15rem;
}
.footer_contact-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.font-h2{
    width: 35rem;
}
.line{
    width: calc(100% - (38rem + 192px));
    border-bottom: 1px solid var(--grayish-dark-blue);;
}
</style>