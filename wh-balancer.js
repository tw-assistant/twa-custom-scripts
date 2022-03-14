// @name    WH-Balancer

$.getScript("https://shinko-to-kuma.com/scripts/WHBalancerShinkoToKuma.js");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function automate() {
  await delay(5000);
  while (true) {
    await delay(1000);
    if ($("#building")[0]) $("#building").click();
    else break;
  }
}

automate();
