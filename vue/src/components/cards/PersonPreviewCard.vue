<template>
<div class="person-preview-card">
    <div class="person-info">
        <h2 class="second-name">{{ person.secondName }}</h2>
        <h2 class="first-name">{{ person.firstName }}</h2>
        <h2 class="patronymic">{{ person.patronymic }}</h2>
        <span class="birth-date" style="display: block;">{{ person.birthDate }}<span v-if="person.die_date"> [- {{ person.die_date}}]</span></span>
        <span class="person-id" style="display: block;">id: {{ person.id }}</span>
    </div>
    <div class="status-indicator"></div>
</div>
</template>

<script>
export default {
    name: 'PersonPreviewCard',
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.person-preview-card {
    background-color: white;
    border-radius: 24px;
    background-color: #f5f5f5;
    box-shadow: 1.5px 7px 5px 1.5px rgba(0, 0, 0, 0.1), -1.5px 7px 5px -1.5px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    position: relative;
    margin: 1em;
    width: 425px;
    height: 215px;
}

.person-info {
    .second-name,
    .first-name,
    .patronymic,
    .birth-date,
    .person-id{
        margin-left: 5%;
        font-family: 'Inter', sans-serif;
    }
}

.second-name {
    margin-top: 5%;
    margin-bottom: 5%;
    color: black;
}

.first-name {
    margin-bottom: 5%;
    color: black;
}

.patronymic {
    margin-bottom: 5%;
    color: black;
}

.birth-date {
    margin-bottom: 17%;
    color: rgb(117, 117, 117);
    font-weight: bold;
    white-space: nowrap;
}

.person-id {
    margin-bottom: 10%;
    font-weight: bold;
    color: rgb(117, 117, 117);
}

.status-indicator {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-top: 3%;
    margin-right: 3%;
    background-color: rgb(173, 255, 180);
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
