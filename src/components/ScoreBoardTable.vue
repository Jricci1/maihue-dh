<template>
  <v-simple-table>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Nick name</th>
          <th class="text-left">Last name</th>
          <th class="text-left">Category</th>
          <th class="text-left">Time (HH:MM:SS:mm)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="participantId in participantsOrder"
          :key="participantId"
          @click="setRider(participantId)"
        >
          <td>{{ participants[participantId].name }}</td>
          <td>{{ participants[participantId].nickName }}</td>
          <td>{{ participants[participantId].lastName }}</td>
          <td>{{ participants[participantId].category }}</td>
          <td>{{ participants[participantId].time }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script setup>
import useMapState from "~/compositions/useMapState";
import useMapActions from "~/compositions/useMapActions";

const { setRider } = useMapActions("race", ["setRider"]);

const { participants, participantsOrder } = useMapState("scoreBoard", [
  "participants",
  "participantsOrder",
]);
</script>
