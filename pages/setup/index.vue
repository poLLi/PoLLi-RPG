<template>
    <main>
        <div class="setup-flex">
            <div class="setup-steps">
                <div class="setup-step active">Info</div>
                <div class="setup-step">Birthday</div>
                <div class="setup-step">Stats</div>
                <div class="setup-step">Finish</div>
            </div>
            <div class="setup-form">
                <form id="setup">
                    <fieldset>
                        <h2 class="setup-title">Setup your Character</h2>
                        <h3 class="setup-subtitle">Important Information</h3>
                        <p class="setup-info">
                            In order for this to "Game" to work you have to be truthfully to yourself.
                        </p>
                        <p class="setup-info">
                            You can input whatever numbers you want but keep in mind that you only lie to yourself!
                        </p>
                        <input
                            type="button"
                            name="next"
                            class="btn btn-block btn-primary setup-button"
                            value="Next"
                            @click="next_FS"
                        />
                    </fieldset>
                    <fieldset>
                        <h2 class="setup-title">Birthday</h2>
                        <h3 class="setup-subtitle">When where you born?</h3>
                        <input type="date" v-model="birthday" placeholder="Birthday Date" class="form form-setup" />
                        <input
                            type="button"
                            name="next"
                            class="btn btn-block btn-primary setup-button"
                            value="Next"
                            @click="next_FS"
                        />
                        <input
                            type="button"
                            name="previous"
                            class="btn btn-dark setup-button-back"
                            value="Previous"
                            @click="previous_FS"
                        />
                    </fieldset>
                    <fieldset>
                        <h2 class="setup-title">Stats</h2>
                        <h3 class="setup-subtitle">Your "Character" Statistics</h3>
                        <input type="number" v-model="weight" placeholder="Weight" class="form form-setup" />
                        <input type="number" v-model="height" placeholder="Height" class="form form-setup" />
                        <input type="number" v-model="spirit" placeholder="Spirit" class="form form-setup" />
                        <input type="number" v-model="endurance" placeholder="Endurance" class="form form-setup" />
                        <input type="number" v-model="inteligence" placeholder="Inteligence" class="form form-setup" />
                        <input
                            type="button"
                            name="next"
                            class="btn btn-block btn-primary setup-button"
                            value="Next"
                            @click="next_FS"
                        />
                        <input
                            type="button"
                            name="previous"
                            class="btn btn-dark setup-button-back"
                            value="Previous"
                            @click="previous_FS"
                        />
                    </fieldset>
                    <fieldset>
                        <h2 class="setup-title">Finish</h2>
                        <h3 class="setup-subtitle">Thats all for now!</h3>
                        <p class="setup-info">We are setting up your Character in just a second.</p>
                        <input
                            type="submit"
                            class="btn btn-block btn-primary setup-button"
                            value="Done"
                            @click="submit"
                        />
                        <input
                            type="button"
                            name="previous"
                            class="btn btn-dark setup-button-back"
                            value="Previous"
                            @click="previous_FS"
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            birthday: '',
            weight: '',
            height: '',
            spirit: '',
            endurance: '',
            inteligence: '',
            user: null
        };
    },

    created() {
        this.$axios
            .$get('/users/me')
            .then((res) => {
                if (res.character) this.$router.push('/game');
                this.user = res.id;
            })
            .catch((err) => {
                console.log(err);
            });
    },

    methods: {
        getNodeindex(elm) {
            return [...elm.parentNode.children].findIndex((c) => c == elm);
        },

        submit(event) {
            event.preventDefault();

            let character = {
                birthday: this.birthday,
                weight: this.weight,
                spirit: this.spirit,
                endurance: this.endurance,
                inteligence: this.inteligence,
                height: this.height,

                health: 100,
                stamina: 100,
                power: 10,
                attack: 10,
                defense: 10,

                user: this.user
            };

            this.$axios
                .$post('/characters', character)
                .then((res) => {
                    console.log(res);
                    this.$router.push('/game');
                })
                .catch((err) => {
                    console.log(err);
                });
        },

        next_FS(event) {
            let current_fs = event.target.offsetParent;
            let next_fs = event.target.offsetParent.nextElementSibling;

            let next_step = document.querySelectorAll('.setup-step')[this.getNodeindex(next_fs)];

            next_step.classList.add('active');

            current_fs.style.display = 'none';
            next_fs.style.display = 'block';
        },

        previous_FS(event) {
            let current_fs = event.target.offsetParent;
            let previous_fs = event.target.offsetParent.previousElementSibling;

            let prev_step = document.querySelectorAll('.setup-step')[this.getNodeindex(current_fs)];

            prev_step.classList.remove('active');

            current_fs.style.display = 'none';
            previous_fs.style.display = 'block';
        }
    }
};
</script>
