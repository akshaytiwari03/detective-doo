import type { MysteryCase } from '../types/case';

export const cardewLight: MysteryCase = {
  id: 'c04',
  slug: 'cardew-light',
  title: 'Slack Water at Cardew Light',
  tagline: 'A tidal island, a covered causeway, and a death between high water and dawn. Whoever did it crossed the sea to do it.',
  era: 'North Cornwall — September, present day',
  difficulty: 'intermediate',
  estimatedMinutes: 40,
  dossier: {
    reference: 'Devon & Cornwall Police — Major Crime Investigation Team',
    caseNumber: 'DCP-MCIT-0924-311',
    victim: 'Morwenna Trevail, age 49. Owner-operator of Cardew Light guesthouse; leaseholder of Cardew Island.',
    location: 'The slipway pool, Cardew Island, off Porthcarrow, Cornwall. A tidal island joined to the mainland by a stone causeway for roughly four hours either side of low water.',
    incidentDate: 'Night of Friday 13 September, between about 22:30 and 23:30.',
    discoveryTime: '06:40 Saturday, by the island boatman, at low water.',
    causeOfDeath: 'Drowning in sea water, following a blow to the right temple. She was unconscious or dazed when she entered the slipway pool.',
    leadInvestigator: 'Detective Inspector Rhys Carrow, MCIT.',
    assisting: 'Home Office pathologist Dr Fenella Marsh; Falmouth Coastguard (tide and causeway data); digital forensics unit.',
    status: 'OPEN. The causeway was under water from 21:10 to 03:40. Five people were on the island; one was on the mainland. The sea decides who could have reached the slipway.',
    synopsis:
      'Cardew Light is a converted lighthouse keepers’ terrace on a tidal island, run as a guesthouse by Morwenna Trevail with her late brother’s widow as business partner. On the night of 13 September the island was cut off by the tide from 21:10. At around 22:50 a guest heard raised voices at the slipway. At 06:40 the boatman found Morwenna face down in the rock pool at the foot of the slipway, where the sea leaves a metre of water at low tide. A boat hook was in the pool with her. The island’s Wi-Fi router logged every phone that connected that night.',
    backgroundLocation:
      'The island is three hundred metres offshore. A stone causeway, submerged at mid-tide and above, links it to Porthcarrow beach. The slipway on the island’s landward side has a concrete ramp, a rock pool at its foot, a mooring for the island RIB (“Puffin”, red trim, red boat hook in its bracket) and a rack for the kayak guide’s three sea kayaks. On the mainland, the Trevails’ boathouse holds a small aluminium tender with an outboard, a drying room for wet kit, and a blue boat hook. Cardew Island has no mobile signal; everything goes through the guesthouse Wi-Fi.',
    backgroundGathering:
      'Friday was the last weekend of the season. Two guests were in residence: a hotel group’s acquisitions director, who had come to press the Trevails to sell the lease, and a regular returning visitor. The kayak guide was camping by the rack, the boatman was in his cottage, and Morwenna’s nephew was working the bar. Morwenna had told the acquisitions director at dinner that she would “not be signing anything, tonight or ever.” Her business partner, Jenna Trevail, was on the mainland.'
  },
  suspects: [
    {
      id: 'pascoe',
      name: 'Dez Pascoe',
      age: 58,
      role: 'Island boatman and handyman',
      hue: 200,
      bio: 'Pascoe has lived in the end cottage for thirty years, running the RIB, fixing the generator and ferrying guests when the causeway is covered. He found the body. For two seasons he has been taking cash ferry fares from day visitors and not declaring them, and Morwenna had found the discrepancy a week before. He has a key to everything on the island and says he heard an outboard at about 22:45 and assumed it was the kayak guide “playing about.” He is slow to speak and quick to notice.',
      stakes: 'His cottage and his job, both of which Morwenna had the power to end and had said she would consider.',
      openQuestion: 'He heard an outboard. The island RIB was on its mooring, cold, in the morning.'
    },
    {
      id: 'oates',
      name: 'Liam Oates',
      age: 31,
      role: 'Kayak guide, camping on the island',
      hue: 160,
      bio: 'Oates runs sea-kayak tours from the island rack in summer under licence from Morwenna, and for most of this season had been more than her licensee. He wanted her to invest in a bigger operation; she had said no in August and the relationship had cooled to the point of avoiding each other at breakfast. He has three kayaks on the rack and a tent by the slipway, forty metres from the pool. He says he was in the tent with headphones on and heard nothing.',
      stakes: 'A business plan she had refused to fund, and a relationship he had told friends was “going somewhere.”',
      openQuestion: 'Three kayaks. Were all three dry in the morning?'
    },
    {
      id: 'nair',
      name: 'Priya Nair',
      age: 38,
      role: 'Acquisitions director, Coastline Hotels; guest',
      hue: 275,
      bio: 'Nair came to Cardew for one night specifically to get a signature. Her group has an option agreement with Jenna that expires at the end of September; without Morwenna it is worthless. She is polished, patient and unused to being told no. Her room is on the first floor of the terrace, with a window toward the slipway. She says she heard voices at about 22:50, looked out, and saw a figure in a dark drysuit on the ramp. She did not go down.',
      stakes: 'A deal, a bonus and a reputation for closing.',
      openQuestion: 'She watched a figure in a drysuit and went back to bed. Why?'
    },
    {
      id: 'jenna',
      name: 'Jenna Trevail',
      age: 44,
      role: 'Business partner; sister-in-law',
      hue: 330,
      bio: 'Jenna married Morwenna’s brother Mark and, when he drowned off the island in 2018, inherited his half of the lease and his half of the business. She has never liked the island and lives in Porthcarrow with her son. She wants to sell to the hotel group, whose offer would clear her debts and buy a house inland; Morwenna has blocked the sale for a year. The partnership agreement Mark drafted contains a survivorship clause neither woman has read closely. Jenna is brisk, organised and in charge of the mainland side: bookings, the boathouse, the tender.',
      stakes: 'A sale worth more than she will ever otherwise see, blocked by one signature.',
      openQuestion: 'She says she was at home from eight. Her phone has a habit of joining the island’s Wi-Fi.'
    },
    {
      id: 'tom',
      name: 'Tom Trevail',
      age: 22,
      role: 'Nephew; seasonal bar staff',
      hue: 60,
      bio: 'Tom is Jenna’s son, working his third summer on the island to pay off what his mother calls “university debt” and he calls a poker habit. He has taken money from the bar till more than once; Morwenna knew and had said she would deal with it quietly when the season closed. He was in the staff room above the bar from about 22:00, on a video call with his girlfriend in Bristol until nearly midnight. He is frightened of both his aunt’s death and his mother’s reaction to it.',
      stakes: 'A small theft about to be forgiven, and whatever his mother has not told him.',
      openQuestion: 'A long video call on the island Wi-Fi. The router would know if it dropped.'
    },
    {
      id: 'beane',
      name: 'Hilary Beane',
      age: 66,
      role: 'Returning guest; amateur astronomer',
      hue: 25,
      bio: 'Beane has stayed at Cardew every September for eleven years, timing her visit to the dark skies and the autumn meteor showers. She knows the island, the tides and the Trevails well enough to have attended Mark Trevail’s funeral. On the night she was on the western headland with binoculars and a flask from about 22:15 until after midnight, facing away from the slipway but with the mainland in view. She saw a small boat without lights cross from Porthcarrow at about 22:40.',
      stakes: 'None she admits to, beyond a fondness for a place she expects to be turned into a hotel.',
      openQuestion: 'She is the only person who was looking at the sea.'
    }
  ],
  story: [
    {
      paragraphs: [
        'Twice a day the sea gives Cardew Island back to the land. For four hours either side of low water the causeway stands clear — three hundred metres of wet stone and bladderwrack that visitors cross in sandals, reading the warning sign with the tide times chalked on it — and then the Atlantic comes up the beach at the pace of a walking man and the island is an island again.',
        'The lighthouse was automated in 1990 and the keepers’ terrace sold to the Trevail family, who had run the Porthcarrow boatyard for three generations. Mark and Morwenna Trevail turned the terrace into a guesthouse of six rooms, a bar and a reputation for silence. Mark drowned in 2018 bringing the RIB round the point in a swell he should not have been out in, and his half of everything went to his wife Jenna, who had always preferred the mainland and now had a reason to stay there.',
        'The two women ran Cardew between them for five years, Morwenna on the island and Jenna on the shore, with the sea in the middle. Coastline Hotels made their first offer in 2022. Jenna wanted to take it. Morwenna said the island was not for sale while she was alive to stand on it, and that was the sentence everyone remembered afterwards.'
      ]
    },
    {
      paragraphs: [
        'The last Friday of the season was warm and still. Low water was at 17:30; the causeway went under at ten past nine. By then the island held five people. Dez Pascoe was in his cottage at the end of the terrace with the radio. Liam Oates was in his tent by the kayak rack, where he had spent the summer and where he now spent it alone. Hilary Beane had taken her flask up to the western headland to wait for the meteors. Tom Trevail was closing the bar early because the only two guests were in their rooms. And Priya Nair, who had flown from Manchester for one night to get one signature, was in Room 3 reading the option agreement again, having been told over dinner, in front of Hilary and the soup, that Morwenna would not be signing anything, tonight or ever.',
        'Morwenna went out at about ten with a torch to check the RIB’s mooring, which she did every night the causeway was covered. She did not come back in. At 22:05 the guesthouse phone rang — the landline, because nothing else works on Cardew — and Tom, passing through the hall on his way up to the staff room, heard his aunt’s voice say “then come and say it to my face” before she put the receiver down.',
        'Hilary Beane, on the headland, saw a small boat without lights leave the Porthcarrow side at about 22:40 and cross toward the island’s slipway, which was behind her and out of sight. She assumed it was Dez coming back from the pub, which he was not, or Liam, which he was not. Dez heard an outboard from his cottage at about the same time and assumed it was Liam. Liam heard nothing, or says he heard nothing, over his headphones.',
        'At about 22:50 Priya Nair heard two women’s voices from the direction of the slipway, one of them Morwenna’s, raised. She went to her window. In the light from the terrace she saw a figure in a dark drysuit on the ramp, and then did not. She says she assumed it was Jenna, who she knew used a drysuit to cross when the tender was out of the water, and that whatever the Trevails were saying to each other was not her business until one of them signed. She went back to bed.'
      ]
    },
    {
      paragraphs: [
        'Tom Trevail’s video call with his girlfriend ran from 22:14 to 23:52 and was recorded, in the way of these things, as a steady line of data on the guesthouse router. At 23:21 a device the router had seen many times before — it kept a name for it, “Jenna-iPhone” — disconnected from the island network, having joined it at 22:48. Nobody noticed. Nobody notices a router.',
        'The causeway came clear again at twenty to four. Dez Pascoe went down to the slipway at 06:40, as he did every morning, to check the RIB and the fuel. The tide was out. In the rock pool at the foot of the ramp, which keeps a metre of water at low tide and a crust of coarse shell sand that occurs nowhere else on the island, Morwenna Trevail lay face down with her torch beside her and a boat hook across her legs.',
        'The RIB was on its mooring, its red boat hook in its bracket, its engine cold. The boat hook in the pool was blue. Pascoe, who had painted both, knew at once that it had come from the mainland boathouse. He did not touch it. He went up to the terrace, woke Tom, and used the landline to call the police and then, because he thought someone should, Jenna, who answered on the second ring and said, “What’s happened? Is it Tom?”'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'The body in the slipway pool',
      kind: 'tested',
      body: 'Face down in a metre of water in the rock pool at the foot of the ramp, torch beside her, boat hook across her legs. The pathologist finds drowning in sea water as cause, with a blow to the right temple delivered before immersion, consistent with the hooked end of a boat hook. Time of death 22:30–23:30. She was wearing a fleece and deck shoes, not a drysuit.'
    },
    {
      id: 'CS-02',
      icon: 'tool',
      heading: 'The blue boat hook',
      kind: 'found',
      body: 'A two-metre aluminium boat hook with blue-painted shaft and a hooked end, in the pool with the body. The island RIB’s hook is red and was in its bracket on the slipway rail. Pascoe states he painted the mainland boathouse’s hook blue in 2021 to stop the two being mixed up. Blood and hair on the hooked end match the victim. No usable prints; immersed.'
    },
    {
      id: 'CS-03',
      icon: 'weather',
      heading: 'Tide and causeway',
      kind: 'found',
      body: 'Falmouth Coastguard confirms: high water 00:24; the causeway was impassable on foot from 21:10 to 03:40. Wind light, sea slight. Between 22:30 and 23:30 the island could be reached only by boat. The three hundred metres can be rowed in ten minutes or motored in three.'
    },
    {
      id: 'CS-04',
      icon: 'layout',
      heading: 'The slipway ramp',
      kind: 'found',
      body: 'Wet drag marks on the concrete from the top of the ramp into the pool, consistent with a body moved three metres. At the water’s edge, keel scuffs from a small flat-bottomed boat — not the RIB, which is moored off and not beached. A tangle of coarse shell sand and weed disturbed at the pool’s edge. The RIB’s mooring line was tied with Morwenna’s usual knot and had not been handled.'
    },
    {
      id: 'CS-05',
      icon: 'log',
      heading: 'The router',
      kind: 'found',
      body: 'The guesthouse router keeps a connection log for every device by name and address. The night’s log is preserved and analysed in EV-02. It shows which phones were on the island network at which minutes, including one that joined at 22:48 and left at 23:21 and was not resident on the island.'
    },
    {
      id: 'CS-06',
      icon: 'effects',
      heading: 'The kayaks and the tent',
      kind: 'found',
      body: 'Three sea kayaks on the rack, all three with dry cockpits and dry hatch covers, dew undisturbed on the hulls. Paddles stowed. Oates’s tent forty metres away: sleeping bag, headphones, a half-finished bottle of wine, phone on charge from a power bank. His drysuit hangs inside the tent, dry and salt-stiff from an earlier day.'
    },
    {
      id: 'CS-07',
      icon: 'door',
      heading: 'The mainland boathouse',
      kind: 'found',
      body: 'Examined at 07:30. The aluminium tender is on its trolley above the tideline, hull wet, outboard cold but with fresh water in the leg; the trolley wheels have left tracks to and from the water across sand that the 00:24 high tide would have smoothed, so the boat went out and came back after high water or — the tracks are partly overwashed — around it. In the drying room: a dark drysuit, still wet inside, with coarse shell sand in the boots. The blue boat hook’s bracket is empty.'
    },
    {
      id: 'CS-08',
      icon: 'document',
      heading: 'On the victim',
      kind: 'found',
      body: 'In her fleece pocket, folded and damp: a copy of the partnership agreement with one paragraph bracketed in pen — the survivorship clause — and a note in her hand: “Ask Hollis about this Mon.” Hollis is the family solicitor. Her phone, in the other pocket, shows the landline call log is not on it; the 22:05 call came to the guesthouse landline.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'jenna',
      synopsis: 'I was at home from eight. I rang her at ten to try once more. She hung up on me. That’s the last I heard.',
      interviewedAt: '14 September, 09:30',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I was in Porthcarrow all evening. I got home about eight, ate, watched television, and at about ten I rang the island on the landline to ask Morwenna to meet Priya halfway — a longer lease, a smaller stake, anything. She said if I wanted to say it I could come and say it to her face, and put the phone down. I did not go. The causeway was covered and I was not going to take the tender out in the dark to be shouted at.',
        'I went to bed about eleven. I live alone since Tom moved to the island for the season. Nobody saw me and I did not see anybody.',
        'The drysuit in the boathouse is mine; I use it when I have to wade the causeway at the edges of the tide. It was wet because I crossed on Thursday afternoon to bring the week’s laundry and got caught by the water coming in. I did not hang it properly. The tender — I have not used it since Tuesday.',
        'Yes, I wanted to sell. I have wanted to sell for five years. I had an option with Coastline that would have been worthless by the end of the month. I was angry. I did not kill my husband’s sister over a hotel.'
      ],
      claims: ['At home in Porthcarrow from 20:00; in bed by 23:00.', 'Rang the island landline at about 22:05 and was hung up on.', 'Drysuit wet from a crossing on Thursday; tender not used since Tuesday.']
    },
    {
      id: 'WS-02',
      suspectId: 'pascoe',
      synopsis: 'I heard an outboard about quarter to eleven. Not ours — ours has a knock. I thought it was Liam messing about.',
      interviewedAt: '14 September, 08:00',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I was in my cottage from nine with the radio. About quarter to eleven I heard an outboard, a small one, four-stroke, quiet — not Puffin’s, Puffin knocks. It came in to the slipway and cut. I thought Liam had borrowed something or someone was dropping a parcel. Later, I don’t know when, I heard it again going out. I didn’t look. You stop looking after thirty years.',
        'I went down at twenty to seven like always. She was in the pool. The hook across her was blue. I painted that hook blue myself three years ago so Jenna would stop taking ours. It lives in the mainland boathouse. It has no business on this island.',
        'Morwenna knew about the ferry money. I told her myself a week ago before she could find it in the book; she said we would talk at the end of the season and I thought I might keep the cottage. I am not proud of it. I would not have hurt her over it. She was the only Trevail who ever treated me as if I lived here.',
        'The RIB was on her knot. Morwenna tied a knot nobody else ties. If anyone had taken Puffin out they would never have tied it back like that.'
      ],
      claims: ['In his cottage from 21:00.', 'Heard a quiet four-stroke outboard arrive at about 22:45 and leave later.', 'Found the body at 06:40; the boat hook in the pool was the mainland one.']
    },
    {
      id: 'WS-03',
      suspectId: 'oates',
      synopsis: 'I was in the tent with headphones. I didn’t hear a thing. The kayaks never moved.',
      interviewedAt: '14 September, 10:30',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I was in my tent from about half nine with a bottle of wine and a podcast. I fell asleep with the headphones on. I did not hear the argument and I did not hear a boat, and I know how that sounds forty metres from the slipway.',
        'The kayaks were on the rack and they were dry this morning; you looked at them before I did. My drysuit was in the tent, dry. I did not go in the water.',
        'Morwenna and I had a thing over the summer. It was over by August when I asked her to put money into a proper kayak centre and she laughed. We were civil. I was going to pack up Sunday and not come back.',
        'If you want to know who crosses that water at night in a drysuit, it’s Jenna. She hates the tender and she hates the dark and she does it anyway when she’s angry enough. I’ve seen her wade the causeway with the water at her chest.'
      ],
      claims: ['In his tent from about 21:30; asleep with headphones.', 'Kayaks and drysuit dry and unused.', 'Relationship with the victim ended in August.']
    },
    {
      id: 'WS-04',
      suspectId: 'nair',
      synopsis: 'Two women arguing, then a figure in a drysuit on the ramp. I assumed it was Jenna and that it was family business.',
      interviewedAt: '14 September, 09:00',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I was in Room 3 from about half nine, reading. At around ten to eleven I heard voices from the slipway — two women, one of them Morwenna, and it was heated. I went to the window. The terrace lights reach the top of the ramp. I saw a figure in a dark drysuit with the hood up standing near the top, and someone else lower down out of the light. Then the drysuit figure moved down and I lost them both.',
        'I assumed it was Jenna. I knew she crossed in a drysuit; she told me so herself at our first meeting, as a joke about how far she would go to get off that island. I assumed the sisters-in-law were having it out and that if I went down I would lose the deal. I went back to bed. I am not proud of that either.',
        'My option agreement is with Jenna. It needed Morwenna’s signature to be worth anything. Morwenna dead does not help me unless Jenna now controls the whole lease, and I did not know whether she would until your colleague showed me the partnership agreement this morning. I promise you I had not read it.',
        'I have never been in a boat smaller than a ferry. I did not leave the building.'
      ],
      claims: ['In Room 3 from 21:30; heard two women arguing at about 22:50.', 'Saw a figure in a dark drysuit at the top of the ramp.', 'Did not leave the terrace.']
    },
    {
      id: 'WS-05',
      suspectId: 'tom',
      synopsis: 'I was on a call with Ellie from quarter past ten till nearly midnight. I heard Morwenna on the phone at five past ten saying “come and say it to my face.”',
      interviewedAt: '14 September, 08:30',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I shut the bar about ten because there was nobody in it. On my way up I heard the landline go and Morwenna picked it up in the hall and said, “then come and say it to my face,” and put it down hard. I knew it was Mum. They’d been at it all week.',
        'I went up to the staff room and called Ellie in Bristol at about quarter past ten and we talked till nearly midnight. The Wi-Fi is the only way to do that here. You can check the router, Dez says you already have.',
        'I took money from the till. Twice. Morwenna knew and said we’d sort it quietly in October. I was more scared of Mum finding out than of Morwenna.',
        'When Dez woke me I thought it was about me. Then he said it was Morwenna and he was ringing Mum and I said, don’t, and I don’t know why I said that.'
      ],
      claims: ['Heard the 22:05 landline call.', 'On a video call from about 22:14 to 23:52 (router log).', 'Did not leave the staff room.']
    },
    {
      id: 'WS-06',
      suspectId: 'beane',
      synopsis: 'A small boat with no lights crossed from Porthcarrow at about twenty to eleven. I assumed it was one of the men.',
      interviewedAt: '14 September, 11:00',
      interviewer: 'DI Carrow',
      paragraphs: [
        'I was on the western headland from about quarter past ten with my flask and binoculars for the meteors. The slipway is behind the headland from there, but I had a clear view of the Porthcarrow side and the water between. At about twenty to eleven a small boat with no navigation lights came off the beach below the boatyard and crossed toward the island. I heard the engine faintly — a small one. It went round out of my sight toward the slipway.',
        'I assumed it was Dez coming back from the Ship, which is what it usually is, or Liam. I did not think of Jenna, though I should have; she is the only one who keeps a boat on that side.',
        'I did not see it go back. I was looking up by then. I came in at about half past midnight through the kitchen door and heard Tom laughing on his call upstairs, and I went to bed.',
        'I have known this family eleven years. Morwenna told me at dinner that she had found something in Mark’s partnership papers that she needed to ask a solicitor about and that it had “rather changed the conversation.” She did not say what.'
      ],
      claims: ['On the western headland from 22:15 to about 00:30.', 'Saw an unlit small boat cross from the mainland boatyard at about 22:40.', 'Heard Tom on his call at about 00:30.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'timeline',
      title: 'Tide, causeway and the only ways across',
      summary: 'Coastguard data and a survey of every boat that could have made the crossing.',
      stamp: 'Coastguard',
      recordType: 'Tide and access analysis',
      origin: 'Falmouth Coastguard; MCIT scene survey',
      custodian: 'DI Carrow',
      date: '15 September',
      status: 'Complete',
      sections: [
        { label: 'The water', body: 'Causeway covered 21:10–03:40. High water 00:24 at 6.1 m. Sea state slight. Anyone arriving between 22:30 and 23:30 came by boat; anyone leaving before 03:40 left by boat.' },
        { label: 'Boats on the island', body: 'The RIB “Puffin”: moored off, engine cold, mooring tied in the victim’s distinctive knot, undisturbed. Three sea kayaks: dry, dew intact. Nothing on the island went out.' },
        { label: 'Boats on the mainland', body: 'The Trevail tender: aluminium, flat-bottomed, 4 hp four-stroke outboard — quiet, as Pascoe described. Hull wet, fresh water in the outboard leg, trolley tracks to and from the water. Porthcarrow boatyard reports no other craft moved that night; the harbour master’s CCTV at the yard entrance shows no vehicles after 21:00.' },
        { label: 'The scuffs', body: 'Keel scuffs at the slipway waterline match a flat-bottomed hull, not the RIB. A boat was beached at the ramp.' },
        { label: 'Conclusion', body: 'One boat crossed that night: the mainland tender, from the Trevail boathouse. Beane saw it leave at about 22:40; Pascoe heard it arrive at about 22:45 and leave later. Whoever was in it had access to the boathouse.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'log',
      title: 'Guesthouse router connection log',
      summary: 'Every device on the island network between 21:00 and 03:00, by name.',
      stamp: 'Digital',
      recordType: 'Network log extraction',
      origin: 'Cardew Light router',
      custodian: 'Digital Forensics Unit, Exeter',
      date: '15 September',
      status: 'Complete; log integrity confirmed',
      sections: [
        { label: 'Resident devices', body: '“Tom-iPhone”: connected continuously 21:40–00:10, sustained high data 22:14–23:52 consistent with a video call. “Priya’s iPhone”: connected 21:35–07:10, low data. “Hilary Beane”: connected 00:34–07:20 (she carries her phone but it was out of range on the headland). “Dez laptop”: connected all night. “LiamO”: connected 21:28–07:00, low data from 22:10.' },
        { label: 'The visitor', body: '“Jenna-iPhone” — a device the router has recorded 212 times since March and which Jenna Trevail confirms is her phone — joined the network at 22:48:10 and left at 23:21:40. Its address places it, by signal strength on the slipway access point, within forty metres of the ramp.' },
        { label: 'Range', body: 'The island network does not reach the mainland; the digital unit tested from the Porthcarrow beach and the boathouse and found no signal. A device joins only when it is on or within a few metres of the island.' },
        { label: 'What this fixes', body: 'Jenna Trevail’s phone was on Cardew Island from 22:48 to 23:21. She states she was at home throughout. Tom Trevail’s call ran unbroken through the whole window. Liam Oates’s device went idle at 22:10 and stayed idle — consistent with a man asleep, or a man who left his phone in the tent.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'lab',
      title: 'The drysuit and the shell sand',
      summary: 'Where the sand in the boots came from, and how long the suit had been wet.',
      stamp: 'Laboratory',
      recordType: 'Trace evidence report',
      origin: 'Mainland boathouse drying room',
      custodian: 'Forensic Science Service, Bristol',
      date: '17 September',
      status: 'Complete',
      sections: [
        { label: 'The suit', body: 'A dark neoprene drysuit, women’s medium, Jenna Trevail’s. Found hanging but dripping at 07:30; the interior was still wet. A suit of this type worn on Thursday afternoon and hung in a drying room with its dehumidifier running (it was) would be dry inside within twelve hours. It had been in the water within the previous nine hours.' },
        { label: 'The sand', body: 'Coarse, pale shell-fragment sand in both boots and the seat. The Porthcarrow beach and causeway are fine granite sand. Shell sand of this grade occurs on Cardew Island only in and around the slipway pool, where the tide grinds shell against the rock. The sample matches the pool.' },
        { label: 'Other traces', body: 'A smear of red paint on the right glove consistent with the RIB’s hull or the slipway rail. No blood on the suit; the pool water would account for that.' },
        { label: 'What this corrects', body: 'The account that the suit was wet from a Thursday causeway crossing is not consistent with the suit’s condition or with the sand, which is not causeway sand. The wearer stood in the slipway pool on the night.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'document',
      title: 'The partnership agreement and the Coastline option',
      summary: 'What Morwenna found in Mark’s papers, and what it meant for the sale.',
      stamp: 'Legal',
      recordType: 'Document review',
      origin: 'Victim’s fleece pocket (CS-08); Hollis & Pengelly, solicitors; Coastline Hotels',
      custodian: 'DI Carrow',
      date: '16 September',
      status: 'Reviewed with the family solicitor',
      sections: [
        { label: 'The clause', body: 'Clause 14 of the 2015 partnership agreement, drafted by Mark Trevail without a solicitor: on the death of either partner, that partner’s interest in the lease and business passes to the surviving partner absolutely. Mark’s death in 2018 passed his share to Jenna as his widow under his will — but Clause 14 had already been triggered once and nobody had noticed; Hollis says Jenna arguably inherited by survivorship, not by will, and the clause remains live between the two women.' },
        { label: 'What Morwenna found', body: 'She bracketed Clause 14 and wrote “Ask Hollis about this Mon.” She told Hilary Beane at dinner it had “changed the conversation.” Hollis confirms she rang him on Thursday afternoon to make the Monday appointment and said, “I think Mark’s clause means whichever of us goes first hands the other the island.”' },
        { label: 'The option', body: 'Coastline’s option with Jenna, signed in January, expires 30 September. It is worthless without the whole lease. With Morwenna dead and Clause 14 in force, Jenna holds the whole lease and the option becomes exercisable at £1.4 million.' },
        { label: 'Who knew', body: 'Morwenna, from Thursday. Hollis, from Thursday. Jenna states she had not read Clause 14 in years and did not know what it did. Nair states she had not read the partnership agreement at all. Morwenna’s 22:05 words — “come and say it to my face” — followed a call in which, Jenna says, only the sale was discussed.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'report',
      title: 'Pathology and the boat hook',
      summary: 'Dr Marsh’s findings on the blow, the drowning and the sequence.',
      stamp: 'Pathology',
      recordType: 'Post-mortem report',
      origin: 'Royal Cornwall Hospital mortuary',
      custodian: 'Dr F. Marsh',
      date: '15 September',
      status: 'Complete',
      sections: [
        { label: 'The blow', body: 'A single impact to the right temple from a curved metal object, matching the hook of the blue boat hook. Delivered from the front and slightly above by a right-handed person standing on higher ground — consistent with the ramp. It would have stunned, not killed.' },
        { label: 'The drowning', body: 'Sea water in the lungs; diatoms consistent with the slipway pool. She was alive when she entered the water and did not struggle: dazed or unconscious. Drag marks on the ramp show she was moved into the pool rather than falling.' },
        { label: 'Sequence', body: 'Argument on the ramp (Nair, 22:50); blow; dragged three metres into the pool; drowned within minutes. The attacker then had to leave the island by the boat they came in. Pascoe heard the outboard leave “later”; the router shows Jenna’s phone leaving the network at 23:21.' },
        { label: 'The hook', body: 'A boat hook is not a weapon anyone brings to an argument; it is a thing that lives in a boat. The blue hook came across in the tender, as it always did, and was the nearest heavy object when the argument went wrong. It went into the pool with her because it was dropped, not because it was hidden.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'jenna',
      title: 'Jenna Trevail — messages with Coastline Hotels',
      subtitle: 'Extracted from her handset with consent; conversation with Priya Nair',
      format: 'chat',
      messages: [
        { from: 'Priya → Jenna', side: 'left', text: 'She said no again at dinner. In front of a guest. I fly back tomorrow and the option dies on the 30th. I need something tonight.', time: 'Fri 13 Sep, 21:12' },
        { from: 'Jenna → Priya', side: 'right', text: 'Leave it with me. I’ll ring her.', time: 'Fri 13 Sep, 21:20' },
        { from: 'Jenna → Priya', side: 'right', text: 'She hung up on me. Told me to come and say it to her face.', time: 'Fri 13 Sep, 22:09' },
        { from: 'Priya → Jenna', side: 'left', text: 'Then maybe do that? I’m not here after tomorrow.', time: 'Fri 13 Sep, 22:11' },
        { from: 'Jenna → Priya', side: 'right', text: 'Don’t message me again tonight.', time: 'Fri 13 Sep, 22:14' }
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'pascoe',
      title: 'Dez Pascoe’s ferry book, September',
      subtitle: 'Cash fares pencilled in the margin; the note is Morwenna’s',
      format: 'note',
      messages: [],
      noteText: [
        'Sat 7 — 14 day visitors @ £8 — book shows 9.',
        'In Morwenna’s hand: “Dez — I know. Come and see me end of season, not before. We’ll sort it. You’re not going anywhere. — M.”'
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'oates',
      title: 'Liam Oates — messages with a friend',
      subtitle: 'Extracted with consent',
      format: 'chat',
      messages: [
        { from: 'Liam → Kai', side: 'right', text: 'Last weekend. She won’t put a penny in. Packing up Sunday, back to Newquay.', time: 'Fri 13 Sep, 19:40' },
        { from: 'Kai → Liam', side: 'left', text: 'Thought you two were a thing', time: 'Fri 13 Sep, 19:52' },
        { from: 'Liam → Kai', side: 'right', text: 'Were. She’s married to a rock. Gonna get drunk in the tent and sleep.', time: 'Fri 13 Sep, 20:01' }
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'tom',
      title: 'Tom Trevail — messages with his mother',
      subtitle: 'Extracted with consent; note the timings',
      format: 'chat',
      messages: [
        { from: 'Tom → Mum', side: 'right', text: 'She’s on the warpath about Coastline again. Priya’s here. Don’t ring tonight.', time: 'Fri 13 Sep, 20:30' },
        { from: 'Mum → Tom', side: 'left', text: 'I’ll ring if I want to ring.', time: 'Fri 13 Sep, 20:33' },
        { from: 'Tom → Mum', side: 'right', text: 'Mum where are you. Dez says Morwenna’s dead. Please answer', time: 'Sat 14 Sep, 06:52' },
        { from: 'Mum → Tom', side: 'left', text: 'I’m at home. I’ve been at home. Don’t say anything to anyone until I get there.', time: 'Sat 14 Sep, 06:55' }
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'jenna',
      questions: [
        {
          id: 'Q-jenna-1',
          prompt: 'Your phone joined the island Wi-Fi at 22:48 and left at 23:21. The network does not reach the mainland. You told us you were at home.',
          answer:
            'Then the router is wrong, or someone had my phone, or it connected from — I don’t know how these things work. I was at home. I had the television on. I did not take the tender across in the dark to have the same argument I had already lost on the phone. Tom has my old handset; perhaps it still carries my name. Perhaps Morwenna had my spare in the office. You have a line on a log and you have decided what it means. I have told you where I was and I am not going to change it because a box in a cupboard disagrees with me.'
        },
        {
          id: 'Q-jenna-2',
          prompt: 'The drysuit was wet inside at half seven with slipway shell sand in the boots. The tender was wet with fresh tracks. The blue boat hook from your boathouse was in the pool.',
          answer:
            'The suit was wet from Thursday — the drying room door was open, perhaps, and it did not dry. The sand: I have crossed to that slipway a hundred times this year in that suit; sand gets into boots and stays. The tender — Tom uses it, Dez uses it, half of Porthcarrow knows where the key hangs. And the hook travels in the tender; anyone who took the boat took the hook. Inspector, you are describing my equipment, and yes, it is mine, and it was used. I did not use it. I would like to know who did, because they have made it look very much as if I did, and I can think of one person who wanted my half of that island badly enough.'
        },
        {
          id: 'Q-jenna-3',
          prompt: 'Clause 14. Morwenna found it on Thursday. Did she tell you what it meant?',
          answer:
            'She said on the phone that she had found something in Mark’s papers that meant we were “tied together worse than she thought” and that she was seeing Hollis on Monday. I did not know what she meant. I have not read that agreement since Mark died; I could not bear to. If the clause does what your solicitor says, then yes, I now own the island, and yes, I will sell it, because I have been trying to sell it for five years and I am not going to pretend to grieve for a lump of rock. That is not the same as going there in a boat to make it happen. If I had read the clause I would have known that I did not need to argue with her at all. I only needed to wait.'
        }
      ]
    },
    {
      suspectId: 'pascoe',
      questions: [
        {
          id: 'Q-pascoe-1',
          prompt: 'You could tell the outboard was not Puffin’s from your cottage. Could you tell whose it was?',
          answer:
            'Puffin’s a two-stroke with a knock in it I have been meaning to fix since June. What I heard was a little four-stroke, quiet, running steady, coming in from the Porthcarrow side and cutting at the slipway. There is one four-stroke that size on this stretch and it hangs on the back of the Trevail tender. I did not say so in the morning because I did not want to say it. I have thought about it all day and I am saying it now. It was the tender. I heard it go out again some time after; I had the radio on and I was half asleep. Between the two I heard nothing, and I wish to God I had got up.'
        },
        {
          id: 'Q-pascoe-2',
          prompt: 'Morwenna knew about the ferry money. You say she was going to keep you on. Can you prove that?',
          answer:
            'You have her note in my book. “You’re not going anywhere.” She wrote it a week ago and I have read it every night since. That is the only proof there is and it is enough for me. If she had been going to sack me she would have done it on the spot; she was not a woman who waited to be unkind. She waited to be kind. And Inspector — I was in my cottage with the door open and the radio on, and if I had wanted her in that pool I would not have needed a boat from the mainland or anyone else’s hook. I have the red one in my hand every morning.'
        },
        {
          id: 'Q-pascoe-3',
          prompt: 'The knot on the RIB. Why does it matter?',
          answer:
            'Because it tells you Puffin never moved. Morwenna tied a double round turn with a locking hitch that Mark taught her and nobody else bothers with. It was on the mooring this morning exactly as she tied it at ten when she went down to check. If anyone — me, Liam, the lad — had taken Puffin out to the mainland and back, they would have tied it any old how and I would have known in a second. Nothing left this island last night. Something came to it.'
        }
      ]
    },
    {
      suspectId: 'oates',
      questions: [
        {
          id: 'Q-oates-1',
          prompt: 'You were forty metres from two women shouting and a boat landing. Headphones do not cover that.',
          answer:
            'A bottle of wine and headphones do, if you drink the bottle fast enough, and I did. Look at the router if you want — my phone went quiet at ten past ten and stayed quiet, because I was asleep on top of it. I know how it looks. I had every reason to be angry with her and I was forty metres away. I was also unconscious, and my boat and my suit and my paddles are exactly where I left them with the dew on. I did not kill her and I did not hear her die and the second of those is going to be harder to live with than you think.'
        },
        {
          id: 'Q-oates-2',
          prompt: 'The relationship ended in August when she refused to invest. How did it end?',
          answer:
            'Badly, quietly. I asked her for forty thousand to build a proper centre on the mainland side and run it with her name on it. She laughed — not at me, at the idea of her name on anything in Porthcarrow — and said the island was a guesthouse and not a brand. I said something about her being married to a rock, which I have said to other people since because it was the only good line I had. After that we were polite. She let me keep the rack through September. That is who she was: she would turn you down and then make sure you had somewhere to put your boats.'
        },
        {
          id: 'Q-oates-3',
          prompt: 'You said Jenna crosses in a drysuit when she is angry. When did you last see her do it?',
          answer:
            'Thursday. She came across on the causeway edge about five with the laundry bags on her shoulders and the water at her waist, in that black suit, swearing. She had an argument with Morwenna in the office — about Priya coming, I think — and went back the same way at about six with the tide rising. That is what she does. She hates the tender; it scares her in the dark. So when I tell you I think she came over in the tender on Friday night, I am telling you she was angrier than I have ever seen her, because she would have had to be.'
        }
      ]
    },
    {
      suspectId: 'nair',
      questions: [
        {
          id: 'Q-nair-1',
          prompt: 'You watched a drysuit figure on the ramp and went to bed. You messaged Jenna at 22:11, “then maybe do that.” Did you know she was coming?',
          answer:
            'I did not know. I hoped. I will be honest with you because I think it is the only thing that gets me out of this room: I wanted Jenna to go over there and shout at her, because I thought a family row at eleven at night might produce a signature where a dinner had not. When I saw the drysuit I thought, good, she came, and I went back to my bed because I did not want to be a witness to whatever a Trevail says to a Trevail. I did not imagine for one second it would end with Morwenna in the water. I sell hotels. I am not used to the thing I want actually happening.'
        },
        {
          id: 'Q-nair-2',
          prompt: 'With Morwenna dead and Clause 14 in force, your option is worth £1.4 million to your company. Did you know about the clause?',
          answer:
            'No. Your colleague showed it to me at eight this morning and I read it twice and then I was sick in the sink in Room 3. Our lawyers reviewed the lease, not the partnership agreement; we were buying from both women or from neither. I did not know that one of them dying would hand the other the island. If I had known I would not have come here, because I would have understood what that clause makes me look like. I have never held a boat hook in my life. I have never been in a drysuit. I was in Room 3 with the light on and the router will tell you my phone did not move.'
        },
        {
          id: 'Q-nair-3',
          prompt: 'Describe the figure on the ramp again. Height, build, anything.',
          answer:
            'Dark drysuit, hood up, so no hair. Not tall — shorter than Morwenna, who was tall. Slight. Standing at the top of the ramp where the terrace light reaches, with something long in one hand that I took for a torch or a pole. The other person was below, on the ramp in the dark, and the voice that carried was Morwenna’s. The drysuit figure moved down toward her and out of the light and I heard Morwenna say something like “you can’t make me” — and then I turned away. I have gone over it and it was a woman. I am sure it was a woman.'
        }
      ]
    },
    {
      suspectId: 'tom',
      questions: [
        {
          id: 'Q-tom-1',
          prompt: 'Your mother says you have her old handset and it may still carry her name. Do you?',
          answer:
            'No. She gave me her old phone two years ago and I sold it. The phone the router calls Jenna-iPhone is the one in her pocket right now; she bought it in March and it’s been connecting here every time she comes over to do the books. I know because I set it up for her. I am not going to lie for her about a phone. I lied for her for about four minutes this morning when I told Dez not to ring her, and that is all I have in me. She told me not to say anything to anyone until she got here. I am saying it to you.'
        },
        {
          id: 'Q-tom-2',
          prompt: 'The 22:05 call. What exactly did you hear your aunt say?',
          answer:
            '“Then come and say it to my face.” Hard, the way she said things when she had finished. She slammed the receiver down. I did not hear the other side, but the landline only rings for Mum and the booking agency, and the agency doesn’t call at ten at night. Then I went upstairs and called Ellie and I kept her on the line till nearly midnight because I did not want to be alone in a building where my aunt and my mother were fighting about selling the only place I’ve ever been happy. That sounds dramatic. It is just true.'
        },
        {
          id: 'Q-tom-3',
          prompt: 'You took money from the till. Morwenna knew. Why would she have protected you?',
          answer:
            'Because she protected everyone. Dez and his ferry money. Liam and his rack. Me and the till. She would find out, tell you she knew, and then tell you it would be fine in October. Everyone on this island owed her something and she never collected. Mum thought that was weakness. I think it was the only thing holding the place together. If you want to know who had a reason to want her dead — nobody on the island. We all needed her. The only person who needed her gone was the person who needed her signature and couldn’t get it.'
        }
      ]
    },
    {
      suspectId: 'beane',
      questions: [
        {
          id: 'Q-beane-1',
          prompt: 'You saw the boat leave the mainland at 22:40. How certain are you of the time and the place?',
          answer:
            'Certain of the time to within five minutes; I had just logged a meteor at 22:37 in my notebook and I look at my watch when I write. Certain of the place: the boat came off the beach directly below the Trevail boatyard, where the slip runs down from the boathouse — I know the shoreline there as I know my own street. It showed no lights, which is why I noticed; Dez always runs a light. It was low in the water and quiet. I watched it until the headland hid it. I did not see it return, because by then I was lying on my back with my binoculars on Perseus, which is where I wish I had stayed.'
        },
        {
          id: 'Q-beane-2',
          prompt: 'Morwenna told you at dinner that something in the papers had changed the conversation. What did you take her to mean?',
          answer:
            'I took her to mean that she had found something that gave her leverage over Jenna — that the sale was now even less likely. She was pleased in a tired way. She said, “I think Mark has left us tied together, Hilary, whether we like it or not,” and poured herself more wine. I did not understand that it cut both ways. She did not either, I think. She saw a clause that stopped Jenna selling without her. She did not see a clause that gave Jenna everything if she was not there.'
        },
        {
          id: 'Q-beane-3',
          prompt: 'You have known the family eleven years. Who, in your view, was on that ramp?',
          answer:
            'I am an old woman who looks at the sky, Inspector, not a detective. But I will tell you what I know. Dez would have gone down there with the red hook in his hand and his lights on and everyone would have heard him. Liam sleeps like the dead. Tom cannot lie to save his life. Miss Nair has never set foot in a boat. And Jenna Trevail has crossed that water in the dark in a black suit, angry, more times than she will tell you, and the only boat that moved last night left from under her boathouse. I am sorry. I was fond of her husband.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-sale', label: 'To gain the whole lease and force through the sale that one signature was blocking' },
      { id: 'm-ferry', label: 'To avoid dismissal over undeclared ferry money' },
      { id: 'm-love', label: 'A rejected lover’s anger' },
      { id: 'm-deal', label: 'To close a corporate deal before an option expired' },
      { id: 'm-till', label: 'To cover a theft from the till' }
    ],
    methodOptions: [
      { id: 'h-tender', label: 'Crossed from the mainland in the tender, struck her on the ramp with the boat hook from that boat, and dragged her into the pool to drown' },
      { id: 'h-rib', label: 'Took the island RIB out and back, striking her at the mooring' },
      { id: 'h-kayak', label: 'Paddled a kayak round from the headland and ambushed her' },
      { id: 'h-fall', label: 'She slipped on the ramp checking the mooring and drowned' }
    ],
    selectableEvidenceIds: ['CS-01', 'CS-02', 'CS-03', 'CS-04', 'CS-06', 'CS-07', 'CS-08', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-04', 'WS-06', 'Q-pascoe-1', 'Q-tom-1', 'Q-nair-3'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'jenna',
    motiveOptionId: 'm-sale',
    methodOptionId: 'h-tender',
    decisiveEvidenceIds: ['EV-02', 'EV-03', 'EV-01', 'EV-04', 'CS-02'],
    reveal: 'Jenna Trevail took the tender across the dark water to say it to Morwenna’s face, and when the argument turned on Clause 14, she struck her with the boat hook she had carried up the ramp.',
    reconstruction: [
      'Jenna had wanted off Cardew since the day she married onto it. Coastline’s option would clear her debts and get her inland; Morwenna had blocked it for five years and blocked it again at dinner. At 21:20 Jenna told Priya Nair she would ring. At 22:05 Morwenna hung up on her with “then come and say it to my face.” At 22:11 Nair wrote, “then maybe do that.” Jenna, who hated the tender and the dark, put on her drysuit, launched the boat and crossed without lights.',
      'Hilary Beane saw her leave at 22:40. Dez Pascoe heard the quiet four-stroke arrive at 22:45. Her phone, which had joined the island network two hundred times before, joined it again at 22:48. She beached the tender at the ramp, took the blue boat hook because it is what you carry up a slipway, and found Morwenna at the top with a torch.',
      'The argument Nair heard was about the sale until it was about Mark’s clause. Morwenna had found it on Thursday and read it as a lock: neither could sell without the other. She said so — “you can’t make me” — and may have said the rest, that whichever of them died first handed the other the island. Whether Jenna understood the clause before that moment or in it, the hook came round. One blow to the temple. Morwenna went down on the ramp, and Jenna dragged her three metres into the pool, where the sea did what the hook had not.',
      'She let the hook fall, pushed the tender off, and was back on the mainland side by 23:21 when her phone dropped off the network. She hauled the boat onto its trolley, hung the dripping suit in the drying room with the island’s shell sand in its boots, and went to bed. In the morning she told her son not to say anything until she got there, and told the police she had been at home.'
    ],
    chronology: [
      { time: 'Thu 12 Sep', event: 'Morwenna finds Clause 14, brackets it, rings Hollis for Monday. Jenna wades across to argue about Nair’s visit.', refs: ['EV-04', 'CS-08', 'Q-oates-3'] },
      { time: 'Fri 13 Sep, 20:00', event: 'Morwenna refuses Nair at dinner; tells Beane the papers have changed the conversation.', refs: ['WS-06', 'Q-beane-2'] },
      { time: '21:10', event: 'Causeway covered.', refs: ['CS-03'] },
      { time: '22:05', event: 'Jenna rings; Morwenna: “then come and say it to my face.”', refs: ['WS-05', 'MSG-01'] },
      { time: '22:11–22:14', event: 'Nair: “then maybe do that.” Jenna: “Don’t message me again tonight.”', refs: ['MSG-01'] },
      { time: '22:40', event: 'Unlit tender leaves the Trevail boathouse (Beane).', refs: ['WS-06', 'EV-01'] },
      { time: '22:45–22:48', event: 'Tender beaches at the slipway (Pascoe hears it); Jenna’s phone joins the island Wi-Fi.', refs: ['Q-pascoe-1', 'EV-02', 'CS-04'] },
      { time: '22:50', event: 'Argument on the ramp; Nair sees the drysuit figure with something long in hand.', refs: ['WS-04', 'Q-nair-3'] },
      { time: 'c. 22:55', event: 'Blow with the blue boat hook; body dragged into the pool.', refs: ['EV-05', 'CS-02', 'CS-04'] },
      { time: '23:21', event: 'Jenna’s phone leaves the network; tender departs.', refs: ['EV-02'] },
      { time: '06:40', event: 'Pascoe finds the body and the wrong-coloured hook.', refs: ['WS-02'] },
      { time: '07:30', event: 'Drysuit wet inside with slipway shell sand; tender wet, fresh tracks.', refs: ['CS-07', 'EV-03'] }
    ],
    evidenceChain: [
      { title: 'Opportunity: the only boat that moved', body: 'The causeway was under water. Puffin stayed on Morwenna’s knot; the kayaks kept their dew. The tender from the Trevail boathouse went out and came back, seen leaving by Beane and heard arriving by Pascoe, who knows the engine.', refs: ['EV-01', 'CS-03', 'WS-06', 'Q-pascoe-1', 'Q-pascoe-3'] },
      { title: 'Presence: a phone on an island with no signal', body: 'Jenna-iPhone — her current handset, set up by her son — was on the island network from 22:48 to 23:21. The network does not reach the shore. She says she was at home.', refs: ['EV-02', 'Q-tom-1', 'Q-jenna-1'] },
      { title: 'Trace: the suit and the sand', body: 'Her drysuit was wet inside nine hours later with shell sand that occurs only in the slipway pool, not the causeway she blamed. The blue hook from her boathouse was under the body.', refs: ['EV-03', 'CS-02', 'CS-07'] },
      { title: 'Motive: Clause 14 and the option', body: 'Mark’s survivorship clause handed the whole lease to the survivor. Coastline’s option, worthless on Friday evening, became exercisable at £1.4 million on Saturday morning.', refs: ['EV-04', 'MSG-01'] },
      { title: 'The witness at the window', body: 'A slight woman in a dark drysuit at the top of the ramp with something long in her hand, and Morwenna’s voice saying “you can’t make me.”', refs: ['WS-04', 'Q-nair-3'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Dez Pascoe', body: 'He had the island, the RIB and a reason to fear for his cottage — but the RIB never moved, the hook in the pool was not his, and Morwenna’s own note promised he was going nowhere. His identification of the outboard is the testimony of a man who hoped he was wrong.', refs: ['Q-pascoe-3', 'MSG-02', 'Q-pascoe-1'] },
      { title: 'Liam Oates', body: 'Forty metres from the scene with a motive and no witness to his sleep — but his phone went idle at 22:10 and stayed idle, his kayaks and suit were dry with dew on them, and Nair is sure the figure was a woman.', refs: ['EV-02', 'CS-06', 'Q-nair-3'] },
      { title: 'Priya Nair', body: 'Her company gains most and her message egged Jenna on. But her phone never left the terrace, she has never handled a boat, and she did not know Clause 14 existed until the morning. Wanting a thing is not doing it.', refs: ['EV-02', 'Q-nair-2', 'MSG-01'] },
      { title: 'Tom Trevail', body: 'A steady video stream on the router from 22:14 to 23:52 and Beane hearing him laugh on it at half past midnight. He stole from a till and was forgiven; he lied for his mother for four minutes and stopped.', refs: ['EV-02', 'WS-06', 'Q-tom-1'] },
      { title: 'Hilary Beane', body: 'Alone on a headland with no witness and eleven years of attachment to the place — but she is the one who saw the boat, logged the time against a meteor, and had nothing to gain from any sale or any death.', refs: ['Q-beane-1', 'WS-06'] }
    ],
    redHerringResolutions: [
      { title: 'Pascoe’s undeclared fares', body: 'A real secret, found a week early and already forgiven in Morwenna’s hand. It made him the first person the island suspected and the last person with a reason.', refs: ['MSG-02', 'Q-pascoe-2'] },
      { title: 'The lover in the tent', body: 'Proximity and a rejection looked like means and motive. The dew on the kayaks and the idle phone show a man who did exactly what he told a friend he would do: get drunk and sleep.', refs: ['MSG-03', 'CS-06'] },
      { title: 'Nair’s window', body: 'A witness who watched and went back to bed looked like an accomplice. She was something more ordinary: a dealmaker hoping someone else’s anger would get her a signature.', refs: ['Q-nair-1', 'MSG-01'] }
    ],
    epilogue: 'Jenna Trevail was charged on 18 September. Coastline withdrew its offer the same week. Under the terms of Morwenna’s will, challenged and then settled, the lease passed into a trust with Tom Trevail and Dez Pascoe as its first trustees. Hilary Beane booked for the following September.'
  }
};
