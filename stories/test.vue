<template>
    <div>
        <p>{{message}}</p>
        <el-button @click="handleClick('primary')">Go to `primary` case</el-button>
        <el-button @click="handleClick('success')">Go to `success` case</el-button>
    </div>
</template>

<script>
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
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
        },
        handleClick(name) {
            linkTo('button', name)();
        }
    },
    created() {
        // this.tick();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>
