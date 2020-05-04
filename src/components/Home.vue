<template>
    <v-container>
        <v-form>
            <v-container class="px-8">
                <v-row>
                    <v-col cols="12" md="3">
                        <v-card flat class="pt-2 px-4">
                            <v-select v-model="data.cam" :items="campuses" label="Capmus"></v-select>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card flat class="pt-2 px-4">
                            <v-menu
                                v-model="fromDateMenu"
                                :close-on-content-click="false"
                                transition="scale-transition"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        label="Date"
                                        prepend-icon="event"
                                        :value="data.date"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="data.date"
                                    no-title
                                    @input="fromDateMenu = false"
                                ></v-date-picker>
                            </v-menu>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-card flat class="pt-2 px-4">
                            <v-select v-model="data.time" :items="times" label="Class Time"></v-select>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex align-center">
                        <v-btn x-large block depressed text color="teal darken-2">
                            <v-icon left>search</v-icon>Search
                        </v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <h1 class="teal--text">List of empty rooms</h1>
                    <v-container>
                        <v-row>
                            <v-col cols="4" md="2" lg="1" v-for="(room,i) in rooms" :key="i">
                                <v-card class="text-center pa-2">
                                    <h3>{{room}}</h3>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            fromDateMenu: false,

            data: {
                cam: "",
                time: "",
                date: null
            },
            campuses: ["Permanent", "Dhanmondi", "Uttara"],
            times: ["8:30-10:00", "10:00-11:30", "11:30-01:00", "01:00-02:30"],
            rooms: [
                "DT 301",
                "DT 702",
                "CSE L301",
                "DT4 301",
                "DT 301",
                "DT 301",
                "DT 702",
                "CSE L301",
                "DT4 301",
                "DT 301",
                "DT 301",
                "DT 702",
                "CSE L301",
                "DT4 301",
                "DT 301"
            ]
        };
    }
};
</script>
