<template>
  <PageLayout>
    <section class="p-16">
      <div class="form-section">
        <div>
          <ScrollingPanel :sections="sections" />
        </div>
        <div class="form-person">
          <PersonForm v-model="form" />
          <div class="buttons">
            <SimpleButton 
              class ="person-page__btn" 
              type="primary" 
              @click="() => createPerson()"
            >
              Сохранить
            </SimpleButton>
            <SimpleButton 
              class ="person-page__btn" 
              type="danger" 
              @click="() => cancel()"
            >
              Отмена
            </SimpleButton>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue'
import PersonForm from '../forms/PersonForm.vue'
import { emptyPerson } from '@/services/person'
import SimpleButton from '../ui/SimpleButton.vue'
import ScrollingPanel from '../ui/ScrollingPanel.vue'

export default {
  name: 'CreatePersonPage',
  components: {
    PageLayout,
    PersonForm,
    SimpleButton,
    ScrollingPanel
  },
  data () {
    return {
      form: emptyPerson(),
      sections: [
        { id: 'info-section', title: 'Общая информация'},
        { id: 'military-section', title: 'Военная служба'},
        { id: 'wedding-section', title: 'Брачные союзы'},
        { id: 'education-section', title: 'Образование'},
        { id: 'work-section', title: 'Работа'},
        { id: 'childs-section', title: 'Дети'}
      ]
    }
  },
  computed: {
    ...mapGetters('settings', [
      'getMode'
    ])
  },
  methods: {
    ...mapActions('persons', [
      'addPerson'
    ]),
    createPerson () {
      this.addPerson(this.form)
        .then((person) => {
          this.$router.push({ name: 'PERSON', params: { id: person.id } })
        })
    },
    cancel () {
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    if (this.getMode === 'user') {
      this.$router.push({ name: 'HOME' })
    }
  }
}
</script>

<style scoped lang="less">
.form-section {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.form-person {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: flex-end;
}
.person-page {
  &__btn {
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
}
</style>
 