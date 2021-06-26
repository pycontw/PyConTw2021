import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        milestone: [
            {
                achievement: 'Hold',
                achievementNumber: '9',
                achievementUnit: 'years',
            },
            {
                achievement: 'Every Year',
                achievementNumber: '30',
                achievementUnit: 'Speeches',
            },
            {
                achievement: 'Audience',
                achievementNumber: '800',
                achievementUnit: 'People',
            },
        ],
        description: [
            'PyCon, also known as the Python Annual Conference, is the annual event of the global Python community. ' +
                'PyCon is spontaneously organized by fellow locals, and now Taiwan has its own Python annual meeting. ' +
                'This event aims to gather organizations and individuals who use Python in various fields in Taiwan ' +
                'to exchange their experiences, share the latest technological developments.',
            '2021 is the tenth anniversary of PyCon Taiwan. ' +
                'This year, PyCon Taiwan has not only passed on the community communication experience of the past ten years, ' +
                'we also made some new attempts, such as Podcasts. ' +
                'It is hoped that the tenth anniversary of PyCon Taiwan can promote exchanges ' +
                'between different ethnic groups and spark different sparks.',
        ],
    },
    'zh-hant': {
        milestone: [
            {
                achievement: '持續舉辦',
                achievementNumber: '9',
                achievementUnit: '年',
            },
            {
                achievement: '每年議程',
                achievementNumber: '30',
                achievementUnit: '場以上',
            },
            {
                achievement: '參與會眾',
                achievementNumber: '800',
                achievementUnit: '人以上',
            },
        ],
        description: [
            'PyCon，亦即 Python 年會，是全球 Python 社群的年度盛會。PyCon 由各地同好自發籌辦，' +
                '而現在台灣也有自己的 Python 年會了。這個活動旨在聚集台灣各領域應用 Python 的組織與個人，' +
                '交流彼此的經驗心得，分享最新的技術發展，並親身體驗社群獨有的熱情。',
            '2021 年是 PyCon Taiwan 的十周年，今年 PyCon Taiwan 除了傳承十年來的社群交流經驗，' +
                '我們更做了一些新嘗試，像是 Podcast 等。以期 PyCon Taiwan 十周年能促進不同族群間的交流，激盪出不一樣的火花。',
        ],
    },
})
