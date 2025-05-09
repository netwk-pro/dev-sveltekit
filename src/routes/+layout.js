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

  // Determine the metadata for the current route
  // @ts-ignore
  const currentMeta = meta[url.pathname] || defaultMeta;

  // Return the metadata and pathname to the layout
  return {
    pathname: url.pathname,
    meta: currentMeta,
  };
}
