<template>
  <div>
    <v-layout>
      <v-spacer/>
      <v-btn color="info">{{ $vuetify.t('Run filter') }}</v-btn>
      <v-btn color="warning">{{ $vuetify.t('Clear filter') }}</v-btn>
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="list"
      :pagination.sync="pagination"
      :hide-actions="false"
      class="elevation-1"
    >
      <template
        slot="items"
        slot-scope="{item}">
        <td>{{ item.product }}</td>
        <td>{{ item.origin }}</td>
        <td>{{ item.channel }}</td>
        <td>{{ item.country }}</td>
        <td>{{ item.paxtype }}</td>
        <td>{{ item.checkin }}</td>
        <td>{{ item.checkout }}</td>
        <td>{{ item.nights }}</td>
        <td>{{ item.name }}</td>
      </template>
      <template
        slot="pageText"
        slot-scope="{ pageStart, pageStop, itemsLength }">
        {{ $vuetify.t('From') }} {{ pageStart }} {{ $vuetify.t('To') }} {{ pageStop }}  {{ $vuetify.t('Of') }} {{ itemsLength }}
      </template>
  </v-data-table></div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "QueryList",
        data () {
            const headers = [
                { text: this.$vuetify.t('Product ID'), value: 'product' },
                { text: this.$vuetify.t('Origin'), value: 'origin' },
                { text: this.$vuetify.t('Channel'), value: 'channel' },
                { text: this.$vuetify.t('Nationality'), value: 'country' },
                { text: this.$vuetify.t('Type Pax'), value: 'paxtype' },
                { text: this.$vuetify.t('From'), value: 'checkin' },
                { text: this.$vuetify.t('To'), value: 'checkout' },
                { text: this.$vuetify.t('Night'), value: 'nights' },
                { text: this.$vuetify.t('Name'), value: 'name' },
                { text: ``, value: 'action', sortable: false }
            ]
            return {
                headers,
                pagination: {}
            }
        },
        computed: {
            ...mapState('query', ['list'])
        },
        methods: {
            ...mapActions('query', ['preload']),
            onFilter () {
                this.preload()
            }
        }

    }
</script>

<style scoped>

</style>
