<template>
  <v-row>
    <v-col
      v-for="({ name, desc, tags, live, details, preview }, i) in projects"
      :key="i"
      md="4"
      xl="3"
    >
      <v-card color="grey" class="darken-4 preview-card mb-5" elevation="15">
        <v-img
          class="preview-img"
          height="250"
          :src="require(`../assets/${preview}`)"
        ></v-img>
        <v-card-title style="border-top: 4px solid white">
          {{ name }}
        </v-card-title>

        <v-card-text>
          {{ desc }}
        </v-card-text>
        <v-card-subtitle>
          <v-chip
            class="ma-1 ml-0 lighten-1 text-capitalize"
            color="green"
            v-for="tag in tags"
            :key="tag"
            light
          >
            <v-icon>mdi-{{ all_tags[tag] }}</v-icon> {{ tag }}
          </v-chip>
        </v-card-subtitle>
        <v-card-actions>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                width="48%"
                color="deep-purple"
                v-on="on"
                tile
                dark
                :to="`/details/${details}`"
              >
                <v-icon>mdi-text</v-icon>
              </v-btn>
            </template>
            <span>More Details</span>
          </v-tooltip>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                width="48%"
                color="deep-purple"
                v-on="on"
                tile
                dark
                :to="live"
              >
                <v-icon>mdi-laptop</v-icon>
              </v-btn>
            </template>
            <span>Live Version</span>
          </v-tooltip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import gsap from 'gsap'
import projects from '../shared/projects'
import all_tags from '../shared/all_tags'

export default {
  name: 'project-card',
  data() {
    return {
      all_tags: all_tags,
      projects: projects
    }
  },
  mounted() {
    gsap.from('.preview-card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1'
    })
  }
}
</script>

<style>
.preview-card .v-image__image {
  background-position: top !important;
}
</style>
