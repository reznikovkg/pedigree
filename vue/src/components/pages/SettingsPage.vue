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
      <h2>
        Роль
      </h2>
      <div>
        <ElSelect v-model="currentRole" placeholder="Выберите роль">
          <ElOption label="user" value="user" />
          <ElOption label="admin" value="admin" />
        </ElSelect>
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
        <ElInput
          v-model="jwtToken"
          placeholder="Введите токен"
        />
      </div>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '@/components/parts/PageLayout.vue'
import CryptoJS from 'crypto-js';
import { decryptPersons } from '@/utils/decrypt'


export default {
  name: 'SettingsPage',
  components: {
    PageLayout
  },
  computed: {
    ...mapGetters('settings', [
      'getAccess',
      'getMode',
      'getToken'
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
    jwtToken: {
      get () {
        return this.getToken
      },
      set (value) {
        this.setToken(value)
      },
    },
    downloadRef () {
      return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        persons: this.getAllPersons.map(person => {
          if (this.getAccess && person.access && this.jwtToken) {
            const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(person), this.jwtToken).toString();
            return { data: encryptedData };
          } else {
            return person;
          }
        }),
        access: this.getAccess,
        mode: this.getMode
      }))
    }
  },
  methods: {
    ...mapActions('settings', [
      'setAccess',
      'setMode',
      'setToken'
    ]),
    ...mapActions('persons', [
      'setPersons'
    ]),
    setFile (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          if (jsonData.persons) {
            this.setPersons(decryptPersons(jsonData.persons, this.jwtToken))
          }
          this.setAccess(jsonData.access);
          this.setMode(jsonData.mode);
        }
        catch (e){
          console.log(e)
        }
      };
      reader.readAsText(file.raw);
    },
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
