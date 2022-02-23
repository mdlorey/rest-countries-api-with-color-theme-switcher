<template>
  <div id="app" :class="{ 'dark': darkMode }">
    <div id="nav">
      <div class="container">
        <div class="site-title">
          <router-link :to="{ name: 'Home' }">Where in the world?</router-link>
        </div>
         <button @click="toggleDarkMode()">
           <template v-if="darkMode"><moon-solid /></template>
           <template v-else><moon-outlined /></template>
           Dark Mode
         </button>
      </div>
    </div>
    <keep-alive>
      <router-view class="container" />
    </keep-alive>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MoonOutlined from '@/assets/moon-regular.svg';
import MoonSolid from '@/assets/moon-solid.svg';

export default {
  components: {
    MoonOutlined,
    MoonSolid,
  },
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('set');
  },
  computed: {
    ...mapState(['darkMode']),
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch('toggleDarkMode');
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
@import '../node_modules/vue-select/dist/vue-select.css';

:root {
  --dark-blue: hsl(209, 23%, 22%); // Dark Mode Elements
  --very-dark-blue: hsl(207, 26%, 17%); // Dark Mode Background
  --very-dark-blue-2: hsl(200, 15%, 8%); // Light Mode Text
  --dark-gray: hsl(0, 0%, 52%); // Light Mode Input
  --very-light-gray: hsl(0, 0%, 98%); // Light Mode Background
  --white: hsl(0, 0%, 100%); // Dark Mode Text & Light Mode Elements

  --small-spacing: 12px;
  --normal-spacing: calc(var(--small-spacing) * 2);
  --border-radius: .4rem;
  --box-shadow: 0px 0px 20px -12px rgba(0,0,0,0.5);
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-grow: 1;
  color: var(--very-dark-blue-2);
  background-color: var(--very-light-gray);
  transition: all 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: var(--very-dark-blue-2);
    transition: color 0.3s ease-in-out;
  }
  &.dark {
    color: var(--white);
    background-color: var(--very-dark-blue);
    transition: all 0.3s ease-in-out;
    a {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
  }
}

#nav {
  box-shadow: var(--box-shadow);
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 80px;
  }
  .site-title {
    font-weight: 800;
    font-size: 1.6rem;
    flex-grow: 1;
    @media (max-width: 414px) {
      font-size: 1rem;
    }
  }
  button {
    background: none;
    border: 0;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    color: var(--very-dark-blue-2);
    transition: color 0.3s ease-in-out;
    @media (max-width: 414px) {
      font-size: 0.8rem;
    }
    svg {
      height: 18px;
      margin-right: 0.5rem;
      @media (max-width: 414px) {
        height: 12px;
      }
    }
  }
}

.nav-link {
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  font-size: 1.1rem;
  font-weight: 600;
  height: 42px;
  padding: 0 2rem;
  border: 0;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--very-dark-blue-2);
  transition: color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  svg {
    height: 14px;
    margin-right: 1rem;
  }
}

.dark {
  #nav {
    button {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
  }
  .nav-link {
    color: var(--white);
    background-color: var(--dark-blue);
    transition: background-color 0.3s ease-in-out;
  }
  .vs__search::placeholder {
    color: var(--white);
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}

#nav,
.card {
  background-color: var(--white);
  transition: background-color 0.3s ease-in-out;
}
.dark {
  #nav,
  .card {
    background-color: var(--dark-blue);
    transition: background-color 0.3s ease-in-out;
  }
}

.filter-nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .search-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 58px;
    width: 480px;
    @media (max-width: 414px) {
      width: 100%;
    }
    svg {
      height: 20px;
      padding-left: 2rem;
      padding-right: 1.4rem;
      path {
        fill: var(--dark-gray);
      }
    }
  }
  #country-search {
    font-size: 0.9rem;
    display: block;
    flex-grow: 1;
    padding-right: 2rem;
    min-height: 58px;
    border: 0;
    background-color: transparent;
    color: var(--dark-gray);
    transition: color 0.3s ease-in-out;
    &:focus {
      outline: none;
    }
  }
  ::placeholder,
  :-webkit-input-placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: var(--dark-gray);
    transition: color 0.3s ease-in-out;
  }
  .v-select {
    margin-left: auto;
    @media (max-width: 414px) {
      margin-left: 0;
      margin-top: 1rem;
      width: 100%;
    }
  }
  .vs__dropdown-toggle {
    font-size: 0.9rem;
    padding: 0 1rem;
    height: 58px;
    width: 200px;
    @media (max-width: 414px) {
      width: 100%;
    }
  }
  .search-input,
  .vs__dropdown-toggle,
  .vs__dropdown-menu {
    border: 0;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: var(--white);
    transition: all 0.3s ease-in-out;
    li {
      font-weight: 600;
      font-size: 0.9rem;
      padding-left: 1.4rem;
      padding-right: 1.4rem;
    }
  }
  .vs__dropdown-menu {
    top: calc(100% + 4px);
  }
  .vs__open-indicator,
  .vs__clear {
    fill: var(--very-dark-blue-2);
    transition: all 0.3s ease-in-out;
  }
  .vs--single .vs__selected {
    font-weight: 600;
    color: var(--very-dark-blue-2);
    transition: color 0.3s ease-in-out;
  }
}
.dark {
  .filter-nav {
    .search-input {
      background-color: var(--dark-blue);
      transition: all 0.3s ease-in-out;
      svg {
        path {
          fill: var(--white);
        }
      }
    }
    #country-search {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
    ::placeholder,
    :-webkit-input-placeholder,
    :-ms-input-placeholder,
    ::-ms-input-placeholder,
    .vs--single .vs__selected {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
    .vs__dropdown-toggle,
    .vs__dropdown-menu {
      background-color: var(--dark-blue);
      transition: all 0.3s ease-in-out;
      li {
        color: var(--white);
        transition: color 0.3s ease-in-out;
      }
    }
    .vs__open-indicator,
    .vs__clear {
      fill: var(--white);
      transition: all 0.3s ease-in-out;
    }
    .vs--single .vs__selected {
      color: var(--white);
      transition: color 0.3s ease-in-out;
    }
  }
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  @media (max-width: 414px) {
    flex-basis: auto;
  }
}
.col, .col-6 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 414px) {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
.img-fluid {
  max-width: 100%;
  height: auto;
}

ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
</style>
