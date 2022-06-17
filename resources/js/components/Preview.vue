<template>
  <div class="content">
    <div class="content-body">
      <div class="content-body-logo">
        <div class="content-body-logo-container">
          <a
            href="//www.hubspot.com/resources/tool"
            target="_blank"
            rel="noopener noreferrer"
            class="logo"
            >E-mail signature generator</a
          >
          <div class="action">
            <a href="#" class="action-btn" @click="copy">Copy signature</a>
            <a href="#" class="action-btn source" @click="copySourceCode"
              >Copy signature source code</a
            >
          </div>
        </div>
      </div>
      <div class="content-body-preview">
        <div class="content-body-preview-container">
          <div class="preview-header">
            <h3 style="margin: 0; color: #fff">Signature preview</h3>
          </div>
          <div class="preview-title">
            <span>To: <strong>Your Recipient</strong></span>
            <span
              >Subject: <strong>Check out my new Email Signature</strong></span
            >
          </div>
          <div>
            <div class="preview-main">
              <div class="signature-wrapper" id="signature">
                <template-1 v-if="generatorStore.template == 'template_1'" />
                <template-2 v-else />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useGeneratorStore } from "../store";
import Template1 from "./template/Template1";
import Template2 from "./template/Template2.vue";
export default {
  components: {
    Template1,
    Template2,
  },
  computed: {
    ...mapStores(useGeneratorStore),
  },
  methods: {
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return false;
      } else {
        return true;
      }
    },
    validateUrl(url) {
      if (/^(http|https):\/\/[w\d]+\.[\w](\/[\w\d]+)?$/.test(url)) {
        return false;
      } else {
        return true;
      }
    },
    copySourceCode() {
      if (
        this.generatorStore.first_name == "" ||
        this.generatorStore.first_name == null
      ) {
        this.$notify({ text: "Please enter your first name!", type: "error" });
        return;
      }
      if (this.validateEmail(this.generatorStore.email)) {
        this.$notify({
          text: "Please enter a valid e-mail address!",
          type: "error",
        });
        return;
      }
      let html = document.getElementById("signature").innerHTML;
      navigator.clipboard.writeText(html);
      this.$notify({ text: "Copied!", type: "success" });
    },
    copy() {
      if (
        this.generatorStore.first_name == "" ||
        this.generatorStore.first_name == null
      ) {
        this.$notify({ text: "Please enter your first name!", type: "error" });
        return;
      }
      if (this.validateEmail(this.generatorStore.email)) {
        this.$notify({
          text: "Please enter a valid e-mail address!",
          type: "error",
        });
        return;
      }
      const div = document.getElementById("signature");
      let result = "";
      for (const child of div.childNodes) {
        if (child.innerText != "" || child.innerText != null) {
          result += child.innerText;
        }
      }
      result = result.replace(/\t/g, "");
      navigator.clipboard.writeText(result);
      this.$notify({ text: "Copied!", type: "success" });
    },
  },
};
</script>