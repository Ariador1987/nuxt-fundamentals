import { OmdbSearchResponse, OmdbErrorResponse } from "@/types";

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const config = useRuntimeConfig();

    // Use a union type to capture both possible response shapes
    const response = await $fetch<OmdbSearchResponse | OmdbErrorResponse>(
        `http://www.omdbapi.com/`,
        {
            params: {
                apikey: config.apiKey,
                s: query.search as string,
            },
        },
    );

    return response;
});
