<script setup lang="ts">
    const props = defineProps<{
        testStr: string;
    }>();
</script>

<template>
    <div>Component: TestComponent</div>
    <h3>This is the {{ testStr }}</h3>
</template>

<style scoped></style>
