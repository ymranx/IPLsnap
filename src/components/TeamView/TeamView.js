/* eslint-disable no-unused-vars */
export default {
  name: 'TeamView',
  props: ['teamData'],
  created() {
    // console.log(this.$store.getters.getDataBySeason(2009));
  },

  methods: {
    abbr(value) {
      const segemets = value.split(' ');
      return segemets.reduce((result, cur) => {
        result = result.concat(cur[0].toLowerCase());
        return result;
      }, '');
    }
  },
  computed: {},
  filters: {}
};
