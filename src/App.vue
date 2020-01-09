<template>
  <v-app>
    <v-app-bar app color="primary" light>
      <div class="d-flex align-center">
        <div class="font-weight-black display-2">AB</div>
      </div>

      <v-spacer></v-spacer>

      <v-btn color="black" class="mr-3" target="_blank" icon>
        <v-icon class="display-1">mdi-github-circle</v-icon>
      </v-btn>
      <v-btn color="black" class="mr-3" target="_blank" icon>
        <v-icon class="display-1">mdi-linkedin-box</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
}
</script>
<style lang="scss"></style>
