<script setup lang="ts">
export interface IGameItem {
  name: string;
  imageBanner: string;
  imageLogo: string;
  description: string;
}

const props = defineProps<IGameItem>()
</script>

<template>
  <div class="game-hot-item">
     <img :src="`/images/${props.imageBanner}`" alt="Game Banner" class="game-banner">
     <div class="game-information">
      <div class="game-information-left">
        <img :src="`/images/${props.imageLogo}`" alt="Game Banner" class="game-logo">
        <div class="game-infor">
          <div class="game-title">{{ props.name }}</div>
          <div class="game-description">{{ props.description }}</div>
        </div>
      </div>
      <button class="btn-view">View</button>
     </div>
  </div>
</template>
<style lang="sass" src="/assets/styles/components/pages/game/gameHotItem.scss"/>