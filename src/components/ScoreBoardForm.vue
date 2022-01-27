<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field
            v-model="name"
            :counter="15"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="nickName"
            :counter="10"
            label="Nickname"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="lastName"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="category"
            :counter="10"
            label="Category"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
          ></v-file-input>
        </v-col>

        <v-col cols="12" md="2">
          <v-btn
            elevation="5"
            color="primary"
            @click="addNewParticipantToBoard"
          >
            Add
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { toRefs, reactive } from "@vue/composition-api";
import useStore from "~/compositions/useStore";

const { commit } = useStore("scoreBoard");

const { name, nickName, lastName, avatar, category } = toRefs(
  reactive({
    name: null,
    nickName: null,
    amount: null,
    lastName: null,
    category: null,
    avatar: null,
  })
);

const addNewParticipantToBoard = () => {
  commit("addParticipant", {
    name: name.value,
    nickName: nickName.value,
    lastName: lastName.value,
    avatar: avatar.value,
    category: category.value,
  });
};
</script>
