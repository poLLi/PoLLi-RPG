<template>
    <div id="app">
        <app-Header />
        <Nuxt />
    </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
import appHeader from '@/components/auth/header';

export default {
    components: {
        appHeader
    },

    created: function () {
        var vm = this;
        this.$axios.interceptors.response.use(
            (response) => {
                console.log(response);
                return response;
            },
            function (error) {
                if (!error.response) {
                    swal('Network Error!', 'Backend not reachable, contact site admin!', 'error');
                }
                return Promise.reject(error);
            }
        );
    }
};
</script>
