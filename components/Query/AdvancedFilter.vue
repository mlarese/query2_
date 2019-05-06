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
          v-model="$record.name"
          :rules="rules.name"
          flat
          dense
          box
          required

        />
      </v-flex>
      <v-flex xs4>
        <v-text-field
          :placeholder="$vuetify.t('Surname')"
          v-model="$record.surname"
          :rules="rules.surname"
          dense
          box
          required
        />
      </v-flex>
      <v-flex xs4>
        <v-text-field
          :placeholder="$vuetify.t('Email')"
          v-model="$record.email"
          :rules="rules.email"
          type="email"
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
          :items="list"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-value="value"
          item-text="product"
          box
        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Origin')"
          v-model="filter.origin"
          :items="list"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-value="value"
          item-text="origin"
          box

        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Channel')"
          v-model="filter.channel"
          :items="list"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-value="value"
          item-text="channel"
          box

        />
      </v-flex>
    </v-layout>
    <v-layout class="pt-3 pb-3">
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Nationality')"
          v-model="filter.country"
          :items="list"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-value="value"
          item-text="country"
          box

        />
      </v-flex>
      <v-flex xs4>
        <v-autocomplete
          :placeholder="$vuetify.t('Type Pax')"
          v-model="filter.paxtype"
          :items="list"
          flat
          hide-details
          hide-selected
          dense
          class="elevation-0"
          item-value="value"
          item-text="paxtype"
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
            ...mapState('query', ['$record', 'record', 'list', 'filter', 'countries'])
        }
    }
</script>

<style scoped>

</style>
