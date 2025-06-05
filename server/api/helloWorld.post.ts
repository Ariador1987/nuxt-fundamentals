export default defineEventHandler(async (event) => {
    setHeader(event, "Content-Type", "application/json");

    const body = await readBody(event);

    return {
        message: "Hello world POST",
        body,
    };
});
