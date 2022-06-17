<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div width="4" class="tab-active" :class="tab"></div>
      <div class="tab esg-template" @click="handleTabChange('template')">
        <img
          src="//cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/template-tab.svg"
          alt="LAYOUT"
          class="tab-icon"
        />
      </div>
      <div class="tab esg-details" @click="handleTabChange('details')">
        <img
          src="//cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/form-tab.svg"
          alt="FORM"
          class="tab-icon"
        />
      </div>
      <div class="tab esg-stylize" @click="handleTabChange('stylize')">
        <img
          src="//cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/style-tab.svg"
          alt="STYLE"
          class="tab-icon"
        />
      </div>
      <div class="tab esg-images" @click="handleTabChange('images')">
        <img
          src="//cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/image-tab.svg"
          alt="IMAGES"
          class="tab-icon"
        />
      </div>
    </div>
    <div class="sidebar-body">
      <div class="page template" v-if="tab == 'template'">
        <div id="mainTitle" class="title-wrapper">
          <div order="1" class="title">Select your template</div>
        </div>
        <div id="template" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Template</span
              ><select class="input-field" v-model="generatorStore.template">
                <option value="template_1">Template 1</option>
                <option value="template_2">Template 2</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div class="page details" v-else-if="tab == 'details'">
        <div id="mainTitle" class="title-wrapper">
          <div order="1" class="title">Enter Your Signature Details</div>
        </div>
        <div id="firstName" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">First Name</span
              ><input
                name=""
                type="text"
                placeholder="John"
                class="input-field"
                v-model="generatorStore.first_name"
              />
            </span>
          </div>
        </div>
        <div id="lastName" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Last Name</span
              ><input
                name=""
                type="text"
                placeholder="Smith"
                class="input-field"
                v-model="generatorStore.last_name"
              />
            </span>
          </div>
        </div>
        <div id="jobTitle" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Job Title</span
              ><input
                name=""
                type="text"
                placeholder="Marketer"
                class="input-field"
                v-model="generatorStore.job_title"
              />
            </span>
          </div>
        </div>
        <div id="department" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Department</span
              ><input
                name=""
                type="text"
                placeholder="Marketing"
                class="input-field"
                v-model="generatorStore.department"
              />
            </span>
          </div>
        </div>
        <div id="companyName" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Company name</span
              ><input
                name=""
                type="text"
                placeholder="Hubspot"
                class="input-field"
                v-model="generatorStore.company_name"
              />
            </span>
          </div>
        </div>
        <div id="officePhoneNumber" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Office Phone Number</span
              ><input
                name=""
                type="text"
                placeholder="111 222 3333"
                class="input-field"
                v-model="generatorStore.office_phone"
              />
            </span>
          </div>
        </div>
        <div id="mobilePhoneNumber" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Mobile Phone Number</span
              ><input
                name=""
                type="text"
                placeholder="111 222 3333"
                class="input-field"
                v-model="generatorStore.mobile_phone"
              />
            </span>
          </div>
        </div>
        <div id="websiteURL" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Website URL</span
              ><input
                name=""
                type="text"
                placeholder="www.hubspot.com"
                class="input-field"
                v-model="generatorStore.website_url"
              />
            </span>
          </div>
        </div>
        <div id="email" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Email address</span
              ><input
                name=""
                type="text"
                placeholder="john@smith.com"
                class="input-field"
                v-model="generatorStore.email"
              />
            </span>
          </div>
        </div>
        <div id="address" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Address</span
              ><input
                name=""
                type="text"
                placeholder="Address Line 1"
                class="input-field mb-1"
                v-model="generatorStore.address_1"
              />
              <input
                name=""
                type="text"
                placeholder="Address Line 2"
                class="input-field mb-1"
                v-model="generatorStore.address_2"
              />
              <input
                name=""
                type="text"
                placeholder="Address Line 3"
                class="input-field mb-1"
                v-model="generatorStore.address_3"
              />
              <input
                name=""
                type="text"
                placeholder="Address Line 4"
                class="input-field"
                v-model="generatorStore.address_4"
              />
            </span>
          </div>
        </div>
        <div id="socialTitle" class="title-wrapper">
          <div order="1" class="title">Enter Your Social Links</div>
        </div>
        <div id="linkedin" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">LinkedIn</span
              ><input
                name=""
                type="text"
                placeholder="https://www.linkedin.com"
                class="input-field"
                v-model="generatorStore.linkedin"
              />
            </span>
          </div>
        </div>
        <div id="facebook" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Facebook</span
              ><input
                name=""
                type="text"
                placeholder="https://www.facebook.com"
                class="input-field"
                v-model="generatorStore.facebook"
              />
            </span>
          </div>
        </div>
        <div id="twitter" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Twitter</span
              ><input
                name=""
                type="text"
                placeholder="https://www.twitter.com"
                class="input-field"
                v-model="generatorStore.twitter"
              />
            </span>
          </div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Instagram</span
              ><input
                name=""
                type="text"
                placeholder="https://www.instagram.com"
                class="input-field"
                v-model="generatorStore.instagram"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="page stylize" v-else-if="tab == 'stylize'">
        <div id="stylizeTitle" class="title-wrapper">
          <div order="1" class="title">Stylize your signature</div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Select theme color</span
              ><input
                name=""
                type="color"
                v-model="generatorStore.theme_color"
              />
            </span>
          </div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Select text color</span
              ><input
                name=""
                type="color"
                v-model="generatorStore.text_color"
              />
            </span>
          </div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Select link color</span
              ><input
                name=""
                type="color"
                v-model="generatorStore.link_color"
              />
            </span>
          </div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Font</span
              ><select class="input-field" v-model="generatorStore.font_family">
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Verdana">Verdana</option>
              </select>
            </span>
          </div>
        </div>
        <div id="instagram" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Font size</span
              ><select class="input-field" v-model="generatorStore.font_size">
                <option value="small">Small</option>
                <option value="large">Large</option>
                <option value="medium">Medium</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      <div class="page image" v-else>
        <div id="imageTitle" class="title-wrapper">
          <div order="1" class="title">Upload Your Custom Signature Images</div>
        </div>
        <div id="profilePicture" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Profile picture</span
              ><input
                name=""
                type="text"
                placeholder="https://example.com/images/myphoto.jpg"
                class="input-field"
                v-model="generatorStore.profile_picture"
              />
            </span>
          </div>
        </div>
        <div id="companyLogo" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Company Logo</span
              ><input
                name=""
                type="text"
                placeholder="https://example.com/images/myphoto.jpg"
                class="input-field"
                v-model="generatorStore.company_logo"
              />
            </span>
          </div>
        </div>
        <div id="imageTitle" class="title-wrapper">
          <div order="1" class="title">Create a custom CTA</div>
        </div>
        <div id="customCTACopy" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Custom CTA Copy</span
              ><input
                name=""
                type="text"
                placeholder="Find Out More"
                class="input-field"
                v-model="generatorStore.custom_cta_copy"
              />
            </span>
          </div>
        </div>
        <div id="customCTAUrl" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Custom CTA URL</span
              ><input
                name=""
                type="text"
                placeholder="www.hubspot.com"
                class="input-field"
                v-model="generatorStore.custom_cta_url"
              />
            </span>
          </div>
        </div>
        <div id="CTAColor" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Select CTA Color</span
              ><input name="" type="color" v-model="generatorStore.cta_color" />
            </span>
          </div>
        </div>
        <div id="CTATextColor" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Select CTA Text color</span
              ><input
                name=""
                type="color"
                v-model="generatorStore.cta_text_color"
              />
            </span>
          </div>
        </div>
        <div id="imagedivider" class="title-wrapper">
          <div class="divider">
            <div class="divider-line"></div>
            <div class="divider-text">OR</div>
          </div>
        </div>
        <div id="customCTAImage" class="input-container">
          <div class="input-block">
            <span class="input-wrapper"
              ><span class="input-label">Custom CTA image</span
              ><input
                name=""
                type="text"
                placeholder="https://example.com/images/myphoto.jpg"
                class="input-field"
                v-model="generatorStore.custom_cta_image"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useGeneratorStore } from "../store";

export default {
  data() {
    return { tab: "template" };
  },
  methods: {
    handleTabChange(tab) {
      this.tab = tab;
    },
  },
  computed: {
    ...mapStores(useGeneratorStore),
  },
};
</script>