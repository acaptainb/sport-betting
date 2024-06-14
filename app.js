let bank = 100

const players = [
    {
        name: "D'Marcus Williums",
        teamNumber: 0,
        emoji: '🏃‍♂️',
        skill: 10
    },
    {
        name: "Tyroil Smoochie-Wallace",
        teamNumber: 0,
        emoji: '🤾‍♂️',
        skill: 30
    },
    {
        name: "Jackmerius Tacktheratrix",
        teamNumber: 0,
        emoji: '🏇',
        skill: 88
    },
    {
        name: "Javaris Jamar Javarison-Lamar",
        teamNumber: 0,
        emoji: '🏌️‍♀️',
        skill: 15
    },
    {
        name: "D'Pez Poopsie",
        teamNumber: 0,
        emoji: '🏋️‍♂️',
        skill: 77
    },
    {
        name: "D'Jasper Probincrux III",
        teamNumber: 0,
        emoji: '🏌️‍♂️',
        skill: 21
    },
    {
        name: "Leoz Maxwell Jilliumz",
        teamNumber: 0,
        emoji: '🤾',
        skill: 5
    },
    {
        name: "Hingle McCringleberry",
        teamNumber: 0,
        emoji: '🏂',
        skill: 99
    },
    {
        name: "L'Carpetron Dookmarriot",
        teamNumber: 0,
        emoji: '🧘‍♀️',
        skill: 50
    },
    {
        name: "Xmus Jaxon Flaxon-Waxon",
        teamNumber: 0,
        emoji: '🚶‍♀️',
        skill: 1
    },
    {
        name: "Saggitariutt Jefferspin",
        teamNumber: 0,
        emoji: '🏋️‍♀️',
        skill: 61
    },
    {
        name: "Quatro Quatro",
        teamNumber: 0,
        emoji: '🤺',
        skill: 34
    },
    {
        name: "X-Wing @Aliciousness",
        teamNumber: 0,
        emoji: '🏄',
        skill: 71
    },
    {
        name: "Bisquiteen Trisket",
        teamNumber: 0,
        emoji: '🧜‍♂️',
        skill: 76
    },
    {
        name: "Scoish Velociraptor Maloish",
        teamNumber: 0,
        emoji: '🤸',
        skill: 47
    },
    {
        name: "Donkey Teeth",
        teamNumber: 0,
        emoji: '⛹️‍♀️',
        skill: 23
    },
    {
        name: "T.J. A.J. R.J. Backslashinfourth V",
        teamNumber: 0,
        emoji: '🕴️',
        skill: 58
    },
    {
        name: "Firstname Lastname",
        teamNumber: 0,
        emoji: '💃',
        skill: 99
    },
    {
        name: "Dan Smith",
        teamNumber: 0,
        emoji: '🧍‍♂️',
        skill: 3
    },
    {
        name: "Tiger",
        teamNumber: 0,
        emoji: '🐅',
        skill: 100
    },
]






function getRandomTeamNumber() {
    const randomTeamNumber = Math.ceil(Math.random() * 2)
    console.log("random member", randomTeamNumber);
    return randomTeamNumber
}

function assignNumber() {
    for (let i = 0; i < players.length; i++) {
        const randomTeamNumber = getRandomTeamNumber()
        const player = players[i];
        player.teamNumber = randomTeamNumber
    }

}



function drawTeam1() {
    let MemberEmojis = ''
    const TeamOneMembers = players.filter((player) => player.teamNumber == 1)
    TeamOneMembers.forEach((player) => MemberEmojis += player.emoji)

    const memberLineupElement1 = document.getElementById('teamOneEmojis')
    memberLineupElement1.innerHTML = MemberEmojis
}



function drawTeam2() {
    let MemberEmojis = ''
    const TeamTwoMembers = players.filter((player) => player.teamNumber == 2)
    TeamTwoMembers.forEach((player) => MemberEmojis += player.emoji)

    const memberLineupElement = document.getElementById('teamTwoEmojis')
    memberLineupElement.innerHTML = MemberEmojis
}

assignNumber()
drawTeam1()
drawTeam2()

function betTeamOne() {
    const TeamOneMembers = players.filter(player => player.teamNumber == 1)
    const TeamTwoMembers = players.filter(player => player.teamNumber == 2)


    let TeamOneSkills = 0
    TeamOneMembers.forEach(player => { TeamOneSkills += player.skill })
    let TeamTwoSkills = 0
    TeamTwoMembers.forEach(player => { TeamTwoSkills += player.skill })


    if (TeamOneSkills > TeamTwoSkills) {
        bank += betAmount
    }
}


function betTeamTwo() {

}