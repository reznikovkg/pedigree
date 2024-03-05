<template>
  <PageLayout>
    <section class="p-16">
      <h1>
        Настройки
      </h1>
      <div>
        <ElSwitch
          v-model="value"
          activeColor="green"
          inactiveColor="grey"
        />
        Скрытый режим
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'

export default {
  name: 'SettingsPage',
  components: {
    PageLayout
  },
  data () {
    return {
      value: false
    }
  },
  mounted () {
    this.value = JSON.parse(localStorage.getItem("value")) || []
  },
  watch: {
    value(newValue) {
      localStorage.setItem("value", JSON.stringify(newValue));
    }
  }
}
</script>

<style>
</style>
