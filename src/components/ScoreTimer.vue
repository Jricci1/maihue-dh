<template>
  <div id="clock" class="d-flex flex-column align-center">
    <div class="text-h1 mb-4">{{ time }}</div>
    <div class="text-center">
      <v-btn :disabled="!riderParticipantId" class="ma-2" @click="start"
        >Start</v-btn
      >
      <v-btn class="ma-2" color="primary" @click="stop">Stop</v-btn>
      <v-btn class="ma-2" color="error" @click="reset">Reset</v-btn>
    </div>
    <v-row>
      <v-btn
        :disabled="!riderParticipantId"
        min-width="200"
        class="mt-4 ma-2"
        color="success"
        @click="saveRiderTimer"
        >Save</v-btn
      >
    </v-row>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import useMapActions from "~/compositions/useMapActions";
import useMapState from "~/compositions/useMapState";
import useStore from "~/compositions/useStore";

export default {
  setup() {
    const { setRiderTime } = useMapActions("race", ["setRiderTime"]);
    const { commit } = useStore("race");
    const { ongoingRace: running, riderParticipantId } = useMapState("race", [
      "ongoingRace",
      "riderParticipantId",
    ]);

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

    function saveRiderTimer() {
      setRiderTime(time.value);
      reset();
    }

    return { time, start, stop, reset, saveRiderTimer, riderParticipantId };
  },
};
</script>
