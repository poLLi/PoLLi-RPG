<template>
    <section class="section section-setup">
        <form>
            <b-steps
                v-model="activeStep"
                :animated="isAnimated"
                :rounded="isRounded"
                :icon-prev="prevIcon"
                :icon-next="nextIcon"
                :label-position="labelPosition"
                :mobile-mode="mobileMode"
            >
                <b-step-item step="1" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered mt-4 mb-5">Setup your Character</h1>
                    <div class="box">
                        <p class="mb-5">In order for this to "Game" to work you have to be truthfully to yourself.</p>
                        <p>You can input whatever numbers you want but keep in mind that you only lie to yourself!</p>
                    </div>
                </b-step-item>

                <b-step-item step="2" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered mt-4 mb-5">Age</h1>
                    <div class="box">
                        <b-field class="my-4">
                            <b-input
                                placeholder="Birthday"
                                v-model="birthday"
                                type="date"
                                icon="calendar-today"
                                rounded
                            />
                        </b-field>
                    </div>
                </b-step-item>

                <b-step-item step="3" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered mt-4 mb-5">Stats</h1>
                    <div class="box">
                        <b-field class="mb-4">
                            <b-input
                                placeholder="Weight"
                                v-model="weight"
                                type="decimal"
                                icon="weight-kilogram"
                                rounded
                            />
                        </b-field>
                        <b-field class="mb-4">
                            <b-input
                                placeholder="Height"
                                v-model="height"
                                type="decimal"
                                icon="arrow-expand-up"
                                rounded
                            />
                        </b-field>
                        <b-field class="mb-4">
                            <b-input
                                placeholder="Spirit"
                                v-model="spirit"
                                type="number"
                                icon="head-snowflake-outline"
                                rounded
                            />
                        </b-field>
                        <b-field class="mb-4">
                            <b-input
                                placeholder="Endurance"
                                v-model="endurance"
                                type="number"
                                icon="run-fast"
                                rounded
                            />
                        </b-field>
                        <b-field class="mb-4">
                            <b-input
                                placeholder="Inteligence"
                                v-model="inteligence"
                                type="number"
                                icon="brain"
                                rounded
                            />
                        </b-field>
                    </div>
                </b-step-item>

                <b-step-item step="4" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered mt-4 mb-5">Finish</h1>
                    <div class="box">
                        <p class="has-text-centered mt-4">Thanks for you honesty!</p>
                        <b-button type="is-primary mt-5 mb-5" @click="submit" rounded expanded
                            >Create your Character now!</b-button
                        >
                    </div>
                </b-step-item>

                <template v-if="customNavigation" #navigation="{ previous, next }">
                    <div class="buttons is-justify-content-center mt-5">
                        <b-button
                            outlined
                            type="is-dark"
                            icon-left="arrow-left"
                            :disabled="previous.disabled"
                            @click.prevent="previous.action"
                        >
                            Previous
                        </b-button>
                        <b-button
                            outlined
                            native-type="submit"
                            type="is-primary"
                            icon-right="arrow-right"
                            :disabled="next.disabled"
                            @click.prevent="next.action"
                        >
                            Next
                        </b-button>
                    </div>
                </template>
            </b-steps>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'setup',
    data() {
        return {
            birthday: '',
            weight: '',
            height: '',
            spirit: '',
            endurance: '',
            inteligence: '',
            user: null,

            activeStep: 0,

            isAnimated: true,
            isRounded: true,
            isStepsClickable: true,
            customNavigation: true,

            prevIcon: 'arrow-left',
            nextIcon: 'arrow-right',
            labelPosition: 'bottom',
            mobileMode: 'minimalist'
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

                swal('Error!', `${err}`, 'error');
            });
    },

    methods: {
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

                    swal('Error!', `${err}`, 'error');
                });
        }
    }
};
</script>

<style lang="scss">
.section-setup {
    padding-top: 2rem;
}
@media screen and (max-width: 768px) {
    .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::before,
    .b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item::after {
        width: 40% !important;
    }
}
</style>
