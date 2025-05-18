<script setup lang="ts">
    const query = ref<string>();

    const config = useRuntimeConfig();
    const apiKey = config.public.apiKey;
    const handleSearch = (e: Event) => {
        $fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query.value}`);
    };
</script>

<template>
    <div>Page: movies/index</div>
    <form @submit.prevent="handleSearch">
        <input
            type="text"
            name="movie"
            id="movie"
            v-model="query"
        /><button>Search</button>
    </form>
</template>

<style scoped></style>
