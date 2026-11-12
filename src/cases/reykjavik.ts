import type { MysteryCase } from '../types/case';

export const reykjavik: MysteryCase = {
  id: 'c07',
  slug: 'the-reykjavik-gambit',
  title: 'The Reykjavík Gambit',
  tagline: 'A grandmaster collapses over the board in the final round. The move he never made tells you who wanted him silenced.',
  era: 'Reykjavík, Iceland — March, present day',
  difficulty: 'expert',
  estimatedMinutes: 45,
  dossier: {
    reference: 'Lögreglan á höfuðborgarsvæðinu — Rannsóknardeild (Reykjavík Metropolitan Police — CID)',
    caseNumber: 'LRH-0317-44',
    victim: 'Dr Anton Vasiliev, age 61. Chess grandmaster; tournament favourite and anti-cheating campaigner.',
    location: 'Board 1, final round, Reykjavík Spring Masters, Harpa Conference Hall, Reykjavík.',
    incidentDate: 'Sunday 17 March, during the final round; collapse at approximately 15:52.',
    discoveryTime: 'Collapsed at the board before officials and a live-streaming audience; pronounced dead at Landspítali at 17:10.',
    causeOfDeath: 'Cardiac arrest induced by a toxic dose of a heart medication not prescribed to him, ingested via his water during play. The pathologist finds a fatal concentration of a beta-blocker/antiarrhythmic combination.',
    leadInvestigator: 'Rannsóknarlögreglumaður (Detective) Katrín Sigurðardóttir.',
    assisting: 'Landspítali toxicology; the tournament’s chief arbiter and the streaming production team (technical records).',
    status: 'OPEN. Six persons had access to the stage, the player area or the victim’s water during the round. The game was recorded move by move; the hall was under multiple cameras; the players’ water was refilled from a single carafe.',
    synopsis:
      'In the final round of the Reykjavík Spring Masters, Anton Vasiliev needed only a draw on Board 1 to win the tournament. Players drink from individual glasses refilled by a steward from a central carafe between moves. Vasiliev drank several times during the game. At move 31, with a winning position, he spent 24 minutes on a single move he never completed, slumped, and collapsed. Toxicology finds a fatal dose of a cardiac drug in his system and in his glass but not the carafe. Vasiliev had, that week, publicly accused an unnamed player of cheating with engine assistance and promised to “name him after the last round.”',
    backgroundLocation:
      'The Reykjavík Spring Masters is played in a hall in Harpa. The top boards are on a low stage under broadcast cameras; the audience sits beyond a rope. Players have individual water glasses on a side table; a steward refills them from one carafe kept on a trolley by the stage. The arbiters’ table sits beside the stage; the arbiter starts clocks, enforces rules, and is the only person permitted to approach the boards during play. A separate analysis room, a players’ lounge and a VIP area adjoin the hall. The games are relayed live by sensors in the boards.',
    backgroundGathering:
      'The final round decided the title. Vasiliev led by half a point. Present with access: the chief arbiter; Vasiliev’s second (coach); his Board 1 opponent; a rival grandmaster half a point behind; a sponsor/organiser; and the chief steward who poured the water. In the preceding days Vasiliev had accused an unnamed competitor of using a chess engine via a concealed device and had told journalists he would reveal the name and his evidence “at the closing ceremony, after I have won.”'
  },
  suspects: [
    {
      id: 'olafsson',
      name: 'Stefán Ólafsson',
      age: 49,
      role: 'Chief arbiter',
      hue: 25,
      bio: 'Ólafsson is an International Arbiter of thirty years’ standing and the one official permitted to approach the boards during play. He runs the anti-cheating screening for the federation and signed off the final round as clean. Privately he had taken money for two years to look the other way at a device used by an ambitious young player — the “cheat” Vasiliev was about to name, with Ólafsson’s complicity attached. He controls the clocks, the stage access and, through the steward, the water trolley. He was beside Board 1 throughout the round.',
      stakes: 'A thirty-year reputation and a bribe that Vasiliev’s evidence would expose along with the cheat.',
      openQuestion: 'He is the only person allowed to touch the board and the trolley during play.'
    },
    {
      id: 'morozova',
      name: 'Dr Lena Morozova',
      age: 38,
      role: 'Vasiliev’s second (coach)',
      hue: 320,
      bio: 'Morozova has been Vasiliev’s trainer and second for six years, preparing his openings and managing his famously fragile health — he had a heart condition and carried his own, correctly dosed medication. She also, it emerges, carried a grievance: Vasiliev had promised her co-authorship of their opening manual and then published it alone. She had access to the players’ lounge and to Vasiliev’s bag, which held his real medication. She was in the lounge during the round, not the hall.',
      stakes: 'A manual she helped write and did not get credit for, and six years in a difficult man’s shadow.',
      openQuestion: 'She knew exactly what his heart could not take, and she packed his bag.'
    },
    {
      id: 'tamm',
      name: 'Kristjan Tamm',
      age: 24,
      role: 'Board 1 opponent',
      hue: 215,
      bio: 'Tamm is the brilliant young Estonian whom Vasiliev had privately identified as the engine-cheat. He denies it furiously. A win against Vasiliev in the final round would have taken the title and silenced the accusation as sour grapes from a beaten old man. He sat across the board from Vasiliev for the whole game, within reach of nothing but his own side of the table — and the shared carafe, when the steward was slow. He is the person the dead man was about to destroy.',
      stakes: 'A career about to be ended by an accusation, and a title one win away.',
      openQuestion: 'If he was cheating, the device is still somewhere. If he was not, someone framed him for a reason.'
    },
    {
      id: 'holt',
      name: 'Marcus Holt',
      age: 41,
      role: 'Rival grandmaster (Board 2)',
      hue: 160,
      bio: 'Holt stood half a point behind Vasiliev and would win the tournament if Vasiliev scored zero — exactly what a collapse delivered. He is a veteran professional for whom a first-place cheque and the rating points mattered enormously; he had not won a major in years and his sponsorship was lapsing. He played Board 2, adjacent to Board 1, and shared the same steward and carafe. He had been openly bitter that Vasiliev’s “cheating circus” was overshadowing the chess.',
      stakes: 'A title and a sponsorship that a Vasiliev zero would hand him.',
      openQuestion: 'He was one board away and drinking from the same carafe.'
    },
    {
      id: 'reyn',
      name: 'Gunnar Reyn',
      age: 55,
      role: 'Sponsor and tournament organiser',
      hue: 60,
      bio: 'Reyn’s firm sponsors the Spring Masters, and a cheating scandal breaking at his flagship event would be a catastrophe he had told the federation he “would not survive.” He had begged Vasiliev privately to drop the accusation or at least delay it. He had the run of the hall, the VIP area and the stage during setup, and knew the water arrangements because he had paid for them. He was in the VIP area during the round, visible to sponsors.',
      stakes: 'A reputation and a sponsorship built on a clean tournament, about to be branded as the scene of a cheating scandal.',
      openQuestion: 'He wanted the accusation to go away. Did he want the accuser to?'
    },
    {
      id: 'erla',
      name: 'Erla Jónsdóttir',
      age: 29,
      role: 'Chief steward',
      hue: 275,
      bio: 'Jónsdóttir manages the stage stewards and personally refilled the top players’ glasses from the carafe between moves, as the rules require (players may not leave to fetch water). She is a chess fan working the event for the federation. She had no apparent motive — but she was the hand that carried every glass, and she took a short break at move 28, during which another person tended the trolley. She is frightened and precise and remembers more than she first said.',
      stakes: 'None obvious; but she poured the water that killed him.',
      openQuestion: 'Who covered the trolley while she was away at move 28?'
    }
  ],
  story: [
    {
      paragraphs: [
        'The Reykjavík Spring Masters is a small, serious tournament in a glass hall on the harbour, the kind of event where a dozen grandmasters play out a week of silence under cameras while a few hundred spectators watch the moves appear on a wall screen. In its final round the title came down to Board 1, where Anton Vasiliev, sixty-one, a former world championship candidate and the most feared anti-cheating campaigner in the game, needed only a draw to win. Across from him sat Kristjan Tamm, twenty-four, the tournament’s revelation, who needed a win.',
        'All week Vasiliev had been saying, to anyone who would listen, that someone in the hall was cheating — using a chess engine fed to him through a concealed device — and that he would name the player, and prove it, at the closing ceremony, after he had won. He would not say who. The pressroom was electric with it. The federation was appalled. The sponsor, Gunnar Reyn, whose company’s name was on the banners, had begged him to let it go.',
        'The top boards are played on a low stage. The one rule everyone obeys is that during play only the arbiter may approach a board. Players may not leave to drink; a steward refills their glasses from a single carafe between moves. So Anton Vasiliev, who had a heart condition and carried his own carefully dosed medication, drank through the final round from a glass that the chief steward, Erla Jónsdóttir, refilled from the carafe on the trolley by the stage, under the eye of the chief arbiter, Stefán Ólafsson, the one man permitted to stand at his shoulder.'
      ]
    },
    {
      paragraphs: [
        'The game was a quiet one for twenty moves and then Vasiliev, as everyone had expected, began to win. By move 30 the wall screen showed an assessment that made the commentators smile: Vasiliev was not merely drawing, he was winning, and the title was his. He drank, as he had all afternoon. He wrote his move. He pressed his clock.',
        'At move 28, Erla Jónsdóttir left the trolley for four minutes to deal with a spectator who had come too close to the rope. While she was gone the trolley stood by the stage, and the arbiter, Ólafsson, moved it slightly back from the edge — a small thing, caught on the broadcast wide shot, that nobody remarked at the time. When Erla returned she refilled the glasses from the carafe, including Vasiliev’s, and the game went on.',
        'At move 31 Vasiliev reached for a piece and stopped. He sat with his hand over the board. The clock ran. One minute, five, ten. The commentators, who could see the winning move on their screens, grew puzzled, then alarmed. At fourteen minutes his second, Lena Morozova, watching on the monitor in the players’ lounge, stood up. At twenty-four minutes Vasiliev’s hand came down not on the piece but on the edge of the table, and he slid sideways out of his chair.',
        'Ólafsson, beside the board, called for the tournament doctor and stopped the clock. The hall rose. Kristjan Tamm backed away from the board with his hands up as though the pieces might accuse him. The stream cut to a holding card. Anton Vasiliev was carried out of the hall he had promised to make famous, and died at Landspítali at ten past five without naming anyone.'
      ]
    },
    {
      paragraphs: [
        'Detective Katrín Sigurðardóttir reached Harpa before the ambulance had left. She did three things. She had the victim’s glass, the carafe and the water jug on the trolley seized before anyone could wash them. She had the broadcast recording — every camera, every angle, time-coded — preserved. And she had the hall sealed with everyone who had been on or near the stage still inside, because a death at a chess tournament has one mercy: the whole thing is on film, the moves are a clock, and nobody can pretend they were somewhere the cameras did not see.',
        'Toxicology came back the next day. Vasiliev had died of a massive overdose of a cardiac drug — a combination of a beta-blocker and an antiarrhythmic — that was not his own medication and that, in a man with his heart, was certain death. The fatal dose was in his glass. It was not in the carafe. His own medication, in his bag in the lounge, was correctly dosed and untouched. Someone had put the drug not into the shared supply but into one man’s glass, between one move and the next, in a hall full of cameras, with only the water and the board as witnesses.',
        'The detective sat down with the chief arbiter’s round report, the broadcast footage and the move list, and began, as Vasiliev would have, to look for the one move that did not fit.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'Collapse and cause',
      kind: 'tested',
      body: 'Vasiliev collapsed at move 31 after a 24-minute think and died at 17:10. The pathologist finds cardiac arrest from a toxic dose of a beta-blocker/antiarrhythmic combination — not his prescribed medication — fatal in a man with his known heart condition. Onset after ingestion of such a dose: roughly 20–60 minutes, consistent with ingestion during the round.'
    },
    {
      id: 'CS-02',
      icon: 'lab',
      heading: 'The glass, the carafe, the jug',
      kind: 'tested',
      body: 'The fatal drug is present in Vasiliev’s glass at high concentration. The central carafe and the back-up jug on the trolley are clean. Tamm’s glass, Holt’s glass and the other players’ glasses are clean. The poison was introduced into one glass — Vasiliev’s — not into the shared supply. His own medication (in his lounge bag) is correctly dosed and sealed.'
    },
    {
      id: 'CS-03',
      icon: 'photo',
      heading: 'The broadcast footage',
      kind: 'found',
      body: 'Multiple time-coded cameras cover the stage, the boards and the trolley. The wide shot shows the trolley, the steward’s movements, and every approach to Board 1. The footage is continuous from before move 1 to the collapse. It is analysed frame by frame in EV-01. Only one person approaches Vasiliev’s glass off the steward’s normal rhythm.'
    },
    {
      id: 'CS-04',
      icon: 'timeline',
      heading: 'The move list and clock times',
      kind: 'found',
      body: 'The board sensors recorded every move and the clock recorded every move’s duration. Vasiliev drank (reached for his glass) after moves 24, 27 and 30, visible on camera. The fatal think is move 31. Working back from the collapse and the drug’s onset, the lethal drink was most likely the one taken after move 30 — refilled during the steward’s absence window around move 28.'
    },
    {
      id: 'CS-05',
      icon: 'trace',
      heading: 'The trolley and the arbiter',
      kind: 'found',
      body: 'During Erla Jónsdóttir’s four-minute absence (move 28), the wide shot shows Ólafsson step to the trolley, move it back from the stage edge, and stand over it briefly with his back to the main camera and his hand at the glasses. His body screens the trolley from the only camera that covers it closely. He is the one person permitted to be there and the one person whose hands the cameras cannot see at that moment.'
    },
    {
      id: 'CS-06',
      icon: 'document',
      heading: 'The anti-cheating report and Vasiliev’s dossier',
      kind: 'found',
      body: 'Ólafsson’s signed round report declares the final round screened and clean. In Vasiliev’s hotel room: a dossier naming Tamm as the engine-cheat and, critically, a page alleging that an arbiter had been paid to disable the signal screening during Tamm’s games — with a bank reference. The arbiter is not named on the surviving page, but the page is headed “to be shown to the federation president Sunday evening.”'
    },
    {
      id: 'CS-07',
      icon: 'effects',
      heading: 'What was in people’s pockets',
      kind: 'found',
      body: 'On seizure: Ólafsson carried a small pill organiser containing, among ordinary tablets, loose tablets of the beta-blocker/antiarrhythmic combination — which he says are his own heart pills. Morozova carried Vasiliev’s spare medication (correctly dosed). Holt carried nothing unusual. Tamm carried a smart watch, examined in EV-05.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What the cameras exclude',
      kind: 'inference',
      body: 'The footage excludes every spectator (beyond the rope), Morozova (in the lounge, on camera there the whole round), Reyn (in the VIP area, on its camera), and Holt and Tamm (seated, hands visible, never near Vasiliev’s glass). The only person who both approached Vasiliev’s glass off-rhythm and screened their hands from the camera is the arbiter, during the steward’s absence.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'olafsson',
      synopsis: 'I moved the trolley back for safety when the steward was dealing with a spectator. I never touched the glasses.',
      interviewedAt: '17 March, 19:00',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'I was beside Board 1 the entire round, as the rules require; I am the only person who may approach the boards. When Erla went to deal with a spectator at the rope, the trolley was near the stage edge where a player might knock it, so I moved it back half a metre. I stood by it a moment and then returned to the board. I did not touch any glass. I poured nothing.',
        'I screened the final round myself and signed it clean. If Vasiliev was about to allege otherwise, he was wrong; the man saw cheats everywhere in his last years. It was sad.',
        'The tablets in my organiser are my own. I have a heart condition myself; half the men my age in this game do. I take the same sort of drug Anton took, which proves nothing except that we are old chess players.',
        'His death is a tragedy and a scandal for Icelandic chess and for me personally, as the arbiter on whose watch it happened. I gain nothing from it. I lose the tournament, the sponsor and very likely my career, whatever you conclude.'
      ],
      claims: ['Beside Board 1 throughout the round.', 'Moved the trolley back during the steward’s absence; did not touch the glasses.', 'The cardiac tablets in his organiser are his own prescription.']
    },
    {
      id: 'WS-02',
      suspectId: 'morozova',
      synopsis: 'I was in the lounge watching the monitor. I packed his real pills; they were in his bag, untouched. I did not go into the hall.',
      interviewedAt: '17 March, 20:30',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'Seconds are not allowed in the hall during play; I watched on the monitor in the players’ lounge, where there is a camera, from the first move to the collapse. When Anton stopped at move 31 I knew something was wrong — he had a winning move on the board and he is never slow with a win — and I stood up, and then he fell.',
        'I manage his medication because he cannot be trusted to. His own pills — a different drug, correctly dosed — were in his bag in the lounge the whole round, sealed in the daily organiser I fill each morning. You have checked them. They are right.',
        'Yes, I am bitter about the manual. He promised me my name on it and published it alone and I have spent a year being introduced as his assistant when half the openings in it are mine. I thought about leaving him after this tournament. I did not think about killing him. He was impossible and I was the only one who could stand him, and now I will be introduced as the second of a man who was poisoned at the board.',
        'If you want to know who feared his dossier, it was not me. I knew what was in it. He was going to name Tamm and the arbiter who shielded him. He showed it to me on Friday.'
      ],
      claims: ['In the players’ lounge, on camera, for the whole round.', 'Packed Vasiliev’s own medication; it was sealed and correct in his bag.', 'Saw his Friday dossier naming Tamm and an unnamed arbiter.']
    },
    {
      id: 'WS-03',
      suspectId: 'tamm',
      synopsis: 'I never left my chair or touched his glass. I was not cheating, and now I can never prove I wasn’t, because he’s dead.',
      interviewedAt: '17 March, 21:15',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'I sat across the board from him for four hours. My hands are on camera the whole time; I touched my pieces, my clock, my own glass and nothing of his. When he collapsed I stood up and backed away because three hundred people and a camera were looking at the man he had accused of cheating, and I knew exactly how it would look.',
        'I was not cheating. He decided I was because I beat people I am not supposed to beat. His “evidence” is that I am young and good. If he had lived to name me at the ceremony I would have been finished whether or not it was true, because you cannot un-accuse a man in this game. His death is the worst thing that could happen to me. A live Vasiliev I could have faced down. A dead accuser I cannot.',
        'My watch is a fitness watch. It has no chess engine and no radio to a chess engine. Take it apart. I want you to take it apart. It is the only way I will ever work again.',
        'I needed to beat him over the board, not kill him. Beating him over the board, with him winning the tournament I denied him, would have destroyed his accusation better than anything. I was winning nothing until he fell — my position was lost. His death took the one thing I wanted, which was to prove him wrong.'
      ],
      claims: ['Seated at Board 1, hands on camera, the whole round.', 'Never touched Vasiliev’s glass.', 'Denies cheating; his watch is a fitness device (offers it for examination).']
    },
    {
      id: 'WS-04',
      suspectId: 'holt',
      synopsis: 'I was at Board 2 playing my own game. His zero gave me the title. I’d rather have earned it.',
      interviewedAt: '17 March, 21:45',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'I played Board 2, next to his. My hands are on camera too; look at them. I drank from the same carafe as everyone and I am not dead, which tells you where the poison was and was not. When he collapsed I was thinking about my own position, which was difficult, and I will not pretend I did not immediately understand what his zero meant for me. I won the tournament by his death. I am aware of how that reads.',
        'I resented the cheating circus. He turned a serious tournament into a soap opera about a device nobody has produced. I said so, loudly, in the pressroom. That is the worst you have on me: that I complained.',
        'I have not won a major in four years and my sponsor was walking. First prize and the rating points change my next two years. That is a motive, and I would be a fool to deny it. But I was one board away with a camera on my hands, drinking the same water, and the poison was in his glass alone. I could no more reach his glass than you could.',
        'If you want the man with access to one glass and not the carafe, there is one person on that stage who may approach the boards and did, when the steward was away. I watched him move the trolley. I did not think anything of it until now.'
      ],
      claims: ['At Board 2, hands on camera, throughout.', 'Drank from the same carafe and was unaffected.', 'Resented the cheating accusations publicly; gains the title by the death.']
    },
    {
      id: 'WS-05',
      suspectId: 'reyn',
      synopsis: 'I begged him to drop it. I was in the VIP area the whole round. His death is the ruin of my event, not its salvation.',
      interviewedAt: '17 March, 22:30',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'I sponsor this tournament and I organised it. A cheating scandal breaking at my event would have been bad; I told Anton so, and I asked him to let the federation handle it quietly after the closing, not to stand up at my ceremony with my banners behind him and detonate it on camera. He laughed at me. He enjoyed it.',
        'I was in the VIP area with donors and the federation president for the whole round; there is a camera there and twenty witnesses. I did not go onto the stage during play; the only setup access I had was before the round, hours before anyone drank.',
        'His death has not saved my event. A grandmaster dying at the board, poisoned, at a tournament now also tainted by cheating allegations — this is the end of the Spring Masters and very possibly of my company’s involvement in chess. A quiet scandal I could have survived. A murder I cannot.',
        'I wanted the accusation to go away. I did not want Anton to go away. A dead Anton is a louder scandal than a living one, and I am the man who has to stand in front of the cameras and explain it.'
      ],
      claims: ['In the VIP area, on camera, with witnesses, for the whole round.', 'Only had stage access before the round, hours before play.', 'Asked Vasiliev to delay the accusation; death worsens, not helps, his position.']
    },
    {
      id: 'WS-06',
      suspectId: 'erla',
      synopsis: 'I poured his water all afternoon. I was away four minutes at move 28. When I came back the arbiter was at the trolley.',
      interviewedAt: '17 March, 18:30',
      interviewer: 'Det. Sigurðardóttir',
      paragraphs: [
        'My job is to refill the top players’ glasses from the carafe between moves, because they cannot leave the board. I filled Anton’s glass many times. I poured from the carafe every time; I never carried a glass away from the trolley or out of sight. If the carafe is clean and his glass is not, then something went into his glass at the trolley, and I did not put it there.',
        'At move 28 a spectator leaned over the rope near Board 2 and I went to move him back; the stewards’ supervisor had told us to keep the rope clear for the cameras. I was gone about four minutes. The trolley was by the stage. When I came back, Stefán — the arbiter — was standing at the trolley; he said he had moved it back from the edge so a player would not knock it. I thought nothing of it. Then I refilled the glasses, including Anton’s, from the carafe.',
        'I filled his glass after move 30 from the carafe as always. If the drug was in his glass and not the carafe, it was already in the glass before I poured — put there while I was away.',
        'I loved this tournament. I volunteered for it. I have gone over and over whether I poured something wrong and I did not. I poured from the same carafe into six glasses and only one man died.'
      ],
      claims: ['Refilled glasses only from the carafe, never out of sight.', 'Absent four minutes at move 28; found Ólafsson at the trolley on return.', 'Refilled Vasiliev’s glass from the carafe after move 30.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'photo',
      title: 'Broadcast footage analysis',
      summary: 'Frame-by-frame of the trolley and Board 1 through the round.',
      stamp: 'Broadcast',
      recordType: 'Video forensic analysis',
      origin: 'Tournament production team; police AV unit',
      custodian: 'Det. Sigurðardóttir',
      date: '18 March',
      status: 'Complete',
      sections: [
        { label: 'Coverage', body: 'Four fixed cameras and one roaming camera cover the stage continuously. Camera 3 (wide) covers the trolley; camera 1 covers Board 1 close. No gap in the recording.' },
        { label: 'The steward’s rhythm', body: 'Jónsdóttir refills glasses from the carafe in a consistent pattern after each move, always pouring at the trolley, never carrying a glass out of frame. Her hands are visible throughout her refills.' },
        { label: 'Move 28', body: 'Jónsdóttir leaves frame toward the rope (3m58s absent). Ólafsson steps to the trolley, draws it back from the edge, and stands over it for about 40 seconds with his back three-quarters to camera 3, his hands below the trolley lip and out of the camera’s line. No other person approaches the trolley.' },
        { label: 'The glasses', body: 'On Ólafsson’s return to the board the glasses are as before to the eye. Jónsdóttir returns and refills from the carafe after move 30, topping up Vasiliev’s glass — which, if the drug was already in the empty-ish glass, would dissolve into the new water.' },
        { label: 'Everyone else', body: 'Tamm and Holt remain seated, hands visible, never within reach of Vasiliev’s glass. No spectator crosses the rope near Board 1. Morozova, Reyn: not in the hall (confirmed by lounge and VIP cameras).' },
        { label: 'Conclusion', body: 'The only person who approached Vasiliev’s glass off the steward’s rhythm, and the only person whose hands the cameras could not see at that moment, is the chief arbiter, during the steward’s four-minute absence.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'lab',
      title: 'Toxicology and the single glass',
      summary: 'What killed him, where it was, and when it was taken.',
      stamp: 'Laboratory',
      recordType: 'Toxicology report',
      origin: 'Landspítali toxicology; seized glass, carafe, jug',
      custodian: 'Landspítali',
      date: '18 March',
      status: 'Complete',
      sections: [
        { label: 'The drug', body: 'A combined beta-blocker and antiarrhythmic in a dose many times therapeutic. In a patient with Vasiliev’s arrhythmia it induces fatal cardiac arrest. Not his prescribed medication (a different class, found correctly dosed in his bag).' },
        { label: 'Location', body: 'High concentration in Vasiliev’s glass; absent from the carafe, the back-up jug, and every other player’s glass. The poison was placed in one glass, not the shared supply.' },
        { label: 'Timing', body: 'Given onset of 20–60 minutes and collapse at move 31 (24-minute think), the fatal ingestion aligns with the drink taken after move 30 — the refill that followed the steward’s absence and the arbiter’s time at the trolley.' },
        { label: 'Form', body: 'The drug is readily soluble; crushed tablets or a prepared solution tipped into an empty or near-empty glass would dissolve in the next pour and be invisible. A few seconds suffices.' },
        { label: 'What this excludes', body: 'The carafe being clean excludes any method that poisons the shared supply, which excludes anyone who could only reach the carafe. It requires access to Vasiliev’s individual glass — a far smaller set of people.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'document',
      title: 'Vasiliev’s cheating dossier and the arbiter page',
      summary: 'Whom he was about to name, and the complicity he had uncovered.',
      stamp: 'Evidence',
      recordType: 'Document review',
      origin: 'Victim’s hotel room; Morozova (Friday copy)',
      custodian: 'Det. Sigurðardóttir',
      date: '18 March',
      status: 'Reviewed',
      sections: [
        { label: 'The accusation', body: 'A detailed file alleging Tamm received engine moves during four games via a concealed device, with move-matching analysis. Vasiliev intended to present it at the closing ceremony.' },
        { label: 'The arbiter page', body: 'A separate page alleges that the federation’s screening equipment was deliberately not run during Tamm’s games, and that an official was paid to ensure it, with a bank-transfer reference and a date. The official’s name is torn from the surviving copy — but Morozova’s Friday copy, which she photographed, names Stefán Ólafsson.' },
        { label: 'The bank reference', body: 'The transfer reference on the page corresponds, the federation confirms, to a payment of €40,000 received by Ólafsson from a company linked to Tamm’s manager over the past two years.' },
        { label: 'Timing', body: 'Vasiliev told journalists and the federation president he would present everything “Sunday evening, after I have won.” He died Sunday afternoon, before he could.' },
        { label: 'Significance', body: 'The dossier gives Tamm a motive to want the accuser silenced — but also gives the arbiter a far graver one: Vasiliev’s evidence would expose not a sporting cheat but a bribed official and a €40,000 crime.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'ledger',
      title: 'Access and motive matrix',
      summary: 'Who could reach the single glass, and what each stood to gain or lose.',
      stamp: 'Compiled',
      recordType: 'Access and motive analysis',
      origin: 'Footage; seating; interviews',
      custodian: 'Det. Sigurðardóttir',
      date: '19 March',
      status: 'Verified where marked',
      sections: [
        { label: 'Access to the single glass', body: 'Only three people could physically reach Vasiliev’s individual glass during play: the steward (every refill, hands visible on camera), the arbiter (permitted to approach; at the trolley with hands hidden at move 28), and Vasiliev himself. Tamm and Holt could reach only their own glasses and the shared carafe (clean).' },
        { label: 'Ólafsson', body: 'Access: yes, uniquely, off-rhythm and hidden. Motive: exposure of a €40,000 bribe and the end of his career and liberty. Carried the matching drug (CS-07).' },
        { label: 'Tamm', body: 'Access: no (seated, hands on camera, never near the glass). Motive: strong (exposure as a cheat) but the death destroys his chance to disprove it over the board.' },
        { label: 'Holt', body: 'Access: no (Board 2, same carafe, unaffected). Motive: the title and sponsorship — but no route to a single poisoned glass.' },
        { label: 'Morozova / Reyn', body: 'Access: none (not in the hall; on lounge/VIP cameras throughout). Morozova’s grievance and Reyn’s scandal-fear are real but cannot reach the glass.' },
        { label: 'Steward', body: 'Access: yes, but hands visible on camera every refill, pouring only from the clean carafe, with no motive and no opportunity to add anything unseen.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'drawing',
      title: 'The device question: was Tamm actually cheating?',
      summary: 'Examination of Tamm’s watch and the screening logs — and why it matters to the murder.',
      stamp: 'Technical',
      recordType: 'Technical examination',
      origin: 'Tamm’s watch; federation screening equipment logs',
      custodian: 'Police technical unit; federation',
      date: '20 March',
      status: 'Complete',
      sections: [
        { label: 'The watch', body: 'Tamm’s watch is a consumer fitness device with no radio capable of receiving engine moves and no chess software. It is not a cheating device.' },
        { label: 'The screening logs', body: 'The federation’s signal-screening equipment logs when it is run. For Tamm’s four games flagged by Vasiliev, the logs show the screening was marked “performed” — but the device’s internal self-test timestamps show it was powered down during those rounds. Someone recorded screening that did not happen.' },
        { label: 'Who ran it', body: 'The screening is the chief arbiter’s responsibility. Ólafsson signed each as performed. The self-test gaps align with the games in Vasiliev’s dossier.' },
        { label: 'What this means', body: 'Whether or not Tamm cheated cannot now be proven — but the screening that would have cleared or convicted him was deliberately not run, and falsely recorded, by Ólafsson. Vasiliev’s real discovery was not a cheating player but a corrupt official selling the integrity of the screening.' },
        { label: 'Correction', body: 'The case is not about catching a cheat. It is about an arbiter who took €40,000 to disable the system he was paid to run, and who faced exposure and prison the moment Vasiliev stood up at the ceremony.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'olafsson',
      title: 'Messages: Ólafsson and Tamm’s manager',
      subtitle: 'Recovered from a secondary phone found in Ólafsson’s hotel safe',
      format: 'chat',
      messages: [
        { from: 'Manager → Ólafsson', side: 'left', text: 'Second payment cleared. Screening off for his rounds as before. We cannot have a problem in the final.', time: 'Wed 13 Mar, 22:10' },
        { from: 'Ólafsson → Manager', side: 'right', text: 'The screening is handled. The problem is Vasiliev. He has something and he is telling the president he will present it Sunday.', time: 'Fri 15 Mar, 09:30' },
        { from: 'Manager → Ólafsson', side: 'left', text: 'Then there cannot be a Sunday presentation. Deal with it however you deal with it. This is your name too.', time: 'Fri 15 Mar, 09:41' },
        { from: 'Ólafsson → Manager', side: 'right', text: 'Do not message this number again.', time: 'Fri 15 Mar, 09:44' }
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'morozova',
      title: 'Vasiliev’s note to Morozova',
      subtitle: 'Found in the lounge in his coat; Friday',
      format: 'note',
      messages: [],
      noteText: [
        'Lena — Sunday evening I present everything. It is not the boy I care about; boys will always cheat. It is Ólafsson. He took money to turn the screening off. An arbiter who sells the screening sells the whole game. The president has agreed to hear me after the round. Keep the file safe. If anything happens to it, you have the copy. — A.V.'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'holt',
      title: 'Holt’s messages with his sponsor',
      subtitle: 'Extracted with consent',
      format: 'chat',
      messages: [
        { from: 'Sponsor → Holt', side: 'left', text: 'We need a result this week, Marcus. The board meets in April about renewing.', time: 'Thu 14 Mar, 18:00' },
        { from: 'Holt → Sponsor', side: 'right', text: 'I’m half a point back. If Vasiliev draws Board 1 he wins and I’m second. I need him to lose, which he won’t. Realistically it’s second.', time: 'Sat 16 Mar, 20:30' }
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'reyn',
      title: 'Reyn’s emails to the federation',
      subtitle: 'Provided by Reyn',
      format: 'note',
      messages: [],
      noteText: [
        '(Saturday) To the President: I implore you to persuade Vasiliev to bring his allegations to the committee privately after the event rather than at the closing ceremony. A public accusation on the stage, under our sponsor’s banners and the cameras, would be catastrophic for the tournament and for Icelandic chess. Handle it quietly. — G. Reyn',
        '(President’s reply) Gunnar — I have tried. He insists. He says if we silence him we are no better than the cheats. I fear we cannot stop him.'
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'olafsson',
      questions: [
        {
          id: 'Q-olafsson-1',
          prompt: 'You are the only person who approached his glass off the steward’s rhythm, with your hands hidden from the camera, during her absence. Explain those forty seconds.',
          answer:
            'I moved a trolley that was too close to the stage edge. If my back was to a camera, it is because I was facing the stage, as an arbiter faces the stage. If my hands were below the lip, it is because I took hold of the trolley to move it. I was at that trolley for less than a minute, in full view of three hundred people, doing my job. You have built a murder out of a man tidying a trolley. I did not open any pill, I did not touch any glass, I poured nothing. The steward poured every drink from the carafe, and the carafe is clean. If you can tell me how I poisoned one glass without touching it, I am listening.'
        },
        {
          id: 'Q-olafsson-2',
          prompt: 'Vasiliev’s dossier, in Morozova’s copy, names you. The screening logs show you recorded screening you did not run. A secondary phone shows €40,000 and “there cannot be a Sunday presentation.” ',
          answer:
            'That phone is— I do not know that phone. The dossier is the fantasy of a sick man who saw conspiracies in a draw. The screening logs— equipment fails; I recorded it as run because I believed it had run. The payments— consultancy, lecture fees, I am an arbiter of thirty years, money comes in from many places. You have assembled a story. What you do not have is a hand putting a drug in a glass, because mine did not. I will tell you what I had: a career, a reputation, a tournament on my watch. All of it is now gone whatever happens in this room. I did not need to murder a man to lose everything; his accusation would have done it. Which is rather the point you are missing: a man about to be exposed does not improve his position by committing a murder in front of five cameras.'
        },
        {
          id: 'Q-olafsson-3',
          prompt: 'You carry the exact drug that killed him. He carried a different one. How do you explain that your heart pills are the murder weapon?',
          answer:
            'Half the men in that hall over fifty carry a heart pill, and this is a common combination. That mine happens to match the drug used tells you only that I have a heart, which after today I am sorry for. If I were going to poison a man with my own prescription, I would at least have had the sense to use a drug that could not be traced to my own pocket. You are describing the clumsiest murder imaginable: committed on camera, with my own medication, by the one man everyone watches. Either I am the stupidest arbiter in Europe or someone has arranged for the evidence to point at the man whose job put him beside the board. Ask yourself who benefits from my hanging. Ask the young man whose cheating I supposedly covered — who is free the moment I take the blame.'
        }
      ]
    },
    {
      suspectId: 'morozova',
      questions: [
        {
          id: 'Q-morozova-1',
          prompt: 'You manage his medication and know exactly what his heart cannot take. You were bitter about the manual. Why not you?',
          answer:
            'Because I was in the lounge on camera for four hours and I never went near the hall, let alone his glass, which I am not permitted to approach even if I had wanted to. And because the drug that killed him was not his — it was a combination he never took, that I never handled, that was not in the bag I packed. I pack his real pills every morning; you have them, sealed and correct. If I had wanted to kill Anton with medication I would have done it with his own, at the hotel, where no camera watches a coach fill an organiser. I did not. I was going to leave him and write my own book and let the chess world find out whose openings they were. Killing him buried my openings in his grave. I wanted credit, not a funeral.'
        },
        {
          id: 'Q-morozova-2',
          prompt: 'You kept a copy of his dossier. Why, and what does it say?',
          answer:
            'He told me to keep the copy in case anything happened to the original — he was paranoid, and in this instance right. It names Tamm for the engine moves and Ólafsson for taking money to switch off the screening during Tamm’s games. There is a bank reference. Anton did not care about Tamm; he said boys always cheat and the game survives it. What he could not forgive was an arbiter selling the screening, because then there is no game left to cheat at. He was going to present it to the president on Sunday evening. He said, “An arbiter who sells the screening sells the whole game,” and he was going to say it on a stage, and now he is dead the afternoon before he could.'
        },
        {
          id: 'Q-morozova-3',
          prompt: 'You saw him collapse on the monitor. Describe it.',
          answer:
            'He had a won position — I knew the move, any of us would — and he reached for the piece and stopped. Anton never hesitated with a win; it was the one joy left to him. When he sat with his hand over the board at five minutes I knew his heart. At ten I was on my feet. At fourteen I was at the door and they would not let me in because seconds may not enter during play, and I stood at the door of the hall and watched my — watched him die on a monitor because of a rule. He drank after move 30; I saw him drink. I have watched it a hundred times since. He drank the water the steward poured from the clean carafe into the glass someone had already prepared.'
        }
      ]
    },
    {
      suspectId: 'tamm',
      questions: [
        {
          id: 'Q-tamm-1',
          prompt: 'He was about to end your career. His death does that silencing for you. Why should we believe you wanted him alive?',
          answer:
            'Because a living Vasiliev I could beat. Not that day — my position was lost when he fell — but over a career. If he named me and I was innocent, I would fight it, and in five years people would have forgotten, or he would have been proven wrong, because you cannot prove cheating that did not happen. A dead accuser is forever. Now I am the young player the great Vasiliev accused of cheating and then conveniently died before he could prove it. Do you understand what that does to me? I will carry his accusation to my grave with his death stapled to it. I have handed my watch to your technicians and begged them to take it apart. The worst thing that ever happened to my career is that the man accusing me died before he could fail to prove it.'
        },
        {
          id: 'Q-tamm-2',
          prompt: 'Were you cheating? And who gained if Vasiliev’s screening-complicity evidence never came out?',
          answer:
            'I was not cheating, and your technicians have my watch to prove it is just a watch. Who gains if the screening evidence vanishes? Not me — I want the screening run, because if it had been run honestly it would have cleared me and there would be no accusation. The person who gains from that evidence staying buried is the person who took money to switch the screening off and record it as done. That is not me. I did not even know the screening was being skipped; I thought I was being screened like everyone and passing, because I had nothing to hide. The man who knew it was off, and took money for it, and faced prison when Vasiliev spoke — ask him where his hands were when the steward was away.'
        },
        {
          id: 'Q-tamm-3',
          prompt: 'You backed away from the board with your hands up when he collapsed. Why?',
          answer:
            'Instinct, and the worst instinct possible. I saw the man who had accused me of cheating fall down dead across the board from me, in front of three hundred people and a live stream, and my whole body understood before my mind did exactly how this would look, and I put my hands up and backed away as if the chessboard were a gun. It was the most incriminating thing I could have done and I could not stop myself. If I had poisoned him I would have leaned in and shouted for a doctor and performed grief, because I am not an idiot. What I did was the reflex of a frightened innocent man who has just realised he will be blamed. I have been blamed ever since, by everyone except, I hope, by you, if you look at where my hands were all afternoon: on my own pieces, nowhere near his glass, on camera, the whole time.'
        }
      ]
    },
    {
      suspectId: 'holt',
      questions: [
        {
          id: 'Q-holt-1',
          prompt: 'His zero handed you the title and saved your sponsorship. That is the clearest motive in the hall.',
          answer:
            'It is, and I have said so myself, because pretending otherwise would insult you. His death made me champion and probably renewed my sponsor. If motive hanged people I would be in a cell. But I was at Board 2 with my hands on camera for four hours, drinking from the same carafe as the man who died, and I am still breathing, which tells you the poison was in his glass and not the shared water. I could reach my own glass and the carafe. I could not reach his glass any more than you could from across the room. A motive without a method is a grievance, Detective. I had a grievance. I did not have a method. One man on that stage had both, and he is the one whose job let him stand at the trolley.'
        },
        {
          id: 'Q-holt-2',
          prompt: 'You resented the cheating allegations publicly. Did you know what was in the dossier?',
          answer:
            'I knew Vasiliev was going to accuse someone and ruin my tournament with it; I did not know the details and I did not want to. I thought it was sour grapes about Tamm, who beat him in a rapid last year and has been in his head ever since. I did not know about the arbiter or the money until you told me just now, and I will say it changes my view of a man I have known for twenty years. Stefán always seemed the one honest fixture in a crooked game. If he was selling the screening, then the person Vasiliev was really threatening was not the boy and not me. It was the man who signs the round reports. I resented Vasiliev. Stefán faced prison because of him. Those are not the same weight.'
        },
        {
          id: 'Q-holt-3',
          prompt: 'You said you watched Ólafsson move the trolley. What exactly did you see?',
          answer:
            'I was thinking about my own position, so I only half-saw it, but when the steward went off to the rope I was aware of Stefán stepping over to the trolley and standing at it with his back to the hall for a moment, and I remember thinking it was unlike him to touch the water — the arbiter never touches the water, that is the whole point of the steward. Then he moved it back and returned to Board 1 and I forgot about it, because I had a difficult rook ending. It is only now, when you tell me the poison was in one glass and the carafe was clean, that the picture rearranges itself. He is the only one of us who was ever at that trolley with a reason the cameras would accept, and the only one whose hands they could not see.'
        }
      ]
    },
    {
      suspectId: 'reyn',
      questions: [
        {
          id: 'Q-reyn-1',
          prompt: 'You begged him to drop the accusation and he refused. You had stage access during setup.',
          answer:
            'During setup, hours before anyone drank a drop, when the glasses were empty and being laid out — access that is useless for poisoning a specific glass during a specific round. During the round I was in the VIP area with the federation president and twenty donors and a camera, because my job on the day is to be seen being gracious while other people play chess. I asked Anton to be discreet because a scandal at my event frightened me. A murder at my event is not a smaller scandal; it is the biggest one imaginable, and it is mine to answer for. You are looking at the one man in the building for whom Anton’s death is pure disaster with no upside at all. I wanted him quiet. Quiet, Detective, not dead.'
        },
        {
          id: 'Q-reyn-2',
          prompt: 'Who, in your view, had the most to lose from his Sunday presentation?',
          answer:
            'I thought it was Tamm, and I was wrong, because I did not know what was on the second page. If what you tell me is true — that Anton had evidence an arbiter took money to switch off the screening — then the man with the most to lose was not a player at all. A player accused of cheating loses a reputation. An arbiter proven to have sold the screening loses his liberty; it is fraud, it is corruption, there is a bank transfer with his name on it. I have run this tournament for eleven years trusting Stefán to keep it clean. If he was the one taking money to make it dirty, and Anton was about to stand on my stage and say so, then I have been protecting the wrong thing. I wanted to protect the tournament. I should have been protecting Anton from the man beside the board.'
        },
        {
          id: 'Q-reyn-3',
          prompt: 'The water arrangements — the single carafe, the steward, the trolley — you paid for them. Walk us through.',
          answer:
            'Players may not leave the board, so the federation requires a steward to refill from a central supply; it is standard and it is clean, because the carafe serves everyone. I provided the trolley, the carafe, the glasses. The rule exists precisely so that no outsider handles a player’s drink — only the steward pours, from a shared source, in view. The one flaw in it, which I never thought about until today, is that the arbiter is permitted near the boards and therefore near the trolley, and the arbiter is the one person the rule does not watch, because the rule assumes the arbiter is the guarantor of fairness. We built a system that watched everyone except the man we trusted most. And he knew it better than anyone, because he designed half of it with me.'
        }
      ]
    },
    {
      suspectId: 'erla',
      questions: [
        {
          id: 'Q-erla-1',
          prompt: 'You poured every drink. The poison was in the glass. Convince us it was not your hand.',
          answer:
            'Because my hands are on camera for every pour, and I poured from the carafe every time, and the carafe is clean, and I never once carried a glass out of the camera’s sight. If I had wanted to poison Anton I would have had to tip something into his glass in full view of four cameras and three hundred people, which I did not do and could not have done unseen. The only moment his glass was out of my control was the four minutes I was at the rope, when the trolley stood by the stage and the arbiter was at it. I came back and poured from the carafe into a glass I thought was empty and ordinary. I have not slept since. I poured the water. But I did not put the thing in it, and I know who was standing where I left the glasses when I came back.'
        },
        {
          id: 'Q-erla-2',
          prompt: 'Tell us precisely about move 28 and the arbiter at the trolley.',
          answer:
            'The supervisor radioed me to clear a spectator leaning over the rope near Board 2 for the cameras. I went, it took about four minutes, I moved the man back, I came to the trolley and Stefán was standing at it, side-on, and he said, “I pulled it back, it was too near the edge.” I said thank you. The glasses were on the trolley as I had left them. I refilled them after the next moves, Anton’s among them, from the carafe. It did not occur to me for one second that the arbiter standing at the water trolley was anything but the arbiter being careful. He is the arbiter. You trust the arbiter. That is the entire reason there is an arbiter.'
        },
        {
          id: 'Q-erla-3',
          prompt: 'After move 30 you refilled his glass. If the drug was already in the glass, your pour is what dissolved it. Did you notice anything?',
          answer:
            'His glass was nearly empty — he drank steadily, he was nervous even when winning — so I topped it up, and if there was powder or a little liquid in the bottom I would never have seen it going in over the old water, and the fresh pour would have mixed it. I noticed nothing. That is the horror of it: the system is built so that a clean pour from a clean carafe makes any drink safe, and it would have, except that the glass itself had been prepared while I was four minutes away, and I finished the job for whoever did it by filling it up. I have gone over whether I could have seen it. I could not. He drank, and he looked up at me, and he said “takk” — thank you — because he always did. And then at move 31 he stopped reaching for the piece.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-bribe', label: 'To prevent exposure of a €40,000 bribe to switch off the anti-cheating screening' },
      { id: 'm-cheat', label: 'To silence an accusation of cheating over the board' },
      { id: 'm-title', label: 'To win the tournament and save a sponsorship' },
      { id: 'm-credit', label: 'Resentment over stolen credit for an opening manual' },
      { id: 'm-scandal', label: 'To protect the tournament from a cheating scandal' }
    ],
    methodOptions: [
      { id: 'h-glass', label: 'A soluble cardiac drug placed in Vasiliev’s individual glass at the trolley during the steward’s absence, then dissolved by the next refill' },
      { id: 'h-carafe', label: 'The shared carafe was poisoned' },
      { id: 'h-pills', label: 'His own medication was swapped at the hotel' },
      { id: 'h-food', label: 'Poison in food before the round' }
    ],
    selectableEvidenceIds: ['CS-02', 'CS-03', 'CS-05', 'CS-06', 'CS-07', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'WS-06', 'Q-erla-2', 'Q-holt-3', 'Q-olafsson-1'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'olafsson',
    motiveOptionId: 'm-bribe',
    methodOptionId: 'h-glass',
    decisiveEvidenceIds: ['EV-01', 'EV-02', 'EV-03', 'MSG-01', 'CS-05'],
    reveal: 'Stefán Ólafsson, the one man allowed beside the board, dropped the drug into Vasiliev’s glass at the trolley during the steward’s four-minute absence — to bury the bribe Vasiliev was about to expose that evening.',
    reconstruction: [
      'For two years Ólafsson had taken money — €40,000 in all — from Tamm’s manager to leave the anti-cheating screening switched off during Tamm’s games and to record it as performed. Whether or not Tamm actually cheated, Ólafsson had sold the integrity of the system he was paid to run. Then Vasiliev found the bank reference and the screening logs and announced he would present everything to the federation president on Sunday evening, after the final round. For a bribed official that meant not disgrace but prison. On Friday the manager told him, “there cannot be a Sunday presentation. Deal with it.”',
      'The water system watched everyone but the arbiter. Players could reach only their own glasses and the shared carafe; the steward poured in full view; but the arbiter was permitted at the boards and near the trolley, and the rule assumed he was the guarantor of fairness. Ólafsson carried a cardiac drug — a common combination for men his age, and lethal to Vasiliev’s specific condition — in his own pill organiser.',
      'At move 28 a spectator at the rope drew the steward away for four minutes. Ólafsson stepped to the trolley on the pretext of moving it back from the edge, stood side-on with his hands below the lip and out of the one camera that covered it, and tipped the drug into Vasiliev’s near-empty glass. When Erla returned she refilled the glasses from the clean carafe, and her innocent pour dissolved the drug and hid it. Vasiliev drank after move 30, thanked her, and twenty minutes later, with a won position and his hand over the winning piece, his heart stopped.',
      'The murder was committed in front of five cameras precisely because the arbiter believed no one watches the arbiter. But the footage caught the one approach off the steward’s rhythm; the toxicology proved the poison was in one glass and not the shared supply, which pointed to the tiny set of people who could reach that glass; and Vasiliev’s own dossier, copied by his second, named the man beside the board and the price he had been paid. The accuser’s evidence survived the accuser.'
    ],
    chronology: [
      { time: 'Over 2 years', event: 'Ólafsson paid €40,000 to switch off screening during Tamm’s games; records it as performed.', refs: ['EV-03', 'EV-05', 'MSG-01'] },
      { time: 'Fri 15 Mar', event: 'Vasiliev tells the president he will present everything Sunday; the manager tells Ólafsson “there cannot be a Sunday presentation.”', refs: ['MSG-01', 'MSG-02', 'MSG-04'] },
      { time: 'Sun, pre-round', event: 'Glasses laid out; Reyn’s only stage access, hours before play.', refs: ['Q-reyn-1'] },
      { time: 'Move 28', event: 'Steward drawn to the rope (4 min). Ólafsson at the trolley, hands hidden, tips the drug into Vasiliev’s glass.', refs: ['EV-01', 'CS-05', 'WS-06', 'Q-erla-2'] },
      { time: 'After move 30', event: 'Steward refills glasses from the clean carafe, dissolving the drug in Vasiliev’s.', refs: ['Q-erla-3', 'EV-02', 'CS-04'] },
      { time: 'Move 31', event: 'Vasiliev, in a won position, thinks 24 minutes and collapses.', refs: ['CS-01', 'Q-morozova-3'] },
      { time: '17:10', event: 'Death at Landspítali, before any presentation.', refs: ['CS-01', 'EV-03'] }
    ],
    evidenceChain: [
      { title: 'Method: one glass, not the carafe', body: 'The poison was in Vasiliev’s glass alone; the carafe and every other glass were clean. That excludes anyone who could reach only the shared supply and points to the handful who could reach the individual glass.', refs: ['CS-02', 'EV-02', 'EV-04'] },
      { title: 'Opportunity: the man the rule did not watch', body: 'Only the steward (hands always on camera), the arbiter and the victim could reach the glass. During the steward’s absence the arbiter stood at the trolley with his hands hidden from the only camera covering it — the one off-rhythm approach in four hours.', refs: ['EV-01', 'CS-05', 'Q-erla-2', 'Q-holt-3'] },
      { title: 'Means: his own drug', body: 'Ólafsson carried the exact beta-blocker/antiarrhythmic combination that killed a man whose condition made it fatal.', refs: ['CS-07', 'EV-02'] },
      { title: 'Motive: the bribe, not the cheat', body: 'The dossier and screening logs show the real secret was not Tamm’s play but Ólafsson’s €40,000 to disable the screening; exposure meant prison, and it was due Sunday evening.', refs: ['EV-03', 'EV-05', 'MSG-01', 'MSG-02'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Kristjan Tamm', body: 'The dossier’s named cheat and the obvious beneficiary of silence — but his hands were on camera the whole game, nowhere near the glass, and the death destroys his only hope of disproving the accusation over the board. His watch is just a watch.', refs: ['EV-01', 'EV-05', 'Q-tamm-1'] },
      { title: 'Marcus Holt', body: 'The death handed him the title and his sponsorship, the clearest motive in the hall — but Board 2 placed him one board away, hands on camera, drinking the same clean carafe unharmed, with no route to a single glass.', refs: ['EV-04', 'EV-01', 'Q-holt-1'] },
      { title: 'Dr Lena Morozova', body: 'She knew his heart and resented the stolen manual, but she was on the lounge camera the whole round, never in the hall, and the drug was not his own medication, which she packed correctly. His death buried her openings with him.', refs: ['EV-04', 'CS-07', 'Q-morozova-1'] },
      { title: 'Gunnar Reyn', body: 'He feared the scandal and had setup access, but only hours before play with empty glasses, and the VIP camera holds him through the round. A murder is a worse scandal than the one he feared.', refs: ['Q-reyn-1', 'EV-04', 'MSG-04'] },
      { title: 'Erla Jónsdóttir', body: 'She poured every drink, but always from the clean carafe with her hands on camera, never out of sight, with no motive. Her innocent refill dissolved a drug already placed in the glass while she was at the rope.', refs: ['EV-01', 'Q-erla-1', 'Q-erla-3'] }
    ],
    redHerringResolutions: [
      { title: 'The cheating accusation', body: 'Everyone assumed the dossier’s danger was to the accused cheat, Tamm. The second page shows the real target was the bribed arbiter; the cheating was the lesser crime and possibly never happened.', refs: ['EV-03', 'EV-05'] },
      { title: 'Holt’s perfect motive', body: 'The man who won by the death looked obvious, but motive without access is a grievance; he could not reach the single glass.', refs: ['EV-04', 'Q-holt-1'] },
      { title: 'The steward who poured the fatal glass', body: 'The hand that carried the water seemed the natural suspect. The system was built so her clean pour made drinks safe; it was the glass, prepared in her absence, that was not.', refs: ['Q-erla-1', 'Q-erla-3', 'EV-02'] }
    ],
    epilogue: 'Ólafsson was charged with murder and corruption; the secondary phone and the bank record did the rest. The federation ran the screening on Tamm’s archived games and found no engine match; he was cleared, though he still plays under the shadow of a dead man’s accusation. The Spring Masters now seats an independent observer, not the arbiter, beside the water trolley.'
  }
};
