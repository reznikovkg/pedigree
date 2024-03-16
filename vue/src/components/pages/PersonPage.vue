<template>
  <PageLayout>
    <SimpleButton class="person-page__btn"
      :class="{ 'disabled': buttonDisabled }" 
      :disabled="isButtonDisabled"
      @click = "() => saveId()"
    >
      Сохранить
    </SimpleButton>

    <section class="p-16">
      <PersonCard :person="person" />
    </section>
  </PageLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageLayout from '../parts/PageLayout.vue';
import PersonCard from '@/components/cards/PersonCard.vue';
import SimpleButton from '../ui/SimpleButton.vue';

export default {
  name: 'PersonPage',
  components: {
    PageLayout,
    PersonCard,
    SimpleButton
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
    },
    buttonDisabled() {
      const center = this.getCenter;
      const savedId = center ? center : '1';
      return savedId === this.id;
    }
  },
  methods: {
    ...mapActions('persons', [
      'setCenter'
    ]),
    saveId() {
      this.setCenter(this.id);
    }
  }
};
</script>

<style scoped lang="less">
.person-page {
  &__btn {
    background-color: #00ff6e;
    margin-bottom: 10px;

    &.disabled {
      background-color: #c8c8c8;
      cursor: not-allowed;
    }
  }
}
</style>
