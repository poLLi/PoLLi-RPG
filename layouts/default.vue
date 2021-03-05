<template>
    <div id="app">
        <app-Header />
        <Nuxt />
    </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
import appHeader from '@/components/default/header';

export default {
    components: {
        appHeader
    },

    middleware: ['authenticated'],

    created: function () {
        console.log('created!');
        const vm = this;
        this.$axios.interceptors.response.use(
            (res) => {
                return res;
            },
            (error) => {
                if (!error.response) {
                    swal('Network Error!', 'Backend not reachable, contact site admin!', 'error');
                    return Promise.reject(error);
                } else {
                    if (error.response.status === 403) {
                        console.log('NOT AUTORIZED ACTION LOGGED');
                        vm.$router.push('/');
                    }
                    if (
                        error.response.status === 401 &&
                        error.response.config &&
                        !error.response.config.__isRetryRequest
                    ) {
                        vm.$store.commit('auth/setAuth', null);
                        Cookie.remove('auth');
                        vm.$router.push('/');
                    } else {
                        return Promise.reject(error);
                    }
                }
            }
        );
    }
};
</script>
