<template>
    <main>
        <button class="btn btn-primary" @click="logout">logout</button>
    </main>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
    methods: {
        logout() {
            Cookie.remove('auth');
            this.$store.commit('auth/setAuth', null);
            this.$router.push('/');
        }
    }
};
</script>

<style></style>
