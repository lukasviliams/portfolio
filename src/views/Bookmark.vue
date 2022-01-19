<template>
  <div class="bookmark">
    <bookmark-hero />
    <bookmark-content />
    <bookmark-router />
    <footer-contact />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '../components/Footer-component.vue';
import FooterContact from '../components/Footer-contact.vue';
import BookmarkContent from '../components/Bookmark-content.vue';
import BookmarkRouter from '../components/Bookmark-router.vue';
import BookmarkHero from '../components/Bookmark-hero.vue';
export default {
    components: { FooterComponent, FooterContact,BookmarkHero, BookmarkContent, BookmarkRouter }
}
</script>