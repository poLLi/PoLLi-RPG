<template>
    <section class="section">
        <h1 class="title">Character</h1>
        <h2 class="subtitle">Overview</h2>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>{{ user.username.toUpperCase() }}</strong>
                            <small class="has-text-grey px-2">//</small>
                            <small class="has-text-grey"> @{{ user.username.toLowerCase() }}</small>
                        </p>
                        <p class="p-0 m-0">
                            <small class="pr-2">Level: {{ character.level }} </small><br />
                        </p>
                        <b-progress type="is-primary" :value="character.experience" show-value></b-progress>
                    </div>
                </div>
            </article>
        </div>

        <h2 class="subtitle">Main Stats</h2>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <b-icon icon="heart" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Health</strong>
                        </p>
                        <span class="has-text-primary has-text-weight-semibold p-0 m-0">
                            <b-progress
                                type="is-danger"
                                size="is-large"
                                :value="character.health"
                                show-value
                            ></b-progress>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="run-fast" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Stanima</strong>
                        </p>
                        <span class="has-text-primary has-text-weight-semibold p-0 m-0">
                            <b-progress
                                type="is-success"
                                size="is-large"
                                :value="character.stamina"
                                show-value
                            ></b-progress>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="chemical-weapon" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Power</strong>
                        </p>
                        <span class="has-text-warning has-text-weight-semibold p-0 m-0 is-size-5 text-stats">
                            <!-- <b-progress type="is-primary" size="is-large" :value="40" show-value></b-progress> -->
                            {{ character.power }}
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="pistol" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Attack</strong>
                        </p>
                        <span class="has-text-primary has-text-weight-semibold p-0 m-0 is-size-5 text-stats">
                            {{ character.attack }}
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="shield-off" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Defense</strong>
                        </p>
                        <span class="has-text-info has-text-weight-semibold p-0 m-0 is-size-5 text-stats">
                            {{ character.defense }}
                        </span>
                    </div>
                </div>
            </article>
        </div>

        <h2 class="subtitle">Body</h2>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <b-icon icon="arrow-expand-up" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Height</strong>
                        </p>
                        <span class="has-text-primary has-text-weight-semibold p-0 m-0 text-stats is-size-5">
                            <!-- <b-progress type="is-primary" size="is-large" :value="40" show-value></b-progress> -->
                            {{ character.height }} <small class="has-text-light has-text-weight-light">cm</small>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="weight-kilogram" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Weight</strong>
                        </p>
                        <span class="has-text-primary has-text-weight-semibold p-0 m-0 text-stats is-size-5">
                            {{ character.weight }} <small class="has-text-light has-text-weight-light">kg</small>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="account" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Body Mass Index</strong>
                        </p>
                        <span
                            class="has-text-warning has-text-weight-semibold p-0 m-0 text-stats is-size-5"
                            v-if="character.bmiStatus == 'underweight'"
                        >
                            {{ character.bmi }}
                            <b-tooltip label="Underweight" position="is-left" class="is-pulled-right" type="is-dark">
                                <b-icon icon="information-outline" size="is-small" />
                            </b-tooltip>
                        </span>
                        <span
                            class="has-text-success has-text-weight-semibold p-0 m-0 text-stats is-size-5"
                            v-if="character.bmiStatus == 'normal'"
                        >
                            {{ character.bmi }}
                        </span>
                        <span
                            class="has-text-warning has-text-weight-semibold p-0 m-0 text-stats is-size-5"
                            v-if="character.bmiStatus == 'overweight'"
                        >
                            {{ character.bmi }}
                            <b-tooltip label="Overweight" position="is-left" class="is-pulled-right" type="is-dark">
                                <b-icon icon="information-outline" size="is-small" />
                            </b-tooltip>
                        </span>
                        <span
                            class="has-text-danger has-text-weight-semibold p-0 m-0 text-stats is-size-5"
                            v-if="character.bmiStatus == 'obesity'"
                        >
                            {{ character.bmi }}
                            <b-tooltip label="Obesity" position="is-left" class="is-pulled-right" type="is-dark">
                                <b-icon icon="information-outline" size="is-small" />
                            </b-tooltip>
                        </span>
                    </div>
                </div>
            </article>
        </div>

        <h2 class="subtitle">Advanced Stats</h2>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <b-icon icon="head-snowflake-outline" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Spirit</strong>
                        </p>
                        <span class="has-text-info has-text-weight-semibold p-0 m-0">
                            <b-progress
                                type="is-info"
                                size="is-large"
                                :value="character.spirit"
                                show-value
                            ></b-progress>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="run-fast" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Endurance</strong>
                        </p>
                        <span class="has-text-warning has-text-weight-semibold p-0 m-0">
                            <b-progress
                                type="is-warning"
                                size="is-large"
                                :value="character.endurance"
                                show-value
                            ></b-progress>
                        </span>
                    </div>
                </div>
            </article>
            <article class="media">
                <div class="media-left">
                    <b-icon icon="brain" size="is-large" />
                </div>
                <div class="media-content">
                    <div class="content">
                        <p class="is-size-6 p-0 m-0">
                            <strong>Inteligence</strong>
                        </p>
                        <span class="has-text-success has-text-weight-semibold p-0 m-0 is-size-5 text-stats">
                            <b-progress
                                type="is-success"
                                size="is-large"
                                :value="character.inteligence"
                                show-value
                            ></b-progress>
                        </span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined;
export default {
    data() {
        return {
            loading: true,
            user: {
                id: '',
                username: ''
            },
            character: {
                id: '',
                gender: '',
                birthday: '',
                weight: '',
                height: '',
                spirit: '',
                endurance: '',
                inteligence: '',
                health: '',
                stamina: '',
                power: '',
                attack: '',
                defense: '',
                level: '',
                experience: '',

                bmi: '',
                bmiStatus: ''
            }
        };
    },

    created() {
        this.$axios
            .$get('/users/me')
            .then((res) => {
                if (!res.character) {
                    console.log('No Character found - going to create one');
                    this.$router.push('/setup');
                } else {
                    console.log(res);

                    this.user.id = res.id;
                    this.user.username = res.username;

                    this.$axios
                        .$get('/characters/me')
                        .then((res) => {
                            console.log(res);

                            this.character.id = res.id;
                            this.character.birthday = res.birthday;
                            this.character.gender = res.gender;
                            this.character.level = res.level;
                            this.character.experience = res.experience;
                            this.character.health = res.health;
                            this.character.stamina = res.stamina;
                            this.character.power = res.power;
                            this.character.attack = res.attack;
                            this.character.defense = res.defense;
                            this.character.weight = res.weight;
                            this.character.height = res.height;
                            this.character.spirit = res.spirit;
                            this.character.endurance = res.endurance;
                            this.character.inteligence = res.inteligence;

                            this.calcBmi(res.gender, res.height, res.weight, res.birthday);
                            this.loading = false;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },

    methods: {
        calcBmi(gender, heigh, weight, birthday) {
            const age = Math.abs(new Date(Date.now() - new Date(birthday).getTime()).getUTCFullYear() - 1970);
            const bmi = (weight / (heigh ** 2 / 10000)).toFixed(2);
            let bmiStatus = '';

            switch (gender) {
                case 'diverse':
                case 'man':
                    if (age <= 16) {
                        if (bmi <= 18) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 24) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 28) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 24) {
                        if (bmi <= 19) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 25) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 29) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 34) {
                        if (bmi <= 20) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 26) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 30) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 44) {
                        if (bmi <= 21) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 26) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 31) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 54) {
                        if (bmi <= 22) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 28) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 32) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 64) {
                        if (bmi <= 23) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 29) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 33) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 90) {
                        if (bmi <= 24) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 30) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 34) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    }
                    break;

                case 'woman':
                    if (age <= 18) {
                        if (bmi <= 18) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 24) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 28) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 24) {
                        if (bmi <= 18) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 24) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 28) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 34) {
                        if (bmi <= 19) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 25) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 29) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 44) {
                        if (bmi <= 20) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 26) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 30) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 54) {
                        if (bmi <= 21) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 27) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 31) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 64) {
                        if (bmi <= 22) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 18) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 32) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    } else if (age <= 90) {
                        if (bmi <= 23) {
                            bmiStatus = 'underweight';
                        } else if (bmi <= 29) {
                            bmiStatus = 'normal';
                        } else if (bmi <= 33) {
                            bmiStatus = 'overweight';
                        } else {
                            bmiStatus = 'obesity';
                        }
                    }
                    break;

                default:
                    break;
            }

            this.character.bmiStatus = bmiStatus;
            this.character.bmi = bmi;
        }
    }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .media-content {
        overflow-x: visible;
    }
}

.text-stats {
    line-height: 1 !important;
}
</style>
