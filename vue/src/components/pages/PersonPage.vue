<template>
  <PageLayout>
    <button 
      :class="['person-page__btn', { 'disabled': isButtonDisabled }]" 
      @click="saveId" 
      :disabled="isButtonDisabled"
    >
      Сохранить
    </button>
    <section class="p-16">
      <PersonCard :person="person" />
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import PageLayout from '../parts/PageLayout.vue';
import PersonCard from '@/components/cards/PersonCard.vue';

export default {
  name: 'PersonPage',
  components: {
    PageLayout,
    PersonCard
  },
  data() {
    return {
      isButtonDisabled: false
    };
  },
  computed: {
    ...mapGetters('persons', [
      'getPersonById'
    ]),
    person () {
      return this.getPersonById(this.id)
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    saveId() {
      this.$store.commit('persons/setCenterId', this.currentId); //
      localStorage.setItem('centerId', this.id);
      this.isButtonDisabled = true;
    }
  },
  mounted() {
    const centerId = localStorage.getItem('centerId');
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
