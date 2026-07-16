import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  canonicalPath: string;
};

const SITE_ORIGIN = "https://gypsa.tech";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

export function PageMeta({ title, description, canonicalPath }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertCanonical(canonicalUrl);

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonicalPath]);

  return null;
}
