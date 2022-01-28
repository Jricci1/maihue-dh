<template>
  <v-form ref="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field
            v-model="name"
            :counter="15"
            label="First name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="nickName"
            :counter="10"
            label="Nickname"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="lastName"
            :counter="10"
            label="Last name"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="category"
            :counter="10"
            :rules="categoryRules"
            label="Category"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-file-input
            ref="fileUpload"
            accept="image/gif, image/jpg, image/jpeg, image/png"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
            @change="createAvatarLocalUrl"
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
import useNotify from "~/compositions/useNotify";

const { notify } = useNotify();

const { commit } = useStore("scoreBoard");

const { form, fileUpload, name, nickName, lastName, avatar, category } = toRefs(
  reactive({
    form: null,
    fileUpload: null,
    name: null,
    nickName: null,
    lastName: null,
    category: null,
    avatar: null,
  })
);

const categoryRules = [(v) => !!v || "Required field"];

const validateForm = () => {
  console.log(form.value.validate());
  if (form.value.validate()) {
    if (!(name.value || nickName.value || lastName.value)) {
      notify.info("Please provide a Name, Nickname or Last name.");
      return false;
    }
    return true;
  }
  return false;
};

const createAvatarLocalUrl = (file) => {
  console.log(file);
  if (!file) {
    avatar.value = null;
    return;
  }
  const imageUrl = URL.createObjectURL(file);
  console.log(imageUrl);
  avatar.value = imageUrl;
};

const addNewParticipantToBoard = () => {
  if (validateForm()) {
    commit("addParticipant", {
      name: name.value,
      nickName: nickName.value,
      lastName: lastName.value,
      avatar: avatar.value,
      category: category.value,
    });
    resetForm();
    form.value.resetValidation();
  }
};

const resetForm = () => {
  name.value = null;
  nickName.value = null;
  lastName.value = null;
  avatar.value = null;
  category.value = null;
  fileUpload.value.reset();
};
</script>
