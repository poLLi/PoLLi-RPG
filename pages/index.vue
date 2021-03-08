<template>
    <main>
        <div class="login-flex">
            <div class="login-screen">
                <div class="title">
                    <h1>
                        <span class="light">Sign in</span>
                        PoLLi-RPG
                    </h1>
                </div>

                <form class="login-form">
                    <input type="email" class="form form-login" placeholder="Type email" v-model="email" />
                    <input type="password" class="form form-login" placeholder="Type password" v-model="password" />
                    <div class="login-buttons">
                        <button type="submit" class="btn btn-block btn-primary btn-login" @click="login">Login</button>
                        <nuxt-link to="/register" class="btn btn-link btn-register">Dont have an Account?</nuxt-link>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;

export default {
    layout: 'auth',
    middleware: 'notAuthenticated',

    data() {
        return {
            email: '',
            password: ''
        };
    },

    methods: {
        login(event) {
            event.preventDefault();

            let user = {
                identifier: this.email,
                password: this.password
            };

            this.$axios
                .$post('/auth/local', user)
                .then((res) => {
                    console.log(res);

                    this.$store.commit('auth/setAuth', res.jwt);
                    Cookie.set('auth', res.jwt, { expires: 15 });

                    this.$router.push('/game');
                })
                .catch((err) => {
                    console.log('ERROR');
                    console.log(err);

                    swal('Error!', `${err}`, 'error');
                });
        }
    }
};
</script>
