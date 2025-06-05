<script setup lang="ts">
    const testStr = "This is a shorthand test";
    const userId = ref(1);
    const fetchKey = ref("user-1");

    const { data, refresh } = await useFetch("/api/helloworld", {
        key: fetchKey, // reactive key
        query: {
            foo: "bar",
            baz: "blue",
        },
    });

    // When you change the key, it will trigger a new fetch
    function changeUser(newId: number) {
        userId.value = newId;
        fetchKey.value = `user-${newId}`;
    }
</script>

<template>
    <div>Page: Home Page</div>
    <TestComponent :testStr />
    <hr />
    <hr />
    <pre>{{ data }}</pre>
</template>

<style scoped></style>
