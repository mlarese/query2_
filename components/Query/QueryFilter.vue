<template>
  <v-container
    grid-list-md
    class="pa-0">
    <v-toolbar
      class="elevation-0"
      color="deep-purple accent-4">
      <v-icon>assignment_ind</v-icon>
      <v-toolbar-title>{{ $vuetify.t('Data Model Predictive') }}</v-toolbar-title>
      <v-spacer/>
      <v-btn
        class="white--text"
        color="deep-purple accent-4"
        @click="save"
      >
        {{ $vuetify.t('Save Query') }}
      </v-btn>
    </v-toolbar>
    <v-layout class="pt-3">

      <v-flex
        sm6
        class="pt-2">
        <v-menu
          :close-on-content-click="true"
          v-model="datePickerFrom"
          :nudge-right="40"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :placeholder="$vuetify.t('From')"
            :label="$vuetify.t('Check-In')"
            v-model="$record.checkin"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateFrom"
            locale="ita" />
        </v-menu>
      </v-flex>
      <!--<v-flex-->
      <!--sm3-->
      <!--class="pt-2">-->
      <!--<v-menu-->
      <!--:close-on-content-click="true"-->
      <!--v-model="datePickerTo3"-->
      <!--:nudge-right="40"-->
      <!--:return-value.sync="date"-->
      <!--transition="scale-transition"-->
      <!--offset-y-->
      <!--full-width-->
      <!--min-width="250px"-->
      <!--&gt;-->
      <!--<v-text-field-->
      <!--slot="activator"-->
      <!--:placeholder="$vuetify.t('To')"-->
      <!--v-model="fltDateTo"-->
      <!--box-->
      <!--readonly-->
      <!--append-icon="date_range"-->
      <!--/>-->
      <!--<v-date-picker-->
      <!--v-model="fltDateTo"-->
      <!--locale="ita"/>-->
      <!--</v-menu>-->
      <!--</v-flex>-->

      <v-flex
        sm6
        class="pt-2">
        <v-menu
          :close-on-content-click="true"
          v-model="datePickerTo"
          :nudge-right="40"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          full-width
          min-width="250px"
        >
          <v-text-field
            slot="activator"
            :placeholder="$vuetify.t('To')"
            :label="$vuetify.t('Check-Out')"
            v-model="$record.checkout"
            box
            readonly
            append-icon="date_range"
          />
          <v-date-picker
            v-model="fltDateTo"
            locale="ita" />
        </v-menu>
      </v-flex>
      <!--<v-flex-->
      <!--sm3-->
      <!--class="pt-2">-->
      <!--<v-menu-->
      <!--:close-on-content-click="true"-->
      <!--v-model="datePickerTo4"-->
      <!--:nudge-right="40"-->
      <!--:return-value.sync="date"-->
      <!--transition="scale-transition"-->
      <!--offset-y-->
      <!--full-width-->
      <!--min-width="250px"-->
      <!--&gt;-->
      <!--<v-text-field-->
      <!--slot="activator"-->
      <!--:placeholder="$vuetify.t('To')"-->
      <!--v-model="fltDateTo1"-->
      <!--box-->
      <!--readonly-->
      <!--append-icon="date_range"-->
      <!--/>-->
      <!--<v-date-picker-->
      <!--v-model="fltDateTo1"-->
      <!--locale="ita"/>-->
      <!--</v-menu>-->
      <!--</v-flex>-->
    </v-layout>
    <v-layout>
      <v-layout class="pt-3 pb-3">
        <v-flex xs4>
          <v-autocomplete
            :label="$vuetify.t('Last Booking')"
            :placeholder="$vuetify.t('Days')"
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
            v-model="$record.number"
            :placeholder="$vuetify.t('Number')"
            type="number"
            box
            hide-details/>
        </v-flex>
        <v-flex xs2>
          <v-text-field
            v-model="$record.nights"
            :placeholder="$vuetify.t('Number of nights')"
            type="number"
            box
            hide-details/>
        </v-flex>
      </v-layout>

    </v-layout>
  </v-container>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "QueryFilter",
        data () {
            return {
                date: null,
                date2: null,
                form: false,
                datePickerTo: true,
                datePickerFrom: true,
                pagination: {}
            }
        },
        computed: {
            ...mapState('query', ['$record', 'record', 'list', 'filterActive'])
        },
        methods: {
            ...mapActions('query', [ 'save'])
        }
    }
</script>

<style scoped>

</style>
