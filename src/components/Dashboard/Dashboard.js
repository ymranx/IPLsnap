import { get } from 'lodash';
export default {
  name: 'Dashboard',
  created() {
    //  console.log(this.$store.getters.getDataBySeason(2009));
  },
  data() {
    return {
      seasons: get(this, ['$store', 'state', 'iplSeasons'], [])
    };
  }
};
