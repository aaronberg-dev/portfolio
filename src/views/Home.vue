<template>
  <v-container fill-height>
    <b-row justify="center">
      <v-col class="text-center">
        <h1 class="font-weight-light">Projects</h1>
      </v-col>
    </b-row>
    <v-row>
      <v-col v-for="i in 3" :key="i" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://i.redd.it/unyodjbxmqs21.png"
          >
            <v-card-title>Store with Vuejs</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Store Prototype</v-card-subtitle>

          <v-card-text class
            >Full Store built in Vuejs with Vuetify
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn width="48%" color="black" v-on="on" tile flat>
                  <v-icon>mdi-text</v-icon>
                </v-btn>
              </template>
              <span>More Details</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn width="48%" color="black" v-on="on" tile flat>
                  <v-icon>mdi-laptop</v-icon>
                </v-btn>
              </template>
              <span>Live Version</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in 3" :key="i" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://i.redd.it/unyodjbxmqs21.png"
          >
            <v-card-title>Store with Vuejs</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Store Prototype</v-card-subtitle>

          <v-card-text class
            >Full Store built in Vuejs with Vuetify
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn width="48%" color="black" v-on="on" tile flat>
                  <v-icon>mdi-text</v-icon>
                </v-btn>
              </template>
              <span>More Details</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn width="48%" color="black" v-on="on" tile flat>
                  <v-icon>mdi-laptop</v-icon>
                </v-btn>
              </template>
              <span>Live Version</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
