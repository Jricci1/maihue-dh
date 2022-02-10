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
          <th class="text-left"></th>
        </tr>
      </thead>
      <tbody>
        <ScoreBoardTableRow
          v-for="participantId in participantsOrder"
          :key="participantId"
          :participant-id="participantId"
        />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script setup>
import useMapGetters from "~/compositions/useMapGetters";

const { participantsOrder } = useMapGetters("scoreBoard", [
  "participantsOrder",
]);
</script>
