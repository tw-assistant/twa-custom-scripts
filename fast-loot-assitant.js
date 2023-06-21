// @name Fast Loot Assistant
// @param(string) groupId=0
// @param(string) firstVillage=0
// @enum profiles Default
// @enum click A,B,C,Skip
// @enum keyPress A,B,C,M
// @param(enum:keyPress) keyPress=M
// @param(boolean) ifRowMatchesProfile1=true
// @param(enum:profiles) profile1=Default
// @param(enum:click) click1=Skip
// @param(boolean) ifRowMatchesProfile2=true
// @param(enum:profiles) profile2=Default
// @param(enum:click) click2=Skip
// @param(boolean) ifRowMatchesProfile3=true
// @param(enum:profiles) profile3=Default
// @param(enum:click) click3=Skip
// @param(enum:click) ifRowDoesNotMatchProfiles=Skip
// @param(enum:profiles) viewProfile=Default
// @step {gameUrl}/game.php?screen=am_farm&group={groupId}&village={firstVillage}