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
        <td style="text-align: center">
          <img
            :src="generatorStore.profile_picture"
            role="presentation"
            width="130"
            class="sc-cHGsZl bHiaRe"
            style="max-width: 130px; display: inline-block"
          />
        </td>
      </tr>
      <tr>
        <td height="10"></td>
      </tr>
      <tr style="text-align: center">
        <td>
          <h3
            v-if="generatorStore.first_name || generatorStore.last_name"
            class="sc-fBuWsC eeihxG"
            style="margin: 0px; font-size: 18px"
            :style="'color:' + generatorStore.text_color"
          >
            <span>{{ generatorStore.first_name }}</span
            ><span>&nbsp;</span><span>{{ generatorStore.last_name }}</span>
          </h3>
          <p
            v-if="generatorStore.job_title"
            font-size="medium"
            class="sc-fMiknA bxZCMx"
            style="margin: 0px; font-size: 14px; line-height: 22px"
            :style="'color:' + generatorStore.text_color"
          >
            <span>{{ generatorStore.job_title }}</span>
          </p>
          <p
            font-size="medium"
            class="sc-dVhcbM fghLuF"
            style="
              margin: 0px;
              font-weight: 500;
              font-size: 14px;
              line-height: 22px;
            "
            v-if="generatorStore.department || generatorStore.company_name"
            :style="'color:' + generatorStore.text_color"
          >
            <span>{{ generatorStore.department }}</span
            ><span>&nbsp;|&nbsp;</span
            ><span>{{ generatorStore.company_name }}</span>
          </p>
        </td>
      </tr>
      <tr>
        <td>
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
                    'border-bottom: 1px solid' + generatorStore.theme_color
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
              <tr style="vertical-align: middle">
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
                          style="padding: 0px"
                          :style="'color:' + generatorStore.text_color"
                          v-if="
                            generatorStore.office_phone ||
                            generatorStore.mobile_phone
                          "
                        >
                          <a
                            :href="'tel:' + generatorStore.office_phone"
                            class="sc-gipzik iyhjGb"
                            style="text-decoration: none; font-size: 12px"
                            :style="'color:' + generatorStore.text_color"
                            ><span>{{ generatorStore.office_phone }}</span></a
                          >
                          |
                          <a
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
                                      'background-color: ' +
                                      generatorStore.theme_color
                                    "
                                    ><img
                                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
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
                        <td style="padding: 0px">
                          <a
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
                        <td style="padding: 0px">
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
                </td>
                <td width="15"><div></div></td>
                <td style="text-align: right">
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
                        <td
                          v-if="
                            generatorStore.linkedin ||
                            generatorStore.twitter ||
                            generatorStore.instagram ||
                            generatorStore.facebook ||
                            generatorStore.company_logo
                          "
                        >
                          <img
                            :src="generatorStore.company_logo"
                            role="presentation"
                            width="130"
                            class="sc-cHGsZl bHiaRe"
                            style="max-width: 130px; display: inline-block"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td height="10"></td>
                      </tr>
                      <tr>
                        <td>
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
                            <tbody
                              v-if="
                                generatorStore.linkedin ||
                                generatorStore.twitter ||
                                generatorStore.instagram ||
                                generatorStore.facebook
                              "
                            >
                              <tr style="text-align: right">
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
                                      :style="
                                        'background-color:' +
                                        generatorStore.link_color
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
                                      style="max-width: 135px; display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.link_color
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
                                      style="max-width: 135px; display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.link_color
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
                                      style="max-width: 135px; display: block"
                                      :style="
                                        'background-color:' +
                                        generatorStore.link_color
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
              </tr>
            </tbody>
          </table>
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
                    'border-bottom: 1px solid ' + generatorStore.theme_color
                  "
                ></td>
              </tr>
              <tr>
                <td height="30"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td style="text-align: center">
          <span
            style="display: block; text-align: center"
            v-if="
              !generatorStore.custom_cta_image &&
              (generatorStore.custom_cta_url || generatorStore.custom_cta_copy)
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
        </td>
      </tr>
      <tr v-if="generatorStore.custom_cta_image">
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