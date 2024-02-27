SettingsPlugin.install = function (Vue, options) {
    Vue.prototype.$settings = settings;


    Vue.mixin({
      created: {
        setAccess(value) {
            this.$settings.access = value;
            localStorage.setItem('access', value);
        },
        setMode(value) {
            this.$settings.mode = value;
            localStorage.setItem('mode', value);
        },
        getAccess() {
            return this.$settings.access;
        },
        getMode() {
            return this.$settings.mode;
        }
    }
    })
  }
  