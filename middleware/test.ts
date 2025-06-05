export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, " to obj");
    console.log(from, " from obj");
});
