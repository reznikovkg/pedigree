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
import PageLayout from '@/components/parts/PageLayout.vue';

export default {
  name: 'SettingsPage',
  components: {
    PageLayout
  },
  computed: {
    ...mapGetters('settings', [
      'getAccess'
    ]),
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
    ...mapActions('settings', [
      'setAccess'
    ]),
  }
};
</script>
