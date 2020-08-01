import Vue from "vue";

// vue建構器 參數為包含組件的物件
const messageConstructor = Vue.extend(require("./index.vue").default);

const message = options => {
  options = { content: options };

  // 建立message實例
  const messageInstance = new messageConstructor({ data: options });

  // 掛載但未插入DOM 直接插入#app會直接取代原本DOM
  messageInstance.vm = messageInstance.$mount();
  messageInstance.vm.isDisplay = true;
  document.getElementById("app").appendChild(messageInstance.vm.$el);
  return messageInstance;
};

export default message;
