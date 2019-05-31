<template>
    <div>{{message}}</div>
</template>

<script>
import { action } from '@storybook/addon-actions';
export default {
    data() {
        return {
            message: '',
            timer: null
        }
    },
    methods: {
        tick() {
            this.timer = setInterval(() => {
                this.message = Math.random().toString(16).slice(2);
                action('Tick')(this.message);
            }, 1000);
        }
    },
    created() {
       this.tick();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>
