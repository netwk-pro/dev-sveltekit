/* ==========================================================================
src/lib/images.js

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

/**
 * Image import utility
 * Provides convenient access to images in the ./src/lib/img directory
 *
 * @module src/lib
 * @author SunDevil311
 * @updated 2025-05-14
 */

// Import favicon images
export const faviconSvg = new URL("./img/favicon.svg", import.meta.url).href;
export const appleTouchIcon = new URL("./img/icon-180x180.png", import.meta.url).href;

// Import logo image
export const logoPng = new URL("./img/logo-web.png", import.meta.url).href;

// Import general images
export const obtainiumPng = new URL("./img/obtainium.png", import.meta.url).href;

// Import images for posts
export const acodePng = new URL("./img/posts/acode.png", import.meta.url).href;
export const lsheetPng = new URL("./img/posts/linksheet.png", import.meta.url).href;
export const pmxPng = new URL("./img/posts/pmx.png", import.meta.url).href;
export const tosPng = new URL("./img/posts/tosdr.png", import.meta.url).href;
export const urlPng = new URL("./img/posts/urlcheck.png", import.meta.url).href;

/**
 * Helper function for dynamic image imports
 * @param {string} name - The name of the image file
 * @returns {string} The URL of the image
 */
//export function getImage(name) {
//  return new URL(`./img/${name}`, import.meta.url).href;
//}
