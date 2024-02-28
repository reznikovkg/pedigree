import { mapActions, mapGetters } from "vuex";

export const Settings = {
  computed: {
    ...mapGetters('settings', [
      'getMode',
      'getAccess'
    ]),
    mode () {
      return this.getMode
    },
    access () {
        return this.getAccess
    }
  },
  methods: {
    ...mapActions('settings', [
      'setMode',
      'setAccess'
    ]),
    setMode (payload) {
      this.setMode(payload)
    },
    setAccess (payload){
      this.setAccess(payload)
    }
  }
}
