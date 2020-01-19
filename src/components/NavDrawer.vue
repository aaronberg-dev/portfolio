<template>
  <v-navigation-drawer class="grey darken-4 fill-height" app>
    <v-row class="flex-column justify-center align-center py-5">
      <h1 class="display-3 green--text mb-5">
        AB
      </h1>
      <div class="display-1 mb-2">Aaron Berg</div>
      <div class="title font-weight-light mb-5">Front-end Developer</div>
      <v-btn
        v-for="({ name, href }, i) in links"
        :key="i"
        :to="href"
        class="subheading font-weight-light mb-3 v-size--default"
        text
        >{{ name }}</v-btn
      >
      <div class="mt-auto">
        <div class="my-4">
          <v-btn
            v-for="({ icon, href, title }, i) in icons"
            :key="i"
            text
            icon
            :href="href"
            :title="title"
            class="mx-2"
          >
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'About Me',
          href: '/about'
        },
        {
          name: 'Experience',
          href: '/experience'
        },
        {
          name: 'Portfolio',
          href: '/portfolio'
        }
      ],
      icons: [
        {
          icon: 'mdi-linkedin-box',
          href: 'https://www.linkedin.com/in/aaron-berg/',
          title: 'Linkedin Profile'
        },
        {
          icon: 'mdi-github-box',
          href: 'https://github.com/aaronberg-dev',
          title: 'Github Profile'
        }
      ]
    }
  }
}
</script>

<style></style>
