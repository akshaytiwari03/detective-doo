import type { MysteryCase } from '../types/case';

export const understudy: MysteryCase = {
  id: 'c05',
  slug: 'the-understudys-cue',
  title: 'The Understudy’s Cue',
  tagline: 'A leading lady drinks from a prop decanter in the second act and does not finish the scene. The show went on. So did the investigation.',
  era: 'London, West End — October 1949',
  difficulty: 'intermediate',
  estimatedMinutes: 40,
  dossier: {
    reference: 'Metropolitan Police — C Division (West End Central) — CID',
    caseNumber: 'CD-49-2218',
    victim: 'Vivienne Ashe, age 38. Actress; leading lady in “The Lantern Hour” at the Carlisle Theatre, Shaftesbury Avenue.',
    location: 'On stage, Carlisle Theatre, during Act II Scene 3 of the evening performance.',
    incidentDate: 'Tuesday 18 October 1949, at approximately 9:41 p.m.',
    discoveryTime: 'Collapsed on stage before an audience of 840; pronounced dead at St Thomas’ Hospital at 11:40 p.m.',
    causeOfDeath: 'Poisoning by a fast-acting compound, identified by the Home Office analyst, introduced into the brandy in the Act II prop decanter.',
    leadInvestigator: 'Detective Inspector Arthur Pryce, West End Central.',
    assisting: 'Home Office Analyst Dr G. Lindqvist; Det. Sgt. Nora Fell (statements).',
    status: 'OPEN. The decanter was filled, carried, left and set by four different hands in thirteen minutes of interval. Six persons of interest, all backstage.',
    synopsis:
      'In “The Lantern Hour”, Vivienne Ashe’s character pours and drinks a brandy at the top of Act II Scene 3. Miss Ashe insisted on real brandy, decanted at the interval by her dresser from a bottle in her dressing room. On 18 October the decanter was filled at 9:02, carried to the props table in the prompt corner at 9:05, left there while the assistant stage manager was called away, and set on stage at 9:15. Miss Ashe drank at 9:41 and collapsed within a minute. Her understudy finished the performance. The brandy bottle in the dressing room is clean. The poison was in the decanter.',
    backgroundLocation:
      'The Carlisle is a 900-seat Edwardian house. Backstage: the prompt corner (stage left, where the stage manager calls the show and the props table stands), the stage-door keeper’s box, a green room, the wardrobe room, dressing rooms 1–4 on the first floor, and the manager’s office above the front of house. The furnace room is in the basement. The stage-door keeper logs all comings and goings; a theatre fireman patrols backstage during the interval.',
    backgroundGathering:
      'Act I ended at 9:00. The interval ran until 9:17. During it: the dresser filled the decanter; the ASM was called to the stage door for a telegram; the stage manager was in the prompt corner; the leading man was in dressing room 2 with the director; the understudy was in the green room; the producer was in his office. Miss Ashe had told three people that week that she would be “seeing Mr Stern on Monday about the house seats,” and had given her dresser notice over a missing brooch.'
  },
  suspects: [
    {
      id: 'crane',
      name: 'Gerald Crane',
      age: 44,
      role: 'Leading man; former husband',
      hue: 215,
      bio: 'Crane and Vivienne Ashe married in 1938 and divorced in 1946 and have gone on acting opposite each other because the public likes it. He pays her alimony under a settlement he calls punitive. She was leaving the play in November for a Rank film contract that would have made her, he says, “insufferable and solvent,” and he had asked her to renegotiate. He spent the interval in dressing room 2 with the director, going over a scene.',
      stakes: 'An alimony order that her film money would not have reduced, and a stage partnership about to end.',
      openQuestion: 'He knew exactly when she drank, and he was alone with her on stage when she did.'
    },
    {
      id: 'celia',
      name: 'Celia Marsh',
      age: 24,
      role: 'Understudy to Miss Ashe',
      hue: 320,
      bio: 'Marsh has understudied the part for seven months without going on. She was promised the role for the spring tour, then told last week that the producer wanted a name. She was in the green room during the interval with the wardrobe mistress, and in the wings from the top of Act II, as understudies are. When Miss Ashe collapsed she was in costume within four minutes and finished the play to an ovation. She is talented, poor and transparently ambitious.',
      stakes: 'A part she had been promised and then denied, which she now has.',
      openQuestion: 'She was in the prompt corner before the interval, talking to Benning. About what?'
    },
    {
      id: 'maggie',
      name: 'Maggie Doyle',
      age: 55,
      role: 'Dresser to Miss Ashe',
      hue: 160,
      bio: 'Doyle has dressed Vivienne Ashe for nine years and knows her better than her husband did. On the Friday before, Miss Ashe accused her of taking a sapphire brooch from the dressing-room table and gave her a fortnight’s notice. Doyle denies it and has stayed on, red-eyed, to work it out. She filled the decanter at 9:02 from the bottle in dressing room 1, as she did every night, and carried it down to the props table herself.',
      stakes: 'Nine years of service ending in an accusation of theft.',
      openQuestion: 'Her hands were on the bottle and the decanter. The bottle is clean.'
    },
    {
      id: 'stern',
      name: 'Leo Stern',
      age: 46,
      role: 'Producer and theatre manager',
      hue: 60,
      bio: 'Stern produces “The Lantern Hour” and manages the Carlisle for its owners. The play has not made money since July. Miss Ashe’s departure for films in November would have closed it; Stern had insured her participation for the run, a standard policy that pays out if a star is lost to illness or death. He was in his office during the interval, he says, with the box-office returns. Miss Ashe had asked to see him on Monday about house seats; he had not yet looked into why.',
      stakes: 'A failing production and an insurance policy that would cover its losses.',
      openQuestion: 'The policy pays on her death. Did he know she was about to expose a fraud in his own box office?'
    },
    {
      id: 'kettering',
      name: 'Ambrose Kettering',
      age: 60,
      role: 'Author and director',
      hue: 275,
      bio: 'Kettering wrote “The Lantern Hour” for Vivienne Ashe and directed it. He regards her departure for films as a betrayal and said so at a company meeting in terms that were repeated in the Evening Standard. He spent the interval in dressing room 2 with Crane, which Crane confirms. He rewrote the Act II brandy business a week ago so that the character drinks before, rather than after, her long speech — a change that put the poison into her an hour earlier than it would otherwise have gone.',
      stakes: 'A play that dies without her, and a grievance he had made public.',
      openQuestion: 'He moved the cue. Did he know what it would mean?'
    },
    {
      id: 'benning',
      name: 'Harold Benning',
      age: 50,
      role: 'Stage manager',
      hue: 25,
      bio: 'Benning has stage-managed at the Carlisle for twelve years and run “The Lantern Hour” since it opened in March. He calls every cue from the prompt corner with a precision the company relies on and mocks. He handles props in white cotton gloves. He is a betting man, which everyone knows, and in debt to a bookmaker in Soho, which fewer know. Fourteen house seats a week are signed out of the box office in his initials. He says he was in the prompt corner through the interval, except for a trip to the stage door with the ASM.',
      stakes: 'His job, his reputation and a debt that was being collected.',
      openQuestion: 'The stage-door keeper says only one man came for the telegram.'
    }
  ],
  story: [
    {
      paragraphs: [
        '“The Lantern Hour” had been running at the Carlisle since March and would, everyone agreed, have closed in June if it had not had Vivienne Ashe in it. Ambrose Kettering had written it for her — a drawing-room piece about a woman who discovers, over one evening, that her husband has been lying to her for twenty years — and she played it with a stillness that made the audience lean forward. The husband was Gerald Crane, who had in fact been her husband and had in fact lied to her, though for rather less than twenty years. The West End enjoyed the arrangement. The company tolerated it.',
        'The famous business came at the top of Act II Scene 3. Alone on stage, the wife crosses to a sideboard, pours a brandy from a cut-glass decanter, and drinks before her husband enters. It was cold tea for the first month. Vivienne Ashe said it looked like cold tea and asked for brandy, and after a brief argument about licensing she got it: a bottle in her dressing room, decanted every interval by her dresser Maggie Doyle into the prop decanter, carried to the props table in the prompt corner and set on the sideboard by the assistant stage manager before the curtain rose on Act II.',
        'In the prompt corner stood Harold Benning, who had run the Carlisle’s stage for twelve years and called the show with a stopwatch and a book of cues that he regarded as scripture. He wore white cotton gloves to handle properties. He was a man who knew where everything was, and when, and who had lately been seen in the stage-door alley talking to a man in a camel coat whom nobody in the company recognised and the stage-door keeper did.'
      ]
    },
    {
      paragraphs: [
        'Vivienne Ashe had been unhappy for a fortnight. She had signed with Rank and would leave the play in November, which pleased her and nobody else. She had quarrelled with Kettering, who had said in front of the company that she was abandoning the only good part she would ever have. She had quarrelled with Crane, who wanted the alimony renegotiated now that she would be rich. She had quarrelled with Maggie Doyle, over a sapphire brooch that had gone from the dressing-room table on the Friday and not come back, and had given her notice.',
        'And she had noticed something about the house seats. Every West End production holds back a block of good seats each night for the company’s guests; they are signed out of the box office by whoever wants them and are meant to be used, not sold. Vivienne, whose own guests had twice found their seats occupied by strangers who had paid a tout in the alley, had asked the box-office manager for the ledger and had seen the same initials against fourteen seats a week since the summer. She told Celia Marsh about it on the Monday. She told Maggie. She told Benning himself, on the Tuesday afternoon, in the prompt corner, that she would be seeing Mr Stern about it on Monday and that he might want to find the money before then.',
        'Act I came down at nine o’clock. Maggie Doyle filled the decanter in dressing room 1 at two minutes past, from Vivienne’s bottle, as she did every night, and carried it down the iron stairs to the props table in the prompt corner at five past, where Dickie Hale, the ASM, took it from her. At six minutes past, the stage-door keeper rang through to say there was a telegram for Mr Hale, and Hale went to fetch it. The telegram was from his mother in Leeds and said that his father was poorly. He read it twice at the stage door and talked to the keeper about trains, and came back to the corner at fourteen minutes past, and at a quarter past he carried the decanter onto the stage and set it on the sideboard.',
        'For eight minutes the decanter had stood on the props table in the prompt corner. Harold Benning was there. He says he was not; he says he went with Hale to the stage door. The theatre fireman, making his interval round, says he passed the corner at about ten past and said good evening to Mr Benning, who was standing at the props table with his gloves on and did not answer.'
      ]
    },
    {
      paragraphs: [
        'Act II began at seventeen minutes past nine. Scene 3 began at thirty-nine minutes past. Vivienne Ashe crossed to the sideboard, poured a brandy, raised it, and drank — not a sip, as the business required, but a swallow, because she had said more than once that it steadied her for the speech. She set the glass down. She began the speech. On the fourth line her voice went, and she put a hand on the sideboard, and said, quite clearly and not in the play, “Gerald,” and Crane, who was standing in the wings for his entrance, came on without his cue and caught her as she fell.',
        'Benning brought the curtain in. He called for the house doctor, who was in the stalls, and for Celia Marsh, who was in the wings where understudies stand, and said, “You’re on. Fourteen minutes.” Celia Marsh went up to dressing room 1 and came down in Vivienne Ashe’s second-act dress at four minutes to ten and finished the play. The audience, which had been told Miss Ashe was taken ill, gave her an ovation that the Standard described the next morning as “prolonged and, in the circumstances, extraordinary.”',
        'Vivienne Ashe died at St Thomas’ at twenty to midnight without speaking again. The decanter and the glass had been taken from the sideboard by Benning himself when the curtain came in and set, with his gloves on, on the props table, where Detective Inspector Pryce found them at a quarter to eleven. The bottle in dressing room 1 was three-quarters full. The analyst would find nothing wrong with it at all.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'Collapse and death',
      kind: 'tested',
      body: 'Miss Ashe swallowed a mouthful of brandy at 9:41 and collapsed within a minute. The house doctor attended on stage; she was taken to St Thomas’ and died at 11:40 p.m. The analyst identifies a fast-acting poison in the stomach contents, the glass and the decanter. The quantity in the decanter was sufficient to kill several times over; a sip would have done.'
    },
    {
      id: 'CS-02',
      icon: 'effects',
      heading: 'The decanter, the glass and the bottle',
      kind: 'tested',
      body: 'The decanter (prop, cut glass, stoppered) and the glass: poison present in both. The brandy bottle in dressing room 1, from which the decanter was filled: clean. Maggie Doyle’s own fingermarks and Vivienne’s are on the bottle. The decanter carries Doyle’s marks, Hale’s, and glove smears. The stopper has a residue on its underside: the poison was added after the stopper was first put in and the stopper replaced.'
    },
    {
      id: 'CS-03',
      icon: 'layout',
      heading: 'The prompt corner',
      kind: 'found',
      body: 'Stage left: the stage manager’s desk with the prompt book, stopwatch and cue lights; beside it the props table, where the decanter stood from 9:05 to 9:15. The corner is screened from the stage by a flat and from the wings by the fly rail. A person standing at the props table can be seen only from the pass-door corridor, along which the fireman walks.'
    },
    {
      id: 'CS-04',
      icon: 'log',
      heading: 'The stage-door keeper’s book',
      kind: 'found',
      body: 'Entries for the interval: 9:06 telegram received for Mr Hale; 9:06 rang prompt corner; 9:07 Mr Hale at the door; 9:14 Mr Hale returned backstage. The keeper, Alf Mundy, states Hale came alone, stayed talking about trains, and that Mr Benning did not come to the door at any time during the interval. Nobody entered or left the building between 8:55 and 9:20.'
    },
    {
      id: 'CS-05',
      icon: 'tool',
      heading: 'The gloves',
      kind: 'found',
      body: 'Benning handles props in white cotton gloves and keeps three pairs in his desk drawer. Two pairs were in the drawer. He wore a pair when he removed the decanter from the stage at 9:43; those are on his hands and were taken from him. The third pair is not in the building. The furnace-room stoker reports Mr Benning came down “for a warm” at about 9:50 during the confusion, which he had never done before.'
    },
    {
      id: 'CS-06',
      icon: 'document',
      heading: 'The prompt book',
      kind: 'found',
      body: 'Benning’s book records every cue and the running time of each act and interval. The interval page for 18 October reads: “Act I down 9.00. Decanter to table 9.05 (M.D.). D.H. to stage door 9.06. D.H. back 9.14. Decanter set 9.15. Act II up 9.17.” In the margin, in his hand, pressed hard: “Mon.” and a figure, “£140”.'
    },
    {
      id: 'CS-07',
      icon: 'trace',
      heading: 'Dressing room 1',
      kind: 'found',
      body: 'Miss Ashe’s dressing room: the brandy bottle on the table; her Rank contract in a drawer; a sheet of Carlisle notepaper with a list of dates and the initials “H.B.” against each, headed “House seats — ask L.S. Mon.” The sapphire brooch she accused her dresser of taking was found by police behind the radiator, where it had evidently fallen from the table.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What was not found',
      kind: 'inference',
      body: 'No poison in dressing room 1, the green room, dressing room 2, the wardrobe room or the manager’s office. No container. The poison entered the building in a pocket and left it, or went into the furnace. Nobody who was not already backstage at 8:55 could have reached the decanter.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'benning',
      synopsis: 'I went to the stage door with Dickie for his telegram. The decanter was never out of someone’s sight.',
      interviewedAt: '19 October 1949, 10:00 a.m.',
      interviewer: 'DI Pryce',
      paragraphs: [
        'I brought Act I down at nine and stayed in the corner to reset. Mrs Doyle brought the decanter down at five past and Dickie took it. Alf rang through about a telegram at six past and Dickie and I went along to the door together, because I wanted a word with Alf about the touts in the alley. We were there until about quarter past. We came back, Dickie set the decanter, I called the half and took the act up at seventeen past.',
        'I wear gloves for props; everyone knows that. I had a pair on when I took the decanter and glass off the stage after the curtain came in, because I did not want to muddle the marks on them for you. I keep three pairs. If one is missing it is in the wash at the wardrobe.',
        'Miss Ashe and I had words on Tuesday afternoon about the house seats. She had the wrong end of it. I sign seats out for the company — half of them are for Mr Crane’s friends and Mr Kettering’s. If someone is selling them in the alley it is not me.',
        'I have debts. Who hasn’t. They have nothing to do with a decanter.'
      ],
      claims: ['Went to the stage door with Hale at 9:06 and returned with him at 9:14.', 'Removed the decanter and glass from the stage in gloves after the curtain.', 'Signs out house seats for the company, not for sale.']
    },
    {
      id: 'WS-02',
      suspectId: 'crane',
      synopsis: 'I was in my dressing room with Ambrose through the interval. I caught her when she fell. I did not have to act it.',
      interviewedAt: '19 October 1949, 11:30 a.m.',
      interviewer: 'DI Pryce',
      paragraphs: [
        'Ambrose came up to my room at the interval to go over the Scene 3 entrance, which he had changed the week before and which I kept getting wrong. We were there from about two minutes past nine until the beginners’ call. My dresser was in and out. I did not go downstairs.',
        'I was in the wings for my entrance at twenty to ten. She drank — more than she should, she always did — and started the speech and then said my name, not the character’s. I went on. I have never gone on without my cue in twenty-five years.',
        'We were married. We were divorced. I pay her — paid her — more than I can afford and I asked her to be reasonable about it now that she was going to be rich, and she laughed at me. That is the whole of our quarrel. I have had worse with her and we went on stage the same night.',
        'If you want to know who hated her, ask Ambrose, who said so in front of forty people. If you want to know who needed her dead, ask Leo about his insurance. I only needed her to sign a piece of paper.'
      ],
      claims: ['In dressing room 2 with Kettering from about 9:02 to the beginners’ call.', 'Did not go downstairs during the interval.', 'Entered without his cue when she collapsed.']
    },
    {
      id: 'WS-03',
      suspectId: 'celia',
      synopsis: 'I was in the green room with Mrs Parr. Then I was in the wings. Then I was on.',
      interviewedAt: '19 October 1949, 9:00 a.m.',
      interviewer: 'Det. Sgt. Fell',
      paragraphs: [
        'I spent the interval in the green room with Mrs Parr from wardrobe, who was sewing a button on my coat for the tour that I am not going on. We talked about the tour. We talked about Mr Stern wanting a name instead of me. I did not go to the prompt corner during the interval. I was in the corner before the act, at about ten to eight, because Mr Benning wanted to go over the understudy cue sheet, which he does every week.',
        'Vivienne told me on Monday about the house seats and the initials. She was angry and she wanted someone to be angry with. I said she should tell Mr Stern. She said she would, on Monday, and that Harold had better find the money first because she was not going to let it go.',
        'When she fell I was in the wings on the prompt side, where I stand every night. Mr Benning said “you’re on, fourteen minutes” and I ran. I was in her dress in four. I finished the play. I am not going to pretend I did not want to go on. I did not want it like that.',
        'I did not touch the decanter. I have never touched the decanter. It is not an understudy’s business.'
      ],
      claims: ['In the green room with Mrs Parr through the interval.', 'In the prompt corner before the show at about 7:50 to go over cue sheets.', 'Told by Miss Ashe on Monday about the house-seats ledger.']
    },
    {
      id: 'WS-04',
      suspectId: 'maggie',
      synopsis: 'I filled it from her bottle at two minutes past, like every night, and carried it down myself. There was nothing wrong with that brandy.',
      interviewedAt: '18 October 1949, 11:50 p.m.',
      interviewer: 'DI Pryce',
      paragraphs: [
        'I filled the decanter in her room from her bottle at two minutes past nine — I always look at the clock because she liked it down by five past. I put the stopper in and carried it down the iron stairs myself and gave it to Mr Hale at the props table at five past. Mr Benning was at his desk. I went back up to get her ready for the act.',
        'The bottle was opened on Saturday. She had a glass from it on Saturday night and Monday night and so did I, Saturday, when she offered. If there had been anything in that bottle we would both be dead.',
        'She gave me notice on Friday over a brooch. I did not take it. I have dressed her nine years and never had so much as a hairpin. I stayed because I thought she would come round; she always did. Now you have found it behind the radiator and I would give anything for her to be here to be ashamed.',
        'I knew about the house seats. She told me Sunday. She said Harold was a fool and a thief and that she would have him out by Monday week. I told her to be careful what she said to a man in debt. She said she had never been careful in her life and did not propose to start.'
      ],
      claims: ['Filled the decanter at 9:02 from the dressing-room bottle; handed it to Hale at 9:05.', 'Drank from the same bottle on Saturday.', 'Was told about the house seats on Sunday.']
    },
    {
      id: 'WS-05',
      suspectId: 'stern',
      synopsis: 'I was in my office with the returns. The policy is standard. I did not know what she wanted to see me about.',
      interviewedAt: '19 October 1949, 2:00 p.m.',
      interviewer: 'DI Pryce',
      paragraphs: [
        'I spent the interval in my office above the front of house with the box-office returns, as I do every night. My secretary had gone home. The front-of-house manager looked in at about ten past nine to tell me the bars had done well. Otherwise I was alone.',
        'The production is insured against the loss of Miss Ashe for the run. It is an ordinary policy and every producer in London has one on every star. It pays if she is lost to illness or death. Yes, it pays now. It does not pay enough to cover what I have lost on this play, and it certainly does not pay enough to buy a leading lady for the tour, which is dead without her.',
        'She asked on Tuesday to see me on Monday about house seats. I assumed she wanted more of them. I had not looked at the ledger. I have looked at it now. Fourteen a week in Benning’s initials since July is a hundred and fifty seats, and if they were sold in the alley at a pound a head, somebody has had my money. I would have sacked him. I would not have needed to kill anyone.',
        'I did not go backstage during the interval. The pass door is kept locked from the front and Alf has the key.'
      ],
      claims: ['In the manager’s office throughout the interval; front-of-house manager looked in at about 9:10.', 'Insurance on Miss Ashe’s participation is a standard policy.', 'Had not examined the house-seats ledger before 19 October.']
    },
    {
      id: 'WS-06',
      suspectId: 'kettering',
      synopsis: 'I was with Gerald, teaching him an entrance he will now never make. I moved the business because it played better. God forgive me.',
      interviewedAt: '19 October 1949, 12:30 p.m.',
      interviewer: 'DI Pryce',
      paragraphs: [
        'I went up to Gerald’s dressing room at the interval because he had fluffed the Scene 3 entrance three nights running since I changed it, and I wanted it right. We were there together from two or three minutes past nine until the beginners were called. His dresser came and went.',
        'I changed the brandy business a week ago. Originally she drank after the long speech — a release. I moved it before, so that the speech came out of the brandy. It played better. It also meant that whatever was in that decanter went into her at twenty to ten instead of ten to. I did not know that. I could not have known that. I have thought about it all night.',
        'I said at the company meeting that she was abandoning the only good part she would ever have. I meant it as a tribute to the part. It was reported as a threat. She knew the difference. She laughed at me afterwards and said she would come back to it when Rank had finished with her.',
        'I did not go to the prompt corner. Benning does not like authors in his corner and I do not like Benning.'
      ],
      claims: ['In dressing room 2 with Crane from about 9:02 to the beginners’ call.', 'Changed the Act II brandy business a week earlier for dramatic reasons.', 'Did not enter the prompt corner during the interval.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'timeline',
      title: 'The thirteen minutes of interval',
      summary: 'Every hand on the decanter and every person who could reach it, from 9:02 to 9:15.',
      stamp: 'Compiled',
      recordType: 'Movement timeline',
      origin: 'Stage-door book; prompt book; fireman’s round; interviews',
      custodian: 'DI Pryce',
      date: '20 October 1949',
      status: 'Verified where marked',
      sections: [
        { label: '9:02', body: 'Doyle fills the decanter in dressing room 1 from the bottle (verified by the bottle’s cleanliness: nothing in the bottle). Stoppers it.' },
        { label: '9:05', body: 'Doyle hands the decanter to Hale at the props table. Benning at his desk (Doyle, Hale, both verified). Doyle returns upstairs; the wardrobe mistress sees her pass the wardrobe door at 9:07 (verified).' },
        { label: '9:06', body: 'Stage-door keeper rings the corner about Hale’s telegram. Hale goes to the door, alone, arriving 9:07 (keeper, verified). Benning says he went too; the keeper says he did not.' },
        { label: '9:10', body: 'Theatre fireman Jack Weir, on his interval round, passes the corner and says good evening to Benning, who is standing at the props table in gloves and does not reply (Weir, verified; he noted it because Benning always replies).' },
        { label: '9:14', body: 'Hale returns to the corner (keeper, verified). Benning there. Hale picks up the decanter and at 9:15 sets it on the sideboard on stage.' },
        { label: 'Elsewhere', body: 'Crane and Kettering in dressing room 2 (each confirms the other; Crane’s dresser confirms both present at 9:04 and 9:12, verified). Marsh in the green room with Mrs Parr 9:01–9:16 (verified). Stern in his office; front-of-house manager confirms 9:10 (verified); pass door locked (keeper, verified).' },
        { label: 'Conclusion', body: 'From 9:07 to 9:14 the decanter stood on the props table with one person beside it, and that person has given an account of his whereabouts that the stage-door keeper and the fireman both contradict.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'lab',
      title: 'Home Office Analyst’s report',
      summary: 'Where the poison was and was not, and what the stopper residue means.',
      stamp: 'Laboratory',
      recordType: 'Toxicological analysis',
      origin: 'Decanter, glass, bottle, stomach contents',
      custodian: 'Dr G. Lindqvist',
      date: '21 October 1949',
      status: 'Complete',
      sections: [
        { label: 'The bottle', body: 'Clean. Brandy of the stated brand, unadulterated. Doyle’s account that she and the victim both drank from it on earlier nights is consistent.' },
        { label: 'The decanter', body: 'The poison is dissolved throughout the brandy in the decanter. It was added to the decanter after filling. A residue on the underside of the stopper indicates the stopper was removed and replaced after the compound was introduced — most likely dropped in as a small quantity of powder or crystals, which a minute’s standing would dissolve.' },
        { label: 'The glass', body: 'Poison present, consistent with having been poured from the decanter. One swallow’s worth missing.' },
        { label: 'Time required', body: 'Removing the stopper, adding the compound and replacing the stopper takes less than fifteen seconds. Gloves would leave the smears found and no marks.' },
        { label: 'Source', body: 'The compound is one with legitimate uses in trades and photography and is obtainable with a signature at any chemist. Its source has not been traced. No container was found in the building.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'ledger',
      title: 'The house-seats ledger and Miss Ashe’s list',
      summary: 'Who signed out what, and what the victim intended to do about it.',
      stamp: 'Box Office',
      recordType: 'Ledger examination',
      origin: 'Carlisle Theatre box office; dressing room 1 (CS-07)',
      custodian: 'DI Pryce',
      date: '20 October 1949',
      status: 'Reviewed with the box-office manager',
      sections: [
        { label: 'The ledger', body: 'House seats are signed out by initials. From July to October: “H.B.” against fourteen seats a week, every week, in the best rows of the stalls. Other company members average two or three. The box-office manager says he assumed they were for the stage manager’s “trade guests”.' },
        { label: 'The alley', body: 'The stage-door keeper identifies the man in the camel coat seen with Benning as a tout known to the police, who works the Avenue. Two of Miss Ashe’s guests found their seats occupied by strangers in September; both strangers, questioned by the box office at the time, said they had paid “a man outside.”' },
        { label: 'The list', body: 'Miss Ashe’s notepaper lists twelve dates with “H.B.” against each and the heading “House seats — ask L.S. Mon.” She had copied the ledger. She told Marsh, Doyle and Benning himself what she meant to do with it.' },
        { label: 'Significance', body: 'At a pound a seat in the alley, fourteen seats a week is roughly £14 a week — enough to service a bookmaker. Benning denies selling any. The list in the dressing room and the figure “£140” in the prompt book margin are what the victim and the stage manager each thought the matter was worth.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'report',
      title: 'The furnace and the third pair of gloves',
      summary: 'What the stoker saw, and what the ash gave up.',
      stamp: 'Examined',
      recordType: 'Scene examination',
      origin: 'Carlisle Theatre furnace room',
      custodian: 'Det. Sgt. Fell; Dr Lindqvist (ash analysis)',
      date: '20 October 1949',
      status: 'Complete',
      sections: [
        { label: 'The stoker', body: 'Bert Nolan, furnace stoker, states Mr Benning came down to the furnace room at about 9:50 — during the curtain-down confusion, before the police arrived — said “bitter tonight, Bert” and stood at the open firebox for a minute. Benning had never visited the furnace room in Nolan’s eight years.' },
        { label: 'The ash', body: 'Raked the following morning under police supervision. Among the clinker: the metal eyelets and a scrap of unburnt cuff from a pair of white cotton gloves of the type Benning uses, and a fragment of folded brown paper, charred, of the kind a chemist uses to wrap a small quantity of powder.' },
        { label: 'The gloves', body: 'Three pairs are accounted for by Benning’s own statement. Two in the drawer, one on his hands at 9:43. The third is in the furnace. Wardrobe confirms no gloves of his were in the wash.' },
        { label: 'What this fixes', body: 'Someone burned a pair of the stage manager’s gloves and a chemist’s paper within ten minutes of the collapse, in a room only one person visited.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'document',
      title: 'Insurance, contract and the alimony order',
      summary: 'The money that moved when Vivienne Ashe died — and who it moved toward.',
      stamp: 'Financial',
      recordType: 'Document review',
      origin: 'Stern’s office; dressing room 1; Crane’s solicitors',
      custodian: 'DI Pryce',
      date: '22 October 1949',
      status: 'Reviewed',
      sections: [
        { label: 'The insurance', body: 'A standard non-appearance policy on Miss Ashe for the run, taken out in March at the production’s opening, as Stern says. It pays the production £4,000 — less than Stern’s stated losses of £6,500. The policy was not increased or altered after the Rank contract was announced.' },
        { label: 'The Rank contract', body: 'Signed 29 September; three pictures over two years at a fee that would have made her, as Crane said, solvent. It contained a clause releasing her from “The Lantern Hour” on 12 November.' },
        { label: 'The alimony', body: 'Crane pays £400 a year under a 1946 order. His solicitor confirms he had instructed them to apply for variation on the grounds of her increased income. Her death ends the order. It also ends the application, which his solicitor considered likely to succeed.' },
        { label: 'Significance', body: 'Stern’s policy pays less than his loss; Crane’s order would probably have been reduced in court; Marsh gains a part for a tour that Stern says is now dead. None of these is a reason that improves on being found out as a thief by a woman who had told three people she would not let it go.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'benning',
      title: 'Bookmaker’s notes found in Benning’s desk',
      subtitle: 'Three slips, Soho, in the hand of the man in the camel coat',
      format: 'note',
      messages: [],
      noteText: [
        '4 Oct. H.B. — £140 outstanding. Monday.',
        '11 Oct. H.B. — Monday was last Monday. Fourteen a week does not cover it. Find the rest.',
        '17 Oct. H.B. — Your leading lady has been asking at the box office about seats. If she talks to Stern there are no more seats and there is still £140. Think about it.'
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'stern',
      title: 'Note from Miss Ashe to Leo Stern',
      subtitle: 'Left in the manager’s pigeonhole Tuesday afternoon; unopened until Wednesday',
      format: 'note',
      messages: [],
      noteText: [
        'Leo — I want twenty minutes on Monday about house seats. Bring the ledger. I have copied it and I know who has been selling my guests’ seats in the alley, and so will you by the time I have finished. I have told him I am coming to you, so that he has the chance to do the decent thing first. He will not take it. — V.'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'celia',
      title: 'Celia Marsh’s diary, October',
      subtitle: 'Produced by Miss Marsh; the relevant entries',
      format: 'note',
      messages: [],
      noteText: [
        'Mon 17. V. furious about the seats. Says H.B. has been flogging them since July. Told her tell Stern. She says Monday. H.B. looked grey at the half.',
        'Tue 18. Stern wants “a name” for the tour. Seven months in the wings for nothing. Mrs Parr says these things come round. They do not come round.',
        'Tue 18, later. I went on. I cannot write about it.'
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'crane',
      title: 'Telegrams between Crane and his solicitors',
      subtitle: 'Copies obtained from the Charing Cross office',
      format: 'chat',
      messages: [
        { from: 'Crane → Pollard & Wick', side: 'right', text: 'ASHE REFUSES RENEGOTIATE STOP PROCEED APPLICATION FOR VARIATION STOP CRANE', time: 'Fri 14 Oct, 11:20 a.m.' },
        { from: 'Pollard & Wick → Crane', side: 'left', text: 'APPLICATION LODGED STOP GOOD PROSPECTS GIVEN RANK CONTRACT STOP HEARING LIKELY JANUARY', time: 'Mon 17 Oct, 3:05 p.m.' }
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'benning',
      questions: [
        {
          id: 'Q-benning-1',
          prompt: 'Alf Mundy says you never came to the stage door. Jack Weir says he wished you good evening at the props table at ten past nine and you did not answer. Where were you?',
          answer:
            'Then Alf is wrong and Jack has his minutes muddled. I went along with Dickie — I stood back from the box because Alf and I had had words about the touts and I did not want another row — and I came back ahead of him. If Jack passed the corner and saw me, it was before six past or after fourteen past, and if I did not answer him it was because I was counting the interval, which is what I do. Inspector, I have called that show two hundred and twenty times. The decanter sat on my table for every one of them. If I had wanted to put something in it I have had two hundred and twenty chances, and I would not have chosen the one night the fireman was due.'
        },
        {
          id: 'Q-benning-2',
          prompt: 'The bookmaker’s notes. “Fourteen a week does not cover it.” “If she talks to Stern there are no more seats.” Tell us about Monday.',
          answer:
            'I owed a man money. I had a flutter that went wrong in the summer and it compounded the way it does. I sold seats. There — I have said it, and I would rather say it to you than to Leo. Fourteen a week at a pound in the alley; it was keeping the man quiet. Miss Ashe found out and told me on Tuesday she was going to Stern on Monday. I was going to go to Stern first, Monday morning, and own up and ask for time, and probably lose my job and keep my neck. That is what “Mon.” means in my book. It is not a plan. It is a man writing down the day his life ends.'
        },
        {
          id: 'Q-benning-3',
          prompt: 'Bert Nolan says you came to the furnace room at ten to ten for the first time in eight years. In the ash there are the eyelets of a pair of your gloves and a chemist’s paper.',
          answer:
            'I went down to the furnace because I could not stand in that corridor another minute with the company looking at me as if I had — as if I had. It was cold and I wanted to be somewhere no one was. I stood by the fire. I did not put anything in it. If there are gloves in the ash they are gloves; the wardrobe throws out a dozen pairs a season and Bert burns the wardrobe rubbish. A chemist’s paper — this is a theatre, Inspector; half the company has a powder for its nerves. You have a fireman who thinks he saw me, a doorkeeper who did not, and a stoker who saw me warm my hands. You do not have a man who saw me touch that decanter, because there is not one.'
        }
      ]
    },
    {
      suspectId: 'crane',
      questions: [
        {
          id: 'Q-crane-1',
          prompt: 'Your application to vary the alimony had good prospects. Her death ends the order entirely. That is a better outcome than any court would have given you.',
          answer:
            'It is, and I am aware that I am the only man in this building who gets richer by the hour because she is dead, and I would give it all back to have her stand on that stage and laugh at me again. I was in my dressing room with Ambrose, who dislikes me, and my dresser, who is paid to, and both of them will tell you I did not go down. I know what she drank and when because I have watched her drink it two hundred times. I did not know anyone had been near the decanter until I was holding her and she was not breathing properly and saying my name.'
        },
        {
          id: 'Q-crane-2',
          prompt: 'You went on without your cue. Why?',
          answer:
            'Because she said “Gerald.” Not “Robert,” which is the husband. Gerald. In fifteen years on stage with her she never once broke — not when the scenery fell in Manchester, not when I forgot an entire scene in Brighton. When she said my name I knew something was wrong in the world and not in the play, and I went to her, and I would do it again. Benning brought the curtain in about four seconds behind me, which for Benning is an age. He looked — I will say this because you will hear it from others — he looked as if he had been waiting for it.'
        },
        {
          id: 'Q-crane-3',
          prompt: 'Who knew about the house seats before Tuesday?',
          answer:
            'Vivienne, from the Monday, because she told me on Monday night in the wings and I told her to leave it alone, which she took as encouragement. Celia, because Vivienne told everyone she liked. Maggie. I think Leo did not know, because Leo would have sacked Harold on the spot and made a speech about it. And Harold knew, because Vivienne told him to his face on Tuesday afternoon; I heard the end of it from the stairs. She said “Monday” and he said nothing, and she came up the stairs past me and said, “That man is going to do something stupid,” and I said he had been doing something stupid since July. I thought she meant the touts.'
        }
      ]
    },
    {
      suspectId: 'celia',
      questions: [
        {
          id: 'Q-celia-1',
          prompt: 'You were in the prompt corner before the show. You knew about the house seats. You had just lost the tour. And you are the only person who gained a part.',
          answer:
            'I was in the corner at ten to eight to go over the understudy cue sheet with Mr Benning, as I am every Tuesday, in front of Dickie and the electrician. The decanter was not filled until nine. I was in the green room with Mrs Parr for the whole interval and she had my coat in her lap with a needle in it the entire time. Yes, I have the part. I have it for the four performances before Mr Stern closes the play, which he will, because nobody will come to see the understudy who finished the night the star died. If I had wanted a career out of this I have made a very poor job of it.'
        },
        {
          id: 'Q-celia-2',
          prompt: 'What did Miss Ashe say on Monday, exactly, about Benning?',
          answer:
            '“He has been flogging my seats in the alley since July and he looked me in the eye about it.” She was angry the way she got — cold and funny. She said she would give him till Monday to go to Leo himself and if he did not she would go, with the ledger. I said, Vivienne, he owes money, everyone knows it, be careful. She said, “Darling, he is a stage manager. The worst he can do is bring the curtain in early.” I wrote that in my diary that night because it made me laugh. I have not laughed since.'
        },
        {
          id: 'Q-celia-3',
          prompt: 'You stand in the prompt-side wings every night. What did you see from there between 9:15 and 9:41?',
          answer:
            'Dickie set the decanter at a quarter past and came back to the corner. Mr Benning called the act up. He was — I noticed this, I did not understand it — he was not looking at the stage. He always watches the stage; he calls off the action, not the book. On Tuesday he had his eyes on his stopwatch from the top of the act and his hands flat on the desk, and when Scene 3 began and she crossed to the sideboard he closed his eyes. I thought he was tired. Then she drank, and he opened them, and he had his hand on the curtain cue before she had said the first line of the speech.'
        }
      ]
    },
    {
      suspectId: 'maggie',
      questions: [
        {
          id: 'Q-maggie-1',
          prompt: 'The decanter was in your hands from 9:02 to 9:05. The poison was in the decanter. Why should we look past you?',
          answer:
            'Because it was not in the bottle, and I filled it from the bottle, and I put the stopper in and carried it down in both hands and gave it to Mr Hale with Mr Benning watching, and the analyst says it was put in after the stopper was in. Between her room and the props table I was on an iron staircase in a theatre full of people with a decanter in my hands. When would I have done it? And why? She gave me notice over a brooch that was behind the radiator. I would have had my job back by Friday. I have been with her nine years. You do not poison the only person in London who remembers your birthday because she has had a bad week.'
        },
        {
          id: 'Q-maggie-2',
          prompt: 'You told her to be careful what she said to a man in debt. What did you know about Benning’s debt?',
          answer:
            'Everyone backstage knew Harold bet. What I knew that others did not was the man in the camel coat, because he came to the stage door twice in September asking for Mr Benning and Alf would not let him in and he waited in the alley and I came out that way. He looked at me the way those men look at you. I told Vivienne that Harold was not just a man who liked the horses, he was a man who had somebody waiting for him, and that she should let Leo handle it. She said Leo would hush it up to save the box office and she wanted Harold to look her in the eye. She got that.'
        },
        {
          id: 'Q-maggie-3',
          prompt: 'Describe Benning when you handed over the decanter at five past nine.',
          answer:
            'At his desk with his book open and his gloves on. He did not look up. That is not unusual; he is counting. But he had his gloves on at five past nine, Inspector, and there is nothing to handle at five past nine — Dickie does the setting. Harold puts his gloves on for the act, at the beginners, and takes them off at the interval because he smokes. I have seen him do it two hundred times. On Tuesday he had them on already when I came down the stairs, and I thought: he is in a state about Monday. I did not think any further than that. I wish I had.'
        }
      ]
    },
    {
      suspectId: 'stern',
      questions: [
        {
          id: 'Q-stern-1',
          prompt: 'The policy pays £4,000 on her death. The play was losing money. The pass door was locked, but you have a key.',
          answer:
            'I have a key and the front-of-house manager was in my doorway at ten past nine telling me about bar takings, and Alf did not see the pass door open all evening because it did not. The policy pays four thousand against a loss of six and a half, and it was taken out in March when I insured her against a cold, not a murder. I did not need her dead. I needed her to stay until Christmas, which she had agreed to, in writing, before Rank. If you want to know what her death cost me, it is a play, a tour, a theatre’s reputation and a leading lady I had under contract. I am a producer. I know a bad deal when I see one.'
        },
        {
          id: 'Q-stern-2',
          prompt: 'You had not looked at the house-seats ledger. You have now. What do you make of it?',
          answer:
            'That my stage manager has been robbing my box office of a hundred and fifty seats and that my box-office manager let him because Harold Benning has a way of making you feel that a question is an insult. I would have sacked him on Monday and had him in front of a magistrate by Tuesday. Vivienne knew that. That is why she gave him the week — she wanted him to come to me first and confess, because she thought it would be kinder. She was kinder than she let anyone see. She left me a note that said so and I did not open it until Wednesday because I thought it was about seats.'
        },
        {
          id: 'Q-stern-3',
          prompt: 'Why change the tour casting from Marsh to “a name” the week before?',
          answer:
            'Because the play cannot tour without a star and Celia Marsh, who is good and will be very good, is not yet one. I told her on Tuesday afternoon and I told her badly. I am aware it gives her a motive in your book. It does not give her one in mine, because she knows as well as I do that the tour is dead with Vivienne — no name in London will take over a part that killed its creator on stage, and no understudy gets a career out of four performances in a closing show. Celia gained nothing. Gerald gains four hundred a year. Harold loses a job and keeps his neck. Follow that.'
        }
      ]
    },
    {
      suspectId: 'kettering',
      questions: [
        {
          id: 'Q-kettering-1',
          prompt: 'You moved the drink before the speech. You said in public she was abandoning you. You dislike the stage manager and he dislikes authors in his corner.',
          answer:
            'I moved the drink because the speech is better with brandy in it, and if I had known what would be in the brandy I would have cut it from the play and the play from the season. I said what I said about her leaving because I am a vain old man who writes parts for women who then go and do something else with them. She forgave me within the hour; she always did. And I was in Gerald’s room with Gerald, who cannot stand me, teaching him to come through a door, and his dresser saw us both at four minutes past and twelve minutes past. I do not go to the prompt corner. Benning would have had me removed and he would have been right.'
        },
        {
          id: 'Q-kettering-2',
          prompt: 'When did you last see Benning before the interval, and how did he seem?',
          answer:
            'At the half, in the corridor, at about ten past seven. He was grey. I thought he was ill. I said so, and he said he had had a bad week on the horses, which was the first time in twelve years he had volunteered anything personal to me, and I remember thinking that a man does not tell you that unless something worse is behind it. I did not pursue it. I was thinking about Gerald’s door. If I had been thinking about Harold instead, I might have gone into the corner and stood there for thirteen minutes, and she would be alive, and he would hate me for it, and I would not mind.'
        },
        {
          id: 'Q-kettering-3',
          prompt: 'Tell us about the night’s performance as a director. What was different?',
          answer:
            'Two things. Gerald got the entrance right, which he did not need to in the end because he came on without it. And the curtain came in fast. Harold brings a curtain in like a man lowering a coffin — slow, exact, he is proud of it. On Tuesday it came in like a shutter, before she had hit the floor, before the house doctor had stood up. It was the right thing to do and I have never seen him do a right thing that quickly. He was ready for it. I thought at the time: good man. I have changed my mind about what I thought.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-exposure', label: 'To stop her exposing the sale of house seats to a producer who would have prosecuted, with a bookmaker waiting for the money' },
      { id: 'm-alimony', label: 'To end an alimony order before her film income made it permanent' },
      { id: 'm-part', label: 'To take over the role' },
      { id: 'm-insurance', label: 'To collect on a non-appearance insurance policy' },
      { id: 'm-betrayal', label: 'Revenge for abandoning the play' }
    ],
    methodOptions: [
      { id: 'h-props', label: 'Poison dropped into the stoppered decanter on the props table during the eight minutes the ASM was at the stage door' },
      { id: 'h-bottle', label: 'Poison added to the brandy bottle in dressing room 1' },
      { id: 'h-stage', label: 'Poison added to the decanter on stage during Act II Scene 2' },
      { id: 'h-glass', label: 'Poison smeared in the glass by someone who set the sideboard' }
    ],
    selectableEvidenceIds: ['CS-02', 'CS-04', 'CS-05', 'CS-06', 'CS-07', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'MSG-03', 'WS-04', 'Q-celia-3', 'Q-maggie-3', 'Q-kettering-3'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'benning',
    motiveOptionId: 'm-exposure',
    methodOptionId: 'h-props',
    decisiveEvidenceIds: ['EV-01', 'EV-04', 'MSG-01', 'EV-02', 'CS-04'],
    reveal: 'Harold Benning put the poison in the decanter on his own props table between 9:07 and 9:14, while the ASM read a telegram at the stage door and the stage manager stood alone in the corner with his gloves already on.',
    reconstruction: [
      'Benning had been selling fourteen house seats a week to a Soho tout since July to service a debt of £140 that the bookmaker was collecting with increasing menace. On Monday 17 October the bookmaker’s note told him that Miss Ashe had been asking at the box office. On Tuesday afternoon she told him to his face: Monday, Stern, the ledger. He wrote “Mon.” and “£140” in the margin of his prompt book and knew that one of those two things was going to end him.',
      'He bought a small quantity of a fast-acting compound from a chemist on the Avenue in a folded brown paper, put on his gloves before the half — Maggie Doyle noticed, and did not understand — and waited for the interval, when the decanter would stand on his table for the ten minutes between Doyle bringing it down and Hale setting it. He could not have known Hale would be called away; Hale’s telegram was genuine and the luck of it was the only luck Benning had that week. With the ASM at the stage door from 9:07, he lifted the stopper, tipped in the powder, replaced the stopper, and was standing with his gloved hands on the props table when the fireman wished him good evening at ten past and got no reply.',
      'He called Act II up at 9:17 with his eyes on his stopwatch and not on the stage, which Celia Marsh noticed from the wings. He closed his eyes when she crossed to the sideboard. He had his hand on the curtain cue before she finished her first line, and brought it in, as Kettering said, like a shutter. Then, in the confusion, he took the decanter off the stage himself in a clean pair of gloves — to explain the smears, and to be seen being careful — and went down to the furnace room for the first time in eight years to burn the pair he had worn and the chemist’s paper.',
      'He told the police he had gone to the stage door with Hale. Alf Mundy, who had logged every movement at that door for twenty years, had not seen him. He had put himself in the one place in the building where a man could not be and not be noticed.'
    ],
    chronology: [
      { time: 'Mon 17 Oct', event: 'Bookmaker’s note: “If she talks to Stern there are no more seats and there is still £140.” Miss Ashe tells Marsh and Crane about the ledger.', refs: ['MSG-01', 'MSG-03', 'Q-crane-3'] },
      { time: 'Tue 18 Oct, afternoon', event: 'Miss Ashe confronts Benning in the prompt corner: Stern, Monday. Leaves a note for Stern. Writes her list.', refs: ['MSG-02', 'CS-07', 'Q-crane-3'] },
      { time: '7:10 p.m.', event: 'Kettering finds Benning grey at the half; Benning mentions a bad week on the horses.', refs: ['Q-kettering-2'] },
      { time: '9:02 p.m.', event: 'Doyle fills the decanter from the clean bottle.', refs: ['EV-02', 'WS-04'] },
      { time: '9:05 p.m.', event: 'Doyle hands it to Hale; Benning at his desk, gloves already on.', refs: ['Q-maggie-3', 'EV-01'] },
      { time: '9:06–9:07 p.m.', event: 'Hale called to the stage door, alone.', refs: ['CS-04'] },
      { time: '9:07–9:14 p.m.', event: 'Benning alone with the decanter; stopper lifted, powder added, stopper replaced. Fireman greets him at 9:10.', refs: ['EV-01', 'EV-02', 'CS-05'] },
      { time: '9:15 p.m.', event: 'Hale sets the decanter on the sideboard.', refs: ['EV-01'] },
      { time: '9:41 p.m.', event: 'Miss Ashe drinks and collapses; Crane enters without his cue; curtain comes in fast.', refs: ['CS-01', 'Q-crane-2', 'Q-kettering-3'] },
      { time: '9:43 p.m.', event: 'Benning removes decanter and glass in a fresh pair of gloves.', refs: ['CS-05'] },
      { time: '9:50 p.m.', event: 'Benning in the furnace room; gloves and chemist’s paper burned.', refs: ['EV-04'] },
      { time: '11:40 p.m.', event: 'Death at St Thomas’.', refs: ['CS-01'] }
    ],
    evidenceChain: [
      { title: 'Opportunity: eight minutes and one man', body: 'The bottle was clean; the poison went into the stoppered decanter after 9:02. Doyle carried it in both hands down a public staircase; Hale was at the stage door from 9:07 to 9:14; everyone else was accounted for in rooms with witnesses. The decanter stood on Benning’s table with Benning beside it.', refs: ['EV-02', 'EV-01', 'CS-02'] },
      { title: 'Contradiction: the stage door', body: 'Benning placed himself at the stage door with Hale. Mundy, who logs the door, says he never came; Weir, the fireman, greeted him at the props table at 9:10 and was not answered.', refs: ['CS-04', 'EV-01', 'Q-benning-1'] },
      { title: 'Trace: the third pair of gloves', body: 'Three pairs accounted for by his own count; one burned in a furnace he visited for the first time in eight years ten minutes after the collapse, with a chemist’s paper. Doyle saw the gloves on at 9:05, when there was nothing to handle.', refs: ['EV-04', 'CS-05', 'Q-maggie-3'] },
      { title: 'Motive: Monday and £140', body: 'The bookmaker’s notes, the ledger, Miss Ashe’s list and her note to Stern, and the margin of his own prompt book.', refs: ['MSG-01', 'EV-03', 'MSG-02', 'CS-06'] },
      { title: 'Behaviour: a man waiting for a cue', body: 'Eyes on the stopwatch, not the stage; eyes closed at the sideboard; a hand on the curtain cue before the speech; a curtain brought in like a shutter.', refs: ['Q-celia-3', 'Q-kettering-3'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Gerald Crane', body: 'The alimony order ends with her and his application looked likely to succeed anyway — but he was in dressing room 2 with Kettering and his dresser from 9:02 to the beginners, and the man who broke a twenty-five-year rule to catch her was not acting.', refs: ['EV-01', 'EV-05', 'Q-crane-2'] },
      { title: 'Celia Marsh', body: 'She gained the part — for four nights in a closing show. Mrs Parr had her coat in her lap through the whole interval, and her pre-show visit to the corner was an hour before the decanter existed.', refs: ['EV-01', 'Q-stern-3', 'Q-celia-1'] },
      { title: 'Maggie Doyle', body: 'Her hands were on the bottle and the decanter, but the bottle is clean and the stopper residue shows the poison went in after she stoppered it. A brooch behind a radiator is not a motive for murder.', refs: ['EV-02', 'CS-07', 'Q-maggie-1'] },
      { title: 'Leo Stern', body: 'The policy pays less than his loss, was not altered after Rank, and the pass door stayed locked under Alf’s key while the front-of-house manager stood in his doorway.', refs: ['EV-05', 'EV-01', 'Q-stern-1'] },
      { title: 'Ambrose Kettering', body: 'He moved the cue and made a speech, but he moved it a week earlier for the play’s sake, and he spent the interval teaching a man he dislikes to open a door, with that man’s dresser as witness.', refs: ['WS-06', 'EV-01', 'Q-kettering-1'] }
    ],
    redHerringResolutions: [
      { title: 'The moved cue', body: 'Kettering’s change put the poison into her at 9:41 instead of 9:51 and looked like a director timing a death. It was a director timing a speech; the poison would have killed her at either cue.', refs: ['WS-06', 'EV-02'] },
      { title: 'The insurance policy', body: 'Every producer has one. Stern’s pays £4,000 against a £6,500 loss and was never touched after the Rank contract.', refs: ['EV-05'] },
      { title: 'The missing brooch', body: 'It made the dresser the first person to be dismissed and the first to be suspected. It was behind the radiator the whole time.', refs: ['CS-07', 'Q-maggie-1'] },
      { title: 'Hale’s telegram', body: 'A telegram that called the ASM away at the exact moment looked arranged. It was from his mother in Leeds about his father’s chest, and it was simply the stroke of luck that a desperate man happened to get.', refs: ['CS-04', 'EV-01'] }
    ],
    epilogue: '“The Lantern Hour” closed on Saturday 22 October after four performances with Celia Marsh in the part; the Standard’s critic saw the last of them and wrote that London would be hearing from her, which it did. Benning was tried at the Old Bailey in February 1950. The man in the camel coat was not called.'
  }
};
