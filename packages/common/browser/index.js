import ContactUsForm from './contact-us-form.vue';
import AutoScroll from './auto-scroll.vue';

const AlgoliaSiteSearch = () => import(/* webpackChunkName: "common-algolia-site-search" */ './algolia/site-search.vue');

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('CommonAutoScroll', AutoScroll);
  Browser.registerComponent('CommonAlgoliaSiteSearch', AlgoliaSiteSearch);
};
