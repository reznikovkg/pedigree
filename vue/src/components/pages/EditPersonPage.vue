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
  name: 'EditPersonPage',
  components: {
    PageLayout,
    PersonForm,
    SimpleButton,
    ScrollingPanel
  },
  data () {
    return {
      form: emptyPerson()
    }
  },
  computed: {
    ...mapGetters('persons', [
      'getPersonById'
    ]),
    ...mapGetters('settings', [
      'getMode'
    ]),
    sections () {
      return [
        { id: 'info-section', title: 'Общая информация'},
        { id: 'parents-section', title: 'Родители'},
        { id: 'childs-section', title: 'Дети'},
        { id: 'weddings-section', title: 'Брачные союзы'},
        { id: 'military-section', title: 'Военная служба'}
      ]
    },
    id () {
      return this.$route.params.id
    },
    person () {
      return this.getPersonById(this.id)
    }
  },
  mounted () {
    if(this.getMode === 'user') { 
      this.$router.push({ name: 'HOME' })
    } else {
      if (this.person) {
        this.form = {
          ...this.form,
          ...this.person
        }
      } else {
        this.$router.push({ name: 'HOME'  })
      }
    }
  },
  methods: {
    ...mapActions('persons', [
      'editPerson'
    ]),
    editPersonHandler () {
      this.editPerson(this.form)
      this.goBack()
    },
    cancel () {
      this.goBack()
    },
    goBack () {
      this.$router.go(-1)
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
