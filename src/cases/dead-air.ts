import type { MysteryCase } from '../types/case';

export const deadAir: MysteryCase = {
  id: 'c02',
  slug: 'dead-air',
  title: 'Dead Air',
  tagline: 'For fifteen minutes one November night, a small radio station broadcast nothing at all. Someone in the building knew why.',
  era: 'Astoria, Oregon — November 1987',
  difficulty: 'intermediate',
  estimatedMinutes: 40,
  dossier: {
    reference: 'Astoria Police Department — Detective Division',
    caseNumber: 'APD-87-1142',
    victim: 'Louis “Lou” Castellano, age 47. Overnight host of “Lou After Dark”, KVRX 1340 AM.',
    location: 'Studio B, KVRX studios, second floor, 1480 Marine Drive, Astoria.',
    incidentDate: 'Early morning of Thursday 19 November 1987, between about 2:25 and 2:50 a.m.',
    discoveryTime: '5:50 a.m., by the morning host arriving for his shift.',
    causeOfDeath: 'Blunt force trauma to the back of the head. The scene was arranged to suggest a fall against the console. The medical examiner has identified two separate impacts.',
    leadInvestigator: 'Detective Carol Nyberg, Astoria PD.',
    assisting: 'Clatsop County Medical Examiner; Oregon State Police crime lab (Portland).',
    status: 'OPEN. Six persons of interest, all with keys or alarm codes to the building. The station’s own equipment recorded the night: a logger tape, an alarm printer, and a telephone system log.',
    synopsis:
      'KVRX runs live overnight with one host alone in the building. At 2:31 a.m. the station went silent — fifteen minutes of dead air, which at a 24-hour station is an emergency. At 2:46 the pre-recorded automation block started playing. Lou Castellano was found three hours later on the floor of Studio B with a head wound, apparently having fallen against the console. The console edge does not match the wound. The medical examiner says he was struck twice. The back-door alarm was disarmed and re-armed during the silence by someone with a staff code.',
    backgroundLocation:
      'KVRX occupies the second floor of a brick building above a marine supply store. One stairway from the street door leads to a lobby, the newsroom, two studios (A, the main air studio; B, the smaller production studio Lou preferred), the sales office, the GM’s office and the engineering room. A back stairway leads to the parking lot behind the building; its door is on an alarm keypad that logs every code to a paper printer in engineering. Each staff member has a personal four-digit code.',
    backgroundGathering:
      'This was not a social evening. The building emptied between 10 p.m. and 1:40 a.m. as the evening staff left one by one, each departure recorded by the alarm. Lou had an argument with the program director at 11 p.m., a visit from the general manager at 1 a.m., and a phone call from his wife at 2:10. He had told two people that week that he had “a Monday-morning meeting that was going to cost somebody their job.”',
    extraRecords: [
      { label: 'Weather', value: 'Heavy rain from 10 p.m. to 4 a.m.; parking lot flooded at the drain.', status: 'confirmed' },
      { label: 'Toxicology', value: 'No alcohol, no drugs. Coffee.', status: 'confirmed' }
    ]
  },
  suspects: [
    {
      id: 'whitlock',
      name: 'Dana Whitlock',
      age: 39,
      role: 'Program director',
      hue: 300,
      bio: 'Whitlock came from a Portland station two years ago with a mandate to make KVRX sound modern. She has been trying to replace Lou’s live overnight show with a syndicated satellite feed that would cost less than his salary. Lou fought it in public, on air, and won a reprieve from the owner. The two argued in Studio B at 11 p.m. on the night he died, loudly enough that the news director heard it through the wall. Whitlock left the building at 11:40, by the alarm log.',
      stakes: 'Her format plan, her credibility with the owner, and a job she was close to losing to a man who had been there twenty years.',
      openQuestion: 'Her alarm code shows her leaving at 11:40 and never returning. Nothing shows where she went.'
    },
    {
      id: 'kessler',
      name: 'Marty Kessler',
      age: 58,
      role: 'Chief engineer',
      hue: 190,
      bio: 'Kessler built most of KVRX himself and keeps it alive with parts from a shed behind his house. He installed the alarm system, maintains the logger that records everything the station broadcasts, and carries a pager for transmitter faults. He holds a master code that opens any door and is known to disarm the back door for cigarette breaks and forget to re-arm it. He is honest about equipment and evasive about people. He was paged to the transmitter site at 3:30 a.m. and says he was home before that.',
      stakes: 'He is the only person who truly understands the machines that recorded the night, which makes him either the best witness or the one person who could rewrite the record.',
      openQuestion: 'The alarm log is a paper strip from his printer. Could it be altered?'
    },
    {
      id: 'gwen',
      name: 'Gwen Castellano',
      age: 45,
      role: 'Estranged wife of the victim',
      hue: 345,
      bio: 'Gwen moved to Portland in August after twenty years of marriage and filed for divorce in October. The marriage ended over money and absence; Lou worked nights and spent days asleep or at the track. There is a life insurance policy from 1981 that names her. She called the station request line at 2:10 a.m. on the night — a call Lou took on air, briefly, before going to a record. She says she was calling to settle a date for the lawyers. She says the call lasted four minutes.',
      stakes: 'A policy that pays double for accidental death, and a divorce settlement that would have paid far less.',
      openQuestion: 'The call is on the logger tape. What was said after the microphone went off?'
    },
    {
      id: 'osterman',
      name: 'Pete “Ozzy” Osterman',
      age: 29,
      role: 'Morning host; found the body',
      hue: 60,
      bio: 'Osterman hosts the morning show that follows Lou’s and has wanted Lou’s better-paid slot since he arrived. The two did not get on; Lou called him “the weather boy” on air. Osterman drinks at the Portway Tavern most nights and came in early on the 19th — at 5:41, nearly an hour before his usual time — saying he could not sleep. He found Lou on the floor of Studio B, called the police from Studio A, and then, by his own account, went on the air at six because “somebody had to.”',
      stakes: 'Lou’s show, Lou’s salary, and a reputation for being the last one to leave a bar.',
      openQuestion: 'Why come in an hour early on the one night it mattered?'
    },
    {
      id: 'tanner',
      name: 'Roy Tanner',
      age: 51,
      role: 'Sales manager',
      hue: 20,
      bio: 'Tanner has sold airtime at KVRX for nineteen years and was an on-air host there in the early seventies, which he mentions often. He knows every business owner on the coast and writes most of the station’s commercial copy himself. Sales at a 1,000-watt AM station are a thin living, and Tanner’s billings have held up better than anyone else’s during a bad decade. He has a boat, a second mortgage, and a desk drawer that is always locked. He says he was home asleep by midnight.',
      stakes: 'Nineteen years of client relationships, and whatever is in the locked drawer.',
      openQuestion: 'He has a fresh cut across his right palm that he attributes to a filing cabinet.'
    },
    {
      id: 'pike',
      name: 'Rosalind Pike',
      age: 34,
      role: 'General manager; owner’s daughter',
      hue: 240,
      bio: 'Pike runs KVRX for her father, who owns it and three other small stations, and has been quietly negotiating to sell it to a Seattle group. A sale depends on clean books. She came into the station at 1 a.m., alone, and spent forty minutes in Studio B with Lou — a visit nobody else knew about until the alarm log revealed it. She left at 1:40, arming the alarm with her own code. She is precise, careful and has told the police less than she knows.',
      stakes: 'A sale worth more than her father’s other three stations combined, which a scandal would kill.',
      openQuestion: 'What did she and Lou talk about for forty minutes at one in the morning?'
    }
  ],
  story: [
    {
      paragraphs: [
        'KVRX 1340 is a thousand watts of AM radio on the Columbia River, licensed in 1948 and sounding, most days, as if it had not noticed the time passing. It occupies the second floor of a brick building on Marine Drive above a marine supply store, and at night, when the store is dark and the rain comes in off the bar, the only light on the block is the red bulb over the station’s street door and the blue glow of Studio B.',
        'Lou Castellano had held the overnight shift for eleven years. Midnight to six, Monday through Friday, alone in the building: the phones, the records, the news at the top of the hour from the wire, and in between, Lou talking to fishermen and night-shift nurses and the sleepless of three counties. He was good at it in the way that people who have stopped trying to be anywhere else are good. He preferred Studio B, the small production room, because the chair was better and because the main studio was wired to Marty Kessler’s automation rack, which Lou regarded as a machine built to replace him.',
        'He was not wrong. Dana Whitlock, the program director, had spent a year trying to swap the overnight show for a satellite feed out of Los Angeles — a smooth voice, no salary, no sick days. Lou had fought it on the air, which was unprofessional and effective, and the owner had told Dana to leave it alone until spring. In Studio B at eleven o’clock on the eighteenth of November, Dana told Lou that spring was coming. The news director heard most of it through the wall.'
      ]
    },
    {
      paragraphs: [
        'The building emptied the way it did every night, one keypad beep at a time. The back door opens onto a stair to the parking lot, and Marty Kessler had wired it to a keypad that printed every code and every arming to a strip of paper in the engineering room. Dana left at 11:40. The news director at 11:55. By midnight it was Lou, the rain, and the request line.',
        'At one in the morning the keypad beeped again. Rosalind Pike, who ran the station for her father and had not been in the building after dark in a year, came up the back stairs and into Studio B and shut the door. She stayed forty minutes. What they talked about she did not at first say. Lou went to a long music block while she was there — twenty-two minutes of album sides, which was unlike him — and came back on the air at 1:45 sounding, to the two listeners who later called the police, “like somebody had told him something.”',
        'At 2:10 the request line lit and Lou took it on air. It was Gwen, his wife, calling from Portland. He said her name, said “not on the air, Gwen,” and went to a record. The logger tape records the record. It does not record what either of them said after the microphone went off. Gwen says they agreed a date for the lawyers. The phone log says the call lasted four minutes and eleven seconds.',
        'At 2:24 the keypad beeped. At 2:31, in the middle of a Gordon Lightfoot song, the station went silent.'
      ]
    },
    {
      paragraphs: [
        'Dead air at a 24-hour station is a small emergency. The transmitter keeps running, the carrier stays up, and anyone with a radio hears a faint hiss where the music was. It lasted fifteen minutes. At 2:46 the automation rack in Studio A started the overnight cart block — pre-recorded commercials and station IDs that Marty had loaded for emergencies — and KVRX was back on the air with a voice that was not Lou’s. At 2:52 the keypad beeped, and the alarm was armed.',
        'Pete Osterman came in at 5:41, early, with a headache and a bag of doughnuts, and found the station playing a commercial for a tyre store for what he later said was the third time. He went to Studio A, found it empty with the automation running, and went down the hall to Studio B.',
        'Lou was on the floor on his left side between the chair and the console, his head toward the door, one headphone cup under his cheek. There was blood on the console edge and on the carpet. The coffee cup on the desk was full and cold. Osterman called the police from Studio A and then, because the tyre commercial had started a fourth time, sat down at the board and went on the air at six.',
        'Detective Carol Nyberg came up the back stairs at 6:20 and looked at the console edge, which was rounded aluminum, and at the wound, which was not, and decided that KVRX had not had an accident. Then she went to the engineering room and tore off the alarm printer strip, because a building that writes down who comes and goes is a building that has already half-solved the case.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'Position of the body and the wound',
      kind: 'tested',
      body: 'Lou lay on his left side between the chair and the console, head toward the door. The medical examiner identifies two impacts to the back of the skull, both from a heavy object with a flat circular face roughly four inches across. The console edge is rounded aluminum and cannot have produced either. Time of death: between 2:20 and 3:00 a.m.'
    },
    {
      id: 'CS-02',
      icon: 'layout',
      heading: 'Blood on the console edge',
      kind: 'found',
      body: 'A smear of blood on the console edge at the height of a seated man’s head, and drops on the carpet beneath it. The smear is a transfer, not an impact pattern: blood was placed on the edge after the injury. The chair was pushed back as if the occupant had risen or fallen. The staging is deliberate but unskilled.'
    },
    {
      id: 'CS-03',
      icon: 'tool',
      heading: 'The microphone stand base, Studio A',
      kind: 'tested',
      body: 'Studio A’s boom microphone stands on a cast-iron base — a flat disc, four inches across, with a threaded column. It had been wiped, but the lab recovered blood and two hairs matching the victim from the thread. The base weighs nine pounds. It had been returned to its stand and the stand set back at the board, slightly out of its usual position by the tape marks on the floor.'
    },
    {
      id: 'CS-04',
      icon: 'audio',
      heading: 'The logger tape',
      kind: 'found',
      body: 'KVRX records its own output continuously on a slow-speed reel in engineering. The night’s reel shows normal programming until 2:31:07, when the Gordon Lightfoot track stops mid-bar — not faded, cut, as if the channel was closed. Silence until 2:46:20, when the automation cart block starts. Someone physically started the automation from Studio A; the system does not start itself.'
    },
    {
      id: 'CS-05',
      icon: 'door',
      heading: 'The alarm printer strip',
      kind: 'found',
      body: 'The back-door keypad logs user codes by staff number. For the night: 23:40 ARM user 04 (Whitlock); 23:55 ARM user 07 (news director); 01:00 DISARM user 02 (Pike); 01:40 ARM user 02; 02:24 DISARM user 03; 02:52 ARM user 03; 05:41 DISARM user 06 (Osterman). User 03 is Roy Tanner. The street door was deadbolted from inside all night.'
    },
    {
      id: 'CS-06',
      icon: 'document',
      heading: 'Lou’s air-log, hidden in the cart rack',
      kind: 'found',
      body: 'Behind the carts in Studio B’s rack, a spiral notebook in Lou’s hand: a personal log of every commercial actually aired on his shift for the past five months, with times. On the inside cover: “Monday 9 a.m. — show R.P.” Its contents are analysed in EV-03. Lou kept it hidden; only someone who knew it existed would have looked, and nobody did.'
    },
    {
      id: 'CS-07',
      icon: 'weather',
      heading: 'Wet marks on the back stairs',
      kind: 'found',
      body: 'Rain fell steadily from 10 p.m. to 4 a.m. The back stairs show dried water marks and grit from the flooded parking lot leading up and down, in addition to Osterman’s at 5:41 (still wet when police arrived). The earlier marks had dried, consistent with entry at least two hours before 6:20. No usable shoe pattern.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What was not disturbed',
      kind: 'inference',
      body: 'Lou’s wallet, watch and car keys were on him. The cash box in the sales office was locked and full. Nothing in Studio B was taken except, possibly, something the killer looked for and did not find: the cart rack had been pulled forward from the wall, but the notebook behind it was still there.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'tanner',
      synopsis: 'I was home by midnight and asleep by one. My code? Then somebody has my code.',
      interviewedAt: '19 November 1987, 2:00 p.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'I was at the station until about nine-thirty doing copy for the Christmas push, then I went home. My wife will tell you I was in by ten, we watched the news, and I was asleep by midnight. I did not come back. I don’t come back at night. I haven’t pulled an overnight since 1974.',
        'My alarm code is on the back of a card in my wallet. I have told Marty for years the system is a joke — anybody who’s watched me punch it in knows it. Lou knew it. Half the sales staff know it. If it says my number at two in the morning then somebody used my number, and I’d start with the people who were in the building.',
        'Lou and I got along. He read my copy and he read it well. We had words about him running spots late and skipping the ones he didn’t like, which is a sales manager’s complaint everywhere in America. There was nothing in it.',
        'The hand? Filing cabinet in the sales office. The top drawer sticks. I did it Tuesday, and I have a bandage receipt from the Rite Aid if you want it.'
      ],
      claims: ['Left the station at about 9:30 p.m.; home by 10; asleep by midnight.', 'Did not return to the building.', 'Cut his hand on a filing cabinet on Tuesday 17 November.']
    },
    {
      id: 'WS-02',
      suspectId: 'whitlock',
      synopsis: 'Yes, we fought. Then I went and ate pancakes about it, and then I went home.',
      interviewedAt: '19 November 1987, 11:00 a.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'I told Lou at eleven that the owner had agreed to trial the satellite feed on weekends starting in February. He took it the way he took everything, which was personally and at volume. He said I was a Portland girl who had never sold a tyre in her life. He said he had a Monday meeting that would make my format problems look small. I did not ask what he meant because I did not care.',
        'I left at 11:40. I set the alarm. I drove to the Pig ’n Pancake on Marine Drive and sat in a booth until about 12:30 eating things I should not eat, and the waitress will remember me because I tipped badly. Then I went home to Alderbrook and went to bed. I live alone.',
        'I have the alarm code. I did not use it after 11:40. The printer will say so.',
        'I wanted his show off the air. I did not want him off the planet. If he had died in his sleep I would have felt relieved and ashamed and I would have told you so. He did not die in his sleep.'
      ],
      claims: ['Argued with Lou in Studio B at about 11 p.m.', 'Left at 11:40 (alarm); at the Pig ’n Pancake until about 12:30.', 'Home alone in Alderbrook from about 12:45.']
    },
    {
      id: 'WS-03',
      suspectId: 'kessler',
      synopsis: 'The strip is the strip. I can’t change what it already printed, and I wouldn’t.',
      interviewedAt: '19 November 1987, 9:30 a.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'The keypad logs every code to a thermal printer in my room. It prints as it happens; there is no buffer and no way to edit a line that is already on the paper except to cut the paper, which would show. Codes are four digits. Each staff member has a user number and a code they chose. The master code is 00 and it is mine. It does not appear on last night’s strip.',
        'The logger is a two-track reel that records the air signal at slow speed, twenty-four hours a reel. It records what the transmitter put out. It cannot record what happened in a room.',
        'The automation rack in A will run a cart block if someone presses START. It will not start itself. Lou never used it; he thought it was there to take his job, and it was. Anyone who has worked a board at this station knows which button it is. That includes Roy, who was a jock here before I came, Dana, Pete, Lou, me. It does not include Rosalind or Gwen.',
        'I was home from eight. My pager went at 3:30 for a low-power alarm at the transmitter and I drove out to Tongue Point and reset a breaker. I was not at the studio until Nyberg called me. Yes, I sometimes leave the back door disarmed for a smoke. Not last night; I wasn’t there.'
      ],
      claims: ['Home from 8 p.m.; paged at 3:30 a.m.; at the transmitter site until about 4:30.', 'The alarm printer cannot be edited after printing.', 'Automation must be started manually.']
    },
    {
      id: 'WS-04',
      suspectId: 'gwen',
      synopsis: 'I called from Portland at 2:10 to fix a date with the lawyers. He was alive, and angry, and that is the last I heard of him.',
      interviewedAt: '19 November 1987, by telephone, 4:00 p.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'I called the request line because it is the only number he answers at night. I know he takes it on air; I did not think about it. He said my name and went to a record and then he picked up the handset off air. We talked about the lawyers’ date — the fourth of December — and about the house, and he said he was tired and that he had “bigger fish on Monday” and I said he always had bigger fish on Monday. It was about four minutes. I hung up on him, I will admit that.',
        'I was in my apartment on Hawthorne in Portland. It is a hundred miles. The call went out on my phone; the phone company can tell you where it came from. My neighbour heard me through the wall and banged on it, so you can ask her too.',
        'The policy is from 1981. I had forgotten it existed until the lawyer asked. I am not going to pretend I am grieving the marriage. I am grieving Lou, which is different, and which is harder.'
      ],
      claims: ['Called the request line at 2:10 a.m. from Portland; call lasted about 4 minutes.', 'Was in Portland all night (neighbour).', 'Divorce hearing scheduled for 4 December.']
    },
    {
      id: 'WS-05',
      suspectId: 'osterman',
      synopsis: 'I left the Portway at two, went home, couldn’t sleep, came in early. Then I found him.',
      interviewedAt: '19 November 1987, 7:00 a.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'I was at the Portway from about ten till they closed. Danny the bartender will tell you I left at two, give or take. I drove home — it’s four minutes — and my girlfriend was awake, we talked, I didn’t sleep. Around five I gave up and came in. I had doughnuts. I punched in at — whatever the printer says, twenty to six.',
        'The tyre spot was playing when I got to the top of the stairs. It plays in the emergency block. I thought: Lou’s gone to the can and the block kicked in, which is not how the block works, but I wasn’t thinking. I went to A and nobody was there and the block was running, so I went to B.',
        'He was on the floor. I knew right away. I didn’t touch him. I called you from A and then I sat down and did the six o’clock because the block was on its fourth pass and I couldn’t stand it.',
        'Lou and I weren’t friends. He thought I was a lightweight and I thought he was a dinosaur. I wanted his slot. I did not want it like this.'
      ],
      claims: ['At the Portway Tavern until about 2:00 a.m. (bartender).', 'Home by about 2:05 with girlfriend until about 5:20.', 'Arrived at the station at 5:41 (alarm).']
    },
    {
      id: 'WS-06',
      suspectId: 'pike',
      synopsis: 'I came in at one to ask Lou for his notebook. He told me I could have it on Monday, in front of witnesses.',
      interviewedAt: '19 November 1987, 1:00 p.m.',
      interviewer: 'Det. Nyberg',
      paragraphs: [
        'I should have told you this at seven this morning and I am telling you now. I am negotiating a sale of KVRX to a group in Seattle. Their accountants have been through our billings and found that we invoice more commercial minutes than a station our size can air. I asked Roy about it in October and he gave me an answer I did not believe. Lou had been keeping his own log of what actually went out on his shift. He told me so in September, to make a point about Roy running spots late. I remembered it.',
        'I came in at one because it was the only time Lou was alone and I could ask him without the building knowing. He said yes, he had the log, and yes, it showed what I thought it showed, and no, I could not have it — he was going to put it on my desk Monday at nine with my father in the room, because he did not trust me to use it against Roy instead of burying it to save the sale. He was probably right about me. We argued. I left at 1:40.',
        'I did not tell Roy what Lou had. I did not tell anyone. I went home to my husband and did not sleep.',
        'I have never worked a board. I do not know which button starts the automation.'
      ],
      claims: ['Entered at 1:00 a.m. and left at 1:40 (alarm).', 'Lou refused to hand over his air-log before Monday 9 a.m.', 'Told no one about the log.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'log',
      title: 'Alarm system printer strip, 18–19 November',
      summary: 'Every disarm and arm, by user number, with Kessler’s notes on who holds which number.',
      stamp: 'Engineering',
      recordType: 'Access control log',
      origin: 'KVRX engineering room, thermal printer',
      custodian: 'Det. Nyberg; interpreted by M. Kessler',
      date: '19 November 1987',
      status: 'Original strip in evidence; intact, no cuts',
      sections: [
        { label: 'User numbers', body: '01 Castellano, 02 Pike, 03 Tanner, 04 Whitlock, 05 Kessler (personal), 06 Osterman, 07 news director, 08–11 part-time staff, 00 master (Kessler).' },
        { label: 'The night', body: '23:40 ARM 04. 23:55 ARM 07. 01:00 DISARM 02. 01:40 ARM 02. 02:24 DISARM 03. 02:52 ARM 03. 05:41 DISARM 06. No other events. No master-code events. No failed attempts.' },
        { label: 'Integrity', body: 'The strip is continuous; the paper-feed sprocket marks are unbroken and the thermal printing is uniform. Kessler confirms there is no means of inserting or deleting an entry after printing. The printer clock was checked against the logger tape clock and agrees within one minute.' },
        { label: 'Who knew code 03', body: 'Tanner states his code is written in his wallet and that “half the staff” have seen him enter it. Whitlock and Osterman say they have never watched anyone enter a code. Pike says she did not know Tanner’s code. Kessler says he knows every code but did not use any.' },
        { label: 'Conclusion', body: 'Someone entered the building with Tanner’s code at 2:24, during the window of death, and left with it at 2:52, after the automation was started. Either Tanner entered, or someone who knew his code chose to use it rather than their own — and the only people who did not have codes of their own are Gwen Castellano and outsiders.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'audio',
      title: 'Logger tape analysis',
      summary: 'What the station broadcast, minute by minute, from 2:00 to 3:00 a.m.',
      stamp: 'Engineering',
      recordType: 'Broadcast recording review',
      origin: 'KVRX logger reel #311',
      custodian: 'OSP crime lab, audio section',
      date: '21 November 1987',
      status: 'Complete',
      sections: [
        { label: '2:10–2:14', body: 'Lou takes the request line on air (“Gwen — not on the air, Gwen”), starts a record, and his microphone channel closes. The record plays through. He returns at 2:14 sounding clipped, back-announces, starts the next track.' },
        { label: '2:24–2:31', body: 'Normal programming. At 2:29 Lou introduces a Gordon Lightfoot track and says, “Back after this with the two-thirty news.” It is the last thing he says on the tape.' },
        { label: '2:31:07', body: 'The track stops mid-bar. Not a fade; the channel is cut — consistent with the turntable channel being closed at the board or the Studio B output being killed. A faint click precedes the cut.' },
        { label: '2:31–2:46', body: 'Silence: carrier only. No microphone, no room sound. Studio B’s microphone was off; whatever happened in the room was not broadcast.' },
        { label: '2:46:20', body: 'The automation cart block starts from Studio A: a station ID, then the tyre store spot. The block runs correctly, which means START was pressed with the A board routed to air — two actions, in the right order, by someone who knew the rack.' },
        { label: 'Lou’s record', body: 'In 23 months of logger reels sampled, Lou’s longest unexplained dead air was 28 seconds. He did not leave the board silent. The fifteen minutes are not his.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'ledger',
      title: 'Lou’s air-log against the sales affidavits',
      summary: 'What was billed to clients versus what the overnight show actually aired.',
      stamp: 'Financial',
      recordType: 'Document comparison',
      origin: 'Castellano notebook (CS-06); KVRX billing files',
      custodian: 'Det. Nyberg with the Seattle group’s auditor (by consent of Pike)',
      date: '24 November 1987',
      status: 'Preliminary; referred for fraud investigation',
      sections: [
        { label: 'The notebook', body: 'Five months of entries, every commercial aired between midnight and six with its time, in Lou’s hand, with his own comments (“late — again”, “cart missing”). It is meticulous and, cross-checked against the logger tape for three sample nights, accurate.' },
        { label: 'The affidavits', body: 'Clients are billed on sworn affidavits of performance, signed by the sales manager, listing the spots aired. For the overnight daypart, affidavits signed by Tanner list 412 spots in the five months. Lou’s log records 131 of them. The other 281 were billed and never aired.' },
        { label: 'Where the money went', body: 'For nine clients the billing was by cash or cheque made out to “KVRX Sales” and deposited to an account that is not the station’s. The auditor estimates $38,000 over the five months and more before. Pike had asked Tanner about overbilling in October.' },
        { label: 'Who knew', body: 'Lou told Pike about the notebook in September and refused to hand it over at 1:40 a.m. on the 19th. Lou told Whitlock and Gwen he had “a Monday meeting”. Pike says she told no one. Whether Lou told Tanner directly is unknown — but Tanner complained in his statement that Lou “skipped the spots he didn’t like”, which is the exact dispute the notebook documents.' },
        { label: 'Conclusion', body: 'The notebook would have ended Tanner’s career and exposed a felony. It was due on the GM’s desk at 9 a.m. Monday. The cart rack it was hidden behind had been pulled from the wall by someone who did not find it.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'timeline',
      title: 'Telephone system log and alibi verification',
      summary: 'Calls in and out, and where each person can be placed by someone other than themselves.',
      stamp: 'Compiled',
      recordType: 'Movement and communications timeline',
      origin: 'KVRX PBX printout; Pacific Northwest Bell; interviews',
      custodian: 'Det. Nyberg',
      date: '23 November 1987',
      status: 'Verified where marked',
      sections: [
        { label: 'Gwen Castellano', body: 'Request-line call at 2:10:12, duration 4:11, originating from a Portland exchange (PNB, verified). Her neighbour confirms shouting through the wall at about 2:15 (verified). She could not have been in Astoria before 4 a.m.' },
        { label: 'Dana Whitlock', body: 'Pig ’n Pancake waitress confirms a woman matching her description in a booth from about 11:50 to 12:30 and remembers the tip (verified). Home alone thereafter (unverified). Her code shows no re-entry.' },
        { label: 'Pete Osterman', body: 'Portway bartender confirms departure at 2:00–2:05 (verified). Girlfriend confirms home from about 2:10 until he left at about 5:20 (verified, with the usual caution). Alarm 5:41.' },
        { label: 'Marty Kessler', body: 'Pager company confirms a page at 3:31 (verified). Transmitter site log shows breaker reset at 4:02 in his hand. His whereabouts between 8 p.m. and 3:31 rest on his wife (verified, same caution). No master-code event.' },
        { label: 'Rosalind Pike', body: 'Alarm 1:00 in, 1:40 out. Husband confirms home by 1:55 (verified, same caution). Her code shows no re-entry.' },
        { label: 'Roy Tanner', body: 'Wife confirms he was home at 10 p.m. and that she went to bed at 11; she sleeps with the door shut and “did not hear the car” (verified as far as it goes). His code: 2:24 in, 2:52 out. The sales office phone shows an outgoing call at 2:49 to a Seaside number, 31 seconds — the home of Tanner’s largest cash client. Tanner says he does not know who made it.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'lab',
      title: 'Medical examiner and trace report',
      summary: 'The two blows, the weapon, the staging, and the cut on a hand.',
      stamp: 'Laboratory',
      recordType: 'Autopsy and trace evidence',
      origin: 'Clatsop County ME; OSP crime lab',
      custodian: 'Dr. A. Rasmussen; OSP lab',
      date: '22 November 1987',
      status: 'Complete',
      sections: [
        { label: 'Injuries', body: 'Two impacts to the occiput, the second overlapping the first, from a flat circular face about four inches in diameter with a central raised boss — matching the Studio A microphone base and its threaded column. Death within minutes. No defensive injuries: he was struck from behind, seated.' },
        { label: 'The weapon', body: 'The base was wiped with something absorbent; fibres of blue paper towel of the type in the station washroom remain in the thread with the victim’s blood and hair. The threaded column edge is sharp enough to cut a palm gripping it to swing.' },
        { label: 'The staging', body: 'Blood on the console edge is a transfer from a cloth or hand, applied after death. The intent was to make the scene read as a fall. Whoever did it did not know that a rounded edge cannot produce a flat wound.' },
        { label: 'Tanner’s hand', body: 'Examined by consent on 19 November: a two-inch laceration across the right palm, estimated 12–36 hours old, with a clean edge. The Rite Aid receipt he produced is dated 19 November, 8:14 a.m., not Tuesday. The filing cabinet drawer in the sales office has no edge capable of the cut.' },
        { label: 'What this corrects', body: 'The first account given by everyone — that Lou fell — is wrong. He was killed by a person who knew where the heaviest object in the building was and put it back afterwards.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'tanner',
      title: 'Answering machine tape, Tanner residence',
      subtitle: 'Seized under warrant 20 November; outgoing and incoming messages transcribed',
      format: 'chat',
      messages: [
        { from: 'Caller (Seaside client) → Tanner', side: 'left', text: 'Roy, it’s Vern. Your GM called me asking about my invoices. I told her what you said to tell her. I don’t like it. Call me.', time: 'Tue 17 Nov, 4:50 p.m.' },
        { from: 'Caller (Vern) → Tanner', side: 'left', text: 'Roy. It’s three in the morning and my phone just rang from your station and nobody said anything. What is going on over there.', time: 'Thu 19 Nov, 2:55 a.m.' },
        { from: 'Tanner → Vern (recorded on Vern’s machine, obtained by consent)', side: 'right', text: 'Vern, it’s Roy. Pocket dial, I’m sorry, I was at the station late doing copy. Nothing’s going on. Don’t talk to anybody about the invoices till I see you.', time: 'Thu 19 Nov, 7:30 a.m.' }
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'pike',
      title: 'Pike’s notes to herself, GM desk diary',
      subtitle: 'Desk diary, October–November; produced by Pike',
      format: 'note',
      messages: [],
      noteText: [
        'Oct 22. Seattle auditors: overnight daypart billing “physically impossible”. Asked R.T. He says make-goods and bonus spots. He is lying and he knows I know.',
        'Nov 12. If I bring this to Dad the sale dies. If I don’t bring it the sale dies later and I go with it. Lou has the actual log. He told me in Sept.',
        'Nov 18. Go in tonight. Ask Lou. Do not tell Roy.'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'whitlock',
      title: 'Whitlock’s memo to the owner, unsent',
      subtitle: 'Typed draft found in the program director’s out-tray',
      format: 'note',
      messages: [],
      noteText: [
        'Mr. Pike — I spoke with Lou tonight about the February weekend trial. He is opposed, as expected, and told me he will be raising “a far more serious matter” with Rosalind on Monday that will, in his words, “put the format question in perspective.” I don’t know what he means and he would not say. I thought you should hear it from me before you hear it from him. — D.W., 11/18, 11:35 p.m.'
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'gwen',
      title: 'Lou’s request-line call with Gwen, off-air portion',
      subtitle: 'Gwen’s account and Lou’s desk pad, reconciled; the logger did not record it',
      format: 'chat',
      messages: [
        { from: 'Gwen → Lou', side: 'right', text: 'December fourth, ten o’clock, Schwartz’s office. Just say yes.', time: '2:11 a.m.' },
        { from: 'Lou → Gwen', side: 'left', text: 'Yes. Fine. I can’t do this tonight, Gwen, I’ve got Roy on my desk and Rosalind on my back and I need to get to Monday.', time: '2:12 a.m.' },
        { from: 'Gwen → Lou', side: 'right', text: 'You always have a Monday.', time: '2:13 a.m.' },
        { from: 'Lou → Gwen', side: 'left', text: 'This one’s real. If anything happens to me, there’s a notebook behind the carts in B.', time: '2:14 a.m.' }
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'tanner',
      questions: [
        {
          id: 'Q-tanner-1',
          prompt: 'Your code was used at 2:24 and 2:52. A call went from the sales office to your client Vern at 2:49. Vern’s machine recorded it. Who was in your office?',
          answer:
            'I have told you I was home. If my code was used, it was used by somebody who wanted it to look like me, and if my phone was used, same answer. Lou had a key to every office in that building and a grudge against me the size of his overnight ratings. Maybe he was in my office. Maybe he called Vern to stir something. Then somebody came in and — I don’t know what happened. I know what happened to me: I woke up, I went to work, and I found out I was the only man in Clatsop County whose name was on a piece of paper. I told Vern pocket dial because I didn’t want him panicking about invoices on the day a man died. That was a mistake. It wasn’t a confession.'
        },
        {
          id: 'Q-tanner-2',
          prompt: 'Lou’s notebook shows 281 spots billed on your affidavits that never aired. Did you know he was keeping it?',
          answer:
            'I knew Lou kept notes. Every jock keeps notes; they use them to complain. I did not know he had five months of it or that he was going to put it on Rosalind’s desk. Look — overbilling on overnight is a grey area at every small station in this country. You run make-goods, you run bonus spots, you shift a schedule and the paperwork catches up or it doesn’t. Rosalind’s Seattle people see a number and call it a felony because they want to pay less for the station. That is what this is about. I was going to sort it with Rosalind. I did not need to kill a disc jockey to sort a billing dispute.'
        },
        {
          id: 'Q-tanner-3',
          prompt: 'The Rite Aid receipt you offered for the bandage is dated Thursday morning at 8:14, not Tuesday. And the drawer you blame has no edge. How did you cut your hand?',
          answer:
            'Then I had the day wrong. I cut it on something in the sales office and I bought a bandage when I went past the Rite Aid on Thursday morning because the one from home had come off. I don’t know what the lab thinks a drawer edge looks like. There is metal all over that office. Detective, I understand how this looks. I was a jock at that station. I know where the mic base is, I know which button starts the rack, I have the code, and I have a hand. I also have a wife who says I was home, and nineteen years at that company, and no reason — no reason — to hurt a man over commercials.'
        }
      ]
    },
    {
      suspectId: 'whitlock',
      questions: [
        {
          id: 'Q-whitlock-1',
          prompt: 'You wrote the owner at 11:35 that Lou had a “far more serious matter” for Monday. You say you did not care what it was. Why write it down?',
          answer:
            'Because I was covering myself. When a host tells you he is going to the owner’s daughter with something bigger than your format, you make sure the owner hears it from you first and sounds like you were being helpful. It is office politics and I am not proud of it. I did not send it. I sat in a pancake house and decided that whatever Lou had was not my fight and that I would rather lose the format argument than win it by getting tangled in his. I did not know it was about Roy. If I had, I might have cheered.'
        },
        {
          id: 'Q-whitlock-2',
          prompt: 'You know the board. You know which button starts the automation. You left at 11:40 and were home alone from 12:45. Who can say you stayed there?',
          answer:
            'Nobody. I live alone and I do not have a dog. I also do not have Roy Tanner’s alarm code — I have my own, and the printer shows I used it once, to leave. If I had come back I would have had to use a code, and I do not know anyone else’s. I have never stood behind Roy while he punched his in; I avoid standing behind Roy generally. You are right that I know the rack. So does every person who has sat at that board, and one of them is in the ground, and one of them used Roy’s number.'
        },
        {
          id: 'Q-whitlock-3',
          prompt: 'What exactly did Lou say about the Monday meeting?',
          answer:
            'He said: “You think you have a format problem. Monday at nine I am putting something on Rosalind’s desk with her father in the room that will make the format problem look like a weather report.” I said something like, “Good for you, Lou,” and he said, “Somebody at this station is going to lose a lot more than a time slot.” He did not say who. I assumed he meant Rosalind, because he hated the idea of the sale. Now I think he meant exactly what the notebook says he meant. For the record, I wish he had told me. I would have helped him.'
        }
      ]
    },
    {
      suspectId: 'kessler',
      questions: [
        {
          id: 'Q-kessler-1',
          prompt: 'You built the alarm. You hold the master code. Convince us the strip is honest.',
          answer:
            'The strip is thermal paper on a sprocket feed. Every event prints as it happens with a timestamp from the panel clock, which I checked against the logger clock for Nyberg — they agree to the minute. To fake an entry you would have to cut the paper and splice, and you can see every sprocket hole in that strip. To remove an entry, same thing. I could have walked in on my master code and it would have printed 00 at the time I did it. It didn’t. I know what that means about me and I know what it means about user 03. I don’t like Roy much. I like the truth more.'
        },
        {
          id: 'Q-kessler-2',
          prompt: 'The dead air starts with a click. What does that tell you?',
          answer:
            'That somebody closed a channel. Studio B feeds the air chain through a module in the rack; if you take the B output off the chain, or if somebody at the B board drops the turntable pot to zero, you get a click and then nothing. A record ending or a turntable stalling sounds different — the needle drags. This was a hand on a fader or a switch. Then fifteen minutes of nothing, and then somebody walked to A, routed A to air, and pressed START on the rack. That is a person who has stood at both boards. Lou wouldn’t have touched the rack if the building was on fire. Pete knows it. Dana knows it. Roy knows it from 1974 — I showed him the new rack myself when we put it in, because he wanted to know what was taking his copy to air.'
        },
        {
          id: 'Q-kessler-3',
          prompt: 'You habitually leave the back door disarmed. Was it disarmed earlier that evening?',
          answer:
            'No, and the strip proves it: Dana armed it at 11:40, the news kid armed it at 11:55, Rosalind armed it at 1:40. Every time somebody left, it was armed behind them. That means whoever came in at 2:24 had to use a code; there was no propped door, no smoke break, none of my sloppiness to hide behind. I’ll own my bad habits when they’re relevant. That night they weren’t. The door was tight and the only way through it was four digits, and the four digits were Roy’s.'
        }
      ]
    },
    {
      suspectId: 'gwen',
      questions: [
        {
          id: 'Q-gwen-1',
          prompt: 'Lou told you about the notebook behind the carts. Who did you tell?',
          answer:
            'No one. I hung up on him. I was angry that he would use a line like “if anything happens to me” to end an argument about a court date; it was the kind of thing he did, make himself the hero of a crisis so he did not have to have an ordinary conversation. I went to bed. In the morning the Astoria police called me and I sat on the floor of my kitchen for an hour. Then I told Detective Nyberg about the notebook because it was the first thing I remembered and because I understood, for the first time in twenty years, that he had been telling me the truth.'
        },
        {
          id: 'Q-gwen-2',
          prompt: 'The policy pays double for accidental death. The scene was staged as an accident.',
          answer:
            'Yes, I have been told that. I have also been told that I was a hundred miles away on a telephone that the phone company can trace, with a neighbour pounding on the wall. I did not know there was a double indemnity clause until the lawyer read it to me on Friday; I did not know there was a policy until October. If you are asking whether somebody staged it to make it look like an accident for my benefit, you are asking whether someone in that station loved me enough to kill my husband and arrange my finances. Detective, nobody in that station knew my name.'
        },
        {
          id: 'Q-gwen-3',
          prompt: 'Lou said he had “Roy on my desk and Rosalind on my back”. Had he talked about Roy before?',
          answer:
            'For years. Roy ran spots late, Roy’s copy was garbage, Roy sold things that could not be delivered and then it was Lou’s fault when the client listened at two in the morning and heard a different ad. That was all noise. In September it changed. He said Roy was billing air that never went out and that he was writing it down. He said it the way he said things he was actually going to do, which was quietly. I told him to be careful. He said Roy was a salesman, not a gangster. I have thought about that sentence every day since Thursday.'
        }
      ]
    },
    {
      suspectId: 'osterman',
      questions: [
        {
          id: 'Q-osterman-1',
          prompt: 'The bartender has you out at two, your girlfriend has you home at ten past. The building was entered at 2:24. That is fourteen minutes.',
          answer:
            'And it is a four-minute drive from my place to the station, so I had ten minutes to drive back, go up, do — that, and then what, drive home again and sit with Tracy until five and come back? With Roy’s code, which I do not have and have never seen, instead of mine, which I do have? I was drunk, Detective. I was not that organised. Tracy will tell you I was on the couch complaining about Lou until about three and then I shut up and stared at the ceiling. I came in early because I was already awake and because I had this stupid idea that if I was at the board when he came off he might say something decent to me for once.'
        },
        {
          id: 'Q-osterman-2',
          prompt: 'You went on the air at six with a body in the next room. Explain that.',
          answer:
            'The tyre spot was on its fourth pass. I had already called you. I could sit in the hall and listen to the station I work at fall apart on the air, or I could go in A and read the weather and the river stages like a human being and let people drive to work. I didn’t mention Lou. I didn’t touch anything in B. I didn’t go back in B. The block had been playing for three hours; nobody in three counties was listening to KVRX anyway. It wasn’t cold. It was the only thing in the building I knew how to fix.'
        },
        {
          id: 'Q-osterman-3',
          prompt: 'Who in the building could you see using Roy’s code instead of their own?',
          answer:
            'Nobody. That’s the thing. If you had your own code you’d use it without thinking — I did, at twenty to six, with a dead man upstairs and no idea yet. You use somebody else’s code when you have planned to. Dana wouldn’t know Roy’s. Marty knows everybody’s but he’d just use the master, he doesn’t care who knows he was there, he’s there all the time. Rosalind — maybe she knows it, she’s the boss. But she was there at one with her own code and came back at 2:24 with Roy’s? Why? The simple answer is the man whose code it was. I know you don’t want it to be simple. Sometimes it is.'
        }
      ]
    },
    {
      suspectId: 'pike',
      questions: [
        {
          id: 'Q-pike-1',
          prompt: 'You asked Tanner about overbilling in October. Then you went to Lou for the proof at one in the morning. Did Tanner know?',
          answer:
            'I did not tell him. I have asked myself whether he could have worked it out. In October I asked him why the overnight daypart billed more minutes than exist in a night. He gave me a speech about make-goods. Then on the eighteenth, in the afternoon, he asked me — casually, at the coffee machine — whether “the Seattle people” had asked for any logs. I said the auditors had everything they needed. He said, “Not Lou’s. Lou doesn’t keep logs.” And I said nothing. I think my face said something. I have run that moment back fifty times and I think he knew by the time I left the kitchen.'
        },
        {
          id: 'Q-pike-2',
          prompt: 'Lou refused to give you the notebook. If he had handed it over, would it have reached your father?',
          answer:
            'Honestly? I do not know. I wanted it in my hands so that I could decide, and Lou saw that and would not let me. He said: “You will put it in a drawer until the ink dries on the sale and then you will fire Roy quietly and nobody will ever know, and I did not spend five months in that chair at three in the morning for nobody to ever know.” He was right. I was ashamed, and I left. If I had taken it, it would have been in my safe and he would be alive, and I would have been exactly the person he said I was.'
        },
        {
          id: 'Q-pike-3',
          prompt: 'You have never run a board. Who at this station could have started the automation?',
          answer:
            'Marty, obviously. Pete, Dana, Lou himself. Roy — he was on the air here before I was born and he still wanders into A to hear his copy go out. I could not do it. I would not know which switch sends A to air, let alone the sequence. I have thought about whether I would be sitting here accusing a man I know if the sale were not at stake, and the answer is yes, because I was in that room at one in the morning with Lou and I know what he knew. I just did not believe anybody would act on it in a single night.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-fraud', label: 'To stop Lou’s air-log from exposing years of billing fraud on Monday morning' },
      { id: 'm-format', label: 'To remove the host who was blocking the station’s new format' },
      { id: 'm-insurance', label: 'To collect on a life insurance policy with an accidental-death clause' },
      { id: 'm-sale', label: 'To protect the sale of the station from a scandal' },
      { id: 'm-slot', label: 'To take over the overnight show' }
    ],
    methodOptions: [
      { id: 'h-base', label: 'Struck twice from behind with the Studio A microphone base, then the scene arranged as a fall against the console' },
      { id: 'h-fall', label: 'He fell and struck the console edge during an argument' },
      { id: 'h-poison', label: 'Something in the coffee, then a fall' },
      { id: 'h-outside', label: 'An intruder came up the unlocked back stairs and robbed the station' }
    ],
    selectableEvidenceIds: ['CS-01', 'CS-03', 'CS-04', 'CS-05', 'CS-06', 'CS-08', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'MSG-04', 'WS-06', 'Q-kessler-2', 'Q-pike-1'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'tanner',
    motiveOptionId: 'm-fraud',
    methodOptionId: 'h-base',
    decisiveEvidenceIds: ['EV-01', 'EV-02', 'EV-05', 'MSG-01', 'EV-03'],
    reveal: 'Roy Tanner came back to the station with his own alarm code at 2:24, killed Lou with the Studio A microphone base, searched Studio B for the notebook he never found, started the automation to cover the silence, and left at 2:52.',
    reconstruction: [
      'Tanner had been billing clients for commercials that never aired for at least five months and pocketing the cash from nine of them. The Seattle auditors had noticed the arithmetic; Rosalind Pike had asked him about it in October. On the afternoon of the eighteenth he fished at the coffee machine — “Lou doesn’t keep logs” — and read in Pike’s face that Lou did, and that she was going to get them. He went home, waited for his wife to sleep, and drove back through the rain.',
      'He did not think about the alarm. He had punched his own code into that keypad for years and did it again without a thought at 2:24; a man planning a crime uses someone else’s code, and a man who is simply going back to the office to fix a problem uses his own. He went to Studio B. Lou was seated at the board with a Lightfoot track running and the two-thirty news in front of him. Tanner wanted the notebook. Lou, who had refused it to Pike an hour before with her father’s name as a condition, refused it to Tanner with no conditions at all.',
      'Tanner went to Studio A, unscrewed the nine-pound microphone base — cutting his palm on the threaded column — came back, and struck Lou twice from behind. Lou’s hand or the base caught the turntable fader: the click and the silence at 2:31:07. Tanner searched the room, pulling the cart rack forward, and did not think to look behind the carts. He smeared blood on the console edge to make a fall of it. He wiped the base with washroom towel and screwed it back on its stand in A.',
      'Fifteen minutes of dead air is a thing a radio salesman cannot leave behind him: a client might be listening. So he routed A to air and pressed START on the rack Marty had shown him, and the tyre spot went out. Then, in his own office, with the phone in his cut hand, he began to dial his biggest cash client — the man whose invoices Pike had been asking about — and hung up after half a ring. Vern’s answering machine took the silence at 2:55. Tanner armed the door behind him with his own code at 2:52, bought a bandage at 8:14, and told the police the cut was from Tuesday.'
    ],
    chronology: [
      { time: 'Wed 18 Nov, afternoon', event: 'Tanner asks Pike whether Seattle wants logs; her face tells him Lou has one.', refs: ['Q-pike-1'] },
      { time: '11:00–11:40 p.m.', event: 'Whitlock and Lou argue; Lou mentions a Monday meeting. Whitlock leaves and drafts an unsent memo.', refs: ['WS-02', 'MSG-03'] },
      { time: '1:00–1:40 a.m.', event: 'Pike asks Lou for the notebook; he refuses until Monday at nine with her father present.', refs: ['WS-06', 'EV-01'] },
      { time: '2:10–2:14 a.m.', event: 'Gwen calls from Portland. Off air, Lou tells her where the notebook is.', refs: ['MSG-04', 'EV-04'] },
      { time: '2:24 a.m.', event: 'Back door disarmed with user 03 (Tanner).', refs: ['EV-01', 'CS-05'] },
      { time: '2:31 a.m.', event: 'Lou struck twice; the turntable channel is cut. Dead air begins.', refs: ['EV-02', 'CS-01', 'EV-05'] },
      { time: '2:31–2:46 a.m.', event: 'Studio B searched; rack pulled from wall; scene staged as a fall; base wiped and returned to A.', refs: ['CS-08', 'CS-02', 'CS-03'] },
      { time: '2:46 a.m.', event: 'Automation started from Studio A.', refs: ['EV-02', 'Q-kessler-2'] },
      { time: '2:49 a.m.', event: 'Sales office phone dials the Seaside client; Vern’s machine records a silent call at 2:55 by his clock.', refs: ['EV-04', 'MSG-01'] },
      { time: '2:52 a.m.', event: 'Door armed with user 03.', refs: ['EV-01'] },
      { time: '5:41 a.m.', event: 'Osterman arrives and finds the body.', refs: ['WS-05'] },
      { time: '8:14 a.m.', event: 'Tanner buys a bandage at Rite Aid.', refs: ['EV-05'] }
    ],
    evidenceChain: [
      { title: 'Access: his own code', body: 'The alarm strip is unbroken and shows user 03 in at 2:24 and out at 2:52, with no master-code use and no propped door. Tanner’s only defence is that someone else used his number — but everyone else in the building had a number of their own, and the one person who did not, Gwen, was in Portland.', refs: ['EV-01', 'CS-05', 'Q-kessler-3', 'EV-04'] },
      { title: 'Capability: the board and the base', body: 'Starting the automation needed someone who had worked both studios; Kessler had personally shown Tanner the rack. The microphone base was wiped and returned by someone who knew it was the heaviest object in the building. Its threaded column cuts a palm; Tanner’s palm was cut, and his receipt for the bandage is from the morning after, not Tuesday.', refs: ['EV-02', 'Q-kessler-2', 'CS-03', 'EV-05'] },
      { title: 'Contradiction: the call to Vern', body: 'The sales-office phone dialled Tanner’s largest cash client during the dead air. Tanner told Vern it was a “pocket dial” from working late at the station — an admission he was there — hours after telling police he had never returned.', refs: ['EV-04', 'MSG-01', 'Q-tanner-1'] },
      { title: 'Motive: Monday at nine', body: '281 spots billed and never aired, $38,000 diverted, and a notebook due on the GM’s desk in front of the owner on Monday morning. Lou had told three people it would cost someone their job. Tanner’s own statement complains about the exact dispute the notebook proves.', refs: ['EV-03', 'CS-06', 'MSG-02', 'WS-01'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Rosalind Pike', body: 'She had the most to lose from a scandal and was in Studio B at one o’clock, but she left at 1:40 with her own code, her husband places her home by 1:55, and she cannot operate a board. She hid her visit out of shame about the sale, not guilt about the death.', refs: ['EV-01', 'EV-04', 'Q-pike-3'] },
      { title: 'Dana Whitlock', body: 'She fought with Lou and knows the automation, but her code never re-entered, she does not know Tanner’s, and a waitress places her eating pancakes until 12:30. Her unsent memo is office politics, not a plan.', refs: ['EV-01', 'EV-04', 'MSG-03'] },
      { title: 'Marty Kessler', body: 'He could have forged nothing: the strip is continuous and his master code is absent. His pager and the transmitter log place him at Tongue Point after 3:31, and nothing places him at the studio before.', refs: ['EV-01', 'EV-04', 'Q-kessler-1'] },
      { title: 'Gwen Castellano', body: 'The call came from a Portland exchange with a neighbour banging on the wall. The accident staging looked like it served her policy, but she did not know the clause existed and no one at the station knew her.', refs: ['EV-04', 'Q-gwen-2'] },
      { title: 'Pete Osterman', body: 'Bartender and girlfriend leave him a fourteen-minute gap in which he would have had to plan, acquire Tanner’s code, kill, stage, search, start the rack and drive home drunk. He used his own code at 5:41 without thinking — the behaviour of a man who had not been planning anything.', refs: ['EV-04', 'Q-osterman-1', 'Q-osterman-3'] }
    ],
    redHerringResolutions: [
      { title: 'The “fall” against the console', body: 'The staging pointed toward an accident, and therefore toward Gwen’s double-indemnity policy. It was simply the only story a frightened salesman could think of, and the rounded edge gave it away.', refs: ['CS-02', 'EV-05'] },
      { title: 'Pike’s secret visit', body: 'A GM entering at 1 a.m. and hiding it looked like the key to the case. It was the key to the motive: it is what told Tanner, via the coffee-machine conversation, that the notebook was real and about to surface.', refs: ['WS-06', 'Q-pike-1'] },
      { title: 'Osterman arriving early', body: 'The rival who found the body an hour early is the oldest suspect in the book. He came in early because he could not sleep after an evening of complaining about Lou to his girlfriend, and his own code at 5:41 is the record of a man with nothing to hide.', refs: ['WS-05', 'EV-01'] }
    ],
    epilogue: 'Tanner was charged on 25 November after the Seaside client agreed to testify about the cash payments. The sale of KVRX collapsed; Rosalind Pike resigned and her father kept the station another nine years. Lou’s notebook was entered into evidence and later returned to Gwen, who gave it to the Clatsop County Historical Society, where it is catalogued as a record of what a small AM station actually broadcast between midnight and six in the autumn of 1987.'
  }
};
