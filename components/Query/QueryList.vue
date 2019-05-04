<template>
  <div>
    <v-layout>
      <v-spacer/>
      <v-btn color="info">{{ $vuetify.t('Run filter') }}</v-btn>
      <v-btn color="warning">{{ $vuetify.t('Clear filter') }}</v-btn>
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="filteredList"
      :pagination.sync="pagination"
      :hide-actions="false"
      class="elevation-1"
    >
      <template
        slot="items"
        slot-scope="{item}">
        <td>{{ item.product_id }}</td>
        <td>{{ item.origin }}</td>
        <td>{{ item.channel }}</td>
        <td>{{ item.nationality }}</td>
        <td>{{ item.type_pax }}</td>
        <td>{{ item.from }}</td>
        <td>{{ item.to }}</td>
        <td>{{ item.night }}</td>
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
                { text: this.$vuetify.t('Product ID'), value: 'product_id' },
                { text: this.$vuetify.t('Origin'), value: 'origin' },
                { text: this.$vuetify.t('Channel'), value: 'channel' },
                { text: this.$vuetify.t('Nationality'), value: 'nationality' },
                { text: this.$vuetify.t('Type Pax'), value: 'type_pax' },
                { text: this.$vuetify.t('From'), value: 'from' },
                { text: this.$vuetify.t('To'), value: 'to' },
                { text: this.$vuetify.t('Night'), value: 'night' },
                { text: this.$vuetify.t('Name'), value: 'name' },
                { text: ``, value: 'action', sortable: false }
            ]
            return {
                headers,
                pagination: {}
            }
        },
        computed: {
            ...mapState('query', ['list', 'filterActive'])
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
