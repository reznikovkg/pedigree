<template>
  <PageLayout>
    <section class="p-16">
      <h1>
        Настройки
      </h1>
      <div>
        <ElSwitch
          v-model="accessSwitch"
          activeColor="green"
          inactiveColor="grey"
        />
        Скрытый режим
      </div>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SettingsPage',
  computed: {
    ...mapGetters('settings', {
      getAccess: 'getAccess'
    }),
    accessSwitch: {
      get() {
        return this.getAccess;
      },
      set(value) {
        this.setAccess(value);
      },
    },
  },
  methods: {
    ...mapActions('settings', {
      setAccess: 'setAccess'
    }),
  },
  mounted() {
    this.$store.dispatch('initializeSettings');
  }
};
</script>
