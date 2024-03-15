<template>
  <PageLayout>
    <button
      :class="['person-page__btn', { 'disabled': isButtonDisabled }]" 
      :disabled="isButtonDisabled"
      @click = "() => saveId()"
    >
      Сохранить
  </button>

    <section class="p-16">
      <PersonCard :person="person" />
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue';
import PersonCard from '@/components/cards/PersonCard.vue';
//import SimpleButton from '../ui/SimpleButton.vue';

export default {
  name: 'PersonPage',
  components: {
    PageLayout,
    PersonCard,
    //SimpleButton
  },
  data() {
    return {
      isButtonDisabled: false
    };
  },
  computed: {
    ...mapGetters('persons', [
      'getPersonById',
      'getCenter'
    ]),
    person () {
      return this.getPersonById(this.id)
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions('persons', [
      'setCenter'
    ]),
    saveId() {
      this.setCenter(this.id);
      this.isButtonDisabled = true;
      //console.log('Button clicked')
    }
  },
  mounted() {
    const centerId = this.getCenter;
    if (centerId && centerId === this.id) {
      this.isButtonDisabled = true;
    }
  }
};
</script>

<style scoped lang="less">
.person-page {
  &__btn {
    justify-self: center;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #60ff6d;
    color: black;
    font-weight: 600;
    cursor: pointer;
    margin-left: 0px;
    margin-bottom: 20px;
  }

  &__btn.disabled {
    background-color: #c8c8c8;
    cursor: not-allowed;
  }
}
</style>
