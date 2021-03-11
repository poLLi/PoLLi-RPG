export default {
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    head: {
        title: 'polli-rpg',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: 'Tim Pollerhof' },
            { hid: 'description', name: 'description', content: 'Roleplaying Game based on my Real-Life' }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: '/icon.png', sizes: '512x512' }]
    },

    loading: false,
    components: true,
    css: ['~/assets/scss/main.scss'],
    plugins: [{ src: '~/plugins/auth.js' }, { src: '~/plugins/vue-swal.js' }],
    buildModules: [],
    modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/pwa'],

    buefy: {
        css: false,
        materialDesignIcons: true
    },

    axios: {
        baseURL: 'http://polli.online:1337'
        // baseURL: 'http://127.0.0.1:1337'
    },

    pwa: {
        meta: {
            mobileAppIOS: true,
            appleStatusBarStyle: 'black-translucent',
            theme_color: '#121212',
            nativeUI: true
        },
        manifest: {
            name: 'PoLLi-RPG',
            lang: 'en'
        }
    },

    build: {
        extractCSS: true
    }
};
