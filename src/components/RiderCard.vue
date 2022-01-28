<template>
  <v-card max-width="400">
    <v-card-text class="text-h3 text-center" max-width="100">
      {{ hotSeat ? "Hot Seat" : "Rider" }}
    </v-card-text>

    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      widht="200px"
    ></v-img>

    <v-card-title> {{ rider.nickName }} </v-card-title>
    <v-card-subtitle> {{ rider.time }} </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    rider: { type: Object, required: false, default: () => ({}) },
    hotSeat: { type: Boolean, required: false, default: false },
  },
};
</script>
