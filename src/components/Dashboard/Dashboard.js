// import { get } from 'lodash';
import SeasonBar from '@/components/SeasonBar/SeasonBar.vue';
export default {
  name: 'Dashboard',
  components: {
    SeasonBar
  },
  created() {
    //  console.log(this.$store.getters.getDataBySeason(2009));
  },

  computed: {
    seasons() {
      return this.$store.getters.seasonYears;
    }
  }
};
