import { Metadata, MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Robots {
  const baseURL = "jtsilversmiths.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/adminpanel/",
          "/adminpanel-delete/",
          "/adminpanel-messages/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/adminpanel/",
          "/adminpanel-delete/",
          "/adminpanel-messages/",
        ],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
