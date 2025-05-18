<script setup lang="ts">
    const route = useRoute();
</script>

<template>
    <div>Page: movies/[id]</div>
    <span>{{ $route.params.id }}</span>
</template>

<style scoped></style>
