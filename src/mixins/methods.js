export default {
  methods: {
    numberWithCommas(x) {
      let number = '';
      if (x) number = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return number;
    },
    arrayAsString(array, key) {
      let string = '';
      if (array && key) {
        const newArray = [];
        array.forEach((item) => {
          if (item[key]) {
            newArray.push(item[key]);
          }
        });
        string = newArray.join(', ');
      } else if (array) string = array.join(', ');
      return string;
    },
    getCountryNames(array) {
      const countryNames = [];
      if (array) {
        array.forEach((item) => {
          const country = this.$store.state.countryList[item];
          countryNames.push(country);
        });
      }
      return countryNames;
    },
  },
};
