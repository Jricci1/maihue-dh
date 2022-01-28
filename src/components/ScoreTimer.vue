<template>
  <div id="clock" class="d-flex flex-column align-center">
    <div class="text-h1 mb-4">{{ time }}</div>

    <div class="btn-container">
      <v-btn :disabled="!currentRider" @click="start">Start</v-btn>
      <v-btn :disabled="!currentRider" @click="stop">Stop</v-btn>
      <v-btn :disabled="!currentRider" @click="reset">Reset</v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import useStore from "~/compositions/useStore";
import useMapState from "../compositions/useMapState";

export default {
  setup() {
    const { ongoingRace, currentRider } = useMapState("scoreBoard", [
      "ongoingRace",
      "currentRider",
    ]);
    const { commit } = useStore("scoreBoard");
    const time = ref("00:00:00.000");
    let timeBegan = null;
    let started = null;

    function start() {
      if (ongoingRace.value) return;

      if (timeBegan === null) {
        reset();
        timeBegan = new Date();
      }

      started = setInterval(clockRunning, 10);
      commit("setOngoingRace", true);
    }

    function stop() {
      timeBegan = null;
      commit("setOngoingRace", false);
      commit("setRiderRaceTime", time.value);
      clearInterval(started);
    }

    function reset() {
      commit("setOngoingRace", false);
      clearInterval(started);
      timeBegan = null;
      time.value = "00:00:00.000";
    }

    function clockRunning() {
      var currentTime = new Date(),
        timeElapsed = new Date(currentTime - timeBegan),
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

    return { time, start, stop, reset, currentRider };
  },
};
</script>
