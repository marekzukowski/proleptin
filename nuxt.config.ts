import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/proleptin/",
    buildAssetsDir: '/assets/',
    head: {
      link: [
        {
          rel: 'stylesheet', href: 'https://use.typekit.net/ixy4rgp.css'
        }
      ],
      script: [
        {
          children: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '503358124849508');
            fbq('track', 'PageView');
          `
        }
      ],
      meta: [
        {
          name:"facebook-domain-verification", content: "x0jni1ag2getnljyfuvtnxz06ucrjm"
        },
        {
          property:"og:image", content: "/img/proleptin-og-image.png"
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icons',
    '@nuxtjs/i18n',
  ],
  build: {
    transpile: ["@headlessui/vue", "@nuxtjs/i18n"]
  },
  i18n: {
    strategy: 'prefix_and_default',
    locales: [
      { code: "at", iso: "de-AT", eng: "German", native: "Deutsch", file: 'at.json' },
      { code: "cz", iso: "cs", eng: "Czech", native: "Čeština", file: 'cz.json' },
      { code: "de", iso: "de", eng: "German", native: "Deutsch", file: 'de.json' },
      { code: "es", iso: "es", eng: "Spanish", native: "Español", file: 'es.json' },
      { code: "hr", iso: "hr", eng: "Croatian", native: "Hrvatski", file: 'hr.json' },
      { code: "hu", iso: "hu", eng: "Hungarian", native: "Magyar", file: 'hu.json' },
      { code: "it", iso: "it", eng: "Italian", native: "Italiano", file: 'it.json' },
      { code: "pl", iso: "pl", eng: "Polish", native: "Polski", file: 'pl.json' },
      { code: "pt", iso: "pt", eng: "Portuguese", native: "Português", file: 'pt.json' },
      { code: "ro", iso: "ri", eng: "Romanian", native: "Română", file: 'ro.json' },
      { code: "si", iso: "sl", eng: "Slovenian", native: "Slovenščina", file: 'si.json' },
      { code: "sk", iso: "sk", eng: "Slovak", native: "Slovenský", file: 'sk.json' },
    ],
    detectBrowserLanguage: false,
    defaultLocale: 'pl',
    langDir: 'locales/',
    pages: {
      regulations: {
        at: '/nutzungsbedingungen',
        cz: '/obchodni-podminky',
        de: '/nutzungsbedingungen',
        es: '/reglamento',
        hr: '/pravilnik',
        hu: '/szabalyzat',
        it: '/termini-e-condizioni',
        pl: '/regulamin',
        pt: '/regulamento',
        ro: '/regulamentul ',
        si: '/pravilnik',
        sk: '/obchodne-podmienky',
      },
      "privacy-policy": {
        at: '/datenschutzerklärung',
        cz: '/ochrana-osobnich-udaju',
        de: '/datenschutzerklärung',
        es: '/politica-de-privacidad',
        hr: '/politika-privatnosti',
        hu: '/adatvedelmi-iranyelvek',
        it: '/politica-sulla-privacy',
        pl: '/polityka-prywatnosci',
        pt: '/politica-de-privacidade',
        ro: '/politica-de-confidențialitate',
        si: '/pravilnik-o-zasebnosti',
        sk: '/ochrana-osobnych-udajov',
      },
      order: {
        at: '/bestellen-sie-jetzt',
        cz: '/objednat-ted',
        de: '/bestellen-sie-jetzt',
        es: '/pedir-ahora',
        hr: '/narucite-sada',
        hu: '/rendeld-meg-most',
        it: '/ordina-ora',
        pl: '/zamow',
        pt: '/encomende-ja',
        ro: '/comanda-acum',
        si: '/naroci-zdaj',
        sk: '/objednat-teraz',
      },
      "thank-you": {
        at: '/vielen-dank',
        cz: '/dekujeme',
        de: '/vielen-dank',
        es: '/gracias',
        hr: '/zahvaljujemo',
        hu: '/koszonjuk',
        it: '/grazie',
        pl: '/dziekujemy',
        pt: '/obrigado',
        ro: '/va-multumim',
        si: '/hvala',
        sk: '/dakujeme',
      }
    },
    vueI18n: {
      legacy: false,
      locale: 'pl',
    },
  },
  ssr: false,
})
