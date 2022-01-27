<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Nickname"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Category"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-file-input
            :rules="rules"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
          ></v-file-input>
        </v-col>

        <v-col cols="12" md="2">
          <v-btn elevation="5" color="primary"> Add </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
