<template>
  <router-link
    :to="{ name: 'Details', params: { name: country.name } }"
    class="card"
  >
    <div
      class="card-image"
      :style="{ backgroundImage: `url(${country.flag})` }"
    ></div>
    <div class="card-content">
      <h2>{{ country.name }}</h2>
      <ul>
        <li>
          <strong>Population:</strong> {{ numberWithCommas(country.population) }}
        </li>
        <li>
          <strong>Region:</strong> {{ country.region }}
        </li>
        <li>
          <strong>Capital:</strong> {{ country.capital }}
        </li>
      </ul>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  width: 20%;
  min-width: 260px;
  margin: 2rem 2.5%;

  @media (max-width: 414px) {
    width: 100%;
    max-width: 340px;
    margin: 1rem auto;
  }

  &:hover {
    transform: translate(0, -5px);
  }

  &-image {
    height: 160px;
    background-size: cover;
    background-position: center;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    box-shadow: 0px 0px 20px -12px rgba(0,0,0,0.3);
    @media (max-width: 414px) {
      height: 200px;
    }
  }

  &-content {
    font-size: 14px;
    line-height: 1.8;
    padding: 1.5rem;
    h2 {
      font-size: 1.2rem;
      line-height: 1.4;
      margin: 0;
    }
    strong {
      font-weight: 600;
    }
  }
}
</style>
