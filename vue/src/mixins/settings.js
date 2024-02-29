import { mapGetters } from "vuex";

export const Settings = {
  computed: {
    ...mapGetters('settings', [
      'getMode',
      'getAccess'
    ]),
    $settings () {
      return {
        mode: this.getMode, 
        access:this.getAccess
      }
    }
  }
}
