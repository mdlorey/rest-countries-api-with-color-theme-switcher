<template>
  <div class="details">
    <div class="nav">
      <button class="nav-link" @click="$router.go(-1)">
        <arrow-left /> Back
      </button>
    </div>

    <div class="country-details row">
      <div class="country-flag col-6">
        <img v-if="country.flags" class="img-fluid" :src="country.flags.svg" />
      </div>
      <div class="country-content col">
        <div v-if="country.name" class="country-name">
          {{ country.name.common }}
        </div>
        <div class="row">
          <div class="col">
            <ul>
              <li v-if="country.name">
                <strong>Official Name:</strong> {{ country.name.official }}
              </li>
              <li v-if="country.name && country.name.common !== country.name.official">
                <strong>Common Name:</strong> {{ country.name.common }}
              </li>
              <li>
                <strong>Population:</strong> {{ numberWithCommas(country.population) }}
              </li>
              <li>
                <strong>Region:</strong> {{ country.region }}
              </li>
              <li>
                <strong>Sub Region:</strong> {{ country.subregion }}
              </li>
              <li v-if="country.capital">
                <strong>Capital:</strong> {{ country.capital[0] }}
              </li>
            </ul>
          </div>
          <!-- <div class="col">
            <ul>
              <li>
                <strong>Top Level Domain:</strong> {{ arrayAsString(country.topLevelDomain) }}
              </li>
              <li>
                <strong>Currencies:</strong> {{ arrayAsString(country.currencies, 'name') }}
              </li>
              <li>
                <strong>Languages:</strong> {{ arrayAsString(country.languages, 'name') }}
              </li>
            </ul>
          </div> -->
        </div>
        <!-- <div class="border-countries">
          <strong>Border Countries: </strong>
          <div class="inline-buttons" v-if="country.borders && country.borders.length">
            <router-link
            class="nav-link"
              v-for="item in getCountryNames(country.borders)"
              :to="{ name: 'Details', params: { name: item } }"
              :key="item"
            >
              {{ item }}
            </router-link>
          </div>
          <template v-else>None</template>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@/assets/arrow-left-solid.svg';

export default {
  name: 'FilterNav',
  components: {
    ArrowLeft,
  },
  computed: {
    countryCode() {
      let name = null;
      if (this.$route.params.name) {
        name = this.$route.params.name;
      }
      return name;
    },
    country() {
      let country = [];
      if (this.countryCode) {
        country = this.$store.getters.getCountry(this.countryCode);
      }
      return country;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  padding: 3rem 0;
  @media (max-width: 414px) {
    padding-top: 1.6rem;
  }
}
.country {
  &-details {
    margin-bottom: 2rem;
  }
  &-flag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      width: 560px;
      box-shadow: var(--box-shadow);
      @media (max-width: 414px) {
        max-width: calc(100% - 30px);
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    line-height: 1.8;
    strong {
      font-weight: 600;
    }
  }
  &-name {
    font-size: 1.65rem;
    font-weight: 800;
    @media (max-width: 414px) {
      margin-top: 2rem;
    }
  }
}
.border-countries {
  margin-top: 2.5rem;
  @media (max-width: 414px) {
    margin-top: 1rem;
  }
}
.inline-buttons {
  display: inline-block;
  margin-top: 0.6rem;
  margin-left: .5rem;
  @media (max-width: 414px) {
    margin-left: 0;
  }
  .nav-link {
    display: inline-flex;
    height: 30px;
    font-size: 1rem;
    padding: 0 1.4rem;
    margin: .5rem .2rem;
    @media (max-width: 414px) {
      margin: .5rem .5rem 0.5rem 0;
    }
  }
}
</style>
