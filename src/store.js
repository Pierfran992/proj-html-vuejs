import { reactive } from 'vue';

export const store = reactive({
    // dati per la navBar dell'header
    navBarLink: [
        {
            text: "Home",
            url: "#",
        },
        {
            text: "Pages",
            url: "#",
        },
        {
            text: "Courses",
            url: "#",
        },
        {
            text: "Features",
            url: "#",
        },
        {
            text: "Blog",
            url: "#",
        },
        {
            text: "Shop",
            url: "#",
        },
    ],

    // dati per il footer
    address: [
        "382 NE 191st St # 87394 Miami, FL 33179-3899",
        "+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)",
        "support@maxcoach.com",
    ],

    explore: [
        "Start here",
        "Blog",
        "About us",
        "Success story",
        "Courses",
        "Contact us",
    ],

    information: [
        "Membership",
        "Purchase guide",
        "Privacy policy",
        "Terms of services",
    ]

});