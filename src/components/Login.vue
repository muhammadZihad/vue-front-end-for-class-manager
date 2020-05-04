<template>
    <div class="login_container">
        <div class="login_backgound"></div>=
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card>
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login form</v-toolbar-title>
                            <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    label="University ID"
                                    name="login"
                                    prepend-icon="person"
                                    type="text"
                                />

                                <v-text-field
                                    id="password"
                                    label="University Password"
                                    name="password"
                                    prepend-icon="lock"
                                    type="password"
                                />
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block color="primary">
                                Login
                                <v-icon right>chevron_right</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.login_container {
    height: 100vh;
    width: 100vw;
}

.login_backgound {
    height: 40%;
    width: 100%;
    position: fixed;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(77, 182, 172, 1) 0%,
        rgba(64, 196, 255, 1) 100%
    );
}

.login_backgound::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    z-index: 0;
    bottom: 20;
    transform-origin: left bottom;
    transform: skewY(10deg);
}
</style>