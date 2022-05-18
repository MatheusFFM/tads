const Vuetify = require('vuetify');
const Vuex = require('vuex');

const { createLocalVue, config } = require('@vue/test-utils');
const Vue = require('vue');

jest.setTimeout(30000);

config.logModifiedComponents = false;
const localVueSingle = createLocalVue();
localVueSingle.config.silent = true;
Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(Vuex);
