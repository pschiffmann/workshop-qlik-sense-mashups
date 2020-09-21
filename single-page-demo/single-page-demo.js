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

  //get objects -- inserted here --
  app.getObject("QV01", "NrHfp");
  app.getObject("QV02", "ajMAEu");
  app.getObject("QV03", "bJSZttJ");
  app.getObject("QV04", "MEAjCJ");
  app.getObject("QV05", "qamd");
  app.getObject("QV06", "vCNaSe");
  app.getObject("QV07", "bsxkrg");
  app.getObject("QV08", "TqwwFf");
  app.getObject("QV09", "akDGX");
  app.getObject("QV10", "KnASd");
  app.getObject("QV11", "BqZP");
  app.getObject("QV12", "CLfuxL");
  app.getObject("QV13", "KzjmJ");
  app.getObject("QV14", "vvAbDn");

  //create cubes and lists -- inserted here --

  function activatePage() {
    for (const el of document.querySelectorAll(".nav-link")) {
      if (el.href === window.location.href) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
    for (const el of document.querySelectorAll("main[data-page]")) {
      if (el.dataset.page === (window.location.hash || "#/dashboard")) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
    qlik.resize();
  }

  activatePage();
  window.addEventListener("hashchange", activatePage);
});

async function applyUserSelections(app) {
  const response = await fetch("user-selections.json");
  const selections = await response.json();
  for (const [fieldName, values] of Object.entries(selections)) {
    app.field(fieldName).selectValues(values);
  }
}
