<template>
    <main>
        <div class="login-flex">
            <div class="login-screen">
                <div class="title">
                    <h1>
                        <span class="light">Sign up</span>
                        PoLLi-RPG
                    </h1>
                </div>
                <div class="login-form">
                    <input type="text" class="form form-login" placeholder="Type username" v-model="username" />
                    <input type="email" class="form form-login" placeholder="Type email" v-model="email" />
                    <input type="password" class="form form-login" placeholder="Type password" v-model="password" />
                    <div class="login-buttons">
                        <button class="btn btn-block btn-primary btn-login" @click="register">Register</button>
                        <nuxt-link to="/" class="btn btn-link btn-register">Allready have an Account?</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    layout: 'auth',
    middleware: 'notAuthenticated',

    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },

    methods: {
        register(event) {
            event.preventDefault();

            let user = {
                username: this.username,
                email: this.email,
                password: this.password
            };

            this.$axios
                .$post('/auth/local/register', user)
                .then((res) => {
                    if (response == null) return;

                    console.log('Well done!');
                    this.$router.push('/index');
                })
                .catch((err) => {
                    console.log('ERROR');
                    console.log(err);

                    swal('Error!', `${err.response}`, 'error');
                });
        }
    }
};
</script>
