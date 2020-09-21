var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);
var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
  identity: "lizardis-workshop"
};
require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});

require(["js/qlik"], function (qlik) {
  //callbacks -- inserted here --
  //open apps -- inserted here --
  var app = qlik.openApp("Consumer Sales.qvf", config);
  applyUserSelections(app);

  app.getObject("current-selections", "CurrentSelections");

  switch(window.location.pathname) {
    case "/extensions/multi-page-demo/multi-page-demo.html":
      //get objects -- inserted here --
      app.getObject("QV01", "NrHfp");
      app.getObject("QV02", "ajMAEu");
      app.getObject("QV03", "bJSZttJ");
      app.getObject("QV04", "MEAjCJ");
      app.getObject("QV05", "qamd");
      app.getObject("QV06", "vCNaSe");
      app.getObject("QV07", "bsxkrg");
      app.getObject("QV08", "TqwwFf");
      break;
    case "/extensions/multi-page-demo/sales-and-margin.html":
      app.getObject("QV01", "akDGX");
      app.getObject("QV02", "KnASd");
      app.getObject("QV03", "BqZP");
      app.getObject("QV04", "CLfuxL");
      app.getObject("QV05", "KzjmJ");
      app.getObject("QV06", "vvAbDn");
      break;
  }

  //create cubes and lists -- inserted here --
});

async function applyUserSelections(app) {
  const response = await fetch("user-selections.json");
  const selections = await response.json();
  for (const [fieldName, values] of Object.entries(selections)) {
    app.field(fieldName).selectValues(values);
  }
}
