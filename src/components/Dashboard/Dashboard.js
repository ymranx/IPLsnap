// import { get } from 'lodash';
export default {
  name: 'Dashboard',
  created() {
    //  console.log(this.$store.getters.getDataBySeason(2009));
  },

  computed: {
    seasons() {
      return this.$store.state.iplSeasons;
    }
  }
};
