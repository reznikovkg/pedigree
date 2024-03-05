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
                <button :key="index" v-if="rangeNum !== DOTS" @click="currentPage = rangeNum">{{rangeNum}}</button>
                <span :key="index" v-else>{{rangeNum}}</span>
            </template>
        </div>
    </PageLayout>
</template>

<script>
import PageLayout from "@/components/parts/PageLayout.vue";
import getPaginationRange, {DOTS} from "@/components/pages/pagination/getPaginationRange";
export default {
    name: "PaginationPage",
    components: {
        PageLayout
    },
    data() {
        return {
            limit: 10,
            currentPage: 1,
            elementsLength: 1000,
            DOTS: DOTS
        }
    },
    computed: {
        currentRange() {
            return getPaginationRange(this.currentPage, this.limit, this.elementsLength)
        }
    },
    watch: {
        limit() {
            this.currentPage = 1;
        }
    }
}
</script>
<style scoped lang="less">
    .pagination-btns {
        margin-top: 200px;
    }
</style>