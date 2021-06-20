import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Code of Conduct',
        intro:
            'PyCon Taiwan is a community-driven convention for the Python programming language in Taiwan, ' +
            'created to facilitate discussions and exchange of ideas in the community. ' +
            'To provide a joyful, pleasant, and vibrant environment that creates value for all participants, ' +
            'we hereby publish PyCon Taiwan’s Code of Conduct, ' +
            'which applies to all speech and action in both physical and digital venues of PyCon Taiwan. ' +
            'Your cooperation is necessary to help all of us to interact with respect and trust in PyCon Taiwan. ',
        contents: [
            {
                title: 'Do not harass others.',
                description:
                    'Either verbally, physically, or otherwise. Harassment and discrimination are given zero tolerance. ' +
                    'Each attendee should be equally respected regardless of nationality, race, language, gender, ' +
                    'sexual orientation, age, disability, physical appearance, faith, profession, seniority, political view, or intellect.',
            },
            {
                title: 'Appreciate each other.',
                description:
                    'Each attendee is expected to show a professional attitude, and behave accordingly. ' +
                    'Users of Python are diverse in their professional roles, technical backgrounds, and application areas. ' +
                    'They contribute to the technology in many different ways, some amazingly unimaginable. ' +
                    'Opinions or actions that undervalue other members of the community are inappropriate.',
            },
            {
                title: 'Show consideration to others.',
                description:
                    'Sexual contents in any form are inappropriate in any conference venue, ' +
                    'including but not limited to talks, open spaces, or social media. ' +
                    'Words and actions originated from stereotypes are discouraged. ' +
                    'Cell phones should be set to silent or a mode that does not annoy others in the conference rooms.',
            },
        ],
        summary: [
            'The conference organizers have the power to take appropriate actions ' +
                'to redirect the behavior of those who violate the Code of Conduct. ' +
                'Violators may be forced to leave the conference without a refund at the sole discretion of the organizers.',
            'This Code of Conduct is approved by the organizers of PyCon Taiwan.',
        ],
    },
    'zh-hant': {
        title: '行為準則',
        intro:
            'PyCon Taiwan 是由臺灣 Python 程式語言社群所發起的大會，' +
            '藉以促進社群中的意見討論與技術交流。' +
            '為了提供歡樂、愉快、生氣蓬勃的環境並創造價值，' +
            'PyCon Taiwan 製作此行為準則 (Code of Conduct)。' +
            '本公約適用於參與者在 PyCon Taiwan 相關實體與數位場域中的一切言行。' +
            '期望大家一起合作，讓 PyCon Taiwan 充滿互敬與互信。',
        contents: [
            {
                title: '參加者不可有騷擾言行：',
                description:
                    '大會不容忍任何的騷擾或歧視。' +
                    '無分國籍、種族、語言、性別、性取向、年齡、身心狀況、信仰、職業、資歷、政治傾向、智力，' +
                    '每一位參加者都應該獲得同樣的尊重。',
            },
            {
                title: '彼此欣賞：',
                description:
                    '每位參加者都應該抱持專業的態度與行為。' +
                    'Python 的使用者來自不同的專業分工、技術背景與應用領域。' +
                    '我們以非常多樣的方式使用並貢獻 Python 技術。' +
                    '任何貶低社群中其它成員的言行都是不適當的。',
            },
            {
                title: '體貼他人：',
                description:
                    '任何形式的性暗示，都不適於大會中的任何場合。' +
                    '這些場合包含但不限於演講、開放空間、社群媒體。請避免源自刻板印象的言行。' +
                    '會議中請把手機調為靜音，或是其它不會影響他人的模式。',
            },
        ],
        summary: [
            '研討會籌備團隊有權調整任何違反此準則的行為。僅需根據籌備團隊的裁決，違反準則者可能必須離開會場，並不得要求退費。',
            '本行為準則由 PyCon Taiwan 籌備團隊認可執行。',
        ],
    },
})
