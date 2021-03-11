<template>
    <div v-if="loggedIn">
        <b-navbar :fixed-bottom="fixedBottom" type="is-black" :mobile-burger="burger" :close-on-click="closeClick">
            <template #brand>
                <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
                    <img src="~/assets/images/Logo.svg" alt="Life-RPG Logo" />
                </b-navbar-item>
            </template>
            <template #burger>
                <a class="navbar-burger" aria-label="menu" aria-expanded="false" @click="open = true">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </template>
        </b-navbar>
        <b-sidebar
            type="is-dark"
            :fullheight="fullheight"
            :fullwidth="fullwidth"
            :overlay="overlay"
            :right="right"
            :can-cancel="cancel"
            v-model="open"
        >
            <div class="p-1">
                <img src="~/assets/images/Logo.svg" alt="Life-RPG Logo" />
                <b-menu>
                    <b-menu-list label="Menu">
                        <b-menu-item
                            icon="information-outline"
                            label="Character"
                            @click="pushRoute('/register')"
                        ></b-menu-item>
                        <b-menu-item icon="settings">
                            <template #label="props">
                                Administrator
                                <b-icon
                                    class="is-pulled-right"
                                    :icon="props.expanded ? 'menu-down' : 'menu-up'"
                                ></b-icon>
                            </template>
                            <b-menu-item icon="account" label="Users"></b-menu-item>
                            <b-menu-item icon="cash-multiple" label="Payments" disabled></b-menu-item>
                        </b-menu-item>
                        <b-menu-item icon="account" label="My Account">
                            <b-menu-item label="Account data"></b-menu-item>
                            <b-menu-item label="Addresses"></b-menu-item>
                        </b-menu-item>
                    </b-menu-list>
                    <b-menu-list>
                        <b-menu-item
                            label="Expo"
                            icon="link"
                            tag="router-link"
                            target="_blank"
                            to="/expo"
                        ></b-menu-item>
                    </b-menu-list>
                    <b-menu-list label="Actions">
                        <b-menu-item @click="logout" label="Logout"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
    props: ['loggedIn'],
    data() {
        return {
            burger: true,
            fixedTop: true,
            fixedBottom: true,
            closeClick: true,
            open: false,
            overlay: true,
            fullheight: true,
            fullwidth: false,
            right: false,
            cancel: ['escape', 'outside']
        };
    },

    mounted() {
        let vm = this;
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);
        var xDown = null;
        var yDown = null;
        function handleTouchStart(evt) {
            xDown = evt.touches[0].clientX;
            yDown = evt.touches[0].clientY;
        }
        function handleTouchMove(evt) {
            if (!xDown || !yDown) {
                return;
            }
            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;
            var xDiff = xDown - xUp;
            var yDiff = yDown - yUp;
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    /* left swipe */
                    console.log('left swipe');
                    vm.open = false;
                } else {
                    /* right swipe */
                    console.log('right swipe');
                    vm.open = true;
                }
            } else {
                if (yDiff > 0) {
                    /* up swipe */
                    console.log('up swipe');
                } else {
                    /* down swipe */
                    console.log('down swipe');
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    },

    methods: {
        pushRoute(route) {
            this.open = false;
            this.$router.push(route);
        },

        logout() {
            Cookie.remove('auth');
            this.$store.commit('auth/setAuth', null);
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.p-1 {
    padding: 1em !important;
}
</style>
