<template>
  <div class="games-content">
      <GameMenuBar/>
      <div class="contents">
        <slot/>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.games-content {
  display: flex;
  width: 100%;
  .contents {
    flex: 1;
    overflow: hidden;
  }
}
@media screen and (max-width: 640px){
  .games-content {
    flex-direction: column;
    position: relative;
  .contents {
    flex: 1;
    overflow: hidden;
  }
}
  
}
</style>