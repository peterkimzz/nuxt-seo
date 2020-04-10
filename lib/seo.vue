<template>
  <span v-if="false" id="seo" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    titleTemplate: {
      type: String,
      default: 'Vue SEO'
    },
    titleTemplateVisible: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: `Description`
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.seoLang,
        dir: 'ltr'
      },
      title: this.seoTitle,
      meta: [
        // Native
        {
          uid: 'description',
          property: 'description',
          content: this.seoDescription
        },
        {
          name: 'keywords',
          content: 'Vue SEO, Vue Meta'
        },
        // Open Graph
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: this.seoURL
        },
        {
          property: 'og:title',
          content: this.seoTitle
        },
        {
          property: 'og:image',
          content: this.seoImage
        },
        {
          property: 'og:description',
          content: this.seoDescription
        },
        {
          property: 'og:site_name',
          content: 'Vue SEO'
        },
        {
          property: 'og:locale',
          content: 'en_US'
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:site',
          content: '@vue-seo'
        },
        {
          name: 'twitter:creator',
          content: '@peterkimzz'
        },
        {
          name: 'twitter:title',
          content: this.seoTitle
        },
        {
          name: 'twitter:description',
          content: this.seoDescription
        },
        {
          name: 'twitter:image',
          content: this.seoImage
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: this.seoURL
        }
      ]
    }
  },
  computed: {
    seoTitle() {
      // max 55 characters recommended.
      if (!this.titleTemplateVisible) {
        return this.title
      }

      return `${this.title} - ${this.titleTemplate}`
    },
    seoDescription() {
      // max 150 characters recommended.
      return this.description.substring(0, 150)
    },
    seoURL() {
      return process.env.PUBLIC_DOMAIN + this.$route.path
    },
    seoLang() {
      return this.$store.getters['locales/LOCALE'] || 'en'
    },
    seoImage() {
      return 'https://gblobscdn.gitbook.com/spaces%2F-LPWn0djxQuWlHBLVq2n%2Favatar.png?generation=1540312859766005&alt=media'
    }
  }
}
</script>
