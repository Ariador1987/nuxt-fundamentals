<script setup lang="ts">
    useHead({
        titleTemplate(title) {
            return title ? `My movie site - ${title}` : "My movie site";
        },
    });
</script>

<template>
    <div class="container">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
