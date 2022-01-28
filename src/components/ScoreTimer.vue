<template>
  <div id="clock" class="d-flex flex-column align-center">
    <div class="text-h1 mb-4">{{ time }}</div>

    <div class="btn-container">
      <v-btn @click="start">Start</v-btn>
      <v-btn @click="stop">Stop</v-btn>
      <v-btn @click="reset">Reset</v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import useMapState from "~/compositions/useMapState";
import useStore from "~/compositions/useStore";

export default {
  setup() {
    const { commit } = useStore("race");
    const { ongoingRace: running } = useMapState("race", ["ongoingRace"]);

    const time = ref("00:00:00.000");
    commit("setStatusRace", false);
    let timeBegan = null;
    let timeStopped = null;
    let stoppedDuration = 0;
    let started = null;

    function start() {
      if (running.value) return;

      if (timeBegan === null) {
        reset();
        timeBegan = new Date();
      }

      if (timeStopped !== null) {
        stoppedDuration += new Date() - timeStopped;
      }

      started = setInterval(clockRunning, 10);
      commit("setStatusRace", true);
    }

    function stop() {
      commit("setStatusRace", false);
      timeStopped = new Date();
      clearInterval(started);
    }

    function reset() {
      commit("setStatusRace", false);
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

    return { time, start, stop, reset };
  },
};
</script>
