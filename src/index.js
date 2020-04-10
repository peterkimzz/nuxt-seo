import Seo from './Seo.vue'

const Plugin = {}

Plugin.install = (Vue) => {
  if (Plugin.install.installed) return

  Vue.component('seo', Seo)
}

export default Plugin
