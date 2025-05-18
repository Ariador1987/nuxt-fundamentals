<script lang="ts">
    import "./style.css";
</script>

<template>
    <nav>
        <div class="container">
            <ul>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/movies">Movies</NuxtLink>
                <NuxtLink to="https://vueschool.io">Vue school</NuxtLink>
            </ul>
        </div>
    </nav>
    <div class="container">
        <NuxtPage />
    </div>
</template>

<style scoped>
    nav {
        background: hsl(0, 0%, 72%);
        color: hsl(0, 0%, 24%);
        padding: 0.8rem 0.6rem;
    }

    ul {
        display: flex;
        gap: 1.2rem;
        text-transform: uppercase;

        a,
        a:visited {
            text-decoration: none;
            text-wrap: nowrap;
        }
    }
</style>
