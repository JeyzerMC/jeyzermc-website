module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "jeyzer", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Mehdi Chaid", // Site title.
  siteTitleAlt: "Mehdi Chaid, software engineering student", // Alternative site title for SEO.
  siteLogo:
    "/logos/rlogo.png", // Logo used for SEO and manifest.,
  siteUrl: "https://jeyzermc.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "Engineering student / Machine learning enthusiast", // Website description used for RSS feeds/meta description tag.
  siteCover:
    "/images/blog-cover.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Mehdi Chaid", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  disqusShortname: "http-jeyzermc-com", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/JeyzerMC",
    "https://linkedin.com/in/mehdi-chaid",
    "/resume.pdf"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/JeyzerMC",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/mehdi-chaid",
      iconClassName: "fa fa-linkedin" // Disabled, see Navigation.jsx
    },
    {
      label: "Devpost",
      url: "https://devpost.com/Jeyzer",
      iconClassName: "fa fa-code" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Mehdi Chaid" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
