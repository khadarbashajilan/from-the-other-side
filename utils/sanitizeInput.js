/**
 * XSS Protection Demo with sanitize-html Package
 *
 * Cross-Site Scripting (XSS) is a security vulnerability that allows attackers
 * to inject malicious scripts into web pages viewed by other users. The sanitize-html
 * package provides a robust solution for sanitizing HTML content to prevent XSS attacks.
 * It allows you to define which HTML tags and attributes are allowed, while stripping
 * out any potentially dangerous content. This package is particularly useful when
 * dealing with user-generated content that needs to be displayed on web pages.
 *
 * Types of XSS:
 * 1. Stored XSS - Malicious script is stored on the server
 * 2. Reflected XSS - Malicious script is reflected off the web server
 * 3. DOM-based XSS - Vulnerability exists in client-side code
 *
 * The sanitize-html package works by parsing the HTML content and applying a set of
 * rules to determine which elements and attributes should be allowed. It provides
 * options to:
 * - Specify allowed HTML tags
 * - Define allowed attributes for each tag
 * - Control whether empty tags should be removed
 * - Handle self-closing tags appropriately
 * - Preserve whitespace in certain contexts
 *
 * This makes it a powerful tool for ensuring that user-generated content is safe
 * to display while maintaining the desired formatting and structure.
 */

import sanitizeHTML from 'sanitize-html'

export function sanitizeIP(data) {
    const sanitizeData = {}
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            sanitizeData[key] = sanitizeHTML(value, {
                allowedTags: ['b'],
                allowedAttributes: {}
            })
        } else {
            sanitizeData[key] = value
        }
    }
    return sanitizeData
}