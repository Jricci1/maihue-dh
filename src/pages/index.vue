<template>
  <main class="d-flex fill-height d-flex flex-column">
    <v-container>
      <h1>Maihue - DH</h1>
    </v-container>
    <div class="d-flex justify-space-around">
      <RiderCard :rider="state.currentRider.value" :hot-seat="true" />
      <ScoreTimer />
      <RiderCard :rider="state.hotSeat.value" />
    </div>
    <v-spacer />
    <section>
      <ScoreBoard />
    </section>
  </main>
</template>

<script>
import useMapState from "~/compositions/useMapState";
export default {
  setup() {
    const state = useMapState("scoreBoard", ["currentRider", "hotSeat"]);
    return { state };
  },
};
</script>
