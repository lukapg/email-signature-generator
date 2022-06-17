<template>
  <table
    cellpadding="0"
    cellspacing="0"
    class="sc-gPEVay eQYmiW"
    style="vertical-align: -webkit-baseline-middle"
    :style="
      'font-size:' +
      generatorStore.font_size +
      ';' +
      'font-family: ' +
      generatorStore.font_family +
      ';'
    "
  >
    <tbody>
      <tr>
        <td>
          <table
            cellpadding="0"
            cellspacing="0"
            class="sc-gPEVay eQYmiW"
            style="vertical-align: -webkit-baseline-middle"
            :style="
              'font-size:' +
              generatorStore.font_size +
              ';' +
              'font-family: ' +
              generatorStore.font_family +
              ';'
            "
          >
            <tbody>
              <tr>
                <td
                  style="vertical-align: top"
                  v-if="
                    generatorStore.linkedin ||
                    generatorStore.twitter ||
                    generatorStore.instagram ||
                    generatorStore.facebook ||
                    generatorStore.profile_picture ||
                    generatorStore.company_logo
                  "
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="vertical-align: -webkit-baseline-middle"
                    :style="
                      'font-size:' +
                      generatorStore.font_size +
                      ';' +
                      'font-family: ' +
                      generatorStore.font_family +
                      ';'
                    "
                  >
                    <tbody>
                      <tr v-if="generatorStore.profile_picture">
                        <td class="sc-TOsTZ kjYrri" style="text-align: center">
                          <img
                            :src="generatorStore.profile_picture"
                            role="presentation"
                            width="130"
                            class="sc-cHGsZl bHiaRe"
                            style="max-width: 128px; display: block"
                          />
                        </td>
                      </tr>
                      <tr v-if="generatorStore.profile_picture">
                        <td height="30"></td>
                      </tr>
                      <tr v-if="generatorStore.company_logo">
                        <td class="sc-TOsTZ kjYrri" style="text-align: center">
                          <img
                            :src="generatorStore.company_logo"
                            role="presentation"
                            width="130"
                            class="sc-cHGsZl bHiaRe"
                            style="max-width: 130px; display: block"
                          />
                        </td>
                      </tr>
                      <tr v-if="generatorStore.company_logo">
                        <td height="30"></td>
                      </tr>
                      <tr>
                        <td style="text-align: center">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="
                              vertical-align: -webkit-baseline-middle;
                              display: inline-block;
                            "
                            :style="
                              'font-size:' +
                              generatorStore.font_size +
                              ';' +
                              'font-family: ' +
                              generatorStore.font_family +
                              ';'
                            "
                          >
                            <tbody>
                              <tr style="text-align: center">
                                <td v-if="generatorStore.facebook">
                                  <a
                                    :href="'//' + generatorStore.facebook"
                                    class="sc-hzDkRC kpsoyz"
                                    style="display: inline-block; padding: 0px"
                                    :style="
                                      'background-color:' +
                                      generatorStore.link_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png"
                                      alt="facebook"
                                      height="24"
                                      class="sc-bRBYWo ccSRck"
                                      style="
                                        background-color: rgb(30, 30, 32);
                                        max-width: 135px;
                                        display: block;
                                      "
                                  /></a>
                                </td>
                                <td width="5"><div></div></td>
                                <td v-if="generatorStore.twitter">
                                  <a
                                    :href="'//' + generatorStore.twitter"
                                    class="sc-hzDkRC kpsoyz"
                                    style="display: inline-block; padding: 0px"
                                    :style="
                                      'background-color:' +
                                      generatorStore.link_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                      alt="twitter"
                                      height="24"
                                      class="sc-bRBYWo ccSRck"
                                      style="
                                        background-color: rgb(30, 30, 32);
                                        max-width: 135px;
                                        display: block;
                                      "
                                  /></a>
                                </td>
                                <td width="5"><div></div></td>
                                <td v-if="generatorStore.linkedin">
                                  <a
                                    :href="'//' + generatorStore.linkedin"
                                    class="sc-hzDkRC kpsoyz"
                                    style="display: inline-block; padding: 0px"
                                    :style="
                                      'background-color:' +
                                      generatorStore.link_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                      alt="linkedin"
                                      height="24"
                                      class="sc-bRBYWo ccSRck"
                                      style="
                                        background-color: rgb(30, 30, 32);
                                        max-width: 135px;
                                        display: block;
                                      "
                                  /></a>
                                </td>
                                <td width="5"><div></div></td>
                                <td v-if="generatorStore.instagram">
                                  <a
                                    :href="'//' + generatorStore.instagram"
                                    class="sc-hzDkRC kpsoyz"
                                    style="display: inline-block; padding: 0px"
                                    :style="
                                      'background-color:' +
                                      generatorStore.link_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                      alt="instagram"
                                      height="24"
                                      class="sc-bRBYWo ccSRck"
                                      style="
                                        background-color: rgb(30, 30, 32);
                                        max-width: 135px;
                                        display: block;
                                      "
                                  /></a>
                                </td>
                                <td width="5"><div></div></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td width="46"><div></div></td>
                <td style="padding: 0px; vertical-align: middle">
                  <h3
                    v-if="generatorStore.first_name || generatorStore.last_name"
                    class="sc-fBuWsC eeihxG"
                    style="margin: 0px; font-size: 16px"
                    :style="'color:' + generatorStore.text_color"
                  >
                    <span v-if="generatorStore.first_name">{{
                      generatorStore.first_name
                    }}</span
                    ><span>&nbsp;</span
                    ><span v-if="generatorStore.last_name">{{
                      generatorStore.last_name
                    }}</span>
                  </h3>
                  <p
                    v-if="generatorStore.job_title"
                    font-size="small"
                    class="sc-fMiknA bxZCMx"
                    style="margin: 0px; font-size: 12px; line-height: 20px"
                    :style="'color:' + generatorStore.text_color"
                  >
                    <span>{{ generatorStore.job_title }}</span>
                  </p>
                  <p
                    v-if="
                      generatorStore.department || generatorStore.company_name
                    "
                    font-size="small"
                    class="sc-dVhcbM fghLuF"
                    style="
                      margin: 0px;
                      font-weight: 500;
                      font-size: 12px;
                      line-height: 20px;
                    "
                    :style="'color:' + generatorStore.text_color"
                  >
                    <span v-if="generatorStore.department">{{
                      generatorStore.department
                    }}</span
                    ><span>&nbsp;|&nbsp;</span
                    ><span v-if="generatorStore.company_name">{{
                      generatorStore.company_name
                    }}</span>
                  </p>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="vertical-align: -webkit-baseline-middle; width: 100%"
                    :style="
                      'font-size:' +
                      generatorStore.font_size +
                      ';' +
                      'font-family: ' +
                      generatorStore.font_family +
                      ';'
                    "
                  >
                    <tbody>
                      <tr>
                        <td height="30"></td>
                      </tr>
                      <tr>
                        <td
                          direction="horizontal"
                          height="1"
                          class="sc-jhAzac hmXDXQ"
                          style="width: 100%; border-left: none; display: block"
                          :style="
                            'border-bottom: 1px solid ' +
                            generatorStore.theme_color
                          "
                        ></td>
                      </tr>
                      <tr>
                        <td height="30"></td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="vertical-align: -webkit-baseline-middle"
                    :style="
                      'font-size:' +
                      generatorStore.font_size +
                      ';' +
                      'font-family: ' +
                      generatorStore.font_family +
                      ';'
                    "
                  >
                    <tbody>
                      <tr height="25" style="vertical-align: middle">
                        <td width="30" style="vertical-align: middle">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="vertical-align: -webkit-baseline-middle"
                            :style="
                              'font-size:' +
                              generatorStore.font_size +
                              ';' +
                              'font-family: ' +
                              generatorStore.font_family +
                              ';'
                            "
                          >
                            <tbody
                              v-if="
                                generatorStore.office_phone ||
                                generatorStore.mobile_phone
                              "
                            >
                              <tr>
                                <td style="vertical-align: bottom">
                                  <span
                                    width="11"
                                    class="sc-jlyJG bbyJzT"
                                    style="display: block"
                                    :style="
                                      'background-color: ' +
                                      generatorStore.theme_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                      width="13"
                                      class="sc-iRbamj blSEcj"
                                      style="display: block"
                                      :style="
                                        'background-color: ' +
                                        generatorStore.theme_color
                                      "
                                  /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          v-if="
                            generatorStore.office_phone ||
                            generatorStore.mobile_phone
                          "
                          style="padding: 0px"
                          :style="'color:' + generatorStore.text_color"
                        >
                          <a
                            v-if="generatorStore.office_phone"
                            :href="'tel:' + generatorStore.office_phone"
                            class="sc-gipzik iyhjGb"
                            style="text-decoration: none; font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span>{{ generatorStore.office_phone }}</span></a
                          >
                          |
                          <a
                            v-if="generatorStore.mobile_phone"
                            :href="'tel:' + generatorStore.mobile_phone"
                            class="sc-gipzik iyhjGb"
                            style="text-decoration: none; font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span>{{ generatorStore.mobile_phone }}</span></a
                          >
                        </td>
                      </tr>
                      <tr height="25" style="vertical-align: middle">
                        <td width="30" style="vertical-align: middle">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="vertical-align: -webkit-baseline-middle"
                            :style="
                              'font-size:' +
                              generatorStore.font_size +
                              ';' +
                              'font-family: ' +
                              generatorStore.font_family +
                              ';'
                            "
                          >
                            <tbody v-if="generatorStore.email">
                              <tr>
                                <td style="vertical-align: bottom">
                                  <span
                                    width="11"
                                    class="sc-jlyJG bbyJzT"
                                    style="display: block"
                                    :style="
                                      'background-color:' +
                                      generatorStore.theme_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                      width="13"
                                      class="sc-iRbamj blSEcj"
                                      style="display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.theme_color
                                      "
                                  /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style="padding: 0px">
                          <a
                            v-if="generatorStore.email"
                            :href="'mailto:' + generatorStore.email"
                            class="sc-gipzik iyhjGb"
                            style="text-decoration: none; font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span>{{ generatorStore.email }}</span></a
                          >
                        </td>
                      </tr>
                      <tr height="25" style="vertical-align: middle">
                        <td width="30" style="vertical-align: middle">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="vertical-align: -webkit-baseline-middle"
                            :style="
                              'font-size:' +
                              generatorStore.font_size +
                              ';' +
                              'font-family: ' +
                              generatorStore.font_family +
                              ';'
                            "
                          >
                            <tbody v-if="generatorStore.website_url">
                              <tr>
                                <td style="vertical-align: bottom">
                                  <span
                                    width="11"
                                    class="sc-jlyJG bbyJzT"
                                    style="display: block"
                                    :style="
                                      'background-color:' +
                                      generatorStore.theme_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                      width="13"
                                      class="sc-iRbamj blSEcj"
                                      style="display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.theme_color
                                      "
                                  /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          style="padding: 0px"
                          v-if="generatorStore.website_url"
                        >
                          <a
                            :href="'//' + generatorStore.website_url"
                            class="sc-gipzik iyhjGb"
                            style="text-decoration: none; font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span>{{ generatorStore.website_url }}</span></a
                          >
                        </td>
                      </tr>
                      <tr height="25" style="vertical-align: middle">
                        <td width="30" style="vertical-align: middle">
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="sc-gPEVay eQYmiW"
                            style="vertical-align: -webkit-baseline-middle"
                            :style="
                              'font-size:' +
                              generatorStore.font_size +
                              ';' +
                              'font-family: ' +
                              generatorStore.font_family +
                              ';'
                            "
                          >
                            <tbody
                              v-if="
                                generatorStore.address_1 ||
                                generatorStore.address_2 ||
                                generatorStore.address_3 ||
                                generatorStore.address_4
                              "
                            >
                              <tr>
                                <td style="vertical-align: bottom">
                                  <span
                                    width="11"
                                    class="sc-jlyJG bbyJzT"
                                    style="display: block"
                                    :style="
                                      'background-color:' +
                                      generatorStore.theme_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                      width="13"
                                      class="sc-iRbamj blSEcj"
                                      style="display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.theme_color
                                      "
                                  /></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td
                          style="padding: 0px"
                          v-if="
                            generatorStore.address_1 ||
                            generatorStore.address_2 ||
                            generatorStore.address_3 ||
                            generatorStore.address_4
                          "
                        >
                          <span
                            class="sc-csuQGl CQhxV"
                            style="font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span v-if="generatorStore.address_1">
                              {{ generatorStore.address_1 }}</span
                            ><span v-if="generatorStore.address_2">{{
                              ", " + generatorStore.address_2
                            }}</span
                            ><span v-if="generatorStore.address_3">{{
                              ", " + generatorStore.address_3
                            }}</span
                            ><span v-if="generatorStore.address_4">{{
                              ", " + generatorStore.address_4
                            }}</span></span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="vertical-align: -webkit-baseline-middle"
                    :style="
                      'font-size:' +
                      generatorStore.font_size +
                      ';' +
                      'font-family: ' +
                      generatorStore.font_family +
                      ';'
                    "
                  >
                    <tbody>
                      <tr>
                        <td height="30"></td>
                      </tr>
                    </tbody>
                  </table>
                  <span
                    style="display: block; text-align: left"
                    v-if="
                      !generatorStore.custom_cta_image &&
                      (generatorStore.custom_cta_url ||
                        generatorStore.custom_cta_copy)
                    "
                    ><a
                      target="_blank"
                      rel="noopener noreferrer"
                      :href="'//' + generatorStore.custom_cta_url"
                      class="sc-fAjcbJ byigni"
                      style="
                        border-width: 6px 12px;
                        border-style: solid;
                        display: inline-block;
                        font-weight: 700;
                        text-decoration: none;
                        text-align: center;
                        line-height: 40px;
                        font-size: 12px;
                        border-radius: 3px;
                      "
                      :style="
                        'border-color:' +
                        generatorStore.cta_color +
                        '; background-color:' +
                        generatorStore.cta_color +
                        '; color: ' +
                        generatorStore.cta_text_color
                      "
                      >{{ generatorStore.custom_cta_copy }}</a
                    ></span
                  >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    class="sc-gPEVay eQYmiW"
                    style="vertical-align: -webkit-baseline-middle"
                    :style="
                      'font-size:' +
                      generatorStore.font_size +
                      ';' +
                      'font-family: ' +
                      generatorStore.font_family +
                      ';'
                    "
                  >
                    <tbody>
                      <tr>
                        <td height="30"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr v-if="generatorStore.custom_cta_image">
        <td>
          <table
            cellpadding="0"
            cellspacing="0"
            class="sc-gPEVay eQYmiW"
            style="
              vertical-align: -webkit-baseline-middle;
              font-size: medium;
              font-family: 'Trebuchet MS';
            "
          >
            <tbody>
              <tr>
                <td height="30"></td>
              </tr>
              <tr>
                <span style="display: block; text-align: left"
                  ><a
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="generatorStore.custom_cta_url"
                    class="sc-fAjcbJ byigni"
                    style="
                      border-width: initial;
                      border-style: none;
                      border-color: initial;
                      display: inline-block;
                      background-color: transparent;
                      color: rgb(255, 255, 255);
                      font-weight: 700;
                      text-decoration: none;
                      text-align: center;
                      line-height: 1;
                      font-size: 12px;
                      border-radius: 3px;
                    "
                    ><img
                      :src="generatorStore.custom_cta_image"
                      role="presentation"
                      class="sc-caSCKo jjNSwx"
                      style="text-decoration: none; max-width: 728px" /></a
                ></span>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapStores } from "pinia";
import { useGeneratorStore } from "../../store";
export default {
  computed: {
    ...mapStores(useGeneratorStore),
  },
};
</script>