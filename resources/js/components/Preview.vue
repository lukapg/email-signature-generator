<template>
  <div class="content">
    <div class="content-body">
      <div class="content-body-logo">
        <div class="content-body-logo-container">
          <a
            href="//www.hubspot.com/resources/tool"
            target="_blank"
            rel="noopener noreferrer"
            >E-mail signature generator</a
          >
        </div>
      </div>
      <div class="content-body-preview">
        <div class="content-body-preview-container">
          <div class="preview-header">
            <div class="header-dot"></div>
            <div class="header-dot"></div>
            <div class="header-dot"></div>
          </div>
          <div class="preview-title">
            <span>To: <strong>Your Recipient</strong></span>
            <span
              >Subject: <strong>Check out my new Email Signature</strong></span
            >
          </div>
          <div>
            <div class="preview-main">
              <div class="signature-wrapper">
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
                                  generatorStore.facebook
                                "
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="sc-gPEVay eQYmiW"
                                  style="
                                    vertical-align: -webkit-baseline-middle;
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
                                    <tr>
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
                                              <td
                                                v-if="generatorStore.facebook"
                                              >
                                                <a
                                                  :href="
                                                    '//' +
                                                    generatorStore.facebook
                                                  "
                                                  color="#1e1e20"
                                                  class="sc-hzDkRC kpsoyz"
                                                  style="
                                                    display: inline-block;
                                                    padding: 0px;
                                                  "
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
                                                      background-color: rgb(
                                                        30,
                                                        30,
                                                        32
                                                      );
                                                      max-width: 135px;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                              <td width="5"><div></div></td>
                                              <td v-if="generatorStore.twitter">
                                                <a
                                                  :href="
                                                    '//' +
                                                    generatorStore.twitter
                                                  "
                                                  color="#1e1e20"
                                                  class="sc-hzDkRC kpsoyz"
                                                  style="
                                                    display: inline-block;
                                                    padding: 0px;
                                                  "
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.link_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                    alt="twitter"
                                                    color="#1e1e20"
                                                    height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="
                                                      background-color: rgb(
                                                        30,
                                                        30,
                                                        32
                                                      );
                                                      max-width: 135px;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                              <td width="5"><div></div></td>
                                              <td
                                                v-if="generatorStore.linkedin"
                                              >
                                                <a
                                                  :href="
                                                    '//' +
                                                    generatorStore.linkedin
                                                  "
                                                  color="#1e1e20"
                                                  class="sc-hzDkRC kpsoyz"
                                                  style="
                                                    display: inline-block;
                                                    padding: 0px;
                                                  "
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.link_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                    alt="linkedin"
                                                    color="#1e1e20"
                                                    height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="
                                                      background-color: rgb(
                                                        30,
                                                        30,
                                                        32
                                                      );
                                                      max-width: 135px;
                                                      display: block;
                                                    "
                                                /></a>
                                              </td>
                                              <td width="5"><div></div></td>
                                              <td
                                                v-if="generatorStore.instagram"
                                              >
                                                <a
                                                  :href="
                                                    '//' +
                                                    generatorStore.instagram
                                                  "
                                                  color="#1e1e20"
                                                  class="sc-hzDkRC kpsoyz"
                                                  style="
                                                    display: inline-block;
                                                    padding: 0px;
                                                  "
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.link_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png"
                                                    alt="instagram"
                                                    color="#1e1e20"
                                                    height="24"
                                                    class="sc-bRBYWo ccSRck"
                                                    style="
                                                      background-color: rgb(
                                                        30,
                                                        30,
                                                        32
                                                      );
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
                                  v-if="
                                    generatorStore.first_name ||
                                    generatorStore.last_name
                                  "
                                  color="#000000"
                                  class="sc-fBuWsC eeihxG"
                                  style="
                                    margin: 0px;
                                    font-size: 16px;
                                    color: rgb(0, 0, 0);
                                  "
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
                                  color="#000000"
                                  font-size="small"
                                  class="sc-fMiknA bxZCMx"
                                  style="
                                    margin: 0px;
                                    color: rgb(0, 0, 0);
                                    font-size: 12px;
                                    line-height: 20px;
                                  "
                                >
                                  <span>{{ generatorStore.job_title }}</span>
                                </p>
                                <p
                                  v-if="
                                    generatorStore.department ||
                                    generatorStore.company_name
                                  "
                                  color="#000000"
                                  font-size="small"
                                  class="sc-dVhcbM fghLuF"
                                  style="
                                    margin: 0px;
                                    font-weight: 500;
                                    color: rgb(0, 0, 0);
                                    font-size: 12px;
                                    line-height: 20px;
                                  "
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
                                  style="
                                    vertical-align: -webkit-baseline-middle;
                                    width: 100%;
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
                                    <tr>
                                      <td height="30"></td>
                                    </tr>
                                    <tr>
                                      <td
                                        color="#dd1515"
                                        direction="horizontal"
                                        height="1"
                                        class="sc-jhAzac hmXDXQ"
                                        style="
                                          width: 100%;
                                          border-left: none;
                                          display: block;
                                        "
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
                                  style="
                                    vertical-align: -webkit-baseline-middle;
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
                                    <tr
                                      height="25"
                                      style="vertical-align: middle"
                                    >
                                      <td
                                        width="30"
                                        style="vertical-align: middle"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="sc-gPEVay eQYmiW"
                                          style="
                                            vertical-align: -webkit-baseline-middle;
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
                                              generatorStore.office_phone ||
                                              generatorStore.mobile_phone
                                            "
                                          >
                                            <tr>
                                              <td
                                                style="vertical-align: bottom"
                                              >
                                                <span
                                                  color="#dd1515"
                                                  width="11"
                                                  class="sc-jlyJG bbyJzT"
                                                  style="display: block"
                                                  :style="
                                                    'background-color: ' +
                                                    generatorStore.theme_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                    color="#dd1515"
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
                                        style="
                                          padding: 0px;
                                          color: rgb(0, 0, 0);
                                        "
                                      >
                                        <a
                                          v-if="generatorStore.office_phone"
                                          :href="
                                            'tel:' + generatorStore.office_phone
                                          "
                                          color="#000000"
                                          class="sc-gipzik iyhjGb"
                                          style="
                                            text-decoration: none;
                                            color: rgb(0, 0, 0);
                                            font-size: 12px;
                                          "
                                          ><span>{{
                                            generatorStore.office_phone
                                          }}</span></a
                                        >
                                        |
                                        <a
                                          v-if="generatorStore.mobile_phone"
                                          :href="
                                            'tel:' + generatorStore.mobile_phone
                                          "
                                          color="#000000"
                                          class="sc-gipzik iyhjGb"
                                          style="
                                            text-decoration: none;
                                            color: rgb(0, 0, 0);
                                            font-size: 12px;
                                          "
                                          ><span>{{
                                            generatorStore.mobile_phone
                                          }}</span></a
                                        >
                                      </td>
                                    </tr>
                                    <tr
                                      height="25"
                                      style="vertical-align: middle"
                                    >
                                      <td
                                        width="30"
                                        style="vertical-align: middle"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="sc-gPEVay eQYmiW"
                                          style="
                                            vertical-align: -webkit-baseline-middle;
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
                                          <tbody v-if="generatorStore.email">
                                            <tr>
                                              <td
                                                style="vertical-align: bottom"
                                              >
                                                <span
                                                  color="#dd1515"
                                                  width="11"
                                                  class="sc-jlyJG bbyJzT"
                                                  style="display: block"
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.theme_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                    color="#dd1515"
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
                                          :href="
                                            'mailto:' + generatorStore.email
                                          "
                                          color="#000000"
                                          class="sc-gipzik iyhjGb"
                                          style="
                                            text-decoration: none;
                                            color: rgb(0, 0, 0);
                                            font-size: 12px;
                                          "
                                          ><span>{{
                                            generatorStore.email
                                          }}</span></a
                                        >
                                      </td>
                                    </tr>
                                    <tr
                                      height="25"
                                      style="vertical-align: middle"
                                    >
                                      <td
                                        width="30"
                                        style="vertical-align: middle"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="sc-gPEVay eQYmiW"
                                          style="
                                            vertical-align: -webkit-baseline-middle;
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
                                            v-if="generatorStore.website_url"
                                          >
                                            <tr>
                                              <td
                                                style="vertical-align: bottom"
                                              >
                                                <span
                                                  color="#dd1515"
                                                  width="11"
                                                  class="sc-jlyJG bbyJzT"
                                                  style="display: block"
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.theme_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                    color="#dd1515"
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
                                          :href="
                                            '//' + generatorStore.website_url
                                          "
                                          color="#000000"
                                          class="sc-gipzik iyhjGb"
                                          style="
                                            text-decoration: none;
                                            color: rgb(0, 0, 0);
                                            font-size: 12px;
                                          "
                                          ><span>{{
                                            generatorStore.website_url
                                          }}</span></a
                                        >
                                      </td>
                                    </tr>
                                    <tr
                                      height="25"
                                      style="vertical-align: middle"
                                    >
                                      <td
                                        width="30"
                                        style="vertical-align: middle"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="sc-gPEVay eQYmiW"
                                          style="
                                            vertical-align: -webkit-baseline-middle;
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
                                              generatorStore.address_1 ||
                                              generatorStore.address_2 ||
                                              generatorStore.address_3 ||
                                              generatorStore.address_4
                                            "
                                          >
                                            <tr>
                                              <td
                                                style="vertical-align: bottom"
                                              >
                                                <span
                                                  color="#dd1515"
                                                  width="11"
                                                  class="sc-jlyJG bbyJzT"
                                                  style="display: block"
                                                  :style="
                                                    'background-color:' +
                                                    generatorStore.theme_color
                                                  "
                                                  ><img
                                                    src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                    color="#dd1515"
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
                                          color="#000000"
                                          class="sc-csuQGl CQhxV"
                                          style="
                                            font-size: 12px;
                                            color: rgb(0, 0, 0);
                                          "
                                          ><span
                                            v-if="generatorStore.address_1"
                                          >
                                            {{ generatorStore.address_1 }}</span
                                          ><span
                                            v-if="generatorStore.address_2"
                                            >{{
                                              ", " + generatorStore.address_2
                                            }}</span
                                          ><span
                                            v-if="generatorStore.address_3"
                                            >{{
                                              ", " + generatorStore.address_3
                                            }}</span
                                          ><span
                                            v-if="generatorStore.address_4"
                                            >{{
                                              ", " + generatorStore.address_4
                                            }}</span
                                          ></span
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="sc-gPEVay eQYmiW"
                                  style="
                                    vertical-align: -webkit-baseline-middle;
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
                                    <tr>
                                      <td height="30"></td>
                                    </tr>
                                  </tbody>
                                </table>
                                <span style="display: block; text-align: left"
                                  ><a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="//sdfsdfs"
                                    color="#6a78d1"
                                    class="sc-fAjcbJ byigni"
                                    style="
                                      border-width: 6px 12px;
                                      border-style: solid;
                                      border-color: rgb(106, 120, 209);
                                      display: inline-block;
                                      background-color: rgb(106, 120, 209);
                                      color: rgb(255, 255, 255);
                                      font-weight: 700;
                                      text-decoration: none;
                                      text-align: center;
                                      line-height: 40px;
                                      font-size: 12px;
                                      border-radius: 3px;
                                    "
                                    >sdfsdfsfd</a
                                  ></span
                                >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="sc-gPEVay eQYmiW"
                                  style="
                                    vertical-align: -webkit-baseline-middle;
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body-footer">
        <span class="create-signature-btn" rel="noopener noreferrer"
          >Create signature</span
        >
        <span class="clear-input"
          ><div class="clear-input-icon">
            <span class="isvg loaded"
              ><!--?xml version="1.0" encoding="utf-8"?-->
              <!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 10 12"
                enable-background="new 0 0 10 12"
                xml:space="preserve"
              >
                <title>Icons/Actions/Rotate</title>
                <desc>Created with Sketch.</desc>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill=""
                  d="M8.33367,6.90972c0,1.87132-1.49523,3.39345-3.33388,3.39345
	c-1.83824,0-3.33347-1.52214-3.33347-3.39345S3.16156,3.51627,4.9998,3.51627v1.37421c0,0.11417,0.04298,0.22751,0.12812,0.31459
	c0.17068,0.17376,0.44697,0.17376,0.61766,0l2.18411-2.22299c0.17028-0.17376,0.17028-0.45502,0-0.62877L5.74557,0.13032
	c-0.17068-0.17376-0.44697-0.17376-0.61766,0C5.0395,0.2199,4.99898,0.33866,5.00225,0.45616L4.9998,0.9741v0.83295
	C2.24264,1.81913,0,4.10295,0,6.90972s2.24264,5.09018,4.9998,5.09018C7.75736,11.9999,10,9.71648,10,6.90972
	c0-0.46877-0.37248-0.84836-0.83296-0.84836C8.70615,6.06136,8.33367,6.44095,8.33367,6.90972z"
                ></path>
              </svg>
            </span>
          </div>
          Clear all input fields</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useGeneratorStore } from "../store";
export default {
  computed: {
    ...mapStores(useGeneratorStore),
  },
};
</script>