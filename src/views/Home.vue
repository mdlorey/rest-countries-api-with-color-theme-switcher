<template>
  <div class="home">
    <filter-nav />
    <div class="flex-grid">
      <country-card
        v-for="country in filteredCountries"
        :country="country"
        :key="country.alpha3Code"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FilterNav from '@/components/FilterNav.vue';
import CountryCard from '@/components/CountryCard.vue';

export default {
  name: 'Home',
  components: {
    FilterNav,
    CountryCard,
  },
  data() {
    return {
      options: {
        keys: ['name'],
      },
      filteredCountries: [],
    };
  },
  computed: {
    ...mapState({
      countries: (state) => state.countries,
      term: (state) => state.filters.term,
      region: (state) => state.filters.region,
    }),
  },
  watch: {
    term() {
      this.filter();
    },
    region() {
      this.filter();
    },
  },
  created() {
    this.filter();
  },
  methods: {
    filter() {
      let regionFiltered = this.countries;
      if (this.region) {
        regionFiltered = regionFiltered
          .filter((country) => country.region === this.region);
      }
      if (this.term) {
        this.$search(this.term, regionFiltered, this.options).then((results) => {
          this.filteredCountries = results;
        });
      } else {
        this.filteredCountries = regionFiltered;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.flex-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -2.5%;
  margin-right: -2.5%;
  &::after {
    content: "";
    flex: auto;
  }
}
</style>
