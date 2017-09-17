
export const gameAttributes = [
  {key: 'luxuryPayroll', value: 0 },
  {key: 'luxuryTax', value: 0 },
  {key: 'maxContract', value: 0 },
  {key: 'minPayroll', value: 0 },
  {key: 'salaryCap', value: 0 },
]

export const team = {
  tid: 0,
  cid: 0,
  did: 0,
  name: '',
  region: '',
  abbrev: '',
  pop: 0,
  strategy: '',
  imgURL: ''
}

const teams = [
]

export const player = {
  tid: 0,
  name: '',
  pos: '',
  hgt: 0,
  weight: 0,
  born: {
    year: 0,
    loc: ''
  },
  imgURL: '',
  contract: {
    amount: 0,
    exp: 0
  },
  draft: {
    round: 0,
    pick: 0,
    tid: 0,
    originalTid: 0,
    year: 0
  },
  college: '',
  ratings: [
    {
      hgt: 0,
      stre: 0,
      spd: 0,
      jmp: 0,
      endu: 0,
      ins: 0,
      dnk: 0,
      ft: 0,
      fg: 0,
      tp: 0,
      blk: 0,
      stl: 0,
      drb: 0,
      pss: 0,
      reb: 0,
      pot: 0,
      skills: []
    }
  ],
  injury: {
    type: 'Healthy',
    gamesRemaining: 0
  }
}

const players = [
]

export const rosterRoot = {
  startingSeason: 2017,
  gameAttributes : gameAttributes,
  teams: teams,
  players: players
}
