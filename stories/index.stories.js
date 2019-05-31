import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { storiesOf } from '@storybook/vue';
Vue.use(ElementUI, { size: 'small' });

import Test from './test.vue';

storiesOf('Button', module)
.add('primary', () => '<el-button type="primary">主要按钮</el-button>')
.add('success', () => '<el-button type="success">成功按钮</el-button>')
.add('vue template', () => {
  return {
    components: { Test },
    template: `
      <Test />
    `
  };
});
