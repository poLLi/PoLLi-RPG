<template>
    <section class="section mt-6">
        <h1 class="title is-1 title-login mb-6">
            <span class="subtitle is-1 subtitle-login">Sign up</span>
            PoLLi-RPG
        </h1>
        <div class="box py-5">
            <form class="login-form">
                <b-field class="mb-4">
                    <b-input placeholder="Username" v-model="username" type="text" icon="account" rounded> </b-input>
                </b-field>
                <b-field class="mb-4">
                    <b-input placeholder="Email" v-model="email" type="email" icon="email" rounded> </b-input>
                </b-field>
                <b-field class="mb-4">
                    <b-input
                        placeholder="Password"
                        v-model="password"
                        type="password"
                        icon="key"
                        rounded
                        password-reveal
                    ></b-input>
                </b-field>
                <div class="buttons">
                    <b-button native-type="submit" type="is-primary" @click="register" rounded expanded>Login</b-button>
                    <nuxt-link to="/login" class="has-text-grey-light is-size-7 mt-3"
                        >Allready have an Account?</nuxt-link
                    >
                </div>
            </form>
        </div>
    </section>
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
                    if (res == null) return;

                    console.log('Well done!');
                    this.$router.push('/index');
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

<style lang="scss" scoped>
.title-login {
    font-weight: 600;
    display: block;
    text-align: center;
    margin-bottom: 2rem;
}

.subtitle-login {
    font-weight: 200;
    display: block;
}
</style>
