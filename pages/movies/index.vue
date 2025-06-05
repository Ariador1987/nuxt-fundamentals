<script setup lang="ts">
    definePageMeta({
        middleware: ["logger"],
    });
</script>

<template>
    <AppMovieSearch />
</template>

<style scoped>
    .error {
        color: red;
        margin-top: 1rem;
    }

    .results {
        margin-top: 1rem;
    }

    .no-results {
        margin-top: 1rem;
        font-style: italic;
    }
</style>
