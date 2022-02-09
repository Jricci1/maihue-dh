<template>
  <main class="d-flex fill-height d-flex flex-column maihue-title mt-3">
    <img :src="require('~/assets/img/Logo.jpeg')" aspect-ratio="2" />
    <div class="d-flex justify-space-around mayor-index">
      <RiderCard :hot-seat="true" />
      <ScoreTimer />
      <RiderCard />
    </div>
    <v-spacer />
    <section class="mayor-index">
      <ScoreBoard />
    </section>
  </main>
</template>

<style scoped>
.maihue-title {
  position: relative;
  overflow: hidden;
  padding: 16px;
}
.maihue-title img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  opacity: 0.3;
}

.mayor-index {
  z-index: 4;
}
</style>
