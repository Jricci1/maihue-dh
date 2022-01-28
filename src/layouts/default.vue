<template>
  <v-app>
    <v-main>
      <v-slide-y-reverse-transition mode="out-in">
        <!-- The content to show  -->
        <nuxt />
      </v-slide-y-reverse-transition>
    </v-main>
    <AppFooter />
    <AppNotifications />
  </v-app>
</template>
