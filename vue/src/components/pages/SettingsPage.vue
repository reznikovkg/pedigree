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
    ...mapGetters({
      access: 'settings/getAccess',
    }),
    accessSwitch: {
      get() {
        return this.access;
      },
      set(value) {
        this.updateAccess(value);
      },
    },
  },
  methods: {
    ...mapActions('settings', {
      updateAccess: 'setAccess'
    }),
  },
  mounted() {
    this.$store.dispatch('initializeSettings');
  }
};
</script>
