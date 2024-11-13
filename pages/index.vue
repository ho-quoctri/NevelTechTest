<script setup lang="ts">

useHead({
  title: 'Home - Nevel Tech'
})
definePageMeta({
  layout: 'default',
  titlePage: 'Home'
})

const router = useRouter();
router.push('/games/gamesHome');

</script>
<template>
  <div>
    Home Screen
  </div>
</template>
<style lang="scss" src="/assets/styles/pages/game.scss"/>