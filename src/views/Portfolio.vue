<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="pl-7">My Projects</v-card-title>
          <v-card-text>
            <ProjectCard />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'home',
  components: {
    ProjectCard
  }
}
</script>
<style lang="scss" scoped>
@import 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css';
</style>
