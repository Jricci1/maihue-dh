<template>
  <main class="d-flex fill-height d-flex flex-column">
    <v-container>
      <h1>Maihue - DH</h1>
    </v-container>
    <div class="d-flex justify-space-around">
      <RiderCard :rider="participants[hotSeatId]" :hot-seat="true" />
      <ScoreTimer />
      <RiderCard :rider="participants[currentRiderId]" />
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
    const {
      currentRider: currentRiderId,
      hotSeat: hotSeatId,
      participants,
    } = useMapState("scoreBoard", ["currentRider", "hotSeat", "participants"]);

    return {
      currentRiderId,
      hotSeatId,
      participants,
    };
  },
};
</script>
