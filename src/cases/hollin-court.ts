import type { MysteryCase } from '../types/case';

export const hollinCourt: MysteryCase = {
  id: 'c01',
  slug: 'hollin-court',
  title: 'The Glasshouse at Hollin Court',
  tagline: 'A collector dies among the orchids he could not stop buying, and six people had reason to be glad of it.',
  era: 'Surrey, England — April 1894',
  difficulty: 'introductory',
  estimatedMinutes: 30,
  dossier: {
    reference: 'Surrey Constabulary — Guildford Division',
    caseNumber: 'GD-94-117',
    victim: 'Edmund Harrow, age 61. Retired tea merchant and orchid collector; owner of Hollin Court.',
    location: 'The stove-house (heated glasshouse), Hollin Court, near Shere, Surrey.',
    incidentDate: 'Night of Thursday 12 April 1894, between about 10:15 p.m. and midnight.',
    discoveryTime: 'Friday 13 April, 6:10 a.m., by the under-gardener on his morning round.',
    causeOfDeath: 'Poisoning. The police surgeon reports symptoms and post-mortem findings consistent with a plant alkaloid of the monkshood family. The route is believed to be the nightly tonic cordial Mr Harrow took in the glasshouse.',
    leadInvestigator: 'Inspector Walter Greaves, Surrey Constabulary.',
    assisting: 'Dr Henry Ashdown, police surgeon; Mr Percival Lowe, analytical chemist, Guildford.',
    status: 'OPEN. Six persons of interest, all resident at or visiting Hollin Court on the night. No forced entry to the glasshouse. The cordial bottle is in police custody.',
    synopsis:
      'Edmund Harrow took a tablespoon of a bitter medicinal cordial every night at about half past ten, in the potting room of his stove-house, during the round he made to check his orchids before bed. On the night of 12 April he drank it and did not return to the house. He was found the next morning on the brick floor between the staging benches. The cordial bottle, kept in a cupboard in the potting room, was found in its place with the stopper in. Analysis shows the cordial itself has been adulterated. Monkshood grows in a border not forty yards from the glasshouse door.',
    backgroundLocation:
      'Hollin Court is a modest Georgian house with a celebrated collection of tropical orchids housed in a long iron-and-glass stove-house, heated by a coal boiler in a sunken pit at the north end. The glasshouse has two doors: a garden door at the south end, kept on a latch, and a potting-room door at the north end beside the boiler pit, which locks. Harrow, the head gardener and the under-gardener held keys to the potting room. A gate lodge at the drive end logs carriages in and out.',
    backgroundGathering:
      'Dr Kemble dined at Hollin Court on 12 April and left by carriage at 9:30 p.m. Mr Vale, a plant importer, was staying as a house guest. Mrs Harrow, Miss Clara Harrow and the two gardeners were on the estate overnight. Mr Harrow had announced at dinner that he intended to “put the glasshouse on a new footing” from May, a remark that unsettled more than one person at the table.',
    extraRecords: [
      { label: 'Weather', value: 'Clear, cold night; ground frost by morning. No rain since 9 April.', status: 'confirmed' }
    ]
  },
  suspects: [
    {
      id: 'vale',
      name: 'Lucien Vale',
      age: 34,
      role: 'Plant importer and house guest',
      hue: 200,
      bio: 'Vale buys orchids from collectors in Burma and Colombia and sells them to English enthusiasts at prices he sets himself. He has supplied Harrow for three years and was owed a considerable sum. Charming and quick, he had come to Hollin Court to collect payment and to discuss managing the collection on commission — the arrangement Harrow hinted at over dinner. He occupied the blue bedroom, whose window overlooks the glasshouse roof.',
      stakes: 'He stood to gain the management of the collection, but only if Harrow lived to sign the agreement.',
      openQuestion: 'A specimen he sold Harrow as a new species turns out to be something else entirely.'
    },
    {
      id: 'agnes',
      name: 'Agnes Harrow',
      age: 44,
      role: 'Second wife of the victim',
      hue: 330,
      bio: 'Agnes married Edmund Harrow nine years ago, after the death of his first wife. She has little interest in orchids and a great deal in the house, which under her husband’s will passes to her for life. She manages the household, keeps the keys to the pantry and the medicine cupboard, and measured out her husband’s cordial every evening before it was carried to the glasshouse. Servants describe her as fair but watchful; the village describes her as having married well.',
      stakes: 'A life interest in Hollin Court and a comfortable annuity.',
      openQuestion: 'She prepared the dose each evening. On 12 April she says she did so at seven, as usual.'
    },
    {
      id: 'pell',
      name: 'Thomas Pell',
      age: 52,
      role: 'Head gardener',
      hue: 110,
      bio: 'Pell has kept the Hollin Court glasshouse for twenty-one years and is credited in the horticultural press with raising the “Hollin Court” hybrid that made the collection famous. He is a careful, taciturn man who keeps a daily garden journal and fires the boiler himself every winter night. He lives in the bothy at the kitchen-garden wall with a key to the potting room on his belt. Harrow depended on him entirely and, lately, had begun to question him.',
      stakes: 'Harrow’s “new footing” would have brought in an outside man over Pell’s head after twenty-one years.',
      openQuestion: 'Pell says he banked the boiler at ten and went straight to bed. The boiler log tells its own story.'
    },
    {
      id: 'kemble',
      name: 'Dr Rowan Kemble',
      age: 58,
      role: 'Family physician and rival grower',
      hue: 30,
      bio: 'Kemble has attended the Harrows for fifteen years and prescribed the bitter cordial for Harrow’s digestion. He is also an orchid man, with a small stove-house in Shere and a long, mostly good-natured rivalry with Harrow over whose plants flowered first. He dined at Hollin Court on the night, argued about a plant, and left at half past nine by his own carriage. He knows the properties of monkshood as well as any man in the county.',
      stakes: 'Harrow had offered to buy Kemble’s whole collection “to save him the trouble of losing”. Kemble had refused.',
      openQuestion: 'He wrote the prescription. Did he know where the bottle was kept?'
    },
    {
      id: 'clara',
      name: 'Clara Harrow',
      age: 26,
      role: 'Daughter by the first marriage',
      hue: 275,
      bio: 'Clara lives at Hollin Court on sufferance, having refused two marriages her father arranged and accepted one he did not. Her husband, a schoolmaster, is away in Yorkshire. She was reduced in her father’s will to a small legacy and has written to him more than once about money. She is observant and direct, reads her father’s horticultural correspondence for him, and was the last person in the household to speak with him, at the foot of the stairs at ten.',
      stakes: 'A reconciliation that her father had begun to hint at, and the money that would come with it.',
      openQuestion: 'She says she heard the potting-room door at a quarter past eleven. Her bedroom is at the wrong end of the house for that.'
    },
    {
      id: 'finn',
      name: 'Josiah Finn',
      age: 19,
      role: 'Under-gardener',
      hue: 160,
      bio: 'Finn came to Hollin Court two years ago from the village and has learned the orchids faster than Pell expected. He stokes the boiler on alternate nights, carries water, and found the body. He holds the third potting-room key. Finn spends his wages at the Bell in Shere and has been seen there with a travelling dealer in plants. He is frightened, talkative, and has already changed one detail of his account.',
      stakes: 'His place, and whatever he has been selling out of the back of the glasshouse.',
      openQuestion: 'Seedlings have been going missing from the propagating bench since February.'
    }
  ],
  story: [
    {
      paragraphs: [
        'The stove-house at Hollin Court runs for ninety feet along the south wall of the kitchen garden, a long ridge of glass that steams on cold mornings like a kettle. Inside it is always Burma. The air is wet and heavy, the brick floor sweats, and the benches on either side are staged with orchids in slatted baskets, their aerial roots hanging in the warm dark like grey rope. Edmund Harrow built it in 1873 with tea money and had been filling it ever since.',
        'At the north end, behind a half-glazed door, is the potting room: a workbench, a stone sink, racks of pots, a tall cupboard, and a trapdoor to the boiler pit below. The boiler is fed from the pit by whoever has the night duty, and the gardener who feeds it writes the hour and the coal in a cloth-bound log that hangs on a nail. At the south end a garden door opens onto the lawn, forty yards from a herbaceous border that in April is just a line of green crowns, among them the glossy, cut-leaved clumps of monkshood that Harrow’s first wife had planted for their blue spires.',
        'Every night at about half past ten Harrow walked the length of the glasshouse with a lamp, looking at his plants. He ended the walk in the potting room, where he took a tablespoon of the bitter brown cordial Dr Kemble had prescribed for his digestion. The bottle had lived for years in the house, measured out by Mrs Harrow after dinner; a week before his death he had moved it to the potting-room cupboard, saying he was tired of being handed his medicine like a child. The household knew about the change; the garden knew about the cupboard.'
      ]
    },
    {
      paragraphs: [
        'The dinner on Thursday the twelfth was small. Dr Kemble came up from Shere, as he did most weeks, and the two old men quarrelled amiably about a Dendrobium that Kemble had flowered a month before Harrow. Lucien Vale, who had arrived on Monday with a crate of Colombian plants and an unpaid account, talked well and ate little. Agnes Harrow steered the conversation. Clara, at the far end of the table, watched her father.',
        'Over the cheese Harrow said that from May the glasshouse would be “put on a new footing”. He did not explain. Vale smiled at his plate. Kemble asked whether this meant Harrow had finally accepted that he could not grow Odontoglossums, and Harrow said that it meant he had accepted that he was sixty-one. Agnes changed the subject. In the kitchen passage afterwards, the parlourmaid heard Mr Harrow tell the doctor that he had “found something out about Vale’s plants” and wanted a second opinion in the morning. Kemble’s carriage was logged out at the lodge at half past nine.',
        'Thomas Pell was not at dinner, but he was in the kitchen at seven, when Mrs Harrow measured the cordial. Since the bottle had gone to the glasshouse she had taken to checking its level each evening and filling the tablespoon herself so that her husband need only drink it; the maid carried the covered spoon down to the potting room and set it in the cupboard beside the bottle. On the twelfth Pell carried it himself, saying he was going that way to bank the boiler. The maid was glad of it. It was cold.'
      ]
    },
    {
      paragraphs: [
        'Clara spoke to her father at the foot of the stairs at ten. He had his lamp and his coat and said, as he always said, that he would be twenty minutes. She asked him whether the new footing meant Mr Vale, and he told her that it meant nothing she need worry about, and that they would talk on Sunday. She went up. Her room is at the east end of the house, above the drawing room, with a window on the lawn and the dark bulk of the glasshouse roof beyond it.',
        'Lucien Vale, in the blue bedroom at the west end, says he read until eleven and saw the glasshouse lamp moving in the dark, as it did every night, and then did not see it. Agnes Harrow says she was in bed by half past ten and heard nothing. Josiah Finn, who had no boiler duty that night, was at the Bell in Shere until the landlord put him out at twenty past eleven. Thomas Pell says he banked the boiler at ten, before Harrow came down, and was in his bothy and asleep by half past.',
        'Harrow did not come back to the house. Nobody noticed. His wife had her own room, and he was a man who sometimes fell asleep in the potting-room chair with a plant in his lap. It was Finn who found him at ten past six, when he came to open the roof vents: on his back on the bricks between the benches, a few feet from the potting-room door, his lamp burned out beside him and his face set in a way that made the boy run for Pell rather than look again.',
        'Inspector Greaves arrived from Guildford before noon. The potting-room door was locked; Pell unlocked it. The cordial bottle stood in the cupboard with its stopper in and its level, as Mrs Harrow at once pointed out, a tablespoon lower than she had left it. The tablespoon was in the sink, rinsed. The boiler was still warm. The log on the nail recorded the evening’s banking in Pell’s hand. And on the potting bench, under a sheet of newspaper, lay a pruning knife that had been cleaned and put away in the wrong place.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'Position and condition of the body',
      kind: 'found',
      body: 'Harrow lay on his back on the brick floor between the staging benches, two yards from the potting-room door, lamp beside him. The police surgeon notes signs consistent with a rapid plant-alkaloid poisoning and estimates death between 10:30 p.m. and midnight. There were no injuries. His coat was buttoned and his keys were in his pocket, including his potting-room key.'
    },
    {
      id: 'CS-02',
      icon: 'effects',
      heading: 'The cordial bottle',
      kind: 'tested',
      body: 'The bottle stood in the cupboard with its glass stopper in. Mr Lowe’s analysis finds the remaining cordial adulterated throughout with a monkshood alkaloid; the adulterant was added to the bottle, not merely to the single spoon. Mrs Harrow’s pencil mark on the label, made at seven, sits one tablespoon above the present level — consistent with a single dose having been taken.'
    },
    {
      id: 'CS-03',
      icon: 'tool',
      heading: 'The rinsed spoon and the misplaced knife',
      kind: 'found',
      body: 'The covered tablespoon was found in the stone sink, rinsed. A pruning knife belonging to the garden’s set was found on the bench under newspaper, cleaned, but with dark plant sap dried in the hinge. The knives are normally kept in the tool drawer by the door. Mr Lowe identifies the sap residue as consistent with the stem of a Ranunculaceae plant such as monkshood.'
    },
    {
      id: 'CS-04',
      icon: 'log',
      heading: 'The boiler log',
      kind: 'found',
      body: 'The cloth-bound log on the nail has two entries for 12 April: “6 p.m. — 1 scuttle — T.P.” and “11.15 p.m. — banked, ½ scuttle — T.P.” Both are in the same hand. The ash pan and the fresh coal on the fire-bed are consistent with the fire having been made up late in the evening rather than at ten.'
    },
    {
      id: 'CS-05',
      icon: 'door',
      heading: 'Doors and keys',
      kind: 'found',
      body: 'The potting-room door was locked when police arrived; Pell unlocked it. Three keys exist: Harrow’s (in his pocket), Pell’s (on his belt) and Finn’s (on a string in the bothy). The south garden door was on its latch and could be opened from either side by anyone. The potting room cannot be entered from the glasshouse side without passing through the half-glazed door, which was unlocked.'
    },
    {
      id: 'CS-06',
      icon: 'trace',
      heading: 'The monkshood border',
      kind: 'found',
      body: 'In the herbaceous border forty yards from the garden door, two clumps of monkshood have been cut back to the crown with a clean blade. The cut faces are fresh — Pell himself, when asked, estimated them at less than two days old. Severed foliage was not found in the border, on the compost heap or in the boiler ash. Frost on the lawn showed no footprints, but the frost formed after midnight.'
    },
    {
      id: 'CS-07',
      icon: 'document',
      heading: 'Papers on the potting bench',
      kind: 'found',
      body: 'Beneath the knife lay a letter from the Royal Botanic Gardens at Kew, dated 10 April, answering Harrow’s enquiry about a plant supplied by Mr Vale. Its contents are recorded as evidence file EV-03. Also present: Harrow’s pocket diary, open at Sunday 15 April, on which he had written “Clara — settle” and, under Monday, “Pell”.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What was not found',
      kind: 'inference',
      body: 'No monkshood was found in the house kitchen, the medicine cupboard or Dr Kemble’s bag (examined by consent). No second bottle or vial was found. The adulteration of the whole bottle means the poison was introduced at some time after Mrs Harrow’s mark at seven and before Harrow drank at half past ten — in the potting room, where the bottle lived.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'pell',
      synopsis: 'I banked the boiler at ten and was in my bed by half past. The border was last cut in the autumn.',
      interviewedAt: '13 April 1894, 2:00 p.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'I have had charge of the glasshouse since 1873. Mr Harrow was a hard master to the plants and a fair one to me. I knew of no quarrel between us, only that he had taken to asking Mr Vale’s opinion on matters that were mine.',
        'On Thursday I was in the kitchen at seven when Mrs Harrow measured the cordial. I carried the spoon down myself, set it in the cupboard with the bottle, and shut the cupboard. I then went down to the pit and made the fire up for the night. That was ten o’clock or a little before. I banked it, wrote it in the log, and went to my bothy. I was asleep by half past ten. I saw no one. I heard nothing until the boy came hammering at my door at six.',
        'The monkshood in the long border was cut back in October, as it is every year. I have not touched it since. Any gardener will tell you it is a plant to be careful with. I have never kept any of it in the potting room.',
        'The knife should have been in the drawer. I cannot say who moved it. Finn is careless with tools. As to the log, I write it every night and I wrote it on Thursday; if the hour is wrong it is because I was tired.'
      ],
      claims: ['Carried the cordial spoon to the potting room at about 7 p.m.', 'Banked the boiler at about 10 p.m. and was asleep by 10:30.', 'The monkshood border was last cut in October.']
    },
    {
      id: 'WS-02',
      suspectId: 'vale',
      synopsis: 'I watched his lamp from my window until about eleven. Then it went out, and I thought nothing of it.',
      interviewedAt: '13 April 1894, 3:00 p.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'I came down on Monday to settle accounts and to put a proposal to Mr Harrow: that I should manage his collection for a share of the sales of divisions, which would have paid his debt to me within two seasons. He was warm to it. I believe the “new footing” he spoke of at dinner was that proposal, though he had not signed anything.',
        'After dinner I went up to the blue room at about ten. The window looks over the glasshouse roof, and one can see a lamp moving inside it through the glass. I saw it, as I had each night, going slowly down the house. I read. When I next looked, at about eleven, I could see no light. I assumed he had gone in. I did not go out of my room until morning.',
        'I did not know the cordial had been moved to the glasshouse. I knew Mr Harrow took something for his stomach because he complained of it. I have never been in the potting room except in Mr Harrow’s company.',
        'I am aware that Mr Harrow had written to Kew. I did not know he had received a reply. I will say that in my trade a plant is often named before it is properly known, and a man does not always discover his mistake before his customer does.'
      ],
      claims: ['Went to the blue bedroom at about 10 p.m.', 'Saw the lamp moving in the glasshouse; could not see it at about 11 p.m.', 'Did not know the cordial was kept in the glasshouse.']
    },
    {
      id: 'WS-03',
      suspectId: 'agnes',
      synopsis: 'I marked the bottle at seven, as I had every night since he moved it. The mark is there. One dose is gone.',
      interviewedAt: '13 April 1894, 11:30 a.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'My husband moved his cordial to the glasshouse a week ago because he said I fussed. I did fuss. Dr Kemble had told me more than once that the cordial was a strong preparation and that a man of Edmund’s age should not take it carelessly. So I went on measuring it. Each evening at seven I had the bottle brought up, filled the tablespoon, marked the level on the label in pencil, and had the spoon carried back down under a cover.',
        'On Thursday Pell carried it. I remember because the maid had a cold and Pell said he was going to the pit. I did not go to the glasshouse at any time that evening. I retired at half past ten. My room is at the front of the house; I could not hear the garden doors if I tried.',
        'Yes, I benefit under the will. I have known that for nine years. If I had wished to be a widow I have had the medicine cupboard key the entire time, and I would not have waited until the bottle was in a place that half the estate could reach.',
        'Edmund had been preoccupied all week. He had a letter on Wednesday that pleased him in a grim way. He said that Mr Vale would find him less of a fool than he looked, and that he had one or two other things to put right while he was about it.'
      ],
      claims: ['Measured and marked the cordial at 7 p.m. on 12 April.', 'Did not visit the glasshouse that evening.', 'Retired at 10:30 p.m.']
    },
    {
      id: 'WS-04',
      suspectId: 'kemble',
      synopsis: 'I prescribed the cordial, and I warned him about it. I did not know he had moved it out of the house.',
      interviewedAt: '13 April 1894, 4:15 p.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'I have prescribed Harrow a bitter cordial for his digestion for several years. It is a strong preparation and tastes vile, which is partly why it works: a man who takes it does not eat as he otherwise would. I told Mrs Harrow to measure it. I did not know he had taken the bottle to the glasshouse until I was told this morning, and I think it was foolish.',
        'I dined, we argued about a Dendrobium, and I left at half past nine. The lodge will have the time. My man drove me. I was at home in Shere by a quarter past ten and my housekeeper let me in.',
        'Harrow told me in the passage that he had found out something about Vale’s plants and wanted my opinion. He did not say what. I gathered from his manner that it was the Kew letter. He also said, which I did not understand, that he had “a gardener to see about”. I took it to mean Finn, who is a known pilferer.',
        'You will ask whether I know monkshood. I do. Every physician does. I grow it myself for the colour. If I had wanted to poison Harrow I would not have used a plant that announces itself at the post-mortem.'
      ],
      claims: ['Left Hollin Court by carriage at 9:30 p.m.', 'Was at home in Shere by 10:15 p.m. (housekeeper).', 'Did not know the cordial was kept in the glasshouse.']
    },
    {
      id: 'WS-05',
      suspectId: 'clara',
      synopsis: 'I heard a door at the glasshouse end at a quarter past eleven. I thought it was my father. Now I know it was not.',
      interviewedAt: '13 April 1894, 1:00 p.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'I spoke to my father at ten at the foot of the stairs. He said we would talk on Sunday. He had never said that to me before, not since my marriage, and I went up to bed with more hope than I have had in two years. I did not sleep.',
        'My room is above the drawing room at the east end, over the lawn. The glasshouse is beyond the lawn and its north end — the potting room — is the end nearest me. At about a quarter past eleven I heard a door close. Not the house. Something out on the garden side, a heavy door with a latch. I assumed my father was coming in late and I listened for him on the stairs. He did not come, and I fell asleep at last.',
        'I did not go down. I wish I had.',
        'I know my father had written to Kew about Mr Vale. I wrote the letter for him; his hand is poor. I know that he was angry with Mr Vale and I know that he had been angry with Pell since February over the seedlings that went missing, though Pell blamed Finn and my father did not entirely believe him. He had been counting the plants on the propagating bench himself.'
      ],
      claims: ['Spoke with her father at 10 p.m. at the stairs.', 'Heard a heavy garden-side door close at about 11:15 p.m.', 'Wrote the letter to Kew on her father’s behalf.']
    },
    {
      id: 'WS-06',
      suspectId: 'finn',
      synopsis: 'I was at the Bell till they put me out. I came in by the kitchen garden and I never went near the glass.',
      interviewedAt: '13 April 1894, 10:00 a.m.',
      interviewer: 'Inspector Greaves',
      paragraphs: [
        'It was not my night for the boiler. I went down to the Bell after my tea and I was there till Mr Dunning put us out at twenty past eleven. There were a dozen there who saw me. I came back up the lane and in by the kitchen garden gate and went to the bothy loft and to bed. Mr Pell was in his room below. His light was out. I did not go to the glasshouse.',
        'I found Mr Harrow at ten past six when I went to open the vents. I thought he had fallen asleep until I saw his face. I ran for Mr Pell.',
        'I did not take the seedlings. Well — I took some. Divisions off the propagating bench, ones that would not be missed, and sold them to a man who comes to the Bell. Mr Pell knew about it and said nothing, so long as I kept to the common ones. I never touched the good plants. Mr Harrow counted them himself last month and he was angry with Mr Pell, not me, because he said there were divisions gone off the Hollin Court plant that no boy would know to take.',
        'The knife should be in the drawer. Mr Pell is particular about that. It was him taught me.'
      ],
      claims: ['At the Bell inn in Shere until 11:20 p.m. (landlord and customers).', 'Returned by the kitchen garden gate; did not enter the glasshouse.', 'Admits selling common seedlings; denies taking the Hollin Court hybrid.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'lab',
      title: 'Analytical report on the cordial',
      summary: 'Mr Lowe’s chemical examination of the bottle, the spoon and the knife.',
      stamp: 'Laboratory',
      recordType: 'Analytical chemistry report',
      origin: 'Guildford',
      custodian: 'P. Lowe, analytical chemist',
      date: '14 April 1894',
      status: 'Complete',
      sections: [
        { label: 'The bottle', body: 'The remaining cordial is adulterated throughout with an alkaloid of the monkshood type. The adulterant is evenly distributed, which means it was added to the bottle and shaken or stirred, not dropped into a single spoonful. The quantity present would make every subsequent dose dangerous.' },
        { label: 'Preparation', body: 'The adulterant was not a dry powder. Fibres and a faint green colouration at the neck indicate fresh plant material was crushed or steeped and the liquor added. This can be done with a knife and a mortar in a few minutes by anyone who knows which plant to use.' },
        { label: 'The spoon', body: 'Rinsed. Traces of the cordial, adulterated, remain in the bowl. Consistent with Harrow having taken his usual dose from the bottle.' },
        { label: 'The knife', body: 'Dried sap in the hinge is from a fleshy stem of the buttercup family; monkshood is the only such plant on the estate cut recently. The blade was wiped but not washed.' },
        { label: 'Conclusion', body: 'The poison was introduced into the bottle after Mrs Harrow’s pencil mark at 7 p.m. and before the victim’s dose at about 10:30 p.m. The border cut and the knife residue are consistent with the material having been gathered on the estate within a day or two of the death.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'drawing',
      title: 'Handwriting comparison: the boiler log',
      summary: 'Who wrote the 11:15 entry, and whether the hour was altered.',
      stamp: 'Examined',
      recordType: 'Document examination',
      origin: 'Surrey Constabulary',
      custodian: 'Inspector Greaves, with Mr J. Abbott, schoolmaster',
      date: '14 April 1894',
      status: 'Complete',
      sections: [
        { label: 'The entries', body: 'The log shows two entries for 12 April, both initialled “T.P.” and both in the same cramped, forward-sloping hand. Comparison with Pell’s garden journal and with Finn’s few entries in the log (upright, rounder, and with a looped “d”) shows both 12 April entries are Pell’s.' },
        { label: 'The hour', body: 'The “11.15” has not been altered or overwritten. The ink is the same as the rest of the line. There is no evidence that the figure was ever anything other than 11.15.' },
        { label: 'Pell’s habit', body: 'Across the previous winter, Pell’s banking entries fall between 9:45 and 10:15 p.m. on 61 of 64 nights. The three exceptions are nights of hard frost, when he returned near midnight to make the fire up again, and each of those nights has two late entries.' },
        { label: 'Finn', body: 'Finn made no entry on 12 April. His last entry is 11 April, 10:05 p.m., in his own hand.' },
        { label: 'Conclusion', body: 'The log is in Pell’s hand and records that Pell banked the boiler at 11:15 p.m., not at 10 p.m. as he stated.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'document',
      title: 'Letter from the Royal Botanic Gardens, Kew',
      summary: 'The reply to Harrow’s enquiry about a plant supplied by Vale — found under the knife.',
      stamp: 'Archival',
      recordType: 'Correspondence',
      origin: 'Herbarium, Royal Botanic Gardens, Kew',
      custodian: 'Inspector Greaves',
      date: 'Dated 10 April 1894; received 11 April',
      status: 'Original in custody',
      sections: [
        { label: 'Enquiry', body: 'Harrow (in Clara’s hand) sent a pressed flower and a sketch of a plant sold to him by Vale in 1893 as “Cattleya harrowiana, a new species from the Magdalena”, for which he paid forty guineas.' },
        { label: 'Reply', body: 'The herbarium identifies the specimen as a known Colombian Cattleya, well described and in cultivation since the 1850s, of modest value. The writer adds, with regret, that the name “harrowiana” has never been published and that the plant is not new.' },
        { label: 'Provenance', body: 'The letter was found folded under the pruning knife on the potting bench. Harrow had evidently taken it to the glasshouse with him. Mrs Harrow confirms he had received it on Wednesday and had been pleased in a grim way.' },
        { label: 'Significance', body: 'The letter establishes that Harrow knew, by the night of his death, that Vale had sold him a mislabelled plant at an inflated price. It explains the remark to Kemble and the threat Vale faced to his reputation. It does not establish that Vale knew the letter had arrived.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'timeline',
      title: 'Movements on the night of 12 April',
      summary: 'Gate lodge, inn and household times brought into one table.',
      stamp: 'Compiled',
      recordType: 'Movement timeline',
      origin: 'Lodge book, Bell inn, household interviews',
      custodian: 'Inspector Greaves',
      date: '15 April 1894',
      status: 'Verified where marked',
      sections: [
        { label: '7:00 p.m.', body: 'Cordial measured and marked by Mrs Harrow in the kitchen (maid confirms). Pell carries the spoon to the potting room (maid confirms he took it; nobody saw him arrive).' },
        { label: '9:30 p.m.', body: 'Dr Kemble’s carriage logged out at the lodge (lodge book, verified). His housekeeper confirms arrival at Shere at 10:15 (verified).' },
        { label: '10:00 p.m.', body: 'Harrow speaks to Clara at the stairs and goes out with his lamp (Clara). Vale goes up to the blue room (Vale; unverified). Pell says he banked the boiler at this hour (contradicted by EV-02).' },
        { label: '10:30 – 11:00 p.m.', body: 'Estimated time of the dose and death (surgeon). Vale sees the lamp moving, then not (Vale; unverified). Mrs Harrow retires (unverified).' },
        { label: '11:15 p.m.', body: 'Boiler banked, in Pell’s hand (EV-02, verified). Clara hears a heavy garden-side door close (Clara; her room faces the potting-room end).' },
        { label: '11:20 p.m.', body: 'Finn put out of the Bell (landlord and three customers, verified). The walk to Hollin Court takes 25 minutes; he could not have reached the glasshouse before 11:45.' },
        { label: '6:10 a.m.', body: 'Finn finds the body and fetches Pell (both).' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'ledger',
      title: 'The propagating-bench count and the Hollin Court hybrid',
      summary: 'Harrow’s own inventory of his plants, and what it shows about the missing divisions.',
      stamp: 'Estate',
      recordType: 'Inventory and correspondence',
      origin: 'Harrow’s desk',
      custodian: 'Inspector Greaves',
      date: 'Counts dated 3 March and 9 April 1894',
      status: 'Reviewed',
      sections: [
        { label: 'The counts', body: 'Harrow counted the propagating bench twice this spring. On 3 March: 212 seedlings and divisions. On 9 April: 187. Against the commoner kinds he has written “boy?” Against the Hollin Court hybrid — which he recorded as having been divided into eight pieces in February — he has written: “8 in Feb. 4 now. Who?”' },
        { label: 'The value', body: 'A letter from a Chelsea nursery, found with the counts, offers Harrow fifteen guineas for any single division of the Hollin Court hybrid and remarks that “divisions are said to be already in circulation, which surprises us”.' },
        { label: 'Who could divide it', body: 'Dividing a mature orchid without killing it requires knowledge and nerve. Finn, by his own account and Pell’s, had never been allowed to divide the good plants. Pell divided the hybrid himself in February.' },
        { label: 'Harrow’s intention', body: 'The pocket diary (CS-07) records “Pell” under Monday 16 April. Agnes Harrow states that the “new footing” was to bring Vale in over the garden. Vale states Harrow was “warm” to the proposal.' },
        { label: 'Limit', body: 'The inventory shows that the hybrid’s divisions were disappearing and that Harrow suspected Pell. It does not show who sold them. It does show that the man who had raised the plant had the most to lose if Harrow pursued the matter.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'vale',
      title: 'Telegrams between Vale and his London partner',
      subtitle: 'Copies obtained from the Shere post office',
      format: 'chat',
      messages: [
        { from: 'Vale → Rusk, London', side: 'right', text: 'Harrow has written to Kew about the Magdalena plant. If they answer before I leave we are finished here. Delay anything you can.', time: 'Wed 11 Apr, 9:40 a.m.' },
        { from: 'Rusk → Vale', side: 'left', text: 'Cannot delay Kew. Offer him management at a loss if you must. A live customer who is angry is better than a dead account.', time: 'Wed 11 Apr, 2:15 p.m.' },
        { from: 'Vale → Rusk', side: 'right', text: 'He is warm to management. Has said nothing of Kew. Signing Friday if luck holds.', time: 'Thu 12 Apr, 6:05 p.m.' }
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'pell',
      title: 'Thomas Pell’s garden journal, April entries',
      subtitle: 'Cloth-bound journal kept in the bothy; entries in Pell’s hand',
      format: 'note',
      messages: [],
      noteText: [
        '9 April. Master counted the bench again. Asked me to my face about the H.C. divisions. I said the boy. He said the boy could not divide a cabbage. Said we would talk Monday week.',
        '11 April. Cut back border 4 — monkshood and the delphiniums — ahead of the warm spell. Foliage to the pit. Mr Vale in the glass all afternoon with the master, measuring.',
        '12 April. Dinner for Dr K. Carried the spoon down. Fire 6 p.m. Cold. Clear.'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'clara',
      title: 'Letter from Clara Harrow to her husband',
      subtitle: 'Unposted; found in her writing case with her consent',
      format: 'note',
      messages: [],
      noteText: [
        'Thursday night. He said Sunday. I think he means to make it right, and I think it is because of Vale — having been made a fool of by a stranger makes him want his own people about him again. I will not count on it. I counted on it in ’92.',
        'He is angry with Pell too, over the plant, and I am sorry for it; Pell has been here longer than I have. But Father says that a man who will sell your plant behind your back will sell anything, and he has asked Dr Kemble to recommend somebody.'
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'finn',
      title: 'Note found in Josiah Finn’s coat',
      subtitle: 'Pencil, on the back of a Bell inn bill',
      format: 'note',
      messages: [],
      noteText: [
        'J — six more of the common ones Saturday, same price. Do NOT bring any of the big plant again. Mr P. says the master has counted and he will have my neck and yours. — W.'
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'pell',
      questions: [
        {
          id: 'Q-pell-1',
          prompt: 'The boiler log says you banked the fire at a quarter past eleven, in your own hand. You told us ten. Which is it?',
          answer:
            'I wrote eleven-fifteen, then I was there at eleven-fifteen. I am not going to call my own log a liar. I had gone to bed and I lay there thinking about the cold and I got up again and went down to make sure of the fire, as I have done on frost nights for twenty years. I did not go into the glass. I went down the outside steps to the pit, fed it, wrote it, and came up again. If I said ten this morning it was because I had a dead man in my glasshouse and a boy screaming at me and I gave you the hour I usually keep. I am sorry for it. I had no cause to hide a boiler.'
        },
        {
          id: 'Q-pell-2',
          prompt: 'Your own journal records that you cut back the monkshood border on 11 April and took the foliage to the pit. You told us the border had not been touched since October.',
          answer:
            'Then the journal has it right and I misspoke. I cut the border on Wednesday, ahead of the warm weather — it is the proper time and any gardener would have done it. I burned the tops in the pit with the morning fire, which is what we do with monkshood because it is not a thing to leave about. The knife went back in the drawer. If it was found on the bench under the master’s newspaper, then someone had it out after me, and I would ask the boy, who is not particular. I have handled that plant for twenty years without hurting anyone. I would not need a knife and a border to do what was done to Mr Harrow. I would need to be a different sort of man.'
        },
        {
          id: 'Q-pell-3',
          prompt: 'Mr Harrow had counted the Hollin Court divisions and written your name in his diary for Monday. What did you expect to happen on Monday?',
          answer:
            'I expected to be asked about the plant and to tell him what I told him on the ninth: that I divided it into eight in February on his instruction and that I have not sold a piece of it. If divisions are about in London, then they went out of the propagating house in somebody’s coat, and I know whose coat goes down to the Bell. I will tell you what I did expect. I expected Mr Vale to be put over me. I have given that glasshouse my life and I was to be a hired hand under a man who cannot tell one Cattleya from another. I was angry. I am still angry. It does not follow that I did anything about it but go to bed.'
        }
      ]
    },
    {
      suspectId: 'vale',
      questions: [
        {
          id: 'Q-vale-1',
          prompt: 'Your telegram on Thursday evening says Harrow had “said nothing of Kew”. The Kew letter arrived on Wednesday. Did you know he had read it?',
          answer:
            'I did not know. I feared it. He was civil to me all week and civil is not his nature, so I knew something was coming, and I wrote to Rusk accordingly. If I had known the letter was in the house I would have left on Thursday morning with my crate and taken the loss. Forty guineas and a bruised name are a bad week, Inspector, not a hanging matter. I mislabelled a plant. I have done it before and I will probably do it again, because the men who send them to me do it first. Harrow would have shouted at me and then, because he could not help himself, he would have asked me what else I had.'
        },
        {
          id: 'Q-vale-2',
          prompt: 'From the blue room you say you saw the lamp moving in the glasshouse. Could you see the potting-room end?',
          answer:
            'No. The blue room is at the west end of the house and the glasshouse runs away from it eastward; I see the near end and the first thirty or forty feet of roof, and the lamp going down it shows as a glow under the glass. The far end, where the potting room is, is behind the yew. I saw the lamp set off at about ten past ten, moving slowly as it always did. When I looked again a little before eleven there was no glow anywhere I could see. I took it that he had reached the far end and gone in. I now understand that he was lying on the floor with the lamp burning beside him, which I could not have seen from where I was.'
        },
        {
          id: 'Q-vale-3',
          prompt: 'You say you were never in the potting room without Harrow. Did you know the cordial had been moved there?',
          answer:
            'I knew he took a cordial because he groused about it at dinner. I did not know where it was kept and I had no reason to care. I have been in the potting room twice, both times with Harrow, both times in daylight, both times looking at labels. I did not see the inside of the cupboard. Ask the maid — I did not go below stairs, I did not go out after dinner, and my boots were dry in the morning, which on a frost night they would not have been if I had crossed that lawn. I had every reason to want the man alive on Friday with a pen in his hand.'
        }
      ]
    },
    {
      suspectId: 'agnes',
      questions: [
        {
          id: 'Q-agnes-1',
          prompt: 'You handled the bottle and the spoon every evening. Walk us through Thursday at seven.',
          answer:
            'The maid brought the bottle up from the glasshouse at a quarter to seven, as she did every evening, because I would not have it measured down there in the dark. I held it to the lamp, filled the tablespoon, and made my pencil mark at the level — you have seen the marks, there is one for each night since he moved it. I put the cover on the spoon. Pell was in the kitchen for his supper and said he would take it down as he was going to the pit, and he took the bottle and the spoon both. That is the last I saw of either. If the bottle was poisoned when it left my hands, then the mark would be wrong by more than a tablespoon, and it is not.'
        },
        {
          id: 'Q-agnes-2',
          prompt: 'Dr Kemble warned you the cordial was strong. Did you ever worry it was dangerous in itself?',
          answer:
            'I worried about everything Edmund did. He was a man who would pour a double dose because he had missed one. That is why I measured it. Dr Kemble said the preparation was bitter and strong but not dangerous at the proper dose, and he knew Edmund’s habits, which is why he said it to me and not to him. I will tell you plainly that the cordial was not the poison. Mr Lowe has said so and I say so. Something was put into that bottle in the glasshouse, where I did not go, by somebody who knew that the next person to open the cupboard would be my husband at half past ten.'
        },
        {
          id: 'Q-agnes-3',
          prompt: 'What did your husband mean by putting the glasshouse on a new footing?',
          answer:
            'He meant Mr Vale. He had decided to let Mr Vale manage the collection and sell divisions, because he had worked out that Pell had been doing precisely that without telling him, and he preferred to be robbed by a gentleman who would give him a share. He said so to me on Tuesday in nearly those words. Then the Kew letter came on Wednesday and he was less sure of the gentleman. By Thursday evening I think he was sure of nothing except that he wanted Pell out and Clara back. He was a difficult man who was trying, late, to do a few decent things. He did not get to Sunday.'
        }
      ]
    },
    {
      suspectId: 'kemble',
      questions: [
        {
          id: 'Q-kemble-1',
          prompt: 'You grow monkshood and you prescribed the cordial it was put in. Explain why we should not look hardest at you.',
          answer:
            'Because I was in Shere, Inspector. The lodge has me out at half past nine and my housekeeper has me in at a quarter past ten, and between the two I was in a carriage with my coachman. I did not know the bottle was in the glasshouse — I thought it was where I had told Agnes to keep it, in the house, under a key. A man who did not know where the bottle was cannot have poisoned it. And if you want a physician’s opinion: I would not have used monkshood. It is obvious. It is the first thing Ashdown would look for and the first thing he found.'
        },
        {
          id: 'Q-kemble-2',
          prompt: 'Harrow asked you to recommend “somebody” for the garden. Did you?',
          answer:
            'He asked me on Thursday in the passage, with the cheese still on the table, whether I knew of a man who could take over a stove-house. I said that I knew of two, and that one of them was Pell, and that he should think carefully before he turned out a man who had given him twenty years for the sake of a dealer who could not spell Cattleya. He said that he had thought carefully and that Pell had been selling his plant. I said that if that were true it was a matter for a solicitor, not for Vale. He said he would see Pell on Monday and tell him so himself. He did not get the chance, and I have thought about that.'
        },
        {
          id: 'Q-kemble-3',
          prompt: 'How much of the plant would it take, and how quickly would it act?',
          answer:
            'I will answer that as far as a layman needs to know and no further. Not much; a fresh root or a few stems, crushed, would make a bottle of that size lethal at a single tablespoon. And quickly: a man might feel it within a quarter of an hour and be beyond help within an hour. Which tells you two useful things. Harrow drank at half past ten and was dead between the benches by midnight, so he did not walk back to the house or call out. And whoever prepared it needed the plant, a knife, and a few minutes alone with the bottle — not skill, not a chemist’s shop, not a doctor’s bag. Anyone on that estate who knew which border to go to could have done it.'
        }
      ]
    },
    {
      suspectId: 'clara',
      questions: [
        {
          id: 'Q-clara-1',
          prompt: 'The door you heard at a quarter past eleven — describe it.',
          answer:
            'It was a heavy door with a latch, closed with care, not slammed. Not a house door; our doors are inside and sound different. It came from the glasshouse end of the lawn, from the north, where the potting room and the boiler steps are. I know those sounds — I grew up with the boiler being banked under my window. I thought: there is Father, going in. It was that thought that made me listen for the stairs, and it was the stairs not creaking that made me uneasy, though I told myself he had fallen asleep in his chair again. I have been over it a hundred times. It was not the garden door at the south end; that one squeals.'
        },
        {
          id: 'Q-clara-2',
          prompt: 'You stood to gain if your father reconciled with you. You also stood to gain, under the existing will, if he did not live to change it against you further.',
          answer:
            'Under the existing will I have two hundred pounds and the right to be pitied. If he had lived to Sunday I believe I would have had my place back. You do not kill the man who has just told you, for the first time in two years, that he will talk to you. Inspector, I wrote his letters. I knew what he knew. I knew he was angry with Mr Vale and I knew he was angry with Pell and I knew that neither of those angers had anything to do with me. If I had wanted him dead I have had the medicine cupboard in the house for twenty-six years. I wanted him on Sunday.'
        },
        {
          id: 'Q-clara-3',
          prompt: 'You wrote the letter to Kew. Who else knew it had been sent, and who knew the reply had come?',
          answer:
            'Father and I knew it had been sent, and Agnes, because she saw me writing it. Pell knew — Father asked him for the pressed flower from the herbarium press, and Pell asked what it was for, and Father told him. I do not think Mr Vale knew; Father was enjoying himself too much to spoil it. The reply came on Wednesday morning and Father read it at breakfast and laughed. Agnes was there. I was there. Whether Pell knew it had come I cannot say, but Father took it down to the glasshouse with him on Wednesday afternoon when Mr Vale was measuring, so it was in the potting room from then on.'
        }
      ]
    },
    {
      suspectId: 'finn',
      questions: [
        {
          id: 'Q-finn-1',
          prompt: 'You said this morning you came straight up to bed from the Bell. Now you say Pell’s light was out when you came in. How do you know?',
          answer:
            'Because I looked. I always look, because if his light is on he comes out and asks me where I have been. It was out. That was near a quarter to twelve, because the Bell turns out at twenty past and it is a long lane. I went up the ladder to the loft and I heard nothing. I will tell you something else I did not say this morning because I was frightened. When I came through the kitchen garden gate I could see the glass, and there was a light inside it, low down, at the far end — the master’s lamp, I thought, on the floor or on the bench. I did not go to see. I thought he was asleep in his chair with the lamp beside him. He often was.'
        },
        {
          id: 'Q-finn-2',
          prompt: 'The note in your coat tells you not to bring “any of the big plant again”. Did you take a division of the Hollin Court hybrid?',
          answer:
            'Once. One piece. In March. It was lying on the bench in a pot, already divided — I did not divide it, I could not, Mr Pell never let me near the good plants with a knife. I took the pot and W. gave me two pounds for it and told me never again because the thing has a name and people would know. The other pieces — there were eight in February and I know that because Mr Pell made me label the pots — I never touched. There were four left on the ninth when the master counted. I did not take three more pieces. And I will say it, since you will find it out: Mr Pell knew about my seedlings and said nothing, and I thought that was kindness.'
        },
        {
          id: 'Q-finn-3',
          prompt: 'Who used the pruning knife last, and where should it have been?',
          answer:
            'In the drawer by the door, with the other two, blades in. Mr Pell will have your hide for a knife left out — he would have had mine. I last used it on Tuesday to trim the baskets and I put it back. Wednesday I was not in the potting room at all; I was carting manure to the frames. Mr Pell cut the long border on Wednesday — I saw him at it from the frames, about three o’clock, and he carried the tops down to the pit in a barrow as he always does. If the knife was under the master’s newspaper on Friday morning, then it was used after Tuesday by somebody who did not put it back. That is not me and it is not like him.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-inherit', label: 'To inherit the estate before the will could be altered' },
      { id: 'm-expose', label: 'To prevent exposure and dismissal over the sale of the Hollin Court divisions' },
      { id: 'm-debt', label: 'To escape a debt and a fraud that was about to be revealed' },
      { id: 'm-rival', label: 'Professional jealousy over the orchid collection' }
    ],
    methodOptions: [
      { id: 'h-bottle', label: 'Fresh monkshood, cut from the border, steeped into the whole cordial bottle in the potting room before 10:30 p.m.' },
      { id: 'h-spoon', label: 'Poison added to the single measured spoonful in the kitchen at 7 p.m.' },
      { id: 'h-pharmacy', label: 'The prescribed cordial was itself dangerous and the dose was mis-measured' },
      { id: 'h-outside', label: 'An outsider entered by the garden door during dinner and tampered with the bottle' }
    ],
    selectableEvidenceIds: ['CS-02', 'CS-03', 'CS-04', 'CS-06', 'CS-07', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'MSG-04', 'WS-05', 'Q-pell-1', 'Q-finn-3'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'pell',
    motiveOptionId: 'm-expose',
    methodOptionId: 'h-bottle',
    decisiveEvidenceIds: ['EV-02', 'MSG-02', 'EV-01', 'EV-05'],
    reveal: 'Thomas Pell poisoned the cordial. He cut the monkshood on Wednesday, steeped it into the bottle on Thursday evening, and came back at a quarter past eleven to make sure his master was dead.',
    reconstruction: [
      'Pell had been selling divisions of the Hollin Court hybrid — the plant that was his life’s work and his master’s pride — to a London nursery through the same man who bought Finn’s seedlings at the Bell. He let Finn take the blame for the common plants, and once, carelessly, a piece of the hybrid. But Harrow counted the bench himself, knew that no boy could divide an orchid, and on 9 April asked Pell to his face. Then Harrow began talking of a new footing, and of Vale, and wrote “Pell” in his diary for Monday.',
      'On Wednesday 11 April Pell cut back the monkshood border, in season, as he had every spring. This time he did not burn all of it. On Thursday he offered to carry the cordial spoon down to the potting room, which gave him the bottle, the cupboard and the room to himself at seven o’clock. He crushed the stems with the pruning knife, steeped the liquor into the bottle, and set the bottle back at its mark minus nothing — the pencil line, made before he touched it, could tell nobody what had been added below the surface. He put the knife on the bench under the newspaper Harrow had left there, meaning to return it, and forgot; a twenty-year habit broken by a shaking hand.',
      'Harrow drank at half past ten and died between the benches. Pell could not sleep. At a quarter past eleven he went down the outside steps to the boiler pit, banked the fire — because he was a gardener and the plants could not be allowed to freeze whatever else had happened — and wrote the hour in the log out of the same habit. He looked through the half-glazed door, saw the lamp on the floor, and shut the pit door with care. Clara heard it.',
      'In the morning he gave the police the hour he usually kept, ten o’clock, and said the border had not been cut since October. His own log and his own journal said otherwise. He had spent twenty-one years writing down the truth every night, and it was the truth that caught him.'
    ],
    chronology: [
      { time: 'Wed 11 Apr, 3:00 p.m.', event: 'Pell cuts back the monkshood border; Finn sees him from the frames. Pell keeps some stems.', refs: ['MSG-02', 'CS-06', 'Q-finn-3'] },
      { time: 'Wed 11 Apr, afternoon', event: 'Harrow takes the Kew letter to the glasshouse while Vale is measuring plants.', refs: ['EV-03', 'Q-clara-3'] },
      { time: 'Thu 12 Apr, 7:00 p.m.', event: 'Agnes marks the bottle. Pell volunteers to carry it and the spoon to the potting room, alone.', refs: ['Q-agnes-1', 'EV-04'] },
      { time: 'Thu 12 Apr, c. 7:10 p.m.', event: 'Pell steeps crushed monkshood into the bottle, wipes the knife, leaves it under the newspaper.', refs: ['EV-01', 'CS-03'] },
      { time: 'Thu 12 Apr, 9:30 p.m.', event: 'Kemble leaves by carriage.', refs: ['EV-04'] },
      { time: 'Thu 12 Apr, 10:30 p.m.', event: 'Harrow takes his dose in the potting room and collapses between the benches.', refs: ['CS-01', 'CS-02'] },
      { time: 'Thu 12 Apr, 11:15 p.m.', event: 'Pell returns to the boiler pit, banks the fire, writes the log, and closes the pit door; Clara hears it.', refs: ['CS-04', 'EV-02', 'WS-05'] },
      { time: 'Thu 12 Apr, 11:45 p.m.', event: 'Finn returns from the Bell, sees the low lamp through the glass, does not investigate.', refs: ['Q-finn-1', 'EV-04'] },
      { time: 'Fri 13 Apr, 6:10 a.m.', event: 'Finn finds the body.', refs: ['CS-01'] }
    ],
    evidenceChain: [
      { title: 'Opportunity: the hand on the bottle', body: 'The poison was added to the whole bottle in the potting room after 7 p.m. (EV-01, CS-02). Pell took the bottle there alone at seven, by his own account and the maid’s. Kemble and Vale did not know the bottle was there; Agnes and Clara never went to the glasshouse; Finn was in the village.', refs: ['EV-01', 'CS-02', 'Q-agnes-1', 'EV-04'] },
      { title: 'Capability: the plant and the knife', body: 'Pell’s own journal records cutting the monkshood on 11 April, which he denied to police. The pruning knife carries monkshood sap and was left out of its drawer — a thing, two witnesses agree, Pell never did.', refs: ['MSG-02', 'CS-03', 'CS-06', 'Q-finn-3'] },
      { title: 'Timing: the log he could not help writing', body: 'The boiler log, in his hand and unaltered, puts him at the glasshouse at 11:15 p.m., when he had sworn he was asleep. Clara heard the pit door at that hour. His later explanation — a frost-night second visit — does not match his own habit of recording two entries on such nights.', refs: ['EV-02', 'CS-04', 'WS-05', 'Q-pell-1'] },
      { title: 'Motive: the divisions', body: 'Eight divisions became four. Finn could not have divided the plant and admits to one pot already divided. A London nursery knew pieces were in circulation. Harrow suspected Pell by name and had set Monday to deal with him.', refs: ['EV-05', 'Q-finn-2', 'CS-07'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Lucien Vale', body: 'Vale had the strongest apparent motive once the Kew letter is read, but the letter also shows he was about to be shouted at, not ruined, and his telegrams prove he wanted Harrow alive to sign on Friday. He did not know the bottle was in the glasshouse, could not see the potting-room end from the blue room, and his boots were dry.', refs: ['MSG-01', 'EV-03', 'Q-vale-2'] },
      { title: 'Agnes Harrow', body: 'She handled the bottle every night, but her pencil mark was made before the bottle left the kitchen and the level still matches it minus one dose; the poison went in afterwards. She had a far easier means for nine years and never used it.', refs: ['CS-02', 'Q-agnes-1'] },
      { title: 'Dr Kemble', body: 'He knew the plant and wrote the prescription, but he was logged out at 9:30 and home by 10:15, and he believed the bottle was still locked in the house. He could not poison a bottle he did not know how to find.', refs: ['EV-04', 'WS-04'] },
      { title: 'Clara Harrow', body: 'She was the last to speak with her father and heard the door, but her room faces the potting-room end, which makes her the only honest clock in the case. She wanted Sunday more than she wanted two hundred pounds.', refs: ['WS-05', 'Q-clara-1'] },
      { title: 'Josiah Finn', body: 'A thief, a liar on small points, and holder of a key — but twelve people put him at the Bell until 11:20 and the walk takes twenty-five minutes. The bottle was poisoned hours before he could have reached it.', refs: ['EV-04', 'Q-finn-1'] }
    ],
    redHerringResolutions: [
      { title: 'The Kew letter under the knife', body: 'It looked like a motive for Vale left at the scene. It was simply where Harrow had put it on Wednesday; the knife landed on top of it on Thursday. The letter condemns Vale’s honesty, not his hands.', refs: ['EV-03', 'CS-07'] },
      { title: 'Finn’s changed story', body: 'He hid the fact that he had seen the lamp low in the glass because he was ashamed of not going in. His second account, far from incriminating him, fixes the lamp on the floor by 11:45 and the pit light out — consistent with Pell having already been and gone.', refs: ['Q-finn-1'] },
      { title: 'The medicine cupboard key', body: 'Agnes and Clara both point out that they held the house key for years. That is precisely why the poisoning happened only after the bottle moved to the glasshouse: the opportunity belonged to the garden.', refs: ['Q-agnes-2', 'Q-clara-2'] }
    ],
    epilogue: 'Pell was tried at Kingston Assizes in July 1894 and convicted on the evidence of his own log. Clara Harrow received, under a codicil found unsigned in her father’s desk, nothing; Agnes Harrow gave her the Hollin Court hybrid, all four remaining divisions, and she grew them in Yorkshire for the rest of her life.'
  }
};
