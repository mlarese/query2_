<template>
  <div>
    <v-layout>
      <v-spacer/>
      <v-btn
        v-if="!filterActive"
        :disabled="buttonDisabled"
        color="deep-purple accent-4"
        small
        class="elevation-0"
        @click="filterList">{{ $vuetify.t('Run filter') }}</v-btn>
      <v-btn
        color="warning"
        small
        class="elevation-0"
      >{{ $vuetify.t('Clear filter') }}</v-btn>
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
    import {mapState} from 'vuex'
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
            ...mapState('query', ['list', 'record','filter','filteredActive']),
            filteredList () {
            return this.list.filter(item => {
                if (this.filter.product && this.filter.product !== '') if (item.product !==  this.filter.product) return false
                if (this.filter.origin && this.filter.origin !== '') if (item.origin !==  this.filter.origin) return false
                if (this.filter.channel && this.filter.channel !== '') if (item.channel !==  this.filter.channel) return false
                if (this.filter.country && this.filter.country !== '') if (item.country !==  this.filter.country) return false
                if (this.filter.paxtype && this.filter.paxtype !== '') if (item.paxtype !==  this.filter.paxtype) return false
            return true
                 })
            },
            filterActive () {
                return this.$store.state[this.query].filterActive
            }
        },
        methods: {
            filterList () {
                this.$store.commit(`${this.query}/setFilterActive`, true, {root: true})
                this.$emit('on-filter')
            },
            unfilterList () {
                this.$store.commit(`${this.storeName}/setFilterActive`, false, {root: true})
                this.$emit('on-unfilter')
            }
        }

    }
</script>

<style scoped>

</style>
