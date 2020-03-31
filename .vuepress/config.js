module.exports = {
    title: 'Test',
    description: 'Cool',
    locales: {
        '/': {
            lang: 'ru-RU',
            title: 'ВР Банк',
            description: 'Документация'
        },
        '/en/': {
            lang: 'en-US',
            title: 'VR Bank',
            description: 'Documentation',
        }
    },
    themeConfig: {
        sidebar: 'auto',
        displayAllHeaders: true,
        locales: {
            '/': {
                selectText: 'Языки',
                label: 'Русский',
                ariaLabel: 'Языки',
                serviceWorker: {
                    updatePopup: {
                        message: "Доступен новый контент.",
                        buttonText: "Обновить"
                    }
                },
                nav: [
                    { text: 'Главная', link: '/' , ariaLabel: 'Main' },
                    { text: 'Документация', link: '/guide/' , ariaLabel: 'Guide' }
                ],
                collapsable: true,
                sidebarDepth: 0,
                sidebar: {
                    '/guide/': getGuideSidebar('Работа с API', 'Платежи'),
                }

            },

        },

    }
};


function getGuideSidebar (WorkingWithApi, Payments) {
    return [
        {
            title: WorkingWithApi,
            collapsable: false,
            children: [
                'using-api/basic',
                'using-api/using-sdks',
                'using-api/testing',
                'using-api/changelog',
            ]
        },
        {
            title: Payments,
            collapsable: false,
            children: [
                'payments/quick-start',
                'payments/payment-process',
            ]
        },
    ]
}