import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'Recording Release',
        paragraphs: [
            'Since one of the PyCon motivations is to help Python education and advocate the use of Python, ' +
                'by default all talks are recorded. If the speaker agrees to give permission to PyCon Taiwan, ' +
                'we will record, edit, and release the audio and video of the speaker’s presentation to online video sites ' +
                'such as YouTube and {pyvideo}. ' +
                'The recording might be also live streamed if it is technically feasible.',
            'If you don’t want your talk being recorded, make sure you leave the recording option unchecked during the proposal submission.',
        ],
        og: {
            title: 'Recording Release',
            description:
                'Since one of the PyCon motivations is to help Python education and advocate the use of Python, ' +
                'by default all talks are recorded. If the speaker agrees to give permission to PyCon Taiwan, ' +
                'we will record, edit, and release the audio and video of the speaker’s presentation to online video sites ' +
                'such as YouTube and pyvideo.org. ' +
                'The recording might be also live streamed if it is technically feasible.',
        },
    },
    'zh-hant': {
        title: '錄影釋出',
        paragraphs: [
            'PyCon 致力於協助 Python 教育及提倡 Python 的使用，演講預設會由 PyCon Taiwan 委員會錄影、剪輯並上傳至線上影音網站（如：Youtube）以及 ' +
                '{pyvideo}。在技術可行的情況下，我們也可能實況轉播議程的錄影。',
            '如果您不希望自己的演講被錄影，請在投稿時取消勾選錄影的選項。',
        ],
        og: {
            title: '錄影釋出',
            description:
                'PyCon 致力於協助 Python 教育及提倡 Python 的使用，演講預設會由 PyCon Taiwan 委員會錄影、剪輯並上傳至線上影音網站（如：Youtube）以及 ' +
                'pyvideo.org。在技術可行的情況下，我們也可能實況轉播議程的錄影。',
        },
    },
})
