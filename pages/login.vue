<script setup lang="ts">
    const handleLogin = () => {
        return;
    };

    definePageMeta({
        layout: "plain",
    });
</script>

<template>
    <form @submit.prevent="handleLogin">
        <h1>Login</h1>
        <label
            >Username<input
                type="text"
                name="username"
        /></label>
        <label>
            Password
            <input type="password" />
        </label>
    </form>
</template>

<style scoped></style>
