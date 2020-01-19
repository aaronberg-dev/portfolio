<template>
  <v-app>
    <NavDrawer />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss"></style>
