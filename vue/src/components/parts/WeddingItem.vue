<template>
  <div class="custom-card">
    <div class="custom-card__header">
      {{ fullName }} 
    </div>
    <div class="custom-card__date">
      {{ wedding.startDate }}<template v-if="wedding.endDate"> - {{ wedding.endDate }}</template>
    </div>
  </div>
</template>

<script>
import { formatPersonName } from '@/services/formatPersonName'
import { mapGetters } from 'vuex'

export default {
  name: 'WeddingItem',
  props: {
    wedding: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters ('persons', [
      'getPersonById'
    ]),
    getPartner () {
      return this.getPersonById(this.wedding.partnerId)
    },
    fullName () {
      return formatPersonName(this.getPersonById(this.wedding.partnerId), {short: true, access: this.needHide})
    },
  }
}
</script>
