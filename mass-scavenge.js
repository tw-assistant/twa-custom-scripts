// @name Mass Scavenge
// @param(string) groupId=0
// @param(boolean) spear=true
// @param(boolean) sword=true
// @param(boolean) axe=true
// @param(boolean) light=true
// @param(boolean) heavy=true
// @param(number) spearBackup=100
// @param(number) swordBackup=100
// @param(number) axeBackup=100
// @param(number) lightBackup=100
// @param(number) heavyBackup=100
// @param(number) runTime_off=4
// @param(number) runTime_def=4
// @step {gameUrl}/game.php?screen=place&mode=scavenge_mass&group={groupId}

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + parseInt(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    $.getScript('https://cdn.jsdelivr.net/gh/jonas-duarte/bkp-shinko-to-kuma/massScavenge.js');
    await delay(5000)

    $("input#spear").prop('checked', TWA.spear ? true : false);
    $("input#sword").prop('checked', TWA.sword ? true : false);
    $("input#axe").prop('checked', TWA.axe ? true : false);
    $("input#light").prop('checked', TWA.light ? true : false);
    $("input#heavy").prop('checked', TWA.heavy ? true : false);

    $("input#spearBackup").val(TWA.spearBackup)
    $("input#swordBackup").val(TWA.swordBackup)
    $("input#axeBackup").val(TWA.axeBackup)
    $("input#lightBackup").val(TWA.lightBackup)
    $("input#heavyBackup").val(TWA.heavyBackup)

    $("#timeSelectorHours").click()
    await delay(500)
    $(".runTime_off").val(TWA.runTime_off)
    $(".runTime_def").val(TWA.runTime_def)


    $('input#sendMass').click()

    await delay(10000);

    const sendButtons = $('input#sendMass')
    for (let a = 0; a < sendButtons.length; a++) {
        const sendButton = sendButtons[a];
        sendButton.click()
        await delay(3000, 1000)
    }
    resolve()
})
