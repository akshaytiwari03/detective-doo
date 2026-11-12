import type { MysteryCase } from '../types/case';

export const cerroAlto: MysteryCase = {
  id: 'c03',
  slug: 'cerro-alto',
  title: 'The Dome at Cerro Alto',
  tagline: 'An observatory director falls seven metres onto a steel floor under the clearest sky on earth. The dome itself kept a record of who moved it.',
  era: 'Atacama Desert, Chile — August 1962',
  difficulty: 'intermediate',
  estimatedMinutes: 40,
  dossier: {
    reference: 'Carabineros de Chile — Prefectura de Antofagasta — Brigada de Homicidios',
    caseNumber: 'PA-62-0391',
    victim: 'Dr Ilse Brandt, age 54. Director, Observatorio Cerro Alto. Astronomer; specialist in variable stars.',
    location: 'Interior of the 60-inch telescope dome, Cerro Alto summit, 2,900 m.',
    incidentDate: 'Night of 14–15 August 1962, between about 2:30 and 3:00 a.m.',
    discoveryTime: '6:15 a.m., by the night assistant closing the dome at dawn.',
    causeOfDeath: 'Injuries consistent with a fall of about seven metres onto the steel telescope floor. A bruise to the left forearm and a torn fingernail suggest she gripped a rail and was struck or pulled free of it.',
    leadInvestigator: 'Capitán Rodrigo Ibáñez, Carabineros, Antofagasta.',
    assisting: 'Dr Mateo Lagos, médico legista; Observatorio Nacional (technical consultation on instrument records).',
    status: 'OPEN. Six persons present on the summit. The dome’s rotation recorder, the telescope plates and the observing log form a mechanical account of the night that no witness controls.',
    synopsis:
      'During a scheduled observing night on the 60-inch telescope, Dr Brandt was found at dawn lying on the steel floor of the dome beneath the fixed observer’s stair. The dome’s rotating catwalk — a steel gallery that runs around the inside of the dome at seven metres and turns with it — stood forty degrees away from the point where she lay. The dome rotation recorder shows a six-minute manual rotation at 2:41 a.m., during which the night assistant was in the kitchen. The visiting astronomer using the telescope says he was in the darkroom. The telescope’s photographic plate says the dome moved during his exposure.',
    backgroundLocation:
      'Cerro Alto is a small observatory of two domes and a residence building, run by a German-Chilean foundation. The 60-inch dome contains the telescope on a concrete pier, a steel floor, a fixed stair to a mid-level platform, and the rotating catwalk at the base of the dome shutter, reached by a vertical ladder fixed to the dome. The dome is turned by an electric motor from a control box on the telescope floor; every movement is traced on a paper chart recorder. The darkroom is along a corridor connecting the dome to the residence; a red lamp over the corridor door lights when the darkroom’s safelight is on.',
    backgroundGathering:
      'Dr Marr of Heidelberg had the 60-inch for a two-week run. Dr Soto was observing on the 24-inch dome four hundred metres away. The deputy director, the dome engineer, the night assistant, the cook and Dr Brandt’s niece were in residence. Dr Brandt had spent the previous three days in the plate archive and had told her niece she would “settle a question of priority” before Marr left the mountain.'
  },
  suspects: [
    {
      id: 'riquelme',
      name: 'Tomás Riquelme',
      age: 36,
      role: 'Night assistant',
      hue: 25,
      bio: 'Riquelme has operated the 60-inch dome for eight years. He turns the dome to follow the telescope, loads plate holders, reads the clocks and keeps the observers’ coffee hot. Brandt had written him up twice this year for drinking on shift and once for leaving the floor unattended. He is a member of the staff union that is in dispute with the foundation over summit pay. He found the body and did not immediately report it; he first checked, he says, whether the dome shutter had been damaged.',
      stakes: 'His job, which Brandt was about to end.',
      openQuestion: 'He left the floor at 2:30 for the kitchen. The dome moved at 2:41 without him.'
    },
    {
      id: 'marr',
      name: 'Dr Felix Marr',
      age: 41,
      role: 'Visiting astronomer, Heidelberg',
      hue: 215,
      bio: 'Marr made his name in 1960 with the discovery of a recurrent nova in a southern nebula, announced from plates he said he took at Cerro Alto during his first visit in 1959. The paper won him a chair. He is fluent, impatient with assistants, and works alone at the telescope, developing his own plates. This was his third run on the 60-inch. He asked for Brandt’s help in writing the observatory into a joint programme with Heidelberg; she had not said yes.',
      stakes: 'A reputation, a chair and a discovery that must remain his.',
      openQuestion: 'He says he was in the darkroom from 2:20 to 3:10. The darkroom lamp over the corridor door says otherwise.'
    },
    {
      id: 'soto',
      name: 'Dr Amalia Soto',
      age: 33,
      role: 'Staff astronomer',
      hue: 320,
      bio: 'Soto came to Cerro Alto as Brandt’s student and stayed as her only staff astronomer. She expected, when the deputy director retires, to be named his successor; in July Brandt told her the foundation preferred a German appointee and that she should “publish more and complain less.” Soto was observing on the 24-inch that night with a student from Santiago. She is precise, ambitious and openly bitter about the foundation.',
      stakes: 'The deputy directorship, and with it the right to stay on the mountain.',
      openQuestion: 'She was in another dome four hundred metres away. Was she there all night?'
    },
    {
      id: 'perez',
      name: 'Hugo Pérez',
      age: 60,
      role: 'Dome engineer and mechanic',
      hue: 140,
      bio: 'Pérez built the dome drive, maintains the chart recorder and sleeps most nights in the workshop below the 60-inch so that he can fix anything that stops. He was due to retire in December on a pension the foundation had reduced; Brandt had refused to intervene. He drinks maté in the kitchen with the night assistant and the cook and knows every sound the dome makes. He was in the corridor at 2:35 on his way to the kitchen and noticed something he did not at first think important.',
      stakes: 'A pension cut by a third, and a workshop he would have to leave.',
      openQuestion: 'He could have moved the dome from the motor housing below without touching the control box. Could anyone else?'
    },
    {
      id: 'krauss',
      name: 'Dr Walter Krauss',
      age: 58,
      role: 'Deputy director',
      hue: 60,
      bio: 'Krauss has been deputy director since the observatory opened and has watched the foundation’s money run out. He favoured a partnership with an American university that Brandt opposed; the matter was to be decided in Santiago in September. He spends his nights in his office in the residence, on the telephone to Santiago when the line is quiet, and has not observed in a decade. He and Brandt disliked one another with the courtesy of long practice.',
      stakes: 'The American partnership and the directorship it would have given him.',
      openQuestion: 'He says he was on a long-distance call. The telephone exchange in Antofagasta keeps a ticket for every one.'
    },
    {
      id: 'ines',
      name: 'Inés Brandt',
      age: 27,
      role: 'Niece; secretary and plate archivist',
      hue: 275,
      bio: 'Inés came from Valparaíso three years ago to keep her aunt’s correspondence and the plate archive — fourteen thousand glass photographs in wooden cases. Under the will she inherits what little Ilse Brandt owned. In the last week she helped her aunt pull plates from 1957 and 1958 and lay them beside a published paper, and was told not to discuss it. She was seen in the residence kitchen at 3:00 a.m. fetching water, and says she had been asleep until then.',
      stakes: 'A small inheritance, and the knowledge of what her aunt had found in the archive.',
      openQuestion: 'She knew what was in the archive drawer. Who else did she tell?'
    }
  ],
  story: [
    {
      paragraphs: [
        'There is no sky like the Atacama sky. At Cerro Alto, two thousand nine hundred metres above a desert that has not seen rain in a human lifetime, the stars do not twinkle; they simply hang, hard and close, and the Milky Way throws shadows. The observatory was built there in 1949 by a foundation of German émigrés and Chilean industrialists who wanted their own window on the southern sky, and by 1962 it consisted of a 60-inch reflector in a steel dome, a 24-inch in a smaller dome four hundred metres down the ridge, a residence of stone and tin, and eleven people who spent their nights awake and their days asleep.',
        'The 60-inch dome is a drum of riveted steel with a slit in its roof. The telescope stands on a concrete pier in the middle; around it is a steel floor with the control box for the dome motor, a desk with the observing log, and a fixed iron stair that climbs to a platform halfway up the pier. Above that, at seven metres, a catwalk of steel grating runs round the inside of the dome at the base of the shutter, reached by a vertical ladder bolted to the dome wall. The catwalk turns with the dome. The telescope does not. On a long exposure the night assistant stands at the control box and, every few minutes, turns the dome a degree or two so that the slit stays over the telescope’s mouth, and a pen on a paper drum in the workshop below records every degree.',
        'Dr Ilse Brandt had directed Cerro Alto for nine years. She was a variable-star astronomer of the old school, who believed that a photographic plate was a legal document and kept fourteen thousand of them in wooden cases in a room off the residence corridor, each one labelled in her hand. She was exacting with her staff, who respected and did not love her, and with visiting astronomers, who needed the telescope and so said nothing.'
      ]
    },
    {
      paragraphs: [
        'Felix Marr had come up the mountain on the eighth of August for a fortnight on the 60-inch. He was the observatory’s most celebrated visitor: his 1960 announcement of a recurrent nova in a southern nebula, photographed at Cerro Alto in 1959, had made the observatory’s name in Europe and made his in Heidelberg. He wanted Brandt to sign the observatory into a joint programme with his institute. She had received him correctly and spent the first three days of his run not at the telescope but in the plate archive, with her niece, pulling plates from 1957 and 1958.',
        'What she found she told no one in full. She told Inés to say nothing. She told Krauss, at dinner on the thirteenth, that she would be writing to Astronomische Nachrichten about “a question of priority” and that he should expect the foundation to be embarrassed. She told Marr, on the evening of the fourteenth as he went up to the dome, that she would come and see him on the floor “after the second plate” and that he should keep his 1959 logbook by him. Riquelme heard this. So did Pérez, at the workshop door.',
        'The night was perfect. Marr began his first exposure at 1:10 and took the plate down to the darkroom at 2:05, leaving Riquelme to track the dome. He came back at 2:20 and loaded a second plate, and at 2:25, by his own entry in the observing log, opened the shutter on a ninety-minute exposure of the nebula. Riquelme, who had been on the floor since dusk, told him he was going down to the kitchen for coffee and would be back at three to move the dome. Marr said he would watch it himself.',
        'At 2:35 Hugo Pérez, going along the corridor to the kitchen, passed the darkroom door. The red lamp above it was off. He noticed because he had wired it. He drank maté with Riquelme and the cook until a quarter to three and thought nothing of it until the morning.'
      ]
    },
    {
      paragraphs: [
        'In the workshop below the dome the pen on the paper drum had been drawing a flat line since Riquelme’s last correction at 2:28. At 2:41 it jumped. The dome turned — not in the small, even steps of an assistant following the telescope, but in a long, uneven swing of forty degrees, with a stop and a start in the middle. It took six minutes. Then the line went flat again and stayed flat until dawn.',
        'Amalia Soto, in the 24-inch dome down the ridge, saw nothing; her own dome was tracking and she was at the eyepiece with her student. Walter Krauss, in his office, was on the telephone to Santiago. Inés Brandt was asleep in the residence, or says she was, until she got up at three for water and saw the kitchen light and the three men at the table. Tomás Riquelme went back up to the 60-inch at three o’clock, found the floor empty and the dome standing where it should not have been, assumed the German had moved it himself and badly, corrected it, and settled in to track until the exposure ended. He did not look under the fixed stair. There was no reason to. The floor is dark during an exposure and the stair casts a shadow.',
        'Marr came up from the darkroom at 3:10, closed the shutter at 3:55, took the plate down, and went to bed at 4:30. At 6:15, with the sky grey over the Andes, Riquelme began the dawn routine — shutter closed, dome parked, floor lights on — and found the director of Cerro Alto lying face down on the steel beneath the fixed stair, her glasses two metres away, her right hand reaching toward the pier.',
        'Capitán Ibáñez drove up from Antofagasta in four hours. He looked at the fixed stair, which was three metres high, and at the catwalk, which was seven, and at where the catwalk stood. Then Pérez, who had been standing silently by the control box, took him down to the workshop and showed him the drum.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'Position of the body',
      kind: 'found',
      body: 'Dr Brandt lay face down on the steel floor beneath the fixed observer’s stair, two metres from the pier. The stair is three metres high. The médico legista finds the injuries — skull, pelvis, both wrists — consistent with a fall of six to eight metres onto steel, not three. Her glasses were intact two metres away. She wore her observing coat and crepe-soled shoes.'
    },
    {
      id: 'CS-02',
      icon: 'layout',
      heading: 'Where the catwalk stood',
      kind: 'found',
      body: 'The rotating catwalk at seven metres stood, at 6:15, about forty degrees of dome rotation from the point directly above the body — after Riquelme’s correction at 3:00. Pérez’s drum shows the dome at 2:28 stood such that the catwalk ladder was above the fixed stair; the 2:41 rotation moved it forty degrees away. If she fell from the catwalk before 2:41, she fell from where the catwalk was, not where it is.'
    },
    {
      id: 'CS-03',
      icon: 'log',
      heading: 'The dome rotation chart',
      kind: 'found',
      body: 'The paper drum records dome position against time. Small, even steps from dusk to 2:28 (Riquelme). Flat line 2:28–2:41. At 2:41, a swing of about forty degrees in two uneven movements over six minutes, with a stop in the middle. Flat until 3:00, when a reverse correction of forty degrees (Riquelme, by his account) restores the slit to the telescope. Flat to dawn.'
    },
    {
      id: 'CS-04',
      icon: 'trace',
      heading: 'The catwalk rail and ladder',
      kind: 'tested',
      body: 'On the catwalk handrail, at the position that was above the fixed stair before 2:41, a smear of blood and a fragment of fingernail matching the victim. On the ladder rungs, scuffs from crepe soles going up. On the grating, a woman’s hair clip. Nothing on the fixed stair. She climbed the ladder to the catwalk; she did not use the stair.'
    },
    {
      id: 'CS-05',
      icon: 'document',
      heading: 'The observing log on the floor desk',
      kind: 'found',
      body: 'Marr’s log for the night records plate 7 exposed 1:10–2:05, plate 8 opened 2:25, “to darkroom 2:20–3:10 developing 7”, shutter closed 3:55. The page for 14/15 August is clean and uncreased; the pages before it are dusty and soft at the edges. Its paper stock is examined in EV-02. Beside the log lay Marr’s 1959 logbook, open at a page of plate numbers, with a pencil line under three of them.'
    },
    {
      id: 'CS-06',
      icon: 'door',
      heading: 'The darkroom lamp',
      kind: 'witness claim',
      body: 'A red lamp over the corridor door lights whenever the darkroom safelight is switched on; the darkroom cannot be used for developing without the safelight. Pérez states the lamp was off when he passed at 2:35. The cook confirms he said so in the kitchen at the time — “the German has left his red lamp off again” — before anyone knew it mattered.'
    },
    {
      id: 'CS-07',
      icon: 'photo',
      heading: 'Plate 8, the exposure running at the time',
      kind: 'tested',
      body: 'Plate 8 was in the telescope from 2:25 to 3:55. Developed under supervision, it shows the nebula field with one anomaly: for a portion of the exposure the star images are cut off on one side by a straight edge, consistent with the dome slit having been rotated across the telescope aperture and back. The exposure continued throughout; nobody closed the shutter. Pérez estimates the occultation at five to seven minutes.'
    },
    {
      id: 'CS-08',
      icon: 'effects',
      heading: 'Effects on the body and at the desk',
      kind: 'found',
      body: 'In her coat pocket: a folded sheet listing six archive plate numbers from 1957–58 with coordinates, in her hand, and a key to the archive room. On the floor desk, under the log: nothing of hers. Her office in the residence was found unlocked at 7:00 with the archive drawer for 1958 open and six plate sleeves empty. The six plates were later found in the workshop stove, broken and scorched, unreadable.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'marr',
      synopsis: 'I was developing plate 7 from 2:20 to 3:10. Whoever moved the dome, it was not me; I was not on the floor.',
      interviewedAt: '15 August 1962, 10:00 a.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'I opened plate 8 at 2:25 and told Riquelme I would mind the dome myself, which was foolish of me because I then went straight down to the darkroom to develop plate 7, as I always do, and stayed until about 3:10. The safelight was on; one cannot develop without it. If Pérez says the lamp over the door was off, then the lamp was faulty, which would not be the first time on this mountain. When I came back up at 3:10 Riquelme was on the floor and the dome was correctly placed. I noticed nothing.',
        'Dr Brandt said she would come and see me on the floor after the second plate. She did not come while I was there. I assumed she had gone to bed.',
        'My 1959 logbook was on the desk because she asked me to bring it. I do not know why she wanted it. I have nothing to hide in it; the nova plates are recorded there as they were taken.',
        'I did not see her after dinner. I had no quarrel with her. I needed her signature on a programme that would have brought this observatory money it badly needs.'
      ],
      claims: ['Opened plate 8 at 2:25 and went to the darkroom.', 'In the darkroom with the safelight on, 2:20–3:10.', 'Did not see Dr Brandt after dinner.']
    },
    {
      id: 'WS-02',
      suspectId: 'riquelme',
      synopsis: 'I went for coffee at 2:30. When I came back at three the dome was forty degrees off and I fixed it. I thought he had moved it himself.',
      interviewedAt: '15 August 1962, 8:00 a.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'I was on the floor from dusk. The German opened his second plate at 2:25 and said he would watch the dome. I made my last correction at 2:28 and went down to the kitchen. Pérez was already there; the cook was there. I was there until a quarter to three, then I went to the toilet, then I came back up at three.',
        'The dome was wrong. Forty degrees, more or less — the slit was off the telescope. I thought the German had tried to move it and made a mess of it, because visitors do. I put it back and I was angry about the plate because it would be ruined, and I stayed on the floor and tracked until he closed the shutter at 3:55. He came up at 3:10 and said nothing about the dome, which I thought was his pride.',
        'I did not look under the stair. It is dark during an exposure. When I found her at 6:15 I checked the shutter first because I thought she had fallen from the catwalk and I wanted to know if the dome had been damaged. That took a minute. Then I ran.',
        'She was going to have me dismissed. Everyone knows. I would not have thrown her off a catwalk for it. I would have gone back to Antofagasta and driven a truck.'
      ],
      claims: ['Last dome correction at 2:28; in the kitchen 2:30–2:45 (Pérez, cook).', 'Found the dome forty degrees off at 3:00 and corrected it.', 'Found the body at 6:15.']
    },
    {
      id: 'WS-03',
      suspectId: 'soto',
      synopsis: 'I was at the 24-inch with my student all night. Our dome has its own drum, if you want to check it.',
      interviewedAt: '15 August 1962, 11:30 a.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'I was observing eclipsing binaries on the 24-inch from dusk to 5 a.m. with Ernesto Vidal, a student from the Universidad de Chile. He was at the eyepiece or the clock the whole night; we take timings together. I did not leave the dome except to use the latrine behind it at about 1:30. He will tell you that. Our dome drum records our tracking too; Pérez can read it.',
        'I knew Ilse had found something in the archive. She did not tell me what. She told me she had been wrong about a man and that it had cost the observatory, and that she would correct it in print. I assumed she meant the foundation and the money.',
        'I wanted her job. I have never pretended otherwise. I did not want it this week, and I would not have had a chance at it in any case while the foundation preferred Germans.',
        'If you want my opinion as an astronomer: a dome does not move itself, and a night assistant does not move it forty degrees in two jerks. Someone who did not know the control box moved it.'
      ],
      claims: ['At the 24-inch dome with a student, dusk to 5 a.m.', 'Left the dome once, at about 1:30, briefly.', 'Did not know what Brandt had found in the archive.']
    },
    {
      id: 'WS-04',
      suspectId: 'perez',
      synopsis: 'The red lamp over the darkroom door was off at 2:35. I said so in the kitchen. The drum says the dome moved at 2:41.',
      interviewedAt: '15 August 1962, 7:30 a.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'I sleep in the workshop under the dome. I heard the German come down to the darkroom at 2:05 — you hear the corridor door — and go back up at 2:20. I went to the kitchen at 2:35 and the lamp over the darkroom door was off. I wired that lamp; it has never failed. I said to the cook, the German has forgotten his safelight again, because he does leave it off and works by the green lamp, which is bad for the plates. I was in the kitchen until a quarter to three with Riquelme and the cook.',
        'At 2:41 I heard the dome move. You hear it through the pier — a long grind, a stop, another grind. Not Tomás; Tomás moves it in taps. I thought, the German is on the floor fighting the box. I did not go up. It was not my business.',
        'In the morning I looked at the drum before I went to the Capitán because I knew what it would show.',
        'The motor can be run from the housing below with a screwdriver across the contactor. I know how. I did not do it. If I had wanted to move the dome without being seen I would have done it from below, and the drum would show a smooth swing, not two jerks from a man at the box who has never used it.'
      ],
      claims: ['Darkroom lamp off at 2:35 (cook confirms the remark).', 'In the kitchen 2:35–2:45.', 'Heard the dome move in two grinds at about 2:41.']
    },
    {
      id: 'WS-05',
      suspectId: 'krauss',
      synopsis: 'I was on the telephone to Santiago from half past two to three. The exchange will have the ticket.',
      interviewedAt: '15 August 1962, 1:00 p.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'I work at night because the telephone line to Santiago is only clear at night. I placed a call at 2:30 through the Antofagasta exchange to Dr Hernán Valdés at the Universidad, who keeps the same hours, about the American proposal. We spoke until about three. The operator will have the ticket. I then went to bed.',
        'Ilse told me on the thirteenth that she would be writing to a journal about a question of priority and that the foundation would be embarrassed. I asked whether this concerned Dr Marr, since the only priority on this mountain anyone in Europe cares about is his nova. She said that she would say nothing until it was in print. She was like that.',
        'We disagreed about the Americans. We disagreed about most things. We did not threaten one another; we were too old. Her death does not help the American proposal — the foundation will now appoint a German director to keep Heidelberg sweet, and I will retire.',
        'I have not been inside the 60-inch dome at night in ten years. I could not tell you where the dome control box is.'
      ],
      claims: ['On a long-distance call to Santiago from 2:30 to about 3:00.', 'Did not enter the 60-inch dome.', 'Was told of a “question of priority” on 13 August.']
    },
    {
      id: 'WS-06',
      suspectId: 'ines',
      synopsis: 'I know which plates she pulled and what was on them. I did not tell him. She did — she told him to bring his 1959 logbook.',
      interviewedAt: '15 August 1962, 9:00 a.m.',
      interviewer: 'Capitán Ibáñez',
      paragraphs: [
        'For three days my aunt and I pulled plates from 1957 and 1958 of the nebula field — six of them — and laid them beside Dr Marr’s 1960 paper and his published plate reproductions. The nova was on our plates. On hers. Two years before he said he discovered it. The plates were annotated in her hand in 1958: “variable? — check.” She had never followed it up, and when he came in 1959 he had the run of the archive. She believed he had found her plates, found the star, and photographed it again as his own discovery.',
        'She drafted a letter to Astronomische Nachrichten. I typed it on the thirteenth. It is in her desk — or it was. She told me to say nothing. I said nothing. She told Dr Marr at dinner on the fourteenth to bring his 1959 logbook to the floor, and I saw his face.',
        'I went to bed at midnight. I woke at three and went for water and saw the men in the kitchen. I did not go to the dome.',
        'I inherit her books and her share of a house in Valparaíso. It is not much. I would have inherited it anyway, and I would rather have her.'
      ],
      claims: ['Pulled six 1957–58 plates with her aunt; the nova appears on them.', 'Typed a letter to Astronomische Nachrichten on 13 August.', 'Asleep from midnight; in the kitchen for water at 3:00.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'drawing',
      title: 'Reading the dome drum',
      summary: 'Pérez and the Observatorio Nacional interpret the rotation chart minute by minute.',
      stamp: 'Technical',
      recordType: 'Instrument record analysis',
      origin: 'Chart recorder, 60-inch dome workshop',
      custodian: 'H. Pérez; verified by Ing. L. Bravo, Observatorio Nacional',
      date: '16 August 1962',
      status: 'Complete',
      sections: [
        { label: 'The recorder', body: 'A pen linked to the dome gear traces position on a paper drum turning once in 24 hours. It cannot be switched off from the floor and it cannot be altered without lifting the pen, which leaves a gap. There is no gap.' },
        { label: 'To 2:28', body: 'Even steps of one to two degrees every few minutes: the pattern of a night assistant following the telescope. Riquelme’s last step is at 2:28.' },
        { label: '2:41–2:47', body: 'A swing of about forty degrees in two movements: twenty-five degrees over roughly three minutes, a pause of about a minute, fifteen degrees more. The speed is the motor’s; the stop-start is the operator’s. Bravo: “This is a person at the control box who does not know how much to turn and corrects by eye.”' },
        { label: 'Before and after', body: 'At 2:28 the catwalk ladder stood directly above the fixed stair — the position Riquelme always parks it in so the ladder is reachable from the platform. By 2:47 it was forty degrees away. At 3:00 a single smooth return of forty degrees: Riquelme restoring the slit.' },
        { label: 'What this fixes', body: 'Someone on the telescope floor moved the dome between 2:41 and 2:47. Riquelme and Pérez were in the kitchen with the cook. The only person who had said he would “watch the dome” was in the darkroom, by his account. From below, Pérez could have moved it smoothly; he did not, and the trace is not smooth.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'document',
      title: 'Examination of the observing log',
      summary: 'Is the page for 14/15 August the page that was written on the night?',
      stamp: 'Examined',
      recordType: 'Document examination',
      origin: '60-inch observing log; Marr’s 1959 logbook',
      custodian: 'Capitán Ibáñez; Sra. D. Fuentes, Correos (paper examiner)',
      date: '17 August 1962',
      status: 'Complete',
      sections: [
        { label: 'The night’s page', body: 'The log is a bound book with numbered pages. Page 212, for the night, is present and numbered — but the stub of a page remains in the gutter, trimmed close. Page 212 is on paper of a different weight; it has been written on, folded once, and glued at the gutter. The entries are in Marr’s hand, in one sitting, in one ink.' },
        { label: 'What was removed', body: 'The removed page cannot be recovered. Impressions on page 213 beneath show earlier writing from the night: “plate 8 open 2.25” — and, lower down, in a different hand, pressed hard: a plate number from 1958 and the word “Prioridad”. Brandt wrote on the original page. Marr replaced it.' },
        { label: 'The 1959 logbook', body: 'Open on the desk at the page recording the nova plates of 1959. Three plate numbers are underlined in pencil — not Marr’s pencil, which is on the desk, but a softer one. Inés Brandt identifies the underlining as her aunt’s habit and the pencil as one from the archive desk.' },
        { label: 'Conclusion', body: 'Brandt reached the floor desk during the night and wrote on the log and in Marr’s 1959 book. Marr says he did not see her after dinner. The page she wrote on is gone and a clean one, in his hand, describing a night in the darkroom, is glued in its place.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'photo',
      title: 'Plate 8 and the darkroom',
      summary: 'What the exposure records, and whether anyone was developing plate 7 while it ran.',
      stamp: 'Laboratory',
      recordType: 'Photographic analysis',
      origin: 'Plates 7 and 8; darkroom',
      custodian: 'Dr A. Soto (supervised by Ing. Bravo)',
      date: '16 August 1962',
      status: 'Complete',
      sections: [
        { label: 'Plate 8', body: 'Exposed 2:25–3:55. The field shows a straight-edged partial occultation consistent with the dome slit crossing the aperture for about six minutes and returning: the dome moved forty degrees away and, at 3:00, forty back. The plate is otherwise good. Marr kept it; he did not discard the evidence because he did not understand what it showed.' },
        { label: 'Plate 7', body: 'Developed and dry in the drying cabinet in the morning. Fixer residue and the state of the emulsion indicate development was complete well before 3:10 — Soto estimates processing finished by about 2:20, consistent with Marr developing it between 2:05 and 2:20, when Pérez heard him come and go, not between 2:20 and 3:10.' },
        { label: 'The darkroom', body: 'The safelight was found off; the white light switch was on. The developing trays were rinsed and inverted. There is no clock or timer record in the darkroom. The only record of occupancy is the red lamp over the corridor door, off at 2:35 by Pérez’s account, confirmed by the cook’s memory of his remark.' },
        { label: 'What this corrects', body: 'The first account — that Marr was developing in the darkroom for fifty minutes — is contradicted by the state of plate 7, the lamp, and the drum. He developed plate 7 from 2:05 to 2:20 as Pérez heard, loaded plate 8 at 2:25, and was on the floor when the dome moved.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'ledger',
      title: 'The archive plates and the letter to Astronomische Nachrichten',
      summary: 'What Brandt found in 1958, and what she intended to publish.',
      stamp: 'Archival',
      recordType: 'Archive inventory and correspondence',
      origin: 'Plate archive; Brandt’s desk',
      custodian: 'Capitán Ibáñez; I. Brandt (archivist)',
      date: '15 August 1962',
      status: 'Letter recovered; plates destroyed',
      sections: [
        { label: 'The six plates', body: 'Archive register entries, in Brandt’s 1958 hand, for six plates of the nebula field taken March–May 1958, with the note “variable? — check” against two. The register cannot be altered; the plates themselves were found broken and scorched in the workshop stove (CS-08). Their sleeves in the 1958 drawer were empty at 7:00 a.m.' },
        { label: 'The letter', body: 'A typed draft, dated 13 August 1962, found in the desk after the drawer was examined: Brandt states that the recurrent nova announced by Marr in 1960 appears on Cerro Alto plates of 1958 taken by her, that Marr had unsupervised access to the archive in 1959, and that she will request the journal to publish a correction of priority with reproductions of the 1958 plates.' },
        { label: 'Who knew', body: 'Inés typed it. Krauss was told of a “question of priority” but not the name. Soto was told Brandt had been “wrong about a man.” Marr was told at dinner on the 14th to bring his 1959 logbook to the floor, in front of Riquelme and Pérez.' },
        { label: 'Significance', body: 'The letter ends Marr’s discovery and very probably his chair. Its proof — the plates — was removed from the archive and destroyed between 2:47 and 7:00 a.m. by someone with her archive key, which was in her coat pocket on the dome floor, or with another.' },
        { label: 'The archive key', body: 'Two keys exist: Brandt’s (found on the body) and the archivist’s, kept on a hook in Inés Brandt’s room, which she states was in place when she went to bed and when she rose. The archive door was found unlocked. Pérez reports the lock can be slipped with a knife blade, a thing he showed Marr in 1959 when Brandt was away and Marr wanted plates.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'timeline',
      title: 'Where everyone was, 2:00–3:15 a.m.',
      summary: 'Telephone tickets, the second dome’s drum, and the kitchen.',
      stamp: 'Compiled',
      recordType: 'Movement timeline',
      origin: 'Antofagasta exchange; 24-inch drum; interviews',
      custodian: 'Capitán Ibáñez',
      date: '17 August 1962',
      status: 'Verified where marked',
      sections: [
        { label: 'Krauss', body: 'Exchange ticket: call placed 2:31, connected 2:33 to Santiago, cleared 3:02 (verified). Dr Valdés confirms the conversation (verified).' },
        { label: 'Soto', body: '24-inch drum shows continuous tracking steps throughout the night; the student Vidal confirms she was at the eyepiece or clock from 2:00 to 3:15 and left only at about 1:30 (verified). The 24-inch is a seven-minute walk from the 60-inch.' },
        { label: 'Riquelme, Pérez, the cook', body: 'All three place one another in the kitchen from about 2:35 to 2:45; Riquelme from 2:30 (verified by mutual account). Riquelme absent 2:45–3:00 (toilet; unverified). Pérez to workshop at 2:45 (unverified).' },
        { label: 'Inés Brandt', body: 'In bed from midnight (unverified). Seen in the kitchen at 3:00 by Riquelme and the cook (verified).' },
        { label: 'Marr', body: 'Heard going to the darkroom at 2:05 and returning at 2:20 (Pérez). Log entry opens plate 8 at 2:25 (CS-05). Darkroom lamp off at 2:35 (Pérez, cook). On the floor at 3:10 per Riquelme (verified). Between 2:25 and 3:10, nobody places him anywhere but his own statement.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'marr',
      title: 'Telegram from Marr to Heidelberg',
      subtitle: 'Sent from the observatory radio room, 15 August, 7:40 a.m.; copy retained by the operator',
      format: 'chat',
      messages: [
        { from: 'Marr → Institut, Heidelberg', side: 'right', text: 'BRANDT DEAD ACCIDENT DOME STOP RUN CONTINUES STOP ADVISE FOUNDATION DIRECTORSHIP QUESTION URGENT STOP PRIORITY MATTER CLOSED STOP MARR', time: '15 Aug, 7:40 a.m.' },
        { from: 'Heidelberg → Marr', side: 'left', text: 'WHAT PRIORITY MATTER QUERY', time: '15 Aug, 2:15 p.m.' }
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'ines',
      title: 'Ilse Brandt’s note to her niece',
      subtitle: 'Pencil on an archive register slip, left on Inés’s desk on the evening of 14 August',
      format: 'note',
      messages: [],
      noteText: [
        'Inés — the letter stays in my desk until I have shown him the plates and his own logbook side by side. A man should be allowed to see what is going to be said of him. I will go up after his second plate. If he behaves badly I will post it from Antofagasta on Friday myself. Do not wait up. — I.B.'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'riquelme',
      title: 'Union notice in Riquelme’s locker',
      subtitle: 'Mimeographed sheet with handwritten additions',
      format: 'note',
      messages: [],
      noteText: [
        'Compañeros: the Director has refused summit pay for the third time. Meeting Saturday in Antofagasta. — Sindicato de Trabajadores Astronómicos',
        'In pencil below: “She has written me up again. Hugo says keep quiet till December. I will not keep quiet. I will go to the foundation myself. — T.R.”'
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'krauss',
      title: 'Krauss’s telephone notes, 14–15 August',
      subtitle: 'Loose sheets from his office desk',
      format: 'note',
      messages: [],
      noteText: [
        '2:33 — Valdés. American proposal: they want an answer by Sept 20. I said Brandt opposes and the foundation will follow her. V. says Heidelberg has written to the foundation offering a joint programme through Marr. If that lands first we are finished.',
        '2:50 — V. asks what Ilse has against Marr. I say I do not know — something about priority. V. laughs and says in Santiago they already call it “Brandt’s nova”. I did not know that. Call ended 3:02.'
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'marr',
      questions: [
        {
          id: 'Q-marr-1',
          prompt: 'The lamp over the darkroom door was off at 2:35. Plate 7 was dry long before 3:10. The dome moved at 2:41 by the hand of someone who did not know the box. Where were you?',
          answer:
            'In the darkroom, Capitán, as I have said, and I will go on saying it because it is true. I do not always use the safelight; I use the green lamp for fine work, which Pérez disapproves of and which does not light his red bulb. Soto’s estimate of when plate 7 finished is an estimate; emulsion dries at different rates at this altitude. As for the dome — I told Riquelme I would mind it and I did not, because I went below, and someone took advantage of an empty floor. Perhaps Riquelme himself, who had every reason to want her gone and who was away from the kitchen after a quarter to three by his own admission.'
        },
        {
          id: 'Q-marr-2',
          prompt: 'The page in the log for that night is glued in. The impressions beneath show Dr Brandt wrote on the original page, and her pencil is on your 1959 logbook. You said you did not see her after dinner.',
          answer:
            'I replaced the page because she had written across my entries in a way I found offensive — accusations, in a scientific log, which is a legal record of the telescope. I did it when I came up at 3:10 and found what she had done; I assumed she had come to the floor while I was below, written her insults and gone to bed in a temper. I rewrote my entries cleanly and I should have said so this morning. I did not see her. I saw her handwriting. If that makes me a liar, I am a liar about a page of paper, which is not the same thing as a murderer. As for the 1959 book — she asked me to bring it, I brought it, she apparently went through it. There is nothing in it I am ashamed of.'
        },
        {
          id: 'Q-marr-3',
          prompt: 'Your telegram to Heidelberg at 7:40 says “priority matter closed.” Your institute did not know what you meant. What did you mean?',
          answer:
            'I meant that Dr Brandt had intimated, in the manner she had, that she disputed some aspect of the 1960 discovery and that with her death the dispute would not be pursued. That is a fact, not a confession. I said it badly, at dawn, to a telegraph operator, two hours after learning my host was dead. I had no idea she had a draft letter or plates; I learned that from you. Capitán, I will say this plainly. If the plates say what her niece says they say, then I was careless in 1959 about whose work I was looking at, and that is a matter for astronomers. I did not throw a woman off a catwalk to protect a footnote.'
        }
      ]
    },
    {
      suspectId: 'riquelme',
      questions: [
        {
          id: 'Q-riquelme-1',
          prompt: 'You were away from the kitchen from 2:45 to 3:00 and nobody can place you. Fifteen minutes is enough to climb to the floor.',
          answer:
            'And do what? She was already dead, Capitán. The dome moved at 2:41 — Hugo heard it from the kitchen, I heard it too, we all looked at the ceiling. She went off the catwalk at or before 2:41, because the dome moved after. I was at the table with a cup in my hand when it happened. From 2:45 to 3:00 I was in the toilet behind the residence, which has no witness because I did not bring one. When I came up at three the floor was empty and the dome was wrong and I put it right. If I had killed her I would not have corrected the dome and stayed on the floor two metres from her for an hour tracking a German’s plate.'
        },
        {
          id: 'Q-riquelme-2',
          prompt: 'Describe how the dome moves when you move it, and how it moved at 2:41.',
          answer:
            'I touch the switch for a count of two, let go, look at the slit, touch again. The drum shows it — little steps, all the same. At 2:41 it was a long grind, perhaps three minutes, then it stopped, then another grind. That is a man holding the switch down and watching the slit go past the telescope and not knowing when to stop, and then going again because he has not gone far enough. Hugo could move it smooth from below. Dr Soto has used the box and knows how. The German has stood beside me for three runs and never touched it; he said it was beneath him. Whoever did that at 2:41 had never done it before.'
        },
        {
          id: 'Q-riquelme-3',
          prompt: 'Why did you check the shutter before you reported the body?',
          answer:
            'Because I thought she had fallen from the catwalk, and if she had fallen from the catwalk she might have caught the shutter rail or the counterweight cable, and if the cable was off its wheel the shutter would come down on anyone who touched the switch. That is my job. It took one minute. I looked up, I saw the rail was clean, I saw the catwalk was in the wrong place — forty degrees from where she lay — and that is when I understood that someone had moved it after. Then I ran for Hugo. I have been on that floor eight years. She was a hard woman and she was going to sack me and I would have liked to tell her to her face what I thought of her. Not this.'
        }
      ]
    },
    {
      suspectId: 'soto',
      questions: [
        {
          id: 'Q-soto-1',
          prompt: 'You have used the 60-inch dome control box. Could you have walked up from the 24-inch, moved it, and walked back without your student noticing?',
          answer:
            'In theory. In practice Ernesto and I were taking timings on an eclipse minimum predicted for 2:52 and we had been sitting on it since two. I could not have left for twenty minutes — seven there, seven back, six on the floor — without the timings showing a gap in my hand and his. They do not. The 24-inch drum shows our tracking steps through the whole hour. And Capitán — if I had moved that dome, it would have moved in steps. I have been doing it for ten years.'
        },
        {
          id: 'Q-soto-2',
          prompt: 'Brandt told you she had been “wrong about a man.” Who did you take her to mean?',
          answer:
            'Krauss, honestly. She and he had fought for a decade about money and the Americans, and I assumed she had found some error in his accounts. It did not occur to me she meant Marr, because Marr was our great success; his nova is in every brochure the foundation prints. Now that I have seen the archive register and the letter, I understand. In 1959 he had the run of the archive for a fortnight while Ilse was in Santiago. I remember Pérez letting him in. We all thought he was being diligent.'
        },
        {
          id: 'Q-soto-3',
          prompt: 'As an astronomer, read plate 8 for us.',
          answer:
            'A straight-edged occultation across the field for roughly six minutes, then the field returns. That is the dome slit crossing the aperture and coming back — the dome rotated away from the telescope and later rotated back. The exposure was not interrupted, so no one closed the shutter; whoever moved the dome either did not know the plate would be ruined or did not care. An astronomer would have closed the shutter first by instinct. An astronomer in a panic might not. The plate was in the holder when Marr took it down at 3:55 and he kept it, which tells you he did not look at it. He had other things on his mind.'
        }
      ]
    },
    {
      suspectId: 'perez',
      questions: [
        {
          id: 'Q-perez-1',
          prompt: 'You could have moved the dome from below with a screwdriver. Nobody saw you after 2:45.',
          answer:
            'I went back to the workshop at a quarter to three and lay down. The dome had already moved at 2:41 — you have the drum, and you have Tomás and the cook saying I was drinking maté with them when we heard it. If I had wanted her dead I had the whole dome under my hand every night for thirteen years and I could have made a counterweight fail and no one would ever have known. I did not need a catwalk and a struggle. I am sixty years old and my pension is a third smaller than it should be, and I am angry about that, and I will be angry in Antofagasta where I will die. It is not the same as this.'
        },
        {
          id: 'Q-perez-2',
          prompt: 'Tell us about the archive lock and 1959.',
          answer:
            'The archive door has a cheap lock. In 1959 Dr Brandt was in Santiago for two weeks and the German wanted plates of his nebula field to compare. He did not have a key. I showed him you can slip the bolt with a knife blade, because I am a mechanic and I did not think about it. He was in there most afternoons. In 1960 we read in the papers that he had discovered a nova on plates from 1959, and the Director was proud, and I thought nothing of it. Last night the lock was slipped again. The scratches on the strike plate are fresh. I showed one man how to do that in my life.'
        },
        {
          id: 'Q-perez-3',
          prompt: 'The red lamp. How certain are you?',
          answer:
            'I wired it in 1955. It is a lamp in series with the safelight circuit: if the safelight is on, the lamp is on. It cannot be off while the safelight is on. If the German used the green lamp instead, as he says, then he was not developing a plate, because the green lamp will fog a plate of that emulsion in two minutes — ask Dr Soto. He was either not in the darkroom or not developing, and plate 7 was already dry. I said in the kitchen at 2:35, “the German has forgotten his red lamp,” because I was annoyed. The cook laughed. I am not annoyed now.'
        }
      ]
    },
    {
      suspectId: 'krauss',
      questions: [
        {
          id: 'Q-krauss-1',
          prompt: 'Your call was connected from 2:33 to 3:02. The dome moved at 2:41. You could not have been on the floor.',
          answer:
            'No, and I am grateful to the exchange for keeping better records than this observatory keeps of its own director. I was in my office with the receiver to my ear and a Santiago professor telling me that in the capital they were already calling it “Brandt’s nova.” I did not know what he meant. I wrote it down because I write everything down. Then I went to bed. I learned at seven what had happened and I understood, finally, what Ilse had been talking about at dinner. I had thought it was about me.'
        },
        {
          id: 'Q-krauss-2',
          prompt: 'Who benefits from her death, in the politics of this place?',
          answer:
            'Heidelberg. With Ilse alive, the letter is published, Marr is disgraced, and the foundation signs with the Americans out of embarrassment — which is what I wanted. With Ilse dead and the letter in a drawer, Heidelberg’s offer of a joint programme lands first, the foundation appoints a German director to keep it, Marr sits on the committee, and I retire. I say this against my own interest, Capitán: her death ruins me. The only man on this mountain whose position improved between midnight and dawn is the one who has been telling you he was in the darkroom.'
        },
        {
          id: 'Q-krauss-3',
          prompt: 'Did you know the archive could be opened with a knife?',
          answer:
            'I did not, and I am appalled, and it is exactly the sort of thing Pérez would know and show to a visitor to be helpful. I have not been in that room in years; the plates are Ilse’s religion, not mine. If six plates were burned in the workshop stove, then whoever burned them went from the dome to the residence, slipped the archive lock, knew which drawer and which sleeves, and came back to the workshop with glass in his coat while Pérez was in the kitchen. That is not a night assistant who fixes domes. That is someone who knew exactly which six plates were going to end his life.'
        }
      ]
    },
    {
      suspectId: 'ines',
      questions: [
        {
          id: 'Q-ines-1',
          prompt: 'You knew which plates and which drawer. You had the second archive key. Where were you between 2:30 and 3:00?',
          answer:
            'Asleep, and I cannot prove it, and I have thought about that all day. The key was on its hook when I went to bed and on its hook when I got up at three, and I did not look at the archive door because why would I. I went to the kitchen for water and the three men were at the table and the room smelled of maté and I went back to bed. Capitán, I spent three days with my aunt looking at those plates. I knew what they were worth to her and what they would cost him. If I had wanted to destroy them I would not have smashed them in a stove where anyone could find the glass; I am an archivist. I would have put them back in the wrong drawer and nobody would have found them for twenty years.'
        },
        {
          id: 'Q-ines-2',
          prompt: 'Your aunt’s note says she would show him the plates and his own logbook side by side. Did she take the plates to the dome?',
          answer:
            'No. The six plates were in the 1958 drawer when I left her at eleven; she had the list of their numbers in her pocket, you found it, and she had his 1959 logbook taken up to the floor so she could stand over him with the register numbers and make him find the dates himself. She wanted him to see it in his own hand. She was going to bring him down to the archive afterwards. That is why the plates were still in the drawer at midnight and gone by seven — the only person who needed them gone was the person who had been shown what they proved.'
        },
        {
          id: 'Q-ines-3',
          prompt: 'Who knew about the letter?',
          answer:
            'I typed it. Dr Krauss was told there was a question of priority but not whose. Dr Soto was told she had been wrong about a man. Dr Marr was told at dinner, in front of everyone, to bring his 1959 logbook up to the floor, and he put down his fork and looked at her for a long time and said, “Of course, Director.” Riquelme was clearing. Pérez was at the door. I was next to Marr. His hand was shaking when he picked the fork up again. I did not think it meant anything. I thought he was afraid of being embarrassed.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-priority', label: 'To prevent publication of proof that his celebrated discovery was taken from her archive' },
      { id: 'm-job', label: 'To stop his dismissal from the observatory' },
      { id: 'm-direct', label: 'To open the directorship and the American partnership' },
      { id: 'm-inherit', label: 'To inherit' },
      { id: 'm-pension', label: 'Revenge for a reduced pension' }
    ],
    methodOptions: [
      { id: 'h-catwalk', label: 'Struck or forced from the rotating catwalk after she confronted him on the floor; the dome then rotated forty degrees so the fall would appear to be from the fixed stair' },
      { id: 'h-stair', label: 'An accidental fall from the fixed observer’s stair in the dark' },
      { id: 'h-below', label: 'The dome moved from the motor housing below, throwing her from the catwalk' },
      { id: 'h-shutter', label: 'Struck by the dome shutter counterweight' }
    ],
    selectableEvidenceIds: ['CS-01', 'CS-02', 'CS-03', 'CS-04', 'CS-05', 'CS-06', 'CS-07', 'CS-08', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'MSG-04', 'Q-perez-2', 'Q-riquelme-2'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'marr',
    motiveOptionId: 'm-priority',
    methodOptionId: 'h-catwalk',
    decisiveEvidenceIds: ['EV-01', 'EV-02', 'EV-03', 'CS-02', 'MSG-01'],
    reveal: 'Felix Marr killed Ilse Brandt on the catwalk of the 60-inch dome and then, for the first time in three observing runs, put his own hands on the dome control box.',
    reconstruction: [
      'In 1959 Marr had slipped the archive lock with a knife, as Pérez had shown him, and found Brandt’s 1958 plates of the nebula field with her pencil note — “variable? — check.” He checked. He photographed the star again in 1959, announced a recurrent nova in 1960, and became famous on the Director’s unfollowed hunch. In August 1962 she pulled the plates, typed her letter, and told him at dinner, in front of five people, to bring his 1959 logbook to the floor.',
      'He developed plate 7 between 2:05 and 2:20, as Pérez heard, came back up, loaded plate 8 at 2:25 and sent Riquelme to the kitchen. Brandt came to the floor soon after — as she had said she would, after the second plate — with her list of register numbers. She wrote the 1958 plate number and the word “Prioridad” across his night’s entries and underlined three plates in his 1959 book with her soft archive pencil. Then, perhaps to show him the slit position she wanted to compare against his 1959 notes, or simply because that was where he went to get away from her, they climbed the ladder to the catwalk above the fixed stair.',
      'Whatever was said there ended with her gripping the rail hard enough to tear a nail and him forcing her off it. She fell seven metres onto the steel beside the fixed stair. Marr climbed down and did the one thing that could turn seven metres into three: he put his hand on the dome switch and held it until the catwalk had ground forty degrees away from where she lay, stopped, judged it not far enough, and went again. Pérez heard the two grinds through the pier. Plate 8 recorded the slit crossing the aperture. The drum recorded a man who had never used the box.',
      'He tore the page she had written on out of the log, folded a clean sheet, wrote a night in the darkroom onto it and glued it in. He went to the residence, slipped the archive lock, took the six plates whose numbers he had just been shown, and broke them in the workshop stove while Pérez was still at the table. Then he went back to the darkroom, switched on the white light, and at 3:10 came up to the floor and said nothing to Riquelme about the dome. At 7:40 he telegraphed Heidelberg that the priority matter was closed.'
    ],
    chronology: [
      { time: '1959', event: 'Pérez shows Marr how to slip the archive lock; Marr finds Brandt’s 1958 plates.', refs: ['Q-perez-2', 'EV-04'] },
      { time: '13 Aug 1962', event: 'Brandt dictates her letter to Astronomische Nachrichten; Inés types it.', refs: ['EV-04', 'WS-06'] },
      { time: '14 Aug, dinner', event: 'Brandt tells Marr to bring his 1959 logbook to the floor. His hand shakes.', refs: ['Q-ines-3', 'MSG-02'] },
      { time: '2:05–2:20 a.m.', event: 'Marr develops plate 7 (Pérez hears him go and return).', refs: ['EV-03', 'EV-05'] },
      { time: '2:25 a.m.', event: 'Plate 8 opened. Riquelme leaves for the kitchen at 2:30.', refs: ['CS-05', 'WS-02'] },
      { time: 'c. 2:32–2:40 a.m.', event: 'Brandt arrives on the floor, writes on the log and in the 1959 book. The two climb to the catwalk. She falls.', refs: ['EV-02', 'CS-04', 'CS-01'] },
      { time: '2:35 a.m.', event: 'Darkroom lamp off as Pérez passes.', refs: ['CS-06'] },
      { time: '2:41–2:47 a.m.', event: 'Marr rotates the dome forty degrees in two uneven movements; plate 8 is occulted.', refs: ['CS-03', 'EV-01', 'CS-07'] },
      { time: 'c. 2:50 a.m.', event: 'Log page replaced; archive lock slipped; six plates taken and burned in the workshop stove.', refs: ['EV-02', 'CS-08', 'EV-04'] },
      { time: '3:00 a.m.', event: 'Riquelme returns, corrects the dome, does not see the body under the stair.', refs: ['WS-02'] },
      { time: '3:10 a.m.', event: 'Marr comes up “from the darkroom.”', refs: ['EV-05'] },
      { time: '7:40 a.m.', event: 'Telegram: “priority matter closed.”', refs: ['MSG-01'] }
    ],
    evidenceChain: [
      { title: 'Timing: a dome moved by a stranger', body: 'The drum shows a forty-degree rotation at 2:41 in two uneven grinds — the hand of someone who had never used the box — while Riquelme and Pérez were in the kitchen. Marr had told Riquelme he would “watch the dome.” He was the only person on the mountain unaccounted for and the only one whose account placed him somewhere else.', refs: ['EV-01', 'CS-03', 'Q-riquelme-2', 'EV-05'] },
      { title: 'Capability and contradiction: the darkroom that was dark', body: 'He could not have been developing: the red lamp was off, the green lamp fogs plates, and plate 7 was already dry. His alibi was a room he was not in.', refs: ['CS-06', 'EV-03', 'Q-perez-3'] },
      { title: 'Document: the glued page', body: 'Brandt wrote on the log and in his 1959 book before she died. He removed the page and glued in a clean one describing a night in the darkroom. A man who had seen only her handwriting at 3:10 did not need to tear out a page; a man who had seen her write it did.', refs: ['EV-02', 'CS-05'] },
      { title: 'The catwalk and the stair', body: 'Blood and a fingernail on the catwalk rail at its pre-2:41 position; scuffs going up the ladder; injuries from seven metres, not three. She lay under the fixed stair only because the catwalk had been moved away from above her.', refs: ['CS-04', 'CS-01', 'CS-02'] },
      { title: 'Motive and aftermath', body: 'The letter, the register, the six empty sleeves, the fresh scratches on a lock he had been shown how to slip, and a telegram at dawn calling the priority matter closed.', refs: ['EV-04', 'CS-08', 'MSG-01', 'Q-perez-2'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Tomás Riquelme', body: 'He had motive and the dome, but he was in the kitchen when it moved and he moves the dome in taps. His unaccounted quarter-hour began after she was dead. A killer does not correct the dome and track for an hour beside the body.', refs: ['EV-01', 'EV-05', 'Q-riquelme-1'] },
      { title: 'Hugo Pérez', body: 'He could have moved the dome smoothly from below and did not; he was at the table with two witnesses when it moved. His confession about the lock in 1959 is the key to the archive, not to the dome.', refs: ['EV-01', 'Q-perez-1', 'Q-perez-2'] },
      { title: 'Amalia Soto', body: 'The 24-inch drum and her student’s timings on a 2:52 eclipse minimum hold her four hundred metres away through the whole hour. She would have moved the dome in steps.', refs: ['EV-05', 'Q-soto-1'] },
      { title: 'Walter Krauss', body: 'An exchange ticket from 2:33 to 3:02 and a Santiago professor on the other end. Her death destroyed his American proposal.', refs: ['EV-05', 'MSG-04', 'Q-krauss-2'] },
      { title: 'Inés Brandt', body: 'She knew the plates and held a key, but the lock was slipped, not opened, and the plates were smashed where any mechanic would find them — not the work of the archivist who had catalogued them.', refs: ['EV-04', 'Q-ines-1'] }
    ],
    redHerringResolutions: [
      { title: 'The body under the fixed stair', body: 'It invited the reading that she had fallen three metres from the observer’s stair in the dark — an accident. The catwalk’s position and the drum show the stage was moved around the body, not the body around the stage.', refs: ['CS-02', 'EV-01'] },
      { title: 'Riquelme’s delay in reporting', body: 'A night assistant checking the shutter cable before touching anything is doing his job. His minute at the switch was procedure, not panic.', refs: ['Q-riquelme-3'] },
      { title: 'The second archive key', body: 'Inés’s key on its hook pointed at her. The fresh scratches on the strike plate point at the one visitor who had been taught to open the door without one.', refs: ['EV-04', 'Q-perez-2'] }
    ],
    epilogue: 'Marr was held in Antofagasta pending extradition proceedings that Heidelberg did not contest once the archive register was published. Astronomische Nachrichten printed Brandt’s letter in its 1963 volume, with reproductions of the 1958 register entries in place of the plates. The variable is catalogued today under her name. Riquelme kept his job; Soto became deputy director in 1964.'
  }
};
