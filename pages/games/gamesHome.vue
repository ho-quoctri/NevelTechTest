<script setup lang="ts">
useHead({
  title: 'Games Home - Nevel Tech',
});
</script>

<template>
  <div class="game-home-hot">
    <div class="title">
      Hot Game
    </div>
    <GameHot/>
  </div>
  <div class="game-home-category">
    <div class="title">
      Hottest Category
    </div>
    <GameHottestCategory/>
  </div>
  <div class="game-home-loadmore">
    Load More <BaseIcon  name="plus" size="12"/>
  </div>
</template>

<style lang="sass" src="/assets/styles/pages/game.scss" scoped/>

