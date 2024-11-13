<script setup lang="ts">
import { GAMES } from '~/contants/games';

useHead({
  title: 'Game - Nevel Tech'
})
definePageMeta({
  layout: 'default',
  titlePage: 'Game'
})

const games = GAMES

</script>
<template>
  <div class="games">
    <GameBanner :games="games"/>
    <NuxtLayout name="menu-bar">
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<style lang="scss" src="/assets/styles/pages/game.scss"/>