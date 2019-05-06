<template>
  <v-container>
    <advanced-filter/>
    <query-filter/>
    <query-list/>
  </v-container>
</template>

<script>
    import AdvancedFilter from "../../components/Query/AdvancedFilter"
    import QueryFilter from "../../components/Query/QueryFilter"
    import QueryList from "../../components/Query/QueryList"
    const root = {root: true}

    export default {
        name: "Index",
        components: {QueryList, AdvancedFilter, QueryFilter },
        fetch ({store}) {
            store.dispatch('query/load', {}, root)
        }
    }
</script>

<style scoped>

</style>
