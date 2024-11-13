<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: [String, Number],
    default: '20'
  },
  class: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const iconSrc = computed(() => `/icons/${props.name}.svg`)
</script>
<template>
  <img
    :src="iconSrc"
    :alt="name"
    :width="size"
    :height="size"
    class="base-icon"
    :class="[disabled && 'disabled', props.class]"
    rel="preload"
    @click="!disabled && $emit('click')"
  />
</template>
<style scoped lang="scss">
.base-icon {
  cursor: pointer;
}
.base-icon.disabled {
  cursor: not-allowed;
}
</style>
