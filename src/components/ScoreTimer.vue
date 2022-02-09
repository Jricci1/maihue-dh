<template>
  <div id="clock" class="d-flex flex-column align-center">
    <div class="text-h1 mb-4">
      {{ hotSeatTime }}
    </div>
    <div
      class="text-h1 mb-4"
      :class="[
        hotSeatTime === '00:00:00.000'
          ? ''
          : hotSeatTime > time
          ? 'green-color'
          : 'red-color',
      ]"
    >
      {{ time }}
    </div>

    <div class="btn-container">
      <v-row>
        <v-col>
          <v-btn color="green" @click="start">Start</v-btn>
        </v-col>
        <v-col>
          <v-btn color="red" @click="stop">Stop</v-btn>
        </v-col>
        <v-col>
          <v-btn color="yellow" @click="reset">Reset</v-btn>
        </v-col>
      </v-row>
      <v-row class="d-flex max-w-full">
        <v-col>
          <v-btn block @click="add">Add</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "@vue/composition-api";
import useMapGetters from "~/compositions/useMapGetters";
import useStore from "~/compositions/useStore";

const { commit } = useStore("scoreBoard");
const raceStore = useStore("race");

const { hotSeatRider, challengerRider } = useMapGetters("race", [
  "hotSeatRider",
  "challengerRider",
]);

const hotSeatTime = computed(() => {
  return hotSeatRider.value ? hotSeatRider.value.time : "00:00:00.000";
});

const time = ref("00:00:00.000");
let running = false;
let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let started = null;

function start() {
  if (running) return;

  if (timeBegan === null) {
    reset();
    timeBegan = new Date();
  }

  if (timeStopped !== null) {
    stoppedDuration += new Date() - timeStopped;
  }

  started = setInterval(clockRunning, 10);
  running = true;
}

function stop() {
  running = false;
  timeStopped = new Date();
  clearInterval(started);
}

function reset() {
  running = false;
  clearInterval(started);
  stoppedDuration = 0;
  timeBegan = null;
  timeStopped = null;
  time.value = "00:00:00.000";
}

function clockRunning() {
  var currentTime = new Date(),
    timeElapsed = new Date(currentTime - timeBegan - stoppedDuration),
    hour = timeElapsed.getUTCHours(),
    min = timeElapsed.getUTCMinutes(),
    sec = timeElapsed.getUTCSeconds(),
    ms = timeElapsed.getUTCMilliseconds();

  time.value =
    zeroPrefix(hour, 2) +
    ":" +
    zeroPrefix(min, 2) +
    ":" +
    zeroPrefix(sec, 2) +
    "." +
    zeroPrefix(ms, 3);
}

function zeroPrefix(num, digit) {
  var zero = "";
  for (var i = 0; i < digit; i++) {
    zero += "0";
  }
  return (zero + num).slice(-digit);
}

function add() {
  if (!challengerRider.value) {
    return;
  }
  commit("addParticipantTime", {
    participantId: challengerRider.value.id,
    time: time.value,
  });
  if (time.value < hotSeatTime || !hotSeatRider.value) {
    raceStore.commit("setHotSeat", challengerRider.value.id);
  }
  raceStore.commit("setRiderSeat", null);
  reset();
}
</script>
<style scoped>
.red-color {
  color: red;
}

.green-color {
  color: green;
}
</style>
