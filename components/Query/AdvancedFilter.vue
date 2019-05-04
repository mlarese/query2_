<template>
  <v-container
    grid-list-md
    class="pa-0">
    <v-toolbar
      class="elevation-0"
      color="teal lighten-3">
      <v-icon>assignment_ind</v-icon>
      <v-toolbar-title>{{ $vuetify.t('Data & Query 2.0') }}</v-toolbar-title>
    </v-toolbar>
    <v-layout class="pt-3">
      <v-flex xs4>
        <v-text-field
          :placeholder="$vuetify.t('Name')"
          v-model="record"
          :rules="rules.name"
          flat
          hide-details
          dense
          box
          required

        />
      </v-flex>
      <v-flex xs4>
        <v-text-field
          :placeholder="$vuetify.t('Surname')"
          v-model="record"
          :rules="rules.surname"
          flat
          hide-details
          dense
          box
          required
        />
      </v-flex>
      <v-flex xs4>
        <v-text-field
          :placeholder="$vuetify.t('Email')"
          v-model="record"
          :rules="rules.email"
          flat
          type="email"
          hide-details
          dense
          box
          required
        />
      </v-flex>
    </v-layout>
    <v-layout class="pt-3">
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Product')"
          v-model="filter.product"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-text="name"
          item-value="value"
          box

        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Origin')"
          :item="list"
          v-model="filter.origin"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-text="name"
          item-value="name"
          box

        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Channel')"
          v-model="filter"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-text="name"
          item-value="name"
          box

        />
      </v-flex>
    </v-layout>
    <v-layout class="pt-3 pb-3">
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Nationality')"
          v-model="filter"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-text="name"
          item-value="value"
          box

        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Type Pax')"
          v-model="filter"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-text="name"
          item-value="value"
          box

        />
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "AdvancedFilter",

        data () {
            return {
                rules: {
                    name: [v => !!v || this.$vuetify.t('required')],
                    surname: [v => !!v || this.$vuetify.t('required')],
                    email: [v => !!v || this.$vuetify.t('required')]
                }
            }
        },
        computed: {
            ...mapState('query', ['$record', 'record', 'list', 'filter'])
        }
    }
</script>

<style scoped>

</style>
