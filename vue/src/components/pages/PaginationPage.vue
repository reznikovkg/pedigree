<template>
  <PageLayout>
    <select v-model="limit">
      <option selected value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <div class="pagination-btns">
      <template v-for="(rangeNum, index) in currentRange">
        <button :key="index" v-if="rangeNum !== DOTS" @click="currentPage = rangeNum">
          {{ rangeNum }}
        </button>
        <span :key="index" v-else>{{ rangeNum }}</span>
      </template>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/parts/PageLayout.vue'
export default {
  name: 'PaginationPage',
  components: {
    PageLayout
  },
  data() {
    return {
      limit: 10,
      currentPage: 1,
      elementsLength: 1000,
      DOTS: '...'
    }
  },
  methods: {
    getRange(from, to) {
      return Array(to - from + 1)
        .fill(undefined)
        .map((_, i) => from + i)
    },
    getPaginationRange(currentPage, limitPerPage, dataLength) {
      if (limitPerPage > dataLength) {
        return null
      }

      const defaultBtnsCount = 3
      const btnsAmount = Math.ceil(dataLength / limitPerPage)

      if (btnsAmount <= defaultBtnsCount * 2) {
        //вполне можно отрендерить 1 2 3 4 5 6 без пагинации
        return this.getRange(1, defaultBtnsCount * 2)
      }

      const isRightDots = currentPage < defaultBtnsCount //1 2 3 ... 100
      const isLeftDots = currentPage > btnsAmount - defaultBtnsCount //1 ... 98 99 100

      if (isRightDots && !isLeftDots) {
        return [...this.getRange(1, defaultBtnsCount), this.DOTS, btnsAmount]
      }

      if (isLeftDots && !isRightDots) {
        return [1, this.DOTS, ...this.getRange(btnsAmount - defaultBtnsCount, btnsAmount)]
      }

      return [
        1,
        this.DOTS,
        ...this.getRange(currentPage - 1, currentPage + 1),
        this.DOTS,
        btnsAmount
      ] //1 ... 76 77 78 ... 100
    }
  },
  computed: {
    currentRange() {
      return this.getPaginationRange(this.currentPage, this.limit, this.elementsLength)
    }
  },
  watch: {
    limit() {
      this.currentPage = 1
    }
  }
}
</script>
<style scoped lang="less">
.pagination-btns {
  margin-top: 200px;
}
</style>
