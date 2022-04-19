// @name    WH-Balancer

$.getScript("https://shinko-to-kuma.com/scripts/WHBalancerShinkoToKuma.js");

window.alert = function() {
    console.log.apply(console, arguments);
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function automate() {
  await delay(60000);
  while (true) {
    await delay(1000);
    if ($("#building")[0]) $("#building").click();
    else break;
  }
}

automate();
