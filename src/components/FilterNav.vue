<template>
  <div class="filter-nav">
    <div class="search-input">
      <search-solid />
      <input
        v-model="term"
        type="search"
        id="country-search"
        name="q"
        aria-label="Search for a country"
        placeholder="Search for a country..."
      >
    </div>
    <v-select
      v-model="region"
      :options="regions"
      placeholder="Filter by Region"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchSolid from '@/assets/search-solid.svg';

export default {
  name: 'FilterNav',
  components: {
    SearchSolid,
  },
  computed: {
    ...mapState(['regions']),
    term: {
      get() {
        return this.$store.state.filters.term;
      },
      set(value) {
        this.$store.dispatch('updateSearchTerm', value);
      },
    },
    region: {
      get() {
        return this.$store.state.filters.region;
      },
      set(value) {
        this.$store.dispatch('updateRegion', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.filter-nav {
  padding: 3rem 0 1rem;
  @media (max-width: 414px) {
    padding: 1.6rem 0 1rem;
  }
}
</style>
