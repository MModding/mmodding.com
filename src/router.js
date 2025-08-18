import { createWebHistory, createRouter } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import NotFound from "@/components/NotFound.vue";

import YouTubeRedirector from "@/components/redirectors/YouTubeRedirector.vue";
import DiscordRedirector from "@/components/redirectors/DiscordRedirector.vue";
import XRedirector from "@/components/redirectors/XRedirector.vue";
import GitHubRedirector from "@/components/redirectors/GitHubRedirector.vue";

const routes = [
    {
        path: "/:pathMatch(.*)*",
        name: "404",
        component: NotFound
    },
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/youtube",
        name: "youtube",
        component: YouTubeRedirector
    },
    {
        path: "/x",
        name: "x",
        component: XRedirector
    },
    {
        path: "/github",
        name: "github",
        component: GitHubRedirector
    },
    {
        path: "/discord",
        name: "discord",
        component: DiscordRedirector
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router