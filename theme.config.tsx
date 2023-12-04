import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Backpack Network</span>,
  project: {
    link: 'https://github.com/anotheragency/docs-backpack-network',

  },
  chat: {
    link: 'https://discord.gg/gVVBVrG9mf',
  },
  docsRepositoryBase: 'https://github.com/anotheragency/docs-backpack-network',
  footer: {
    text: 'Backpack Network © 2023',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://localhost:3000' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <title>{frontMatter.title || 'Backpack Network'}</title> {/* Add this line */}

        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'Backpack Network'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Self banking with fUX'}
        />
      </>
    )
  }
}

export default config
