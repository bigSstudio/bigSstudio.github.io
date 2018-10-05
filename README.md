# bigSstudio.github.io

# Summary

## Resources:
 - Provided AI document with layout,
 - Bootstrap 4.0 (partial, only css),
 - SVG images exported from AI,
 - Fonts downloaded from Web, converted to web-ready via FontSquirrel (couldn't find extended version, so US-latin font is used, depreciating č, ć, š, ž, đ),
 - Handmade starter pack (with Bootstrap included and folder structure being made up front),
 - Prepros.

## Procedure:

 - AI document analysis and defining sections and elements,
 - SVG, typography and colors export,
 - Coding static, semantic HTML,
 - Writing modular SCSS (following best practices and naming conventions:
  -a-b/(c)-uvw-xyz - first letter is abbr for project name, second one/two letters are type of component (section, subsection, component, utility, styled element, and last one/two words are name of the element),
 - Adding quick jQuery script for modal.

## Details:

 - HTML: Having in mind responsiveness of test website, I made solid HTML structure, clean, with proper indentation. Also, having in mind the complexity of some images included, I enabled user-scaling meta tag.
 - CSS: CSS is written in SCSS and compiled using Prepros GUI and processed using POSTCSS plugin for autoprefixing and minification. This website being fairly simple, didn't require too much work about layout, so Bootstrap is not that needed, but I included it (both .css and .js files), even though I didn't use it's .js files at all.
 - JS: JavaScript is written in jQuery, and the only thing I wrote in it is a trigger for modal, and it's handling (submit, switch content and close). This script is not optimized at all, because my focus was on UX and UI of the contact form itself.

## Summary:

 - [x] Responsive from 320px vw to 2500+px vw,
 - [x] Retina ready,
 - [x] Pixel perfect,
 - [x] Stripped of unnecessary .css and .js files for fast loading, the ones included are mainly for demonstration purposes,
 - [x] All .css, including fonts is cross browser compatible and has support for all major modern browsers up to 5 last versions.
 - [x] Contact form included in a form of modal, triggered by clicking on a "Prijavi se" Call-To-Action, and it contains all fileds required: Full name, UIN, Multiple city choice dropdown, thank you message and it's styled to match the rest of the site perfectly. Also, modal, and form inside are completely responsive, as in first check mark.
Form is not functional, and "Thank you" message can be seen clicking on "Prijavi se" submit button regardless is the form filled properly or not.


Website is pushed to GitHub for versioning, and hosted on github pages.
