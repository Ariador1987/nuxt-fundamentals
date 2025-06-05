export default defineEventHandler((event) => {
    setHeader(event, "Content-Type", "application/json");

    return {
        message: `${JSON.stringify(getQuery(event))} hello world get`,
    };
});
