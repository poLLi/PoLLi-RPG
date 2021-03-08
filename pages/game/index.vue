<template>
    <main>
        <button class="btn btn-primary" @click="logout">logout</button>
    </main>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
    middleware: 'authenticated',

    data() {
        return {
            loading: true
        };
    },

    created() {
        this.$axios
            .$get('/users/me')
            .then((res) => {
                if (!res.character) {
                    console.log('No Character found for that user - going to create one');
                    this.$router.push('/setup');
                } else {
                    this.loading = false;
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },

    methods: {
        logout() {
            Cookie.remove('auth');
            this.$store.commit('auth/setAuth', null);
            this.$router.push('/');
        }
    }
};
</script>
