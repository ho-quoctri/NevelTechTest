<script setup lang="ts">
import { GAME_HOT, GAME_HOTTEST_CATEGORY } from '~/contants/games';
import { Swiper, SwiperSlide } from 'swiper/vue';
 import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';


const gameHottestCategory = GAME_HOTTEST_CATEGORY
</script>
<template>
  <div>
    <swiper
    :slides-per-view="2"
    :slides-per-group="2"   
    :spaceBetween="20"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"     
    :loop="true"
    :centeredSlides="false"
    :pagination="true" 
    :navigation="true"
    :modules="[Autoplay, Pagination, Navigation]"
    class="hottest-category"
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
    <swiper-slide v-for="(games, index) in gameHottestCategory" :key="index" class="slider-item">
      <GameHottestCategoryItem v-bind="games"/>
    </swiper-slide>
  </swiper>
  </div>
</template>
<style lang="scss" src="/assets/styles/components/pages/game/gameHottestCategory.scss"/>