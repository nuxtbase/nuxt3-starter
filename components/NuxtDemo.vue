<template>
  <div class="text-secondary-darker dark:text-white bg-white dark:bg-black">
    <div
      class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0"
    >
      <div class="max-w-screen-2xl grid grid-cols-2 mx-auto sm:px-6 lg:px-8">
        <NuxtWelcome />
        <div class="py-20 px-12 bg-black text-white flex flex-col gap-4">
          <!-- Plugins -->
          <div class="rounded p-4 gradient-border">
            <div class="mb-4">
              <h1 class="font-medium text-2xl">Plugins</h1>

              <ul class="list-inside list-disc pt-1 pl-2 text-gray-300">
                <li>
                  <a
                    class="text-primary hover:underline"
                    href="https://unocss.dev/integrations/nuxt"
                    target="_blank"
                    >@unocss/nuxt</a
                  >
                </li>
                <li>
                  <a
                    class="text-primary hover:underline"
                    href="https://github.com/antfu/unplugin-icons"
                    target="_blank"
                    >unplugin-icons</a
                  >
                </li>
                <li>
                  <a
                    class="text-primary hover:underline"
                    href="https://pinia.esm.dev/ssr/nuxt.html"
                    target="_blank"
                    >@pinia/nuxt</a
                  >
                </li>
                <li>
                  <a
                    class="text-primary hover:underline"
                    href="https://vueuse.org/nuxt/readme.html#vueuse-nuxt"
                    target="_blank"
                    >@vueuse/nuxt3</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <!-- Pinia -->
          <div class="rounded p-4 gradient-border">
            <div class="mb-4 flex flex-col gap-6">
              <h1 class="font-medium text-2xl">Pinia</h1>
              <h2 class="text-base">Use Pinia manage store</h2>
              <button
                class="text-primary bg-transparent px-2 py-1 focus:outline-transparent rounded-lg border border-[#00DC82]"
                @click="counterStore.increment"
              >
                Counter {{ counterStore.n }}
              </button>
            </div>
          </div>

          <!-- Serverless Functions -->
          <div class="rounded p-4 gradient-border">
            <div class="mb-4 flex flex-col gap-6">
              <h1 class="font-medium text-2xl">Serverless Functions</h1>
              <h2 class="text-base">
                Create a Serverless Functions in
                <a
                  class="text-primary hover:underline"
                  href="api/hello?name=World"
                  target="_blank"
                  >server/api.ts</a
                >
              </h2>

              <code>{{ data }}</code>
            </div>
          </div>
          <!-- Vue i18n -->

          <div class="rounded p-4 gradient-border">
            <div class="mb-4">
              <h1 class="font-medium text-2xl">Vue i18n</h1>
            </div>

            <ul class="list-inside list-disc pt-1 pl-2">
              <li>
                {{ t('hello', { name: 'A Better Nuxt 3 Starter' }) }}
              </li>
              <li>
                {{ t('menu.home') }}
              </li>
            </ul>
          </div>

          <div
            class="rounded p-4 gradient-border py-8 flex justify-center items-center space-x-2"
          >
            <div class="">
              <button
                class="bg-transparent hover:text-primary px-2 py-1 focus:outline-transparent rounded-sm"
                @click="toggleLocales"
              >
                <carbon:language class="h-5 w-5" />
              </button>
              <ClientOnly>
                <button
                  class="bg-transparent px-2 py-1 focus:outline-transparent rounded-sm bg-white dark:bg-black text-black dark:text-white rounded-md hover:text-primary"
                  @click="(e) => toggleDark()"
                >
                  <carbon:moon class="h-5 w-5" v-if="isDark" />
                  <carbon:sun class="h-5 w-5" v-else />
                </button>
              </ClientOnly>
              <button
                class="bg-transparent hover:text-primary px-2 py-1 focus:outline-transparent rounded-sm"
                @click="(e) => gotoGitHub()"
              >
                <carbon:logo-github class="h-5 w-5" />
              </button>
            </div>
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
  window.open('https://github.com/nuxtbase/nuxt3-starter')
}
</script>

<style scoped>
.gradient-border {
  position: relative;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
}
@media (prefers-color-scheme: light) {
  .gradient-border {
    background-color: rgba(255, 255, 255, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #e2e2e2 0%,
      #e2e2e2 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
}
@media (prefers-color-scheme: dark) {
  .gradient-border {
    background-color: rgba(20, 20, 20, 0.3);
  }
  .gradient-border::before {
    background: linear-gradient(
      90deg,
      #303030 0%,
      #303030 25%,
      #00dc82 50%,
      #36e4da 75%,
      #0047e1 100%
    );
  }
}
.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 0.5rem;
  padding: 2px;
  width: 100%;
  background-size: 400% auto;
  background-position: 0 0;
  opacity: 0.5;
  transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}
.gradient-border:hover::before {
  background-position: -50% 0;
  opacity: 1;
}
</style>
