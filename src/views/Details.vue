<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-card height="100%">
          <v-card-title class="display-2 mb-5">{{
            curr_project.name
          }}</v-card-title>
          <v-card-subtitle class="primary--text font-weight-bold subtitle-1"
            >Task: {{ curr_project.task }}</v-card-subtitle
          >
          <v-card-text>
            {{ curr_project.desc }}
          </v-card-text>
          <v-card-text>
            <v-chip
              class="ma-1 ml-0 lighten-1 text-capitalize"
              color="green"
              v-for="tag in curr_project.tags"
              :key="tag"
              light
            >
              <v-icon>mdi-{{ all_tags[tag] }}</v-icon> {{ tag }}
            </v-chip>
          </v-card-text>
          <v-card-actions justify="end">
            <v-btn
              width="48%"
              color="deep-purple"
              v-on="on"
              tile
              dark
              :to="curr_project.live"
            >
              Live Version
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto" md="6" class="project-slides">
        <v-carousel continueous cycle height="500px" show-arrows>
          <v-carousel-item
            v-for="(img, i) in curr_project.carousel"
            :key="i"
            :src="require(`../assets/${img}`)"
            style="max-height:calc(100vh - 50px)"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import projects from '../shared/projects'
import all_tags from '../shared/all_tags'

export default {
  name: 'project-details',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      curr_project: {},
      projects: projects,
      all_tags: all_tags,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  created() {
    this.getProject()
  },
  methods: {
    getProject() {
      for (let i in this.projects) {
        if (projects[i].details === this.id) {
          this.curr_project = projects[i]
          break
        }
      }
    }
  }
}
</script>

<style>
.project-slides .v-image__image {
  background-position: top !important;
  background-size: contain !important;
}
</style>
