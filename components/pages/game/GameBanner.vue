<script setup lang="ts">
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/pagination';

interface Game {
  name: string,
  image: string
}

 const props = defineProps({
  games: {
    type: Array<Game>,
    default: []
  }
 })

</script>
<template>
  <swiper
    :slides-per-view="1"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="[Autoplay, Pagination, Navigation]"
    class="mySwiper"
  >
    <swiper-slide v-for="(game,index) in games" :key="index" class="slider-item">
      <img
      ref="preload"
      :src="`/images/${game.image}`"
      alt="Banner"
      class="slider-item-img"
      />
      <div class="game-information">
      <div class="game-name">{{ game.name }}</div>
      <button class="button-detail">Game Detail <BaseIcon name="arrow-right" size="12" /></button>
    </div>
    </swiper-slide>
    

  </swiper>
</template>
<style lang="scss" src="/assets/styles/components/pages/game/gameBanner.scss"/>