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
        },
        soon() {
            swal('Coming Soon!', 'Stop clicking around everywhere you fuck! God damn im working on it...', 'error');
        }
    }
};
</script>

<style></style>
