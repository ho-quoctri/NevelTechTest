<script setup lang="ts">
import { NAV_LINK_HEADER } from '~/contants/navigations';

const isOpenMenu = ref(false)
const classMenuIcon = computed (() => {
  return isOpenMenu.value ? 'menu-close' : 'menu-open'
})

const handleOpenMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

const Navigations = NAV_LINK_HEADER;

</script>
<template>
  <div class="page-header">
    <div class="header-container">
      <!-- Logo Section -->
      <div class="logo">
        <img
          ref="preload"
          class="brand-logo"
          src="/public/images/brand_logo.png"
          alt="Brand Logo"
        />
      </div>

      <!-- Desktop Navigation Links -->
      <div class="navigation">
        <NuxtLink
          v-for="(nav, index) in Navigations"
          :key="nav.name || index"
          :to="nav.path"
          class="navigation-item"
          active-class="navigation-item-active"
        >
          {{ nav.name }}
        </NuxtLink>
      </div>

      <!-- Menu Icon for Mobile -->
      <div class="menu" @click="handleOpenMenu">
        <div :class="['menu-icon', classMenuIcon]"></div>
      </div>
    </div>

    <!-- Mobile Navigation Links -->
    <div v-if="isOpenMenu" class="navigation-mobile">
      <NuxtLink
        v-for="(nav, index) in Navigations"
        :key="nav.name || index"
        :to="nav.path"
        class="navigation-item"
        exact-active-class="navigation-item-active"
      >
        {{ nav.name }}
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="scss" scoped src="/assets/styles/components/layout/pageHeader.scss"/>