<script setup>
import { RouterLink } from 'vue-router';

//props
const props = defineProps({
    dragons: Array
})
</script>
<template>
    <h2>Her er vores forside</h2>
    <section class="dragons">
        <article v-for="dragon in dragons" :key="dragon.id">
            <h3><router-link :to="`/dragons/${dragon.id}`">{{ dragon.name }}</router-link></h3>
            <img :src="dragon.img_url" :alt="dragon.name">
        </article>
    </section>
</template>

<style scoped>
h2,section{
    grid-column: 1 / -1;
}

section{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1rem;
}

img{
    max-width: 100%;
    height: 500px;
    object-fit: cover;
}

article{
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.288);
    border-radius: 6px;
    text-align: center;
}
</style>