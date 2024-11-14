<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

// props
const props = defineProps({
    dragons: Array
})

// fin dtil correct dragon in props
const correctDragon = props.dragons.find(dragon => dragon.id == route.params.id)
</script>

<template>
    <h3>{{ correctDragon.name }}</h3>
<img :src="correctDragon.img_url" alt="">
</template>

<style scoped>

</style>