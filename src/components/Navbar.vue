<template>
    <nav>
        <v-app-bar app flat class>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="teal--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-bold">Class</span>Manager
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text class="teal--text">
                <v-icon left>account_circle</v-icon>Login
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer
            absolute
            temporary
            dark
            v-model="drawer"
            color="teal lighten-2"
            class="white--text"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">Muhamamd AR Zihad</v-list-item-title>
                    <v-list-item-subtitle>
                        <p class="pa-0 ma-0 mt-2">Id : 171-15-9097</p>
                        <p>section : E</p>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list dense nav>
                <v-list-item v-for="menu in menus" :key="menu.title" link>
                    <v-list-item-icon>
                        <v-icon>{{menu.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                { title: "Profile", icon: "person" },
                { title: "Routine", icon: "dashboard" },
                { title: "Search", icon: "clear_all" }
            ],
            drawer: false
        };
    }
};
</script>
