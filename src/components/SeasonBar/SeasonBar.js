export default {
  name: 'SeasonBar',
  props: ['seasons'],
  created() {
    //  console.log(this.$store.getters.getDataBySeason(2009));
  },

  methods: {
    getByYear(year) {
      return this.$store.getters.getDataBySeason(year);
    }
  }
};
