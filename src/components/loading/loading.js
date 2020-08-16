import Vue from "vue";

const loadingConstructor = Vue.extend(require("./index.vue").default);

const loading = {
  async bind(el, binding) {
    const data = { isLoading: !!binding.value };
    const loadingInstance = new loadingConstructor({ data: data });

    // 等待渲染dom完成 避免錯誤
    await Vue.nextTick();
    el.style.position = "relative";
    el.loading = loadingInstance.$mount();
    el.appendChild(el.loading.$el);
  },

  update(el, binding) {
    el.loading.isLoading = binding.value;
  },

  unbind(el) {
    el.removeChild(el.loading.$el);
    el.loading.$destroy();
  }
};

export default loading;
