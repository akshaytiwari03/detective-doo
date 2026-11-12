import type { MysteryCase } from '../types/case';

export const lastReel: MysteryCase = {
  id: 'c06',
  slug: 'the-last-reel',
  title: 'The Last Reel',
  tagline: 'A producer dies in a locked cutting room the night before his film is seized by its financiers. The film itself knew when he died.',
  era: 'Bombay, India — July 1976',
  difficulty: 'expert',
  estimatedMinutes: 45,
  dossier: {
    reference: 'Bombay Police — Crime Branch — D.N. Nagar',
    caseNumber: 'CB-76-0884',
    victim: 'Raghunath “Raghu” Oberoi, age 56. Film producer; proprietor, Meridian Talkies, Andheri.',
    location: 'Editing Room 2 (the “cutting room”), Meridian Talkies studio, Andheri, Bombay.',
    incidentDate: 'Night of 22–23 July 1976, between about 1:10 and 1:40 a.m.',
    discoveryTime: '7:30 a.m., by the studio’s night watchman when the editor did not answer the door.',
    causeOfDeath: 'A single stab wound to the chest from a film-splicing blade. He bled out within minutes. The room door was bolted from the inside.',
    leadInvestigator: 'Inspector Sunil Deshpande, Crime Branch.',
    assisting: 'Dr Farida Contractor, police surgeon; the studio’s own chief projectionist (technical consultation).',
    status: 'OPEN. Six persons were on the studio lot overnight during a crisis editing session. The cutting room was bolted from inside; the only window is barred. The film on the editing bench ran through the night and recorded its own timing.',
    synopsis:
      '“Aandhi Ke Baad”, Meridian’s unfinished monsoon epic, was two years late and ruinously over budget. Its financiers held a charge over the negative and intended to seize it at 10 a.m. on 23 July. Oberoi called an all-night session to lock the final reel before they could. He worked in Editing Room 2 with his editor; others came and went with reels, tea and arguments. At about 1:40 a.m. the editor left for the lab, bolting Oberoi in “for his safety,” he says. At 7:30 the watchman forced the door and found Oberoi at the bench, a splicer blade in his chest, Reel 9 still laced through the Moviola, its counter stopped. The counter, the lab log and the projection booth tell the night’s time.',
    backgroundLocation:
      'Meridian Talkies is a walled studio lot in Andheri: a sound stage, a laboratory (developing and printing), a projection theatre, a row of editing rooms off a covered corridor, and offices. Editing Room 2 has a Moviola editing machine with a footage counter, two rewind benches, a splicer, racks of film cans, a barred window to the corridor, and a door that bolts from the inside (editors bolt themselves in to protect work prints). The lab keeps a register of every reel in and out. The projection theatre’s booth logs every reel screened.',
    backgroundGathering:
      'The all-night session was called on 22 July after the financiers’ lawyer served notice. Present on the lot: the editor, the music director (recording a retake), the lead actress (for a dubbing patch), the financier’s representative (to watch the negative), Oberoi’s nephew and assistant, and the night watchman. Oberoi had told two people that day that the film “would never leave this lot in Khanna’s hands” and that he had “one reel that changes everything.”'
  },
  suspects: [
    {
      id: 'rao',
      name: 'Vikram Rao',
      age: 48,
      role: 'Chief editor',
      hue: 25,
      bio: 'Rao has cut every Meridian film for twenty years and this one for two, through re-shoots, recuts and Oberoi’s changes of mind. He is a craftsman of the old school who regards the negative as his and the producer as a necessary evil. His name is on the titles as editor, but Oberoi had decided to add a young second editor to “modernise” the film and share the credit — and, Rao believed, to blame him for the delays in front of the financiers. He bolted Oberoi into Room 2 at 1:40 and went to the lab.',
      stakes: 'Twenty years of credit about to be diluted, and the blame for a disaster being arranged onto him.',
      openQuestion: 'He bolted the door from outside, he says. The bolt is on the inside.'
    },
    {
      id: 'khanna',
      name: 'Dilip Khanna',
      age: 52,
      role: 'Financier’s representative',
      hue: 215,
      bio: 'Khanna acts for the syndicate that financed the film and now holds a charge over the negative. He came to the lot to ensure the negative was intact before the seizure and to make sure Oberoi did not “do anything desperate” with it — spiriting a reel away, or worse. He is correct, watchful and cordially hated. Oberoi owed the syndicate more than the film could ever earn. Khanna spent the night mostly in the projection theatre, watching reels screened to confirm the negative was complete.',
      stakes: 'A negative worth more intact than a producer worth nothing, and a seizure that a death might delay.',
      openQuestion: 'He watched the reels screened. Which reels, and when?'
    },
    {
      id: 'meena',
      name: 'Meena Kumari Joshi',
      age: 34,
      role: 'Lead actress',
      hue: 320,
      bio: 'Joshi is the film’s star and, for the last year, its unhappiest participant. Oberoi had promised her a share of the profits in lieu of part of her fee; with the film seized she would get nothing and had sunk two years into a picture that might never be released. There was also a scene — the one Oberoi called “the reel that changes everything” — that she had begged him to cut and he had refused. She came in at midnight to dub a line and stayed.',
      stakes: 'A deferred fee that the seizure wipes out, and a scene she did not want the world to see.',
      openQuestion: 'What is on the reel she wanted cut?'
    },
    {
      id: 'arun',
      name: 'Arun Oberoi',
      age: 27,
      role: 'Nephew and assistant producer',
      hue: 60,
      bio: 'Arun has worked for his uncle since college and expected to inherit Meridian. He has lately discovered that his uncle re-mortgaged the studio to the syndicate without telling him and that the inheritance is a pile of debt. He runs the lot at night, carries reels between the cutting room and the lab, and keeps the keys. He idolised his uncle and had begun, in the last month, to be afraid of him. He was seen in tears in the corridor at about one.',
      stakes: 'A studio that turns out to be mortgaged to the people about to seize the film.',
      openQuestion: 'He carried every reel that moved that night. Did he carry Reel 9?'
    },
    {
      id: 'salim',
      name: 'Salim Vakil',
      age: 45,
      role: 'Music director',
      hue: 160,
      bio: 'Vakil wrote the film’s score and is owed eight months’ fees. He was recording a retake of the title music that night on the sound stage with three musicians, because Oberoi wanted new music under the final reel. He and Oberoi had quarrelled for a year about the score being recut to fit the editor’s changes; Vakil said his music had been “butchered to cover Rao’s mistakes.” He left the sound stage several times to use the telephone in the corridor.',
      stakes: 'Eight months of unpaid fees and a score he says was ruined.',
      openQuestion: 'He left the sound stage “to telephone.” The corridor runs past Room 2.'
    },
    {
      id: 'bhonsle',
      name: 'Ganpat Bhonsle',
      age: 58,
      role: 'Night watchman',
      hue: 275,
      bio: 'Bhonsle has guarded the Meridian gate for thirty years and knows every person and every reel that passes it. He logs the gate, patrols the corridor hourly, and makes tea for whoever is working late. He forced the cutting-room door in the morning. He is loyal to the Oberoi family and frightened of the syndicate, who have told the staff the lot will be sold. He heard, on his 1 a.m. round, the Moviola running and two voices in Room 2.',
      stakes: 'A gate he has kept for thirty years, about to change hands.',
      openQuestion: 'He heard two voices at one. Who was the second?'
    }
  ],
  story: [
    {
      paragraphs: [
        'Meridian Talkies had been making films in Andheri since before independence, and “Aandhi Ke Baad” — “After the Storm” — was going to be the picture that put it among the great studios or finished it. It had taken two years instead of eight months, cost three times its budget, and been re-shot, recut and rescored until the only people who still believed in it were its producer, Raghunath Oberoi, and its editor, Vikram Rao, who did not believe in it so much as own it.',
        'By July 1976 the syndicate that had financed the film held a legal charge over the negative, and on the twenty-second their lawyer served notice that they would seize it at ten the next morning. A seized negative is a dead film: it sits in a vault while lawyers argue, and the people who made it get nothing. Oberoi called an all-night session to lock the final reel — Reel 9 — before the seizure, so that at least a complete film would exist, and told two people that day that the picture would never leave the lot in Dilip Khanna’s hands, and that he had “one reel that changes everything.”',
        'So they gathered on the lot after dark: Rao in the cutting room with his Moviola; Salim Vakil on the sound stage recording a new title theme with three tired musicians; Meena Kumari Joshi, the star, come to dub a single line and staying because she could not bear to leave; Dilip Khanna in the projection theatre, watching reel after reel screened to satisfy himself the negative was whole; Arun Oberoi, the nephew, carrying reels and tea and bad news along the covered corridor; and old Bhonsle at the gate, who made the tea and walked the corridor on the hour and had kept the place for thirty years.'
      ]
    },
    {
      paragraphs: [
        'Editing Room 2 is a narrow room off the corridor with a Moviola — an upright editing machine with a small screen and a footage counter that ticks off film as it runs — two rewind benches, a splicer whose blade can cut a man as easily as a frame of film, and racks of grey film cans. Its one window is barred and gives onto the corridor. Its door bolts from the inside, because editors bolt themselves in to keep their work prints safe, and Oberoi had taken to bolting himself in with Rao while they fought over the cut.',
        'Reel 9 was the heart of the quarrel. It contained the scene that Oberoi called the reel that changes everything and that Meena Joshi had begged him to cut; it contained the new music Vakil was recording and the credit that Rao was about to lose to a younger man. On the night, the reel came up from the lab at about half past twelve in Arun’s hands, laced into the Moviola, and run again and again while Oberoi and Rao argued the last splices.',
        'Bhonsle, on his one o’clock round, passed the barred window and heard the Moviola running and two voices — Oberoi’s and another, lower, that he took for Rao’s. At about ten past one Arun was seen in the corridor crying; he says he had just learned his uncle had mortgaged the studio. At about twenty past, Salim Vakil left the sound stage “to telephone,” and the corridor telephone is six feet from the door of Room 2. At about half past, Meena Joshi walked from the dubbing booth to the canteen and back and saw, she says, the cutting-room door shut and the window dark.',
        'At 1:40 Vikram Rao came out of Editing Room 2, told Bhonsle that Oberoi was “finishing Reel 9 himself and did not want to be disturbed,” and that he had bolted the door “for the old man’s safety, so Khanna’s people can’t walk in and grab the reel.” He took a reel can to the lab. The Moviola, behind the bolted door, went on running.'
      ]
    },
    {
      paragraphs: [
        'The lab register shows Rao booking a reel in at 1:48 and the lab technician, who was printing through the night, confirms Rao was in the lab arguing about a print until past two. The projection booth log shows Khanna screening Reels 1 through 8 between eleven and one, and then calling for Reel 9, which did not come, because Reel 9 was laced into the Moviola in Room 2. At about two Khanna went to the cutting room, found it bolted, knocked, got no answer, assumed Oberoi was asleep over the bench as he often was, and went back to the theatre annoyed.',
        'No one else tried the door. The Moviola in a cutting room runs all night when an editor falls asleep; its sound through a bolted door meant nothing. At 7:30 Bhonsle, unlocking the rooms for the day staff, knocked on Room 2 and got no answer, and forced the bolt.',
        'Raghunath Oberoi sat at the Moviola with Reel 9 laced through it and the counter stopped, a splicer blade in his chest and his blood dried into the grey film emulsion on the bench. The room was as Rao had left it except for the body and the blood. The bolt was shot on the inside.',
        'Inspector Deshpande came from D.N. Nagar at eight. He looked at the bolt, which was on the inside, and at the barred window, through which a child could not have passed, and at the Moviola counter, which had stopped at a number, and said that a locked room is only locked until you ask what it was locked against. Then he had the lab register, the booth log and Reel 9 itself brought to him, because in a film studio the film is a witness that cannot lie about time.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'The body at the Moviola',
      kind: 'tested',
      body: 'Oberoi sat slumped at the Moviola, a splicer blade driven into the chest from the front and slightly upward. Death within minutes from blood loss. The police surgeon estimates death between 1:00 and 1:45 a.m. by body temperature at 8:00. No defensive wounds; he was seated and the blow was close and sudden.'
    },
    {
      id: 'CS-02',
      icon: 'door',
      heading: 'The bolted door',
      kind: 'found',
      body: 'A single iron barrel bolt, mounted on the inside of the door, shot into its socket. The door was forced by Bhonsle, splitting the socket screws. The window is barred with fixed iron and gives onto the corridor; the bars are intact and undisturbed. There is no other opening. The room was sealed from within.'
    },
    {
      id: 'CS-03',
      icon: 'tool',
      heading: 'The bolt mechanism',
      kind: 'tested',
      body: 'The barrel bolt is worn and its spring weak. Tested by the crime branch: with the bolt drawn to the edge of its travel and the door pulled sharply shut from outside, the bolt can be made to drop into its socket by the slam about one time in three. A loop of splicing tape, since removed, leaves adhesive traces on the bolt knob and the door frame — a tape pull could shoot the bolt from outside and then be withdrawn under the door.'
    },
    {
      id: 'CS-04',
      icon: 'log',
      heading: 'The Moviola footage counter',
      kind: 'found',
      body: 'Reel 9 was laced through the Moviola, which runs film past a counter. The counter stopped at 412 feet — the point at which the take-up reel filled and the machine stalled, not where a person stopped it. From a known start point and the machine’s speed, the lab computes the reel began running at about 1:12 a.m. and stalled at about 1:33 a.m. The machine ran on after the last human touched it.'
    },
    {
      id: 'CS-05',
      icon: 'photo',
      heading: 'Reel 9 itself',
      kind: 'tested',
      body: 'The reel on the Moviola is the work print of the disputed scene. Blood is dried into the emulsion on the bench and on three feet of the film where it hung. Crucially, splices examined under the lab loupe show the last four cuts were made in haste with the bench splicer — the murder weapon — and that two frames bearing a slate are missing from the head of the scene. What the missing frames showed is addressed in EV-05.'
    },
    {
      id: 'CS-06',
      icon: 'document',
      heading: 'The lab register and booth log',
      kind: 'found',
      body: 'The lab register: reels booked in and out all night, including Rao at 1:48. The projection booth log: Khanna screened Reels 1–8 from 11:00 to 1:00, then called for Reel 9 repeatedly (1:05, 1:20, 1:50) and never received it. Both records are kept by staff with no stake and are consistent with each other.'
    },
    {
      id: 'CS-07',
      icon: 'trace',
      heading: 'Blood, hands and the splicer',
      kind: 'tested',
      body: 'The splicer blade bears Oberoi’s blood and a partial print in blood on the splicer handle — smudged, consistent with a gloved or wiped hand. Film cement (the glue editors use, which stains skin) is on Oberoi’s right fingers and, the lab notes, would be on the hands of anyone who had been splicing. A rag soaked in film cement and blood was found in the corridor waste bin outside Room 2.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What was absent',
      kind: 'inference',
      body: 'No weapon other than the bench splicer. No forced window. No second bolt. Oberoi’s own keys and wallet untouched. The only thing missing from the room is two frames from the head of Reel 9’s disputed scene — and the young second editor’s contract, which Oberoi had been seen drafting that evening and which was not found anywhere on the lot.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'rao',
      synopsis: 'I bolted him in for his safety and went to the lab. He was alive and shouting at me when I shut the door.',
      interviewedAt: '23 July 1976, 10:00 a.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'We fought about Reel 9 all night, as we had fought for two years. He wanted the scene in; I wanted it cut; the truth is I no longer cared, because he had decided to bring in a boy from the Film Institute to share my credit and tell Khanna the delays were mine. At twenty to two I had had enough. He said he would finish the reel himself. I bolted the door so that Khanna’s people could not walk in and seize the reel he was working on, and I went to the lab, where I was until past two. The lab will tell you.',
        'The bolt is on the inside, yes. I reached in and threw it and pulled the door shut — it is an old bolt, it catches. I have done it a hundred times when he sent me out and bolted himself in. If that sounds impossible, go and try the bolt.',
        'He was alive. He was shouting that I had no vision, which was the last thing he ever said to me after twenty years.',
        'I did not want his boy’s name next to mine on a film I cut. I did not kill him for it. I was going to resign in the morning and let the whole thing sink.'
      ],
      claims: ['Left Room 2 at about 1:40, bolting Oberoi inside.', 'At the lab from about 1:48 until past 2:00.', 'Oberoi was alive and arguing when the door shut.']
    },
    {
      id: 'WS-02',
      suspectId: 'khanna',
      synopsis: 'I was in the theatre watching the reels. I called for Reel 9 three times and it never came. At two I knocked and got no answer.',
      interviewedAt: '23 July 1976, 11:30 a.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'My instructions were to confirm the negative was complete before the seizure. I sat in the projection theatre from eleven and had the booth run me Reels 1 to 8. At five past one I asked for Reel 9 and was told it was in the cutting room on the Moviola. I asked again at twenty past and at ten to two. It never came. At about two I went to the cutting room myself, found it bolted, knocked, got no reply, assumed Oberoi had fallen asleep over the bench, and went back annoyed.',
        'Oberoi owed my syndicate more than this film will ever earn. His death does not help us. A dead producer means his estate contests the charge and the negative sits in a vault for five years while we pay lawyers. We wanted the film, finished and in our hands, not a corpse and a court case.',
        'He said to me that evening, almost cheerfully, that the film would never leave the lot in my hands and that he had a reel that changed everything. I took it for the bluster of a ruined man. Now I wonder what was on it.',
        'The booth boy was with me the whole time. I did not go near that corridor until two.'
      ],
      claims: ['In the projection theatre from 11:00; screened Reels 1–8.', 'Requested Reel 9 at 1:05, 1:20 and 1:50; never received it.', 'Found Room 2 bolted at about 2:00.']
    },
    {
      id: 'WS-03',
      suspectId: 'meena',
      synopsis: 'I dubbed my line, I walked to the canteen about half past one, and the cutting-room door was shut and the window dark.',
      interviewedAt: '23 July 1976, 1:00 p.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'I came at midnight to dub one line that the sound had spoilt. I finished by one and should have gone home, but I could not; two years of my life were in that building and they were going to take it away at ten o’clock. I sat in the dubbing booth. At about half past one I walked to the canteen for water and back. Passing Room 2 I saw the door shut and the window dark. I did not knock. I did not want to see Raghu; we had not been kind to each other lately.',
        'He promised me a share of the profits instead of half my fee. With the film seized I get nothing for two years’ work. I am aware of how that sounds.',
        'There is a scene in Reel 9 that I asked him to cut. I will tell you what it is because you will find out: it is a scene he directed himself, off the shooting script, in which my character is humiliated in a way that was not in the film I agreed to make, and which he kept because he said it was “the truth of her.” I begged him. He said it was the reel that changed everything. I hated that scene. I did not kill him over it. I would have been glad for the syndicate to bury the whole film and that scene with it.',
        'I had cement on my hands because I helped Arun carry reels earlier; everyone who touches film in that place has cement on their hands.'
      ],
      claims: ['Dubbed a line until about 1:00; then in the dubbing booth.', 'Walked to the canteen at about 1:30; saw Room 2 shut and dark.', 'Asked Oberoi to cut a scene in Reel 9; he refused.']
    },
    {
      id: 'WS-04',
      suspectId: 'arun',
      synopsis: 'I carried Reel 9 up at half past twelve and did not go back. I was in the corridor at one because I had just learned my uncle had mortgaged everything.',
      interviewedAt: '23 July 1976, 9:30 a.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'I ran the lot that night, as I do. I carried Reel 9 up from the lab and laced it into the Moviola myself at about half past twelve, and left my uncle and Rao arguing over it. I did not go back into Room 2 after that. At about one I was in the corridor and Bhonsle found me crying, because Khanna’s clerk had let slip that my uncle had mortgaged the studio — the studio I was to inherit — to the syndicate, and never told me. I was to inherit a debt.',
        'I loved my uncle and I had started to be afraid of him, which I did not understand until that night. He kept things from everyone. He kept the second editor from Rao. He kept the mortgage from me. He kept that scene from Meena though she begged him on her knees.',
        'I have cement on my hands every night of my life. I laced the reel; of course I touched the splicer.',
        'When I heard the Moviola still running at two from the corridor I thought he had fallen asleep. He did that. I did not try the door. I wish I had broken it down.'
      ],
      claims: ['Laced Reel 9 into the Moviola at about 12:30; did not re-enter Room 2.', 'In the corridor at about 1:00, distraught about the mortgage.', 'Heard the Moviola running at about 2:00 and assumed Oberoi asleep.']
    },
    {
      id: 'WS-05',
      suspectId: 'salim',
      synopsis: 'I was on the sound stage recording. I went to the corridor telephone twice. I did not go into the cutting room.',
      interviewedAt: '23 July 1976, 2:30 p.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'I was recording a new title theme on the sound stage with three musicians from eleven until nearly two. You can ask them; we were playing the same sixteen bars until we wanted to die. I went out to the corridor telephone twice — once about half past twelve to call my wife, once about twenty past one to call the musicians’ contractor about their money, because Oberoi owed everyone and I was not going to let him owe my players.',
        'The telephone is near Room 2, yes. The second time I passed, the Moviola was running and I heard Oberoi’s voice, alive, complaining. I did not go in. I have not willingly been in a room with Oberoi for a year; he had my score recut to fit Rao’s cutting until it was nonsense, and I told him so at a party in front of people who matter.',
        'He owed me eight months. His death does not pay me; it makes my fee one more claim in a bankruptcy. I wanted him alive and solvent and ashamed.',
        'I had cement on my hands too — I spliced a music loop myself on the bench in Room 3 earlier. We all live in cement here.'
      ],
      claims: ['On the sound stage recording from 11:00 to nearly 2:00 (three musicians).', 'At the corridor telephone at about 12:30 and about 1:20.', 'Heard Oberoi alive at the Moviola at about 1:20.']
    },
    {
      id: 'WS-06',
      suspectId: 'bhonsle',
      synopsis: 'On my one o’clock round the Moviola was running and I heard two voices. I forced the door at half past seven.',
      interviewedAt: '23 July 1976, 8:30 a.m.',
      interviewer: 'Insp. Deshpande',
      paragraphs: [
        'I made my round at one as I do every hour. Passing the window of Room 2 I heard the Moviola running and two voices — Oberoi’s, which I would know anywhere, and a lower one. I took the lower one for Rao’s; he and the sahib argued every night and I had stopped listening to the words. The window was lit then.',
        'At twenty to two Rao came out and told me the sahib was finishing the reel himself and had bolted the door and did not want disturbing, and to keep Khanna’s people away. I kept them away. That was my mistake and I will carry it.',
        'On my two o’clock round the window was dark but the machine was still running. I thought he slept. On my later rounds the same. At half past seven, opening the rooms, I knocked and he did not answer and I forced the bolt and found him.',
        'I have been at that gate thirty years. I carried the sahib’s father’s coffin. Whoever did this walked past me, and I made them tea.'
      ],
      claims: ['On the 1:00 round, heard the Moviola and two voices; window lit.', 'At 1:40 Rao said Oberoi had bolted himself in.', 'Forced the door at 7:30 and found the body.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'drawing',
      title: 'The locked room: how the bolt was shot from outside',
      summary: 'The crime branch reconstructs the bolted door.',
      stamp: 'Technical',
      recordType: 'Scene reconstruction',
      origin: 'Editing Room 2 door and bolt',
      custodian: 'Insp. Deshpande; crime branch workshop',
      date: '24 July 1976',
      status: 'Complete',
      sections: [
        { label: 'The bolt', body: 'A worn iron barrel bolt on the inside of the door, spring weak, travel sloppy. Drawn to the lip of its socket and left there, a sharp slam of the door drops it home about one time in three in repeated tests.' },
        { label: 'The tape', body: 'Adhesive residue of film splicing tape on the bolt knob and on the door frame near the floor. A loop of tape around the knob, run under the door, lets a person outside pull the bolt across and then peel the tape away from under the door. Editors have splicing tape in every pocket.' },
        { label: 'The gap', body: 'The door undercut is wide enough (old, warped) to pass a loop of tape and withdraw it. The crime branch replicated the shoot-and-withdraw three times out of four.' },
        { label: 'What this fixes', body: 'The room was not sealed by its occupant. A person who left the room, drawing the bolt behind them with tape or a slam, could leave a corpse bolted in. Rao claims to have bolted it deliberately from outside; the method exists, and he is the person who says he used it.' },
        { label: 'Limit', body: 'The method is available to anyone with splicing tape and knowledge of the bolt — which includes every editor and assistant on the lot. It establishes how, not who; it must be read with the time of death.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'timeline',
      title: 'The film’s clock: counter, lab and booth',
      summary: 'When Reel 9 started and stalled, against where everyone was.',
      stamp: 'Compiled',
      recordType: 'Timeline from instrument records',
      origin: 'Moviola counter; lab register; booth log; musicians',
      custodian: 'Insp. Deshpande; chief projectionist',
      date: '25 July 1976',
      status: 'Verified where marked',
      sections: [
        { label: 'The Moviola', body: 'Reel 9 ran from about 1:12 a.m. and stalled at 412 feet at about 1:33 a.m. when the take-up filled. Nobody rethreaded it. The last person to lace and start it did so at about 1:12; the machine ran on alone after death (CS-04).' },
        { label: 'Death', body: 'Surgeon’s window 1:00–1:45 (CS-01). Combined with the counter, the killing falls between about 1:12, when the reel was started, and about 1:33, when it stalled with blood already on the hanging film.' },
        { label: 'Rao', body: 'Lab register: booked a reel at 1:48 (verified). Lab technician places him arguing in the lab from about 1:48 to past 2:00 (verified). Before 1:48, only his own statement places him anywhere — he says in Room 2 until 1:40.' },
        { label: 'Khanna', body: 'Booth log and booth boy place him in the theatre continuously 11:00–2:00 (verified). He called for Reel 9 at 1:05, 1:20, 1:50.' },
        { label: 'Salim', body: 'Three musicians place him on the sound stage except for two telephone trips, about 12:30 and about 1:20 (verified to the minute of leaving by the recording engineer’s take sheet).' },
        { label: 'Meena / Arun / Bhonsle', body: 'Meena in the dubbing booth, one canteen trip ~1:30 (booth engineer, verified). Arun in the corridor ~1:00 (Bhonsle, verified) then the lab office. Bhonsle on rounds. None placed inside Room 2 after 12:30.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'document',
      title: 'The second-editor contract',
      summary: 'What Oberoi was drafting, who it threatened, and why it vanished.',
      stamp: 'Legal',
      recordType: 'Document review',
      origin: 'Oberoi’s office; studio typist',
      custodian: 'Insp. Deshpande',
      date: '24 July 1976',
      status: 'Draft reconstructed from the typist’s carbon',
      sections: [
        { label: 'The draft', body: 'The studio typist’s carbon copy survives: a contract engaging a young editor, Prakash Mehta of the Film Institute, as “co-editor” of “Aandhi Ke Baad”, with shared screen credit and a clause assigning him “editorial supervision of the final reel.” Dated 22 July.' },
        { label: 'The top copy', body: 'The signed-ready top copy, which Oberoi took to the cutting room that evening to show Rao, was not found in Room 2 or anywhere on the lot. Only the carbon remains.' },
        { label: 'What it meant to Rao', body: 'Shared credit after twenty years, and a clause giving the newcomer authority over the very reel Rao was cutting. Rao learned of it that evening. The lab technician heard Rao in the lab at 1:50 say, “He can give the boy my credit over my dead body,” which he took for ordinary studio talk.' },
        { label: 'Significance', body: 'The one document that gives a specific, dated, that-night motive to the editor is the one document missing from the sealed room. A killer who took it removed the proof of why; a man framed would have no reason to.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'ledger',
      title: 'The mortgage and the money',
      summary: 'Who gained and who lost by Oberoi’s death, on paper.',
      stamp: 'Financial',
      recordType: 'Financial review',
      origin: 'Syndicate deed; Oberoi’s papers; Joshi and Vakil contracts',
      custodian: 'Insp. Deshpande',
      date: '26 July 1976',
      status: 'Reviewed',
      sections: [
        { label: 'The charge', body: 'The syndicate holds a charge over the negative and, by a deed of July 1975, a mortgage over the studio land, granted by Oberoi without informing his nephew. On seizure the syndicate takes the negative; on Oberoi’s death the estate (Arun) inherits the debt and the right to contest.' },
        { label: 'Khanna’s position', body: 'The syndicate is worse off with Oberoi dead: a contested estate delays seizure for years. Khanna’s task that night was to prevent exactly the kind of disruption a death causes.' },
        { label: 'Joshi', body: 'Her deferred profit share is wiped out by seizure whether or not Oberoi lives. His death changes nothing financially for her; it merely buries the scene she hated along with the film.' },
        { label: 'Vakil', body: 'Owed eight months. A dead Oberoi turns his fee into a bankruptcy claim worth pennies. He is financially worse off.' },
        { label: 'Arun', body: 'Inherits a mortgaged studio and a contested negative. No money, much grief, and the discovery that his inheritance was a lie.' },
        { label: 'Conclusion', body: 'Nobody gains money from the death. The motive that remains is not money but credit and authorship — the one thing that cannot be seized, mortgaged or deferred.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'photo',
      title: 'Reel 9 and the two missing frames',
      summary: 'What the disputed scene is, and why two frames were cut from its head.',
      stamp: 'Laboratory',
      recordType: 'Film examination',
      origin: 'Reel 9 work print; cutting-room trims bin',
      custodian: 'Chief projectionist; Insp. Deshpande',
      date: '25 July 1976',
      status: 'Complete',
      sections: [
        { label: 'The scene', body: 'The disputed scene is one Oberoi shot and insisted on keeping, to Joshi’s distress. The work print is intact on the reel; the scene is embarrassing to the star but reveals no secret about the murder. Joshi’s objection is personal, not criminal.' },
        { label: 'The missing frames', body: 'Two frames bearing the camera slate are cut from the head of the scene and were found, with fresh splicer cuts, in the trims bin under the bench. The slate records the shooting date. The cut was made the night of the murder, in haste, with the bench splicer.' },
        { label: 'Why the slate mattered', body: 'The slate on those two frames dated the scene to a day on the official shooting schedule when Rao, not Oberoi, is logged as supervising a second unit — evidence that Rao had directed footage he was now being blamed for and about to lose credit over. Cutting the slate frames out hid who shot the scene.' },
        { label: 'The cutting', body: 'Making those two cuts in the dark, in haste, is what put film cement on the killer’s hands and blood into the emulsion as the reel hung. The splicer became the weapon because it was already in the killer’s hand, cutting the frames.' },
        { label: 'What this corrects', body: 'The “reel that changes everything” was not a secret that threatened a suspect with exposure for a crime. It was a question of authorship: whose work the celebrated final reel was. That is a motive only for the man whose authorship it was.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'rao',
      title: 'Oberoi’s note to Rao, that evening',
      subtitle: 'Found crumpled in Rao’s pocket on arrest',
      format: 'note',
      messages: [],
      noteText: [
        'Vikram — Mehta starts Monday as co-editor. His name goes on the titles with yours. He takes the final reel. I know you will not like it but the financiers want a modern hand on the picture and I have run out of ways to explain the delays except to say the cutting has been slow. Do not make a scene in front of Khanna tonight. We finish Reel 9 and we talk about Mehta tomorrow. — R.O.'
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'khanna',
      title: 'Khanna’s telegram to the syndicate',
      subtitle: 'Sent from the studio telephone exchange, 23 July, 8:15 a.m.',
      format: 'chat',
      messages: [
        { from: 'Khanna → Syndicate', side: 'right', text: 'OBEROI FOUND DEAD THIS MORNING STOP SEIZURE MUST BE POSTPONED STOP ESTATE WILL CONTEST STOP NEGATIVE INTACT EXCEPT REEL 9 SECURED BY POLICE STOP ADVISE', time: '23 Jul, 8:15 a.m.' },
        { from: 'Syndicate → Khanna', side: 'left', text: 'DISASTER STOP HOLD EVERYTHING STOP NO SEIZURE PENDING COURT STOP', time: '23 Jul, 10:40 a.m.' }
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'meena',
      title: 'Meena Joshi’s letters to Oberoi',
      subtitle: 'Two letters returned unopened, found in her bag',
      format: 'note',
      messages: [],
      noteText: [
        '(June) Raghu — I am begging you. Cut the scene. It is not in the film I agreed to. You are not telling the truth of her, you are humiliating me. If you keep it I will never work for you again.',
        '(July) You will not answer my letters so I write a last one. Keep your scene. Let the syndicate take the whole thing and bury it and me with it. At least then no one will ever see it.'
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'salim',
      title: 'Vakil’s call log, corridor telephone',
      subtitle: 'The exchange keeps a ticket for trunk calls',
      format: 'chat',
      messages: [
        { from: 'Vakil → home', side: 'right', text: '(trunk call) 00:34, 6 min — to Vakil residence, Bandra.', time: '23 Jul, 12:34 a.m.' },
        { from: 'Vakil → contractor', side: 'right', text: '(local call) 01:21, 4 min — to musicians’ contractor.', time: '23 Jul, 1:21 a.m.' }
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'rao',
      questions: [
        {
          id: 'Q-rao-1',
          prompt: 'The Moviola started at 1:12 and stalled at 1:33 with blood already on the film. You say you left him alive at 1:40. The film says he was dead before you left.',
          answer:
            'The counter is a machine. Machines stall. Perhaps the reel ran, stalled, I rethreaded it, we argued, I left at 1:40. Perhaps the start time is wrong. You are asking me to account for a minute from a gearwheel. I was in that room until twenty to two and then I was in the lab, and the lab is full of people who saw me. Between 1:12 and 1:33 I was where I always am on a crisis night, at the bench, cutting, with the sahib breathing down my neck and telling me a boy from the Institute would do it better. If he was dead at 1:33 then someone killed him while the machine ran, and the machine was running when I left, and I am the one you have decided it was.'
        },
        {
          id: 'Q-rao-2',
          prompt: 'Two frames bearing a slate were cut from the head of the disputed scene that night. The slate dated the scene to a day you supervised second unit. Who would cut out the proof that you shot it?',
          answer:
            'Anyone who wanted it to look like Oberoi’s work and not mine. Which is exactly what Oberoi himself wanted — he was giving the reel to Mehta, remember; he had every reason to erase my name from it. Perhaps he cut the slate himself before I came in. I did not cut those frames. Why would I destroy the one proof that the reel everyone is praising is mine? That slate is my defence, Inspector, not my crime. A man does not cut out the evidence of his own authorship on the night he is about to lose the credit for it. That is the act of a man hiding that he was ever there.'
        },
        {
          id: 'Q-rao-3',
          prompt: 'The contract engaging Mehta over you is missing from the sealed room. The bolt can be shot from outside with splicing tape, and you carry splicing tape. Explain the bolt again.',
          answer:
            'I threw the bolt with my hand, reaching round the half-shut door, and pulled it to. It is an old bolt and it catches on the slam. I have done it a hundred times when he locked himself in. If you can shoot it with tape then so can every editor on this lot, and we all carry tape in our pockets like other men carry cigarettes. As for the contract — I never had it. He showed me the carbon, not the top copy; perhaps he took the top copy to Khanna. Inspector, you have a method anyone could use, a motive of credit that I share with no one because it is mine, and a machine that stalled. You do not have a hand on that splicer, because the hand on it was gloved or wiped, and mine were bare and covered in cement like every night for twenty years.'
        }
      ]
    },
    {
      suspectId: 'khanna',
      questions: [
        {
          id: 'Q-khanna-1',
          prompt: 'You called for Reel 9 three times and never got it. Did you ever go to the cutting room before two?',
          answer:
            'No. The booth boy will tell you I did not leave the theatre until two, because I was watching the negative frame by frame and I did not trust Oberoi not to swap a reel. When Reel 9 did not come I was irritated, but a producer finishing his own final reel on the last night before seizure is exactly what I expected; I thought he was keeping it from me deliberately until it was locked. At two I went and knocked and got nothing and came back. If I had wanted to see that reel badly enough to kill for it, I would have had the booth boy fetch the police to open the door, not gone back to my seat annoyed.'
        },
        {
          id: 'Q-khanna-2',
          prompt: 'His death postpones your seizure and costs the syndicate years. Convince us you did not want it.',
          answer:
            'I will convince you with arithmetic, which is my trade. A seized negative in my hands at ten o’clock was worth something — we could finish the film, sell it, recover part of our money. A dead producer is worth nothing: his nephew contests the estate, the charge is frozen, the negative rots in a vault, and my syndicate pays lawyers until the film is forgotten. My telegram to Bombay that morning was not triumph, Inspector; it was the word “disaster,” and I meant it. Oberoi alive and ruined was my best outcome. Someone took it from me.'
        },
        {
          id: 'Q-khanna-3',
          prompt: 'He told you he had “a reel that changes everything.” What did you understand by it?',
          answer:
            'I understood it as the last card of a drowning man. Producers always have a reel that changes everything; it is the thing they say to keep the financiers from the door one more week. I thought he meant he had a cut so wonderful the syndicate would relent and let him finish. I did not think it meant a slate on two frames of film that proved who had directed a scene — that is a quarrel between an editor and his credit, and it is beneath my attention and above my motive. I am interested in negatives as property. The men in that building were interested in them as their life’s work. That is the difference, and it is the whole case.'
        }
      ]
    },
    {
      suspectId: 'meena',
      questions: [
        {
          id: 'Q-meena-1',
          prompt: 'You hated the scene in Reel 9. You passed the room at 1:30. You had cement on your hands.',
          answer:
            'I hated the scene the way you hate a photograph of yourself at your worst — I wanted it gone, not him dead. And at half past one he was already dead, you tell me, since the film stopped at 1:33, so my walk to the canteen past a dark window is the walk of a woman passing a room that already held a body, which I did not know. The cement is on everyone’s hands; I carried reels with Arun at eleven. If I had killed Raghu to bury that scene I would have taken the scene, and the scene is still on the reel, whole, for the whole world to see at my trial. I did not touch it. I only ever wanted it not to exist, and now the worst thing is that it does, and he is not here for me to be angry with.'
        },
        {
          id: 'Q-meena-2',
          prompt: 'Your deferred profit share is gone either way. What did you have left to fight him for?',
          answer:
            'Nothing but the scene, and I had stopped fighting him for that; my last letter told him to keep it and let the whole film be buried. I was not fighting him on the last night. I was grieving the picture before it was dead. Two years of my life, Inspector — the best years a woman in films gets — poured into something that would sit in a vault. I sat in that dubbing booth because I could not bear to leave the building where it still existed. That is not the state of mind of a murderer. It is the state of mind of someone at a deathbed, and I did not know whose.'
        },
        {
          id: 'Q-meena-3',
          prompt: 'From the dubbing booth and your walk, did you hear or see anything in the corridor?',
          answer:
            'I heard the Moviola the whole time, running, running, which is why nobody thought anything — a running Moviola at night means an editor at work. On my walk at half past one I saw the door of Room 2 shut and the little barred window dark, which struck me only because the window is usually lit when the machine runs; you light the room to splice. I thought Raghu had turned the lamp off to watch the screen. I did not think: the lamp is off because the man who turned it off has gone and left the machine running to say he is still inside. I am an actress; I should have understood a performance when I passed one.'
        }
      ]
    },
    {
      suspectId: 'arun',
      questions: [
        {
          id: 'Q-arun-1',
          prompt: 'You laced Reel 9 and had cement on your hands. You were distraught and alone in the corridor near the time of death. You inherit.',
          answer:
            'I inherit a mortgage I did not know existed until that night and a negative that will rot in a court for ten years. I inherit nothing but my uncle’s lies and my uncle’s debts. I laced the reel at half past twelle and went to the lab office, and the clerk there — Khanna’s own clerk, the one who let the mortgage slip — was with me from one until nearly two, which is how I came to be crying in the corridor in the first place. Ask him. I had cement on my hands because I lace reels every night of my life. I did not kill the only family I had over an inheritance that turned out to be a grave.'
        },
        {
          id: 'Q-arun-2',
          prompt: 'You were afraid of your uncle. Why?',
          answer:
            'Because I had begun to see how he worked. He kept Mehta’s contract from Rao until the night before. He kept the mortgage from me for a year. He kept Meena’s scene though she begged him. He was a man who used people’s love for the film against them and told himself it was for the film. I loved him and I was starting to understand that he would have mortgaged me too if the film needed it. That is a frightening thing to learn about someone at one in the morning. It is not a reason to put a splicer in his chest. It is a reason to cry in a corridor, which is what I did, and Bhonsle found me doing it.'
        },
        {
          id: 'Q-arun-3',
          prompt: 'Who knew the bolt could be shot from outside?',
          answer:
            'Any editor. It is a studio trick — you tape the bolt so a work print can’t be lifted while you run to the lab, and you pull the tape from under the door. Rao taught it to me. Rao taught it to everyone who ever assisted him. He is proud of it; he calls it “locking the room from the corridor.” He did it to protect reels for twenty years. The difference on this night is that there was a man in the room when the bolt was shot, and the only person who admits to shooting that bolt with a man inside is the man who taught the rest of us how.'
        }
      ]
    },
    {
      suspectId: 'salim',
      questions: [
        {
          id: 'Q-salim-1',
          prompt: 'Your second telephone trip, at 1:21, put you in the corridor outside Room 2 within the death window. What did you do there?',
          answer:
            'I telephoned the musicians’ contractor for four minutes, which the exchange ticket shows, and I heard Oberoi’s voice through the window complaining about a splice, alive, while I waited for the call to connect. Then I went back to the sound stage and played the same sixteen bars until two. Three musicians and a recording engineer with a take sheet marked to the minute will tell you I was behind a microphone from 1:25 to nearly two. If I killed Oberoi at 1:21 in the four minutes of a telephone call, I then ran back and sang in tune on tape, which is more than I could do on a good night. I heard him alive. That is the last gift that wretched man gave me: an alibi.'
        },
        {
          id: 'Q-salim-2',
          prompt: 'He owed you eight months and ruined your score. That is a long grudge.',
          answer:
            'It is, and I nursed it, and I insulted him at a party, and I meant every word. But a dead Oberoi pays me nothing — my fee becomes a line in a bankruptcy worth pennies on the rupee. I wanted him alive long enough to pay me and ashamed long enough to admit he was wrong about the score. Grudges in this industry are for parties and interviews, Inspector. We do not kill the men who owe us; we wait for them to make a hit so they can pay, and we score their next picture while complaining about the last. I am owed money by half of Bombay. I have not stabbed any of them.'
        },
        {
          id: 'Q-salim-3',
          prompt: 'As a man who splices music loops, tell us about the splicer and the cement.',
          answer:
            'The splicer is a guillotine for film; its blade will take a frame or a finger. I spliced a music loop on the Room 3 bench earlier and had cement to my wrists, as did everyone who touched film that night — it is the smell of the whole lot. What strikes me, as a man who uses the splicer, is this: whoever killed him had been cutting film, because the blade was in his hand already. You do not fetch a splicer from the bench to murder a man; you murder a man because the splicer is already in your hand and he has said one thing too many while you are cutting. And the only man who was cutting Reel 9 that night, splice after splice, was Rao.'
        }
      ]
    },
    {
      suspectId: 'bhonsle',
      questions: [
        {
          id: 'Q-bhonsle-1',
          prompt: 'The second voice you heard at one — are you sure it was Rao?',
          answer:
            'I took it for Rao because Rao and the sahib argued every night and I had stopped hearing the words, only the music of it — the sahib’s high angry voice and a lower one answering. Now you make me think, and I will say honestly: it was a low voice, a man’s, close to the sahib, and it could have been Rao and it could have been another man who kept his voice down. I did not look through the window; the machine was running and the room was lit and I thought, they are at it again, and I walked on to make the tea. Thirty years I have walked past that window on the hour. I never thought I was walking past a murder.'
        },
        {
          id: 'Q-bhonsle-2',
          prompt: 'At 1:40 Rao told you the sahib had bolted himself in. What exactly did he say and how did he seem?',
          answer:
            'He came out quickly, pulling the door to behind him, and he said, “The sahib is finishing Reel 9 himself, he has bolted the door, keep Khanna’s dogs away, do not disturb him.” He had his hands in his pockets. He was calm — too calm for a man who had been shouting a minute before, I think now; then I thought only that the argument was over. He went to the lab with a can under his arm. I did as he told me. I kept Khanna away at two. I kept everyone away. The sahib was dead behind that door the whole time and I stood guard over his body thinking I was guarding his work.'
        },
        {
          id: 'Q-bhonsle-3',
          prompt: 'In thirty years at that gate, who could shoot that bolt from the corridor?',
          answer:
            'Rao taught the trick to every assistant that ever passed through this lot, to keep work prints safe. But teaching a thing and doing it to a living man are different, and most who learned it have left or would faint at the sight of blood. The young master could do it and was crying in my arms at one. The music man could do it and was singing into a microphone. The star could do it and does not know one end of a bolt from another whatever she learned. Khanna could not; he is a money man, he does not touch film. The man who could do it, who was in the room, who came out calm and sent me to guard a corpse — Inspector, I made that man his tea. I have been making the wrong man tea.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-credit', label: 'To stop losing twenty years of credit and authorship of the final reel to a younger editor' },
      { id: 'm-scene', label: 'To bury a humiliating scene in the film' },
      { id: 'm-fees', label: 'Unpaid fees owed by the producer' },
      { id: 'm-seizure', label: 'To stop or delay the financiers’ seizure of the negative' },
      { id: 'm-inherit', label: 'To inherit the studio' }
    ],
    methodOptions: [
      { id: 'h-splicer', label: 'Stabbed with the bench splicer that was already in hand cutting the reel, then the door bolted from outside with splicing tape' },
      { id: 'h-intruder', label: 'An intruder entered the lot, killed him, and sealed the room' },
      { id: 'h-suicide', label: 'He took his own life before the seizure and bolted himself in' },
      { id: 'h-window', label: 'The killer reached through the barred window' }
    ],
    selectableEvidenceIds: ['CS-02', 'CS-03', 'CS-04', 'CS-05', 'CS-07', 'CS-08', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'WS-05', 'WS-06', 'Q-salim-3', 'Q-bhonsle-2', 'Q-rao-2'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'rao',
    motiveOptionId: 'm-credit',
    methodOptionId: 'h-splicer',
    decisiveEvidenceIds: ['EV-02', 'EV-05', 'EV-01', 'MSG-01', 'CS-04'],
    reveal: 'Vikram Rao killed Oberoi while cutting Reel 9, bolted the room from the corridor with splicing tape, and let the running Moviola pretend his victim was still alive.',
    reconstruction: [
      'That evening Oberoi showed Rao the contract engaging Prakash Mehta as co-editor, with shared credit and authority over the final reel — twenty years of Rao’s work handed, in front of the financiers, to a boy from the Institute, with the blame for the delays left on Rao. They took Reel 9 into Room 2 at half past twelve, bolted themselves in as they often did, and argued over the last splices.',
      'Rao was cutting as they fought — splice after splice, the splicer in his hand. Among the frames before him were two bearing a camera slate that dated the disputed scene to a day the schedule logged Rao as directing second unit: proof that the celebrated final reel was his work, about to be given away. He cut those two frames out. Whether to keep the proof or to hide that he had been cutting, the blade was in his hand when Oberoi said one thing too many, and Rao drove it into his chest. The reel, started at 1:12, ran on; blood dried into the film as it hung; the counter climbed to 412 feet and stalled at 1:33.',
      'Rao wiped the splicer handle, pocketed the top copy of Mehta’s contract so no one would read the motive, and slipped out, drawing the worn bolt home behind him with a loop of splicing tape pulled away under the warped door. He came out to Bhonsle at 1:40 too calm, said the sahib had bolted himself in and must not be disturbed, and went to the lab — where, in front of the technician, he said that Mehta would get his credit over his dead body, and where he had an alibi from 1:48 that was true and useless, because Oberoi had died fifteen minutes before it began.',
      'The running Moviola did the rest. For six hours everyone who passed heard a machine and assumed an editor; Khanna knocked and assumed a sleeper; Bhonsle stood guard over a corpse believing he guarded a reel. The film kept running past the time of its maker’s death, and when it was read as a clock, it placed the killing inside the one span Rao could not account for and had tried to fill with a man he swore was alive.'
    ],
    chronology: [
      { time: '22 Jul, evening', event: 'Oberoi shows Rao the Mehta contract: shared credit, authority over the final reel.', refs: ['MSG-01', 'EV-03'] },
      { time: '12:30 a.m.', event: 'Arun laces Reel 9 into the Moviola; leaves Oberoi and Rao arguing.', refs: ['WS-04', 'EV-02'] },
      { time: '1:00 a.m.', event: 'Bhonsle hears the Moviola and two voices; window lit. Arun crying in the corridor (with Khanna’s clerk).', refs: ['WS-06', 'Q-arun-1'] },
      { time: '1:12 a.m.', event: 'Reel 9 started running.', refs: ['CS-04', 'EV-02'] },
      { time: 'c. 1:12–1:33 a.m.', event: 'Rao cuts the slate frames; the splicer in hand; Oberoi stabbed; blood into the emulsion.', refs: ['EV-05', 'CS-05', 'CS-01'] },
      { time: '1:21 a.m.', event: 'Vakil at the corridor phone hears Oberoi alive — i.e. the machine and perhaps a last exchange — then returns to record.', refs: ['MSG-04', 'WS-05'] },
      { time: '1:33 a.m.', event: 'Moviola stalls at 412 feet; no one rethreads it.', refs: ['CS-04', 'EV-02'] },
      { time: '1:40 a.m.', event: 'Rao leaves, bolting the door from the corridor with tape; tells Bhonsle the sahib bolted himself in.', refs: ['EV-01', 'WS-06', 'Q-bhonsle-2'] },
      { time: '1:48–2:00+ a.m.', event: 'Rao in the lab; says Mehta gets his credit “over my dead body.”', refs: ['EV-02', 'EV-03'] },
      { time: '2:00 a.m.', event: 'Khanna knocks, assumes Oberoi asleep.', refs: ['WS-02', 'CS-06'] },
      { time: '7:30 a.m.', event: 'Bhonsle forces the door.', refs: ['WS-06', 'CS-02'] }
    ],
    evidenceChain: [
      { title: 'Timing: the film as a clock', body: 'The Moviola ran from 1:12 and stalled at 1:33 with blood already on the film; the surgeon’s window closes at 1:45. The killing falls at 1:12–1:33, inside the span Rao filled with a man he swore was alive at 1:40.', refs: ['CS-04', 'EV-02', 'CS-01'] },
      { title: 'Act: the splicer and the slate', body: 'The two slate frames were cut that night with the bench splicer — the weapon — by the one person cutting Reel 9. The blade was in his hand because he was editing; it became the weapon in the same motion.', refs: ['EV-05', 'CS-05', 'CS-07', 'Q-salim-3'] },
      { title: 'The locked room: his own trick', body: 'The bolt shoots from the corridor with splicing tape — a trick Rao invented and taught, and the method he alone admits to using with a man inside.', refs: ['EV-01', 'CS-03', 'Q-arun-3'] },
      { title: 'Motive: credit, not money', body: 'The Mehta contract took his authorship in front of the financiers. Nobody gained money from the death; the only thing at stake that a seizure could not touch was credit — and the proof of it, the slate and the top copy, both vanished from the sealed room.', refs: ['MSG-01', 'EV-03', 'EV-04', 'CS-08'] },
      { title: 'Behaviour: the calm man and the running machine', body: 'He came out too calm, told Bhonsle to guard the room, and let a running Moviola impersonate the living for six hours.', refs: ['Q-bhonsle-2', 'WS-06'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Dilip Khanna', body: 'The death wrecked his seizure and cost the syndicate years; his telegram said “disaster.” The booth log and the booth boy hold him in the theatre until two.', refs: ['EV-04', 'EV-02', 'MSG-02'] },
      { title: 'Meena Joshi', body: 'She hated the scene but had already told him to keep it and bury the film; the scene survives whole on the reel. The booth engineer places her, and her 1:30 walk passed a room already holding a body.', refs: ['EV-05', 'EV-02', 'Q-meena-1'] },
      { title: 'Arun Oberoi', body: 'He inherits only debt, and Khanna’s own clerk was with him from one to nearly two — which is how he learned of the mortgage and came to be weeping in the corridor.', refs: ['EV-04', 'Q-arun-1', 'EV-02'] },
      { title: 'Salim Vakil', body: 'A dead Oberoi turns his fee into a bankruptcy claim; three musicians and a timed take sheet hold him at the microphone from 1:25 to two, and his phone ticket shows four minutes at 1:21.', refs: ['EV-04', 'EV-02', 'MSG-04'] },
      { title: 'Ganpat Bhonsle', body: 'He had no motive but loyalty and was on his rounds; it is his honest testimony — the two voices, the too-calm editor — that unpicks the lie.', refs: ['WS-06', 'Q-bhonsle-1'] }
    ],
    redHerringResolutions: [
      { title: 'The locked room', body: 'It suggested suicide before a ruinous seizure, or an impossible crime. It was an editor’s own corridor-bolt trick, and the “impossible” part was only the running machine standing in for a living man.', refs: ['EV-01', 'CS-04'] },
      { title: 'The “reel that changes everything”', body: 'It sounded like a secret that threatened a suspect with exposure. It was a slate on two frames settling who had authored the final reel — a motive for one man only.', refs: ['EV-05', 'Q-khanna-3'] },
      { title: 'Everyone’s cemented hands', body: 'Film cement on every suspect’s fingers seemed to spread the guilt. It merely confirmed that the killer had been splicing — which narrows, not widens, to the man cutting Reel 9.', refs: ['CS-07', 'Q-salim-3'] }
    ],
    epilogue: 'Rao was convicted in 1978; the top copy of Mehta’s contract was found at his home, and the slate frames in the trims bin were enough to show the court whose reel it had been. “Aandhi Ke Baad” was released by the receivers in 1981 to little notice, the disputed scene intact. Among editors, the corridor-bolt trick is still called “Rao’s lock,” and no one uses it with anyone inside.'
  }
};
