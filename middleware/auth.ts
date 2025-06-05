export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = false;
    if (!userIsLoggedIn) {
        // return abortNavigation("You're not allowed to visit 'admin");
        return navigateTo({
            path: "/login",
        });
    }
});
