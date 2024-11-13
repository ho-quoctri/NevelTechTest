<script setup lang="ts">
import { LINK_SOCIAL_MEDIA, NAV_LINK_FOOTER } from '~/contants/navigations';

const sectionOpen = ref<string | null>(null)
const currentYear = ref(new Date().getFullYear());

const socialMedias = LINK_SOCIAL_MEDIA;
const navLinkFooter = NAV_LINK_FOOTER;

const handleOpenSection = (sectionName: string) => {
  sectionOpen.value = sectionOpen.value !== sectionName ? sectionName : null;
};

</script>

<template>
  <div class="page-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-information">
          <div class="brand-logo">
            <img ref="preload" class="brand-logo" src="/public/images/brand_logo_gray.png" alt="Brand Logo" />
          </div>
          <p class="brand-location">Valletta Buildings, South Street,
            Valletta - VLT 1103 Malta</p>
          <p class="brand-copy-right">COPYRIGHT © 2015-{{ currentYear }} ALL RIGHTS RESERVED.</p>
          <div class="brand-social-media">
            <NuxtLink v-for="(mediaItem, index) in socialMedias" :key="index" :to="mediaItem.path" target="_blank">
              <BaseIcon :name="mediaItem.name" />
            </NuxtLink>
          </div>
        </div>
        
        <div class="footer-navigation">
          <div v-for="(section, index) in navLinkFooter" :key="index" class="footer-navigation-section">
            <div class="topic-header">
              <h4 class="topic-title">{{ section.topic }}</h4>
              <BaseIcon name="plus" size="12" class="plus-icon"
                :class="sectionOpen === section.topic ? 'close-icon' : ''" @click="handleOpenSection(section.topic)" />
            </div>
            <div class="nav-links" :class="sectionOpen === section.topic ? 'nav-links-active' : 'nav-links-close'">
              <NuxtLink v-for="(nav, navIndex) in section.navs" :key="navIndex" :to="nav.path" class="footer-link">
                {{ nav.name }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="">COPYRIGHT © 2015-{{ currentYear }} ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="/assets/styles/components/layout/pageFooter.scss" />
