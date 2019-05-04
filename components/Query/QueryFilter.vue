<template>
  <v-container
    grid-list-md
    class="pa-0">
    <v-toolbar
      class="elevation-0"
      color="teal lighten-3">
      <v-icon>assignment_ind</v-icon>
      <v-toolbar-title>{{ $vuetify.t('Data Model Predictive') }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        disable
        class="elevation-1"
        color="teal lighten-2"
        dark
      >
        {{ $vuetify.t('Save Query') }}
      </v-btn>
    </v-toolbar>
    <v-layout class="pt-3">

      <v-flex
        sm3
        class="pt-2">
        <v-menu
          :close-on-content-click="true"
          v-model="datePickerFrom"
          :nudge-right="40"
          :return-value.sync="date"
          :disabled="filterActive"
          transition="scale-transition"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :disabled="filterActive"
            :placeholder="$vuetify.t('From')"
            :label="$vuetify.t('Check-In')"
            v-model="fltDateFrom"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateFrom"
            locale="ita" />
        </v-menu>
      </v-flex>
      <v-flex
        sm3
        class="pt-2">
        <v-menu
          :close-on-content-click="true"
          v-model="datePickerTo"
          :nudge-right="40"
          :return-value.sync="date"
          :disabled="filterActive"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :disabled="filterActive"
            :placeholder="$vuetify.t('To')"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateTo"
            locale="ita"/>
        </v-menu>
      </v-flex>
      <v-spacer/>
      <v-flex
        sm3
        class="pt-2">
        <v-menu
          ref="menu2"
          :close-on-content-click="true"
          v-model="datePickerFrom1"
          :nudge-right="40"
          :return-value.sync="date"
          :disabled="filterActive"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :disabled="filterActive"
            :placeholder="$vuetify.t('From')"
            :label="$vuetify.t('Check-Out')"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateFrom1"
            locale="ita" />
        </v-menu>
      </v-flex>
      <v-flex
        xs6
        sm3
        class="pt-2">
        <v-menu
          :close-on-content-click="true"
          v-model="datePickerTo1"
          :nudge-right="40"
          :return-value.sync="date"
          :disabled="filterActive"
          transition="scale-transition"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :disabled="filterActive2"
            :placeholder="$vuetify.t('To')"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateTo"
            locale="ita"/>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-layout class="pt-3 pb-3">
        <v-flex xs4>
          <v-autocomplete
            :label="$vuetify.t('Last Booking')"
            :placeholder="$vuetify.t('Days')"
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
        <v-flex xs2>
          <v-text-field
            v-model="record"
            :placeholder="$vuetify.t('Number')"
            type="number"
            box
            hide-details/>
        </v-flex>
        <v-flex xs2>
          <v-text-field
            v-model="record.nights"
            :placeholder="$vuetify.t('Number of nights')"
            type="number"
            box
            hide-details/>
        </v-flex>
      </v-layout>

  </v-layout></v-container>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "QueryFilter",
        data () {
            return {
                date: null,
                date2: null,
                datePickerFrom: true,
                datePickerFrom1: true,
                datePickerTo1: true,
                datePickerTo: true,
                pagination: {}
            }
        },
        computed: {
            ...mapState('query', ['$record', 'record', 'list', 'filterActive'])
        }
    }
</script>

<style scoped>

</style>
