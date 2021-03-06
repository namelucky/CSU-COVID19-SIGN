import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import store from './store';
import router from './router';
import VueAxios from 'vue-axios';
import {
    Form,
    Input,
    Table,
    Button,
    Loading,
    FormItem,
    Message,
    TimePicker,
    TableColumn,
} from 'element-ui';

Vue.use(Form);
Vue.use(Input);
Vue.use(Table);
Vue.use(Button);
Vue.use(Loading);
Vue.use(FormItem);
Vue.use(TimePicker);
Vue.use(TableColumn);

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.prototype.$message = Message;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
