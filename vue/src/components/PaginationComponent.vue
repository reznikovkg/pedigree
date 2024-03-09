<template>
  <div>
    <select v-model="limit" @change="changePage(1)">
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <div class="pagination">
      <template v-for="(rangeNum, index) in currentRange">
        <button
          :class="[
            'pagination__button',
            rangeNum !== '...' && currentPage === rangeNum && 'pagination__button_active'
          ]"
          :key="index"
          @click="rangeNum !== '...' ? changePage(rangeNum) : {}"
        >
          {{ rangeNum }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
      limit: 10
    }
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    elementsLength: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(page) {
      this.$emit('setPage', page)
    },
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
        return [...this.getRange(1, defaultBtnsCount), '...', btnsAmount]
      }

      if (isLeftDots && !isRightDots) {
        return [1, '...', ...this.getRange(btnsAmount - defaultBtnsCount, btnsAmount)]
      }

      return [1, '...', ...this.getRange(currentPage - 1, currentPage + 1), '...', btnsAmount] //1 ... 76 77 78 ... 100
    }
  },
  computed: {
    currentRange() {
      return this.getPaginationRange(this.currentPage, this.limit, this.elementsLength)
    }
  }
}
</script>
<style scoped lang="less">
.pagination {
  margin-top: 200px;
  display: flex;
  flex-direction: row;
  gap: 6px;

  &__button {
    font-size: 16px;
    border: 1px solid black;
    padding: 6px 8px;
    color: black;
    background: lightgray;
    border-radius: 6px;

    &_active {
      color: white;
      background: blue;
    }
  }
}
</style>
