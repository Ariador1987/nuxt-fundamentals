import { ref } from "vue";
import { useFetchData } from "./useFetchData";
import type {
    OmdbSearchResponse,
    OmdbErrorResponse,
    OmdbMovieItem,
} from "@/types";

const useMovieSearch = () => {
    type ApiResponse = OmdbSearchResponse | OmdbErrorResponse;

    const results = ref<OmdbMovieItem[]>([]);
    const errorMessage = ref<string | null>(null);

    // We can now call useFetchData without a fetchFn parameter
    const { isLoading, execute } = useFetchData<ApiResponse, Error>();

    const searchMovies = async (searchTerm: string) => {
        if (!searchTerm) return null;

        const response = await execute(() =>
            $fetch<ApiResponse>("/api/movie/getMovieListBySearchQuery", {
                params: { search: searchTerm },
            }),
        );

        if (!response) return null;

        // Type narrowing based on discriminated union
        if (response.Response === "True") {
            results.value = response.Search;
            errorMessage.value = null;
        } else {
            results.value = [];
            errorMessage.value = response.Error ?? "Unknown error";
        }

        return results.value;
    };

    return {
        results,
        errorMessage,
        isLoading,
        searchMovies,
    };
};

export default useMovieSearch;
