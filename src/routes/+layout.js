//export const prerender = true;
export const trailingSlash = "never";

export function load({ url }) {
  // Define metadata for specific routes
  const meta = {
    "/": {
      title:
        "Locking Down Networks, Unlocking Confidence™ | Security, Networking, Privacy — Network Pro™",
      description:
        "Locking Down Networks, Unlocking Confidence™ | Security, Networking, Privacy — Network Pro™",
    },
    "/about": {
      title: "About Us — Network Pro™",
      description: "About Us | Security, Networking, Privacy — Network Pro™",
    },
    "/privacy-policy": {
      title: "Privacy Policy — Network Pro™",
      description:
        "Privacy Policy | Security, Networking, Privacy — Network Pro™",
    },
    "/terms-of-use": {
      title: "Website Terms of Use — Network Pro™",
      description:
        "Website Terms of Use | Security, Networking, Privacy — Network Pro™",
    },
    "/license": {
      title: "Legal, Copyright, and Licensing — Network Pro™",
      description:
        "Legal, Copyright, and Licensing | Security, Networking, Privacy — Network Pro™",
    },
    "/terms-conditions": {
      title: "Consulting Terms and Conditions — Network Pro™",
      description:
        "Terms and Conditions | Security, Networking, Privacy — Network Pro™",
    },
  };

  // Fallback metadata for undefined routes
  const defaultMeta = {
    title: "Network Pro Strategies (Network Pro™)",
    description:
      "Locking Down Networks, Unlocking Confidence™ | Security, Networking, Privacy — Network Pro™",
  };

  // Normalize the pathname to remove trailing slashes
  const normalizedPathname = url.pathname.replace(/\/+$/, "") || "/";

  // @ts-ignore: TypeScript doesn't recognize this indexing, but it's safe in this context
  const currentMeta = meta[normalizedPathname] || defaultMeta;

  // Return the metadata and pathname to the layout
  return {
    pathname: normalizedPathname,
    meta: currentMeta,
  };
}
