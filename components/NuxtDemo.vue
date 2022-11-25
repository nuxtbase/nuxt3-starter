<template>
  <div class="text-secondary-darker dark:text-white bg-white dark:bg-black">
    <div
      class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
    >
      <div class="max-w-screen-2xl grid grid-cols-2 mx-auto sm:px-6 lg:px-8">
        <NuxtWelcome />
        <div class="py-20 px-12">
          <!-- Plugins -->
          <div
            class="mt-4 text-sm bg-white border-l-8 border-cloud-light dark:bg-sky-darker dark:border-sky overflow-hidden shadow sm:rounded-lg p-6 pl-4"
          >
            <p>Plugins</p>
            <ul class="list-inside list-disc pt-1 pl-2">
              <li>
                <a
                  class="text-primary hover:underline"
                  href="https://github.com/windicss/nuxt-windicss"
                  target="_blank"
                  >nuxt-windicss</a
                >
              </li>
              <li>
                <a
                  class="text-primary hover:underline"
                  href="https://github.com/antfu/unplugin-icons"
                  >unplugin-icons</a
                >
              </li>
              <li>
                <a
                  class="text-primary hover:underline"
                  href="https://pinia.esm.dev/ssr/nuxt.html"
                  >@pinia/nuxt</a
                >
              </li>
              <li>
                <a
                  class="text-primary hover:underline"
                  href="https://github.com/intlify/nuxt3"
                  >@intlify/nuxt3</a
                >
              </li>
              <li>
                <a
                  class="text-primary hover:underline"
                  href="https://vueuse.org/nuxt/readme.html#vueuse-nuxt"
                  >@vueuse/nuxt3</a
                >
              </li>
            </ul>
          </div>
          <!-- Pinia -->
          <div
            class="mt-4 text-sm bg-white border-l-8 border-cloud-light dark:bg-sky-darker dark:border-sky overflow-hidden shadow sm:rounded-lg p-6 pl-4"
          >
            <p>Some usefull examples:</p>
            <ul class="list-inside list-disc pt-1 pl-2">
              <li>
                Use <strong>Pinia</strong> manage store
                <button
                  class="text-primary px-2 py-1 bg-sky-darker dark:bg-sky-dark focus:outline-transparent rounded-sm"
                  @click="counterStore.increment"
                >
                  Counter {{ counterStore.n }}
                </button>
              </li>
              <li>
                Create a Serverless Functions in
                <a
                  class="text-primary hover:underline"
                  href="api/hello?name=World"
                  target="_blank"
                  >server/api.ts</a
                >
                <code>{{ data }}</code>
              </li>
            </ul>
          </div>
          <!-- Vue i18n -->
          <div
            class="mt-4 text-sm bg-white border-l-8 border-cloud-light dark:bg-sky-darker dark:border-sky overflow-hidden shadow sm:rounded-lg p-6 pl-4"
          >
            <p>Vue i18n examples:</p>
            <ul class="list-inside list-disc pt-1 pl-2">
              <li>
                {{ t('hello', { name: 'A Better Nuxt 3 Starter' }) }}
              </li>
              <li>
                {{ t('menu.home') }}
              </li>
            </ul>
          </div>

          <div class="py-8 flex justify-center items-center space-x-2">
            <button
              class="text-primary px-2 py-1 bg-sky-darker dark:bg-sky-dark focus:outline-transparent rounded-sm"
              @click="toggleLocales"
            >
              <carbon:language class="h-5 w-5" />
            </button>
            <button
              class="text-primary px-2 py-1 bg-sky-darker dark:bg-sky-dark focus:outline-transparent rounded-sm"
              @click="(e) => toggleDark()"
            >
              <carbon:sun class="h-5 w-5" v-if="isDark" />
              <carbon:moon class="h-5 w-5" v-else />
            </button>
            <button
              class="text-primary px-2 py-1 bg-sky-darker dark:bg-sky-dark focus:outline-transparent rounded-sm"
              @click="(e) => gotoGitHub()"
            >
              <carbon:logo-github class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { useCounter } from '@/store/counter'
import { isDark, toggleDark } from '@/composables/dark'

const { t, locale, availableLocales } = useI18n()
const counterStore = useCounter()

const messages = {
  title: 'Welcome to Nuxt 3!',
  documentation: 'Documentation',
  readDocs:
    'We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework.',
  followTwitter:
    'Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips.'
}

// fetch data from server/api
const { data } = await useAsyncData('/api/hello', () => {
  return $fetch('/api/hello', {
    params: {
      name: 'world'
    }
  })
})

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  console.log(locale.value)
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const gotoGitHub = () => {
  window.open('https://github.com/xiaoluoboding/nuxt3-starter')
}
</script>
