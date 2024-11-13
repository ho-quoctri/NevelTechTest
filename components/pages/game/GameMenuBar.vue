<script setup lang="ts">
import { GAME_MENU_BAR } from '~/contants/games';

const gameMenuBar = GAME_MENU_BAR
</script>
<template>
  <div class="game-menu-bar">
    <NuxtLink v-for="(menuItem, index) in gameMenuBar" :key="index" :to="menuItem.path" 
    exact-active-class="menu-bar-item-active" class="menu-bar-item">
      <BaseIcon :name="menuItem.icon" class="menu-item-icon" />
      <div class="item-name">{{ menuItem.name }}</div>
    </NuxtLink>
  </div>
</template>
<style lang="css" scoped src="/assets/styles/components/pages/game/gameMenuBar.scss" />
