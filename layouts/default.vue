<script setup lang="ts"></script>

<template>
    <div>
        <nav>
            default layout
            <div class="container">
                <ul>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/movies">Movies</NuxtLink>
                    <NuxtLink to="/login">Login</NuxtLink>
                </ul>
            </div>
        </nav>
        <slot />
    </div>
</template>
