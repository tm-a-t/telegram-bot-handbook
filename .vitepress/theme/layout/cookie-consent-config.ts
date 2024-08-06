import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const config: CookieConsentConfig = {
    root: '#app',

    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom right',
        },
        preferencesModal: {
            layout: 'box',
        },
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true,
        },
        functionality: {
            autoClear: {
                cookies: [
                    {name: 'nf-lang'}
                ]
            }
        },
        analytics: {
            autoClear: {
                cookies: [
                    {name: /^(_ym)/},
                ],
            },
        },
    },

    language: {
        default: 'en',
        autoDetect: 'document',

        translations: {
            en: {
                consentModal: {
                    title: 'Cookies',
                    description:
                        'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
                    acceptAllBtn: 'Accept',
                    acceptNecessaryBtn: 'Reject',
                    showPreferencesBtn: 'Manage preferences',
                    footer: `<a href="">Privacy Policy</a>`,
                },
                preferencesModal: {
                    title: 'Cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    sections: [
                        {
                            title: 'Cookie usage',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. For more details, refer to our <a href="#" class="cc__link">privacy policy</a>.',
                        },
                        {
                            title: 'Strictly necessary cookies',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'necessary',
                        },

                        {
                            title: 'Functionality cookies',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'functionality',
                        },
                        {
                            title: 'Performance and analytics cookies',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description',
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    },
                                    {
                                        name: '_gid',
                                        domain: 'yourdomain.com',
                                        desc: 'description ...',
                                    },
                                ],
                            },
                        },
                        {
                            title: 'Advertisement and targeting cookies',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            linkedCategory: 'ads',
                        },
                        {
                            title: 'More information',
                            description:
                                'For any queries in relation to our policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
                        },
                    ],
                },
            },
        },
    },
};

export default config;
