// @name Check Incoming Attacks and send discord message
// @step {gameUrl}/game.php?screen=overview
// @param(string) discordWebhook=https://discord.com/api/webhooks/...

if ($("#incomings_amount").length > 0) {
    const { id, name } = TribalWars.getGameData().player;

    let incomingAmount = null;
    try {
        incomingAmount = parseInt($("#incomings_amount")[0].textContent.trim());
    } catch (error) { }

    if (incomingAmount) {
        const message = {
            "content": `Incoming attacks: ${incomingAmount}`,
            "username": `${name} (${id})`,
        }

        fetch(TWA.discordWebhook, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        })
    }
}