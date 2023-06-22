// @name Fast Loot Assistant
// @param(string) groupId=0
// @param(string) firstVillage=0
// @param(number) runnningTimeMinutes=4
// @enum templates A(3l)/B(5l/1s)/C(on)
// @param(number) maxDistance=40
// @param(enum:templates) template=A(3l)/B(5l/1s)/C(on)
// @step {gameUrl}/game.php?screen=am_farm&group={groupId}&village={firstVillage}

const TEMPLATES = {
  "A(3l)/B(5l/1s)/C(on)": {
    __jstorage_meta: {
      CRC32: {
        language: "2.3681159914",
        version: "2.3514072768",
        working: "2.1409522915",
        "profile:Default": "2.2837959586",
        profileList: "2.3063179215",
        keyPressSettings: "2.887161816",
        "profile:FarmA": "2.755605947",
        "profile:FarmB": "2.3375836517",
        "profile:FarmC": "2.3639456864",
      },
      TTL: {},
    },
    language: "en",
    version: "1.13.1 Fixed By Ibra",
    working: false,
    "profile:Default": [
      "1",
      "1",
      "distance",
      "asc",
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      "hide",
      "",
      false,
      false,
      false,
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      "hide",
      "",
      false,
      "hide",
      "",
      true,
      true,
      true,
      "",
      true,
      "",
      true,
    ],
    profileList: ["Default", "FarmA", "FarmB", "FarmC"],
    keyPressSettings: {
      a_code: 65,
      a_char: "A",
      b_code: 66,
      b_char: "B",
      c_code: 67,
      c_char: "C",
      master_code: 77,
      master_char: "M",
      skip_code: 83,
      skip_char: "S",
      left_code: 37,
      left_char: "â†",
      right_code: 39,
      right_char: "â†’",
      priorityOneEnabled: true,
      priorityOneProfile: "FarmB",
      priorityOneButton: "B",
      priorityTwoEnabled: true,
      priorityTwoProfile: "FarmA",
      priorityTwoButton: "A",
      priorityThreeEnabled: true,
      priorityThreeProfile: "FarmC",
      priorityThreeButton: "C",
      defaultButton: "Skip",
    },
    "profile:FarmA": [
      "1",
      "1",
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      "hide",
      "",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "3",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      "hide",
      String(TWA.maxDistance),
      false,
      "hide",
      "",
      true,
      true,
      false,
      "",
      true,
      "4",
      true,
    ],
    "profile:FarmB": [
      "1",
      "1",
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      true,
      false,
      true,
      "greater_than",
      "5",
      true,
      "greater_than",
      "3",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      "hide",
      String(TWA.maxDistance),
      false,
      "hide",
      "",
      true,
      true,
      false,
      "",
      true,
      "4",
      true,
    ],
    "profile:FarmC": [
      "1",
      "1",
      "distance",
      "asc",
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      "hide",
      "5",
      true,
      false,
      true,
      true,
      "greater_than",
      "3",
      false,
      "greater_than",
      "3",
      false,
      "greater_than",
      "",
      false,
      "greater_than",
      "",
      "hide",
      String(TWA.maxDistance),
      false,
      "hide",
      "",
      true,
      true,
      false,
      "",
      true,
      "4",
      true,
    ],
  },
};

localStorage.setItem("jStorage", JSON.stringify(TEMPLATES[TWA.template]));

$.getScript("https://scripts.ibragonza.nl/enhancer/enhancer.js");
void 0;

function delay(time, random = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time + parseInt(Math.random() * random));
  });
}

function simulateKeyPress(character) {
  const char = character;
  const charCode = character.charCodeAt(0);
  window.onkeydown({ key: char, keyCode: charCode, which: charCode });
}

new Promise(async function (resolve) {
  await delay(3000, 1000);

  $("table.settingsTable input[type=submit][value=Apply]").click();

  await delay(500, 1000);

  const interval = setInterval(() => {
    if ($(".g-recaptcha, .captcha").is(":visible")) {
      console.log("Captcha detected");
      clearInterval(interval);
      resolve();
    }
    try {
      simulateKeyPress("M");
    } catch (error) {}
  }, 100);

  await delay(TWA.runnningTimeMinutes * 60 * 1000);

  clearInterval(interval);

  resolve();
});
