<template>
  <tr :key="props.participantId" @click="onParticipantClick()">
    <td>{{ name }}</td>
    <td>{{ nickName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ category }}</td>
    <td>{{ time }}</td>
    <td><v-btn block @click.stop="deleteParticipant">Delete</v-btn></td>
  </tr>
</template>

<script setup>
import useMapState from "~/compositions/useMapState";
import useStore from "~/compositions/useStore";
import useMapActions from "~/compositions/useMapActions";
import { toRefs, reactive } from "@vue/composition-api";

const { setRider } = useMapActions("race", ["setRider"]);
const scoreBoardStore = useStore("scoreBoard");

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
  participantId: { type: String, required: true },
});

const onParticipantClick = () => {
  setRider(props.participantId);
};

const { participants } = useMapState("scoreBoard", ["participants"]);
const { name, nickName, lastName, category, time } = toRefs(
  reactive(participants.value[props.participantId])
);

const deleteParticipant = () => {
  scoreBoardStore.commit("deleteParticipant", {
    participantId: props.participantId,
  });
};
</script>
