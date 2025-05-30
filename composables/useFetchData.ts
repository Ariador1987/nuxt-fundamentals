// composables/useFetchData.ts
import { ref, type Ref } from "vue";

interface UseFetchDataOptions<TData, TError = Error> {
    immediate?: boolean;
    initialData?: TData | null;
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
    fetchFn?: (...args: any[]) => Promise<TData>; // Make fetchFn optional in options
}

export interface UseFetchDataReturn<TData, TError = Error> {
    data: Ref<TData | null>;
    error: Ref<TError | null>;
    isLoading: Ref<boolean>;
    execute: <T = TData>(
        fetchFnOverride?: (() => Promise<T>) | null,
    ) => Promise<T | null>;
    reset: () => void;
}

// Make fetchFn parameter optional by moving it to options
export function useFetchData<TData, TError = Error>(
    options: UseFetchDataOptions<TData, TError> = {},
) {
    const {
        immediate = false,
        initialData = null,
        onSuccess,
        onError,
        fetchFn,
    } = options;

    const data = ref(initialData) as Ref<TData | null>;
    const error = ref(null) as Ref<TError | null>;
    const isLoading = ref(false);

    const execute = async <T = TData>(
        fetchFnOverride?: (() => Promise<T>) | null,
    ): Promise<T | null> => {
        const fetchToUse =
            fetchFnOverride ||
            (fetchFn as unknown as (() => Promise<T>) | undefined);

        if (!fetchToUse) {
            console.error("No fetch function provided");
            return null;
        }

        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetchToUse();
            data.value = response as unknown as TData;

            if (onSuccess) {
                onSuccess(response as unknown as TData);
            }

            return response;
        } catch (err) {
            error.value = err as TError;
            data.value = null;
            onError?.(error.value);
            return null;
        } finally {
            isLoading.value = false;
        }
    };

    const reset = () => {
        data.value = initialData;
        error.value = null;
        isLoading.value = false;
    };

    if (immediate && fetchFn) {
        execute();
    }

    return {
        data,
        error,
        isLoading,
        execute,
        reset,
    };
}
