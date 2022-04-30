// @name Warehouse Balancer
// @param(number) waitBeforeStart=60000
// @param(number) groupId=0
// @step {gameUrl}/game.php?screen=overview&group={groupId}

$.getScript("https://shinko-to-kuma.com/scripts/WHBalancerShinkoToKuma.js");

window.alert = function() {
    console.log.apply(console, arguments);
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function automate() {
  await delay(TWA.waitBeforeStart);
  while (true) {
    await delay(1000);
    if ($("#building")[0]) $("#building").click();
    else break;
  }
}

automate();
