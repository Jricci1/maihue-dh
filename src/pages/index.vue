<template>
  <main class="d-flex fill-height d-flex flex-column">
    <v-container>
      <h1>Maihue - DH</h1>
    </v-container>
    <div class="d-flex justify-space-around">
      <RiderCard :rider="{}" :hot-seat="true" />
      <ScoreTimer />
      <RiderCard :rider="{}" />
    </div>
    <v-spacer />
    <section>
      <ScoreBoard />
    </section>
  </main>
</template>
