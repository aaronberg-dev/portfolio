<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Used On The Job</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(icon, i) in work_icons"
                :key="i"
                class="mb-3 px-10 text-center flex-column justify-space-between tech-block-work"
                cols="2"
                sm="2"
              >
                <v-img
                  :src="require(`../assets/tech-icons/${icon}.svg`)"
                  contain
                  class="mb-3"
                  height="50"
                >
                </v-img>
                <div class="icon-name text-capitalize">{{ icon }}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Used On Side Projects</v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(icon, i) in other_icons"
                :key="i"
                class="mb-3 px-10 text-center flex-column justify-space-between tech-block-other"
                cols="2"
                sm="2"
              >
                <v-img
                  :src="require(`../assets/tech-icons/${icon}.svg`)"
                  contain
                  class="mb-3"
                  height="50"
                >
                </v-img>
                <div class="icon-name text-capitalize">{{ icon }}</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'home',
  components: {},
  data() {
    return {
      work_icons: [
        'atlassian',
        'babel',
        'bitbucket',
        'bootstrap',
        'emmet',
        'css-3',
        'grunt',
        'html-5',
        'javascript',
        'jquery',
        'less',
        'npm',
        'sass',
        'vue'
      ],
      other_icons: [
        'bulma',
        'github',
        'gsap',
        'pug',
        'python',
        'react',
        'tailwindcss',
        'webpack',
        'vuetifyjs'
      ]
    }
  },
  mounted() {
    gsap.from('.tech-block-work', {
      duration: 0.7,
      opacity: 0,
      scale: 0,
      x: 200,
      y: 100,
      ease: 'power1',
      stagger: {
        each: 0.09
      }
    }),
      gsap.from('.tech-block-other', {
        duration: 0.7,
        opacity: 0,
        scale: 0,
        x: 200,
        y: 100,
        ease: 'power1',
        stagger: {
          each: 0.1
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.icon-name {
  font-size: 14px;
}
</style>
