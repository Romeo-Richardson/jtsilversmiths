import { Metadata, MetadataRoute } from "next";
import { getItems } from "./utils/apiCalls";
import { items } from "@prisma/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = "https://www.jtsilversmiths.com";
  const products = await getItems();
  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseURL}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...products.data.map((item: items) => {
      return {
        url: `${baseURL}/shop/${decodeURIComponent(item.name)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      };
    }),
  ];
}
