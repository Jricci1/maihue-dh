<template>
  <v-card max-width="400">
    <v-card-text class="text-h3 text-center" max-width="100">
      {{ props.hotSeat ? "Hot Seat" : "Rider" }}
    </v-card-text>

    <v-img
      :src="
        rider
          ? rider.avatar
          : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      "
      height="200px"
      widht="200px"
    ></v-img>

    <v-card-title> {{ rider ? rider.nickName : "" }} </v-card-title>
    <v-card-subtitle> {{ rider ? rider.time : "" }} </v-card-subtitle>
  </v-card>
</template>

<script setup>
import { computed } from "@vue/composition-api";
import useMapGetters from "~/compositions/useMapGetters";

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  hotSeat: { type: Boolean, required: false, default: false },
});

const { hotSeatRider, challengerRider } = useMapGetters("race", [
  "hotSeatRider",
  "challengerRider",
]);

const rider = computed(() =>
  props.hotSeat ? hotSeatRider.value : challengerRider.value
);
</script>
