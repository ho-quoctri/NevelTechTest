<script setup lang="ts">

export interface IGameHottesItem {
  title: string;
  description: string;
  imageGame: string;
  icon: string
}

const props = defineProps<IGameHottesItem>()
</script>
<template>
  <div class="hosttest-category-item">
    <div class="hosttest-category-item-left">
      <div class="category-big">
        <BaseIcon :name="props.icon" />
        <div class="category-big-title">{{ props.title }}</div>
        <div class="category-big-description">{{ props.description }}</div>
      </div>
      <div class="games">
        <div class="game-item">
          <img src="/images/game-hot-1.png" alt="Game logo" class="game-img">
        </div>
        <div class="game-item">
          <img src="/images/game-hot-1.png" alt="Game logo" class="game-img">
        </div>
      </div>
    </div>
    <div class="hosttest-category-item-right">
      <div class="games">
        <div class="game-item">
          <img src="/images/game-hot-1.png" alt="Game logo" class="game-img">
        </div>
        <div class="game-item">
          <img src="/images/game-hot-1.png" alt="Game logo" class="game-img">
        </div>
      </div>
      <div class="category-big">
        <img :src="`/images/${props.imageGame}`" alt="Game logo" class="game-img">
      </div>
    </div>
  </div>
</template>
<style lang="sass" src="/assets/styles/components/pages/game/gameHottestCategoryItem.scss" scoped />