export default {
  name: 'SeasonBar',
  props: ['seasons'],
  created() {
    //  console.log(this.$store.getters.getDataBySeason(2009));
  },
  computed: {
    selectedSeason() {
      return this.$store.state.selectedSeason;
    }
  },
  methods: {
    getByYear(year) {
      return this.$store.getters.getDataBySeason(year);
    },
    onSeasonSelect(season) {
      const { selectedSeason } = this.$store.state;
      const toPath = selectedSeason === season ? '/' : `/${season}`;
      this.$router.push({ path: toPath });
    }
  }
};
