const { app } = require("electron");
const { initSplash } = require("./windows/splash");
const { initResourceSwapper } = require("./addons/swapper");

app.on("ready", async () => {
  initSplash();
  initResourceSwapper();
});

app.on("window-all-closed", () => app.quit());
