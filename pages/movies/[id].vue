<script setup lang="ts">
    import type { OmdbErrorResponse, OmdbMovieDetail } from "@/types";

    const route = useRoute();

    const { data } = await useFetch<OmdbMovieDetail | OmdbErrorResponse>(
        `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
        {
            key: `/movies/${route.params.id}`,
            pick: ["Actors", "Title", "Error", "Plot"],
        },
    );

    // Type guard function
    const isOmdbError = (
        response: OmdbMovieDetail | OmdbErrorResponse | null,
    ): response is OmdbErrorResponse => {
        return response !== null && response.Response === "False";
    };

    // Type guard for successful response
    const isOmdbSuccess = (
        response: OmdbMovieDetail | OmdbErrorResponse | null,
    ): response is OmdbMovieDetail => {
        return response !== null && response.Response === "True";
    };

    // Check for error and handle it
    if (isOmdbError(data.value)) {
        // TypeScript now knows data.value is OmdbErrorResponse
        console.error("Movie not found:", data.value.Error);
        showError({
            statusCode: 404,
            statusText: "Not Found",
        });

        throw createError({
            statusCode: 404,
            statusMessage: `Movie not found: ${data.value.Error}`,
        });
    }

    // If we get here, we know it's a successful response
    const movieData = data.value as OmdbMovieDetail;

    useHead({
        title: data.value?.Title,
        meta: [
            { name: "description", content: data?.value?.Plot },
            { name: "og:image", content: data?.value?.Poster },
        ],
    });
</script>

<template>
    <div>
        <!-- Use type guards in template -->
        <div v-if="isOmdbError(data)">
            <h2>Error</h2>
            <p>{{ data.Error }}</p>
        </div>

        <div v-else>
            <!-- TypeScript knows data is OmdbMovieDetail here -->
            <h1>{{ data?.Title }}</h1>
            <p><strong>Plot:</strong> {{ data?.Plot }}</p>
            <p><strong>Response Status:</strong> {{ data?.Response }}</p>
            <p><strong>Year:</strong> {{ data?.Year }}</p>
            <p><strong>Director:</strong> {{ data?.Director }}</p>

            <details>
                <summary>Raw Data</summary>
                <pre>{{ data }}</pre>
            </details>
        </div>
    </div>
</template>
