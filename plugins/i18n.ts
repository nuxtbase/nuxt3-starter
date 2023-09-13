import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh-CN.json'
import ja from '../locales/ja.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      ja,
      zh
    }
  })

  vueApp.use(i18n)
})
