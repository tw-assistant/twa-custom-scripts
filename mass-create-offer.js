// @name Mass Market Offers
// @param(string) groupId=0
// @param(number) reserveMerchants=1
// @param(number) maxDistance=3
// @step {gameUrl}/game.php?screen=market&mode=mass_create_offers&group={groupId}

function delay (time, random = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time + ~~(Math.random() * random));
  });
}

new Promise(async (resolve, reject) => {
  
  const reserveMerchants = TWA.reserveMerchants || 1;
  const maxDistance = TWA.maxDistance || 3;

  const resources = {
    wood: 0,
    stone: 0,
    iron: 0,
  };

  const table = document.getElementById("offer_creation_villages");

  for (let i = 1; i < table.rows.length; i++) {
    const merchants =
      parseInt(table.rows[i].cells[3].innerText.split("/")[0]) -
      reserveMerchants;

    if (merchants > 0) {
      const resourcesContainer = table.rows[
        i
      ].cells[1].getElementsByClassName("nowrap");

      const woodContainer = resourcesContainer[0].getElementsByTagName(
        "span"
      );
      let wood = "";
      for (let y = 0; y < woodContainer.length; y++) {
        wood = wood + woodContainer[y].innerText.replace(/\D+/g, "");
      }
      resources.wood = parseInt(wood);

      const stoneContainer = resourcesContainer[1].getElementsByTagName(
        "span"
      );
      let stone = "";
      for (let y = 0; y < stoneContainer.length; y++) {
        stone = stone + stoneContainer[y].innerText.replace(/\D+/g, "");
      }
      resources.stone = parseInt(stone);

      const ironContainer = resourcesContainer[2].getElementsByTagName(
        "span"
      );
      let iron = "";
      for (let y = 0; y < ironContainer.length; y++) {
        iron = iron + ironContainer[y].innerText.replace(/\D+/g, "");
      }
      resources.iron = parseInt(iron);

      const totalResources = Object.values(resources).reduce((a, b) => a + b);
      const average = Math.round(totalResources / 3);

      const arr = Object.values(resources);
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const excess = Math.floor((max - average) / 1000);
      const lack = Math.floor((average - min) / 1000);
      let offers = lack;

      if (excess < lack) {
        offers = excess;
      }

      if (offers > merchants) {
        offers = merchants;
      }

      const qtyInputs = table.rows[i].cells[4].getElementsByTagName("input");
      qtyInputs[0].value = 1000;
      qtyInputs[1].value = 1000;

      const qtySelects = table.rows[i].cells[4].getElementsByTagName(
        "select"
      );
      qtySelects[0].value = Object.keys(resources).find(
        (key) => resources[key] === max
      );
      qtySelects[1].value = Object.keys(resources).find(
        (key) => resources[key] === min
      );

      const offerInput = table.rows[i].cells[5].getElementsByTagName("input");
      offerInput[0].value = offers;

      const distanceInput = table.rows[i].cells[6].getElementsByTagName(
        "input"
      );
      distanceInput[0].value = maxDistance;
    }

  }

  await delay(2000, 2000);

  const submitBtn = document.getElementsByClassName("btn_offer_create")[1];
  submitBtn.click();

  resolve();
})
