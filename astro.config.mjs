import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://alejandrocruz-0.github.io',
	  redirects: {
    "/": "/about",
    
  },
	integrations: [mdx(), sitemap(),
		partytown({
			config: {
			forward: ["dataLayer.push"],
			},
		}),],
});
