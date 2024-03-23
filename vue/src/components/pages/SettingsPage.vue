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
      <div class="file-actions">
        <a
          :href="downloadRef"
          download="file.json"
        >
          <ElButton type="success">
            Экспорт
          </ElButton>
        </a>
        <ElUpload
          action="#"
          :limit="1"
          :show-file-list="false"
          :auto-upload="false"
          :on-change="(file) => setFile(file)"
        >
          <ElButton type="primary">
            Импорт
          </ElButton>
        </ElUpload>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '@/components/parts/PageLayout.vue'

export default {
  name: 'SettingsPage',
  components: {
    PageLayout
  },
  computed: {
    ...mapGetters('settings', [
      'getAccess',
      'getMode'
    ]),
    ...mapGetters('persons', [
      'getAllPersons'
    ]),
    accessSwitch: {
      get () {
        return this.getAccess
      },
      set (value) {
        this.setAccess(value)
      },
    },
    currentRole: {
      get () {
        return this.getMode
      },
      set (value) {
        this.setMode(value)
      }
    },
    downloadRef () {
      return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        persons: this.getAllPersons,
        access: this.getAccess,
        mode: this.getMode
      }))
    }
  },
  methods: {
    ...mapActions('settings', [
      'setAccess',
      'setMode'
    ]),
    ...mapActions('persons', [
      'setPersons'
    ]),
    setFile (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const { persons, access, mode } = JSON.parse(e.target.result)
        this.setPersons(persons)
        this.setAccess(access)
        this.setMode(mode)
      }
      reader.readAsText(file.raw)
    }
  }
}
</script>

<style>
  .file-actions {
    display: flex;
    margin-top: 10px;
    gap: 5px
  }
</style>
