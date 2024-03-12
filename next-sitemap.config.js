module.exports = {
    siteUrl: 'https://greenviewsolutions.net',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000, // for splitting into multiple files
    // Optional:
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://greenviewsolutions.net/my-custom-sitemap-1.xml',
        'https://greenviewsolutions.net/my-custom-sitemap-2.xml',
      ],
    },
    // Exclude specific paths:
    exclude: ['/admin/*', '/config/*'],
    // Define how dynamic routes are resolved into paths:
    transform: async (config, path) => {
      // Custom transformation logic...
      return {
        loc: path, // The path for the page
        changefreq: 'daily',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  };
  
  };
  
>>>>>>> 7269011408834311c23a1ce33cce344296345b81
