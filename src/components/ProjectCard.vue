<template>
  <v-row>
    <v-col
      v-for="({ name, desc, tags, live, details }, i) in projects"
      :key="i"
      md="6"
    >
      <v-card color="grey" class="darken-4">
        <v-card-title>
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
                flat
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
                flat
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
export default {
  name: 'project-card',
  data() {
    return {
      all_tags: {
        vue: 'vuejs',
        vuetify: 'vuetify',
        bootstrap: 'bootstrap',
        react: 'react',
        jquery: 'jquery'
      },
      projects: [
        {
          name: 'Store',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque veniam culpa quas ipsam officia adipisci',
          tags: ['vue', 'vuetify'],
          live: '/Store',
          details: 'store'
        },
        {
          name: 'Event Registration',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque veniam culpa quas ipsam officia adipisci',
          tags: ['vue', 'bootstrap'],
          live: '/Store',
          details: 'event-registration'
        },
        {
          name: 'Banner Manager',
          desc:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque veniam culpa quas ipsam officia adipisci',
          tags: ['bootstrap', 'jquery'],
          live: '/banner_manager.html',
          details: 'banner-manager'
        }
      ]
    }
  }
}
</script>

<style></style>
