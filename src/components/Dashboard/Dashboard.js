// import { get } from 'lodash';
import SeasonBar from '@/components/SeasonBar/SeasonBar.vue';
export default {
  name: 'Dashboard',
  components: {
    SeasonBar
  },
  created() {},

  computed: {
    seasons() {
      return this.$store.getters.seasonYears;
    },
    seasonData() {
      return this.$store.getters.seasonYears;
    }
  }
};
