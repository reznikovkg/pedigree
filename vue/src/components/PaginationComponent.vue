<template>
  <div class="pagination">
    <div class="pagination__buttons">
      <template v-for="(rangeNum, index) in currentRange">
        <button
          class="pagination__button"
          :class="getActiveBtnStyle(rangeNum)"
          :key="index"
          @click="() => (rangeNum !== '...' ? changePage(rangeNum) : {})"
        >
          {{ rangeNum }}
        </button>
      </template>
    </div>
    <select
      :value="paginationInfo.limit"
      @change="(e) => changeLimit(e.target.value)"
    >
      <option value="10">10</option>
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    paginationInfo: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: 'paginationInfo',
    event: 'setPaginationInfo'
  },
  methods: {
    getActiveBtnStyle(rangeNum) {
      return (
        rangeNum !== '...' && this.paginationInfo.page === rangeNum && 'pagination__button--active'
      )
    },
    changeLimit(limit) {
      this.$emit('setPaginationInfo', {
        ...this.paginationInfo,
        page: 1,
        limit
      })
    },
    changePage(page) {
      this.$emit('setPaginationInfo', {
        ...this.paginationInfo,
        page
      })
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
      return this.getPaginationRange(
        this.paginationInfo.page,
        this.paginationInfo.limit,
        this.paginationInfo.count
      )
    }
  }
}
</script>
<style scoped lang="less">
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 6px;
  }

  &__button {
    font-size: 16px;
    border: 1px solid black;
    padding: 6px 8px;
    color: black;
    background: lightgray;
    border-radius: 6px;

    &--active {
      color: white;
      background: blue;
    }
  }
}
</style>
