# Qlik Sense Bootstrap mashup template

A version of [this](https://getbootstrap.com/docs/4.5/examples/dashboard/) template that has been turned into a Qlik Sense mashup template.
This repository contains an empty template and two pre-configured demo mashups.

## Installation

Use the _Code_ button to download this repository as a zip archive, then extract the archive on your PC.
The archive contains three directories, one for each demo mashup and the mashup template.

To install a demo mashup or the template in Qlik Sense Desktop, copy the respective directory to `%userprofile%\Documents\Qlik\Sense\Extensions`.

To deploy a mashup or template to a Qlik Sense Enterprise server, zip the directory and upload it through the QMC, as described [here](https://help.qlik.com/en-US/sense-developer/September2020/Subsystems/Extensions/Content/Sense_Extensions/Howtos/deploy-extensions.htm#anchor-2).
After importing the zip file, you must open the `.js` file in the mashup editor and update the app id to an app id that exists on your server.

## Mashup template

The mashup template can be used to [create new mashups](https://help.qlik.com/en-US/sense-developer/June2020/Subsystems/Dev-Hub/Content/Sense_Dev-Hub/Howtos/dev-hub-mashups-getting-started.htm) in the Qlik Sense mashup editor.
Please be aware that the template has been built for demo purposes only; it has only been tested in Google Chrome and is probably not ready for production.

The template uses the following libraries:

- Bootstrap CSS 4.5: https://getbootstrap.com/
- Qlik Sense Capability APIs: https://qlik.dev/apis/javascript/capabilities

## Demo mashups

The demo mashups are built with the template above.
They use visualizations from the _Consumer Sales_ demo app, which can be downloaded [here](https://demos.qlik.com/qliksense/ConsumerGoodsSales).

The difference between the mashups is how their navigation works:
The `multi-page-demo` mashup contains separate HTML documents for each page, whereas the `single-page-demo` mashup contains all pages in the same HTML document and uses JavaScript to show/hide the relevant sections when a navigation link is clicked.
Neither approach is ideal for a large mashup with many pages or complex interactions; to build such a mashup, I recommend using a JavaScript framework such as React or Angular.
