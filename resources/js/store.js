import { defineStore } from "pinia";

export const useGeneratorStore = defineStore("generator", {
    state: () => {
        return {
            first_name: "",
            last_name: "",
            job_title: "",
            department: "",
            company_name: "",
            office_phone: "",
            mobile_phone: "",
            website_url: "",
            email: "",
            address_1: "",
            address_2: "",
            address_3: "",
            address_4: "",
            linkedin: "",
            facebook: "",
            twitter: "",
            instagram: "",
            theme_color: "#000",
            text_color: "#000",
            link_color: "#000",
            font_family: "Arial",
            font_size: "medium",
            profile_picture: "",
            company_logo: "",
            custom_cta_copy: "",
            custom_cta_url: "",
            cta_color: "",
            cta_text_color: "",
            custom_cta_image: "",
        };
    },
});
