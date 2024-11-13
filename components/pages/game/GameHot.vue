<script setup lang="ts">
import { GAME_HOT } from '~/contants/games';
import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';

const gameHot = GAME_HOT
</script>
<template>
  <div>
    <swiper
    :slides-per-view="2"
    :slides-per-group="2"   
    :spaceBetween="20"     
    :centeredSlides="false"
    :pagination="false" 
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation]"
    class="hot-games"
    :breakpoints="{
        340: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        920: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        }
      }"
  >
    <swiper-slide v-for="(games, index) in gameHot" :key="index" class="slider-item">
      <GameHotItem v-bind="games"/>
    </swiper-slide>
  </swiper>
  </div>
</template>
<style lang="scss" src="/assets/styles/components/pages/game/gameHot.scss"/>