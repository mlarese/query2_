<template>
  <div>
    <v-layout>
      <v-spacer/>
      <v-btn color="deep-purple accent-4">{{ $vuetify.t('Run filter') }}</v-btn>
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
        <td @click="selectItem(item)">{{ item.product }}</td>
        <td @click="selectItem(item)">{{ item.origin }}</td>
        <td @click="selectItem(item)">{{ item.channel }}</td>
        <td @click="selectItem(item)">{{ item.country }}</td>
        <td @click="selectItem(item)">{{ item.paxtype }}</td>
        <td @click="selectItem(item)">{{ item.checkin }}</td>
        <td @click="selectItem(item)">{{ item.checkout }}</td>
        <td @click="selectItem(item)">{{ item.nights }}</td>
        <td @click="selectItem(item)">{{ item.name }}</td>
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
            ...mapState('query', ['list', 'record'])
        },
        methods: {
            ...mapActions('query', ['selectItem'])
        }

    }
</script>

<style scoped>

</style>
