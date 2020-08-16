import Vue from "vue";

const loadingConstructor = Vue.extend(require("./index.vue").default);

const loading = {
  bind(el, binding) {
    const data = { isLoading: !!binding.value };
    const loadingInstance = new loadingConstructor({ data: data });
    el.style.position = "relative";
    el.loading = loadingInstance.$mount();
    el.appendChild(el.loading.$el);
  },

  update(el, binding) {
    el.loading.isLoading = binding.value;
  }
};

export default loading;
