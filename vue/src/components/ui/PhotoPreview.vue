<template>
    <img :class=size :src=photo  alt="">
</template>

<script>
    export default{
        name: 'PhotoPreview',
        props: {
            photo: {
                default: null,
                type: String
            },
            size: {
                default: 'middle',
                type: String
            }
    }
    }
</script>

<style scoped lang="less">
    .large{
        width: 600px;
        height: 450px;
        object-fit: contain;
    }

    .middle{
        width: 300px;
        height: 300px;
        object-fit: contain;
    }

    .small{
        width: 150px;
        height: 150px;
        object-fit: contain;
    }
</style>