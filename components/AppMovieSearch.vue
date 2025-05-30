<script setup lang="ts">
    import useMovieSearch from "@/composables/useMovieSearch";

    const query = ref<string>("");

    const { results, errorMessage, isLoading, searchMovies } = useMovieSearch();

    const handleSearch = async () => {
        if (!query.value) return;
        await searchMovies(query.value);
    };
</script>

<template>
    <div>
        <h1>Movie Search</h1>
        <form @submit.prevent="handleSearch">
            <input
                type="text"
                v-model="query"
                placeholder="Search for movies..."
            />
            <button
                type="submit"
                :disabled="isLoading"
            >
                {{ isLoading ? "Searching..." : "Search" }}
            </button>
        </form>

        <div v-if="isLoading">Loading movies...</div>

        <div
            v-else-if="errorMessage"
            class="error"
        >
            {{ errorMessage }}
        </div>

        <!-- Results -->
        <div
            v-else-if="results.length > 0"
            class="results"
        >
            <h2>Found {{ results.length }} movies</h2>
            <ul>
                <li
                    v-for="movie in results"
                    :key="movie.imdbID"
                >
                    <NuxtLink :to="`/movies/${movie.imdbID}`">
                        {{ movie.Title }} ({{ movie.Year }})
                    </NuxtLink>
                </li>
            </ul>
        </div>

        <!-- No results state -->
        <div
            v-else-if="query"
            class="no-results"
        >
            No movies found for "{{ query }}"
        </div>
    </div>
</template>

<style scoped></style>
