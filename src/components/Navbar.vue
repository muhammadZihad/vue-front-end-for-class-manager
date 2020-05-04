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
            v-model="drawer"
            color="teal lighten-2"
            class="white--text"
        >
            <p>hello</p>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false
        };
    }
};
</script>
