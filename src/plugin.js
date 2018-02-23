import Vue2LeafletSearch from './components/Vue2LeafletSearch.vue';

module.exports = {
    install: function (Vue, options) {
        Vue.component('v-search', Vue2LeafletSearch);
    }
};