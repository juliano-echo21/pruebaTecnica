<template>
    <v-app dark>
        <v-card max-width="2000">
            <v-layout>
                <v-app-bar>
                <template>
                    <v-app-bar-nav-icon>

                    </v-app-bar-nav-icon>
                </template>
                <template>
                    <v-app-bar-title>UN</v-app-bar-title>
                </template>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
                </v-app-bar>
            </v-layout>
        </v-card>
            <v-main>
                <v-container>
                    <Nuxt />
                </v-container>
            </v-main>
            
    </v-app>
</template>

<script setup>

</script>

<style  scoped>

</style>