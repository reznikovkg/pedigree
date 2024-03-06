<template>
  <PageLayout>
    <section class="p-16">
      <h1>
        Настройки
      </h1>
      <div>
        <ElSwitch
          v-model="hiddenModeSwitch"
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
    // Используем геттер для получения значения из хранилища
    ...mapGetters({
      hiddenMode: 'settings/getAccess',
    }),

    hiddenModeSwitch: {
      get() {
        // Возвращаем значение из хранилища
        return this.hiddenMode;
      },
      set(value) {
        // Вызываем действие для обновления значения в хранилище
        this.updateAccess(value);
      },
    },
  },

  methods: {
    // Используем действие Vuex для установки нового значения
    ...mapActions('settings', {
      updateAccess: 'setAccess'
    }),
  },
  mounted() {
    this.$store.dispatch('initializeSettings');
  }
};
</script>
