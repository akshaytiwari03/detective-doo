import type { MysteryCase } from '../types/case';

export const drownedVine: MysteryCase = {
  id: 'c08',
  slug: 'vintage-of-the-drowned-vine',
  title: 'Vintage of the Drowned Vine',
  tagline: 'A winery matriarch is found in a fermentation tank the morning after vintage. The tank’s own gauges wrote down when she went in.',
  era: 'Barossa Valley, South Australia — March, present day',
  difficulty: 'intermediate',
  estimatedMinutes: 40,
  dossier: {
    reference: 'South Australia Police — Barossa CIB',
    caseNumber: 'SAPOL-0329-77',
    victim: 'Rosalind “Roz” Keller, age 67. Owner and matriarch, Kellerhof Wines, Tanunda.',
    location: 'Open-top fermenter No. 3, the winery cellar, Kellerhof Wines.',
    incidentDate: 'Night of Friday 28–29 March, between about 23:30 and 00:30, during the first night of vintage.',
    discoveryTime: '06:05 Saturday, by the cellar hand starting the morning pump-over.',
    causeOfDeath: 'Asphyxiation by carbon dioxide at the surface of a fermenting tank, with drowning in grape must. A head injury occurred before she entered the tank. The ferment produces a lethal blanket of CO₂.',
    leadInvestigator: 'Detective Senior Constable Priya Anand, Barossa CIB.',
    assisting: 'Forensic pathologist, Adelaide; SafeWork SA (confined-space data); the winery’s own tank-monitoring system.',
    status: 'OPEN. Vintage night: six people on the property and the cellar running on automatic. The fermenters are wired with temperature and density probes that log to a computer; the gantry over the tanks has a load-cell; the cellar has one CCTV camera on the door.',
    synopsis:
      'The first night of vintage, Kellerhof’s open-top fermenters were filled with crushed shiraz and beginning to ferment, throwing off carbon dioxide that pools above the must — a known confined-space killer. Rosalind Keller, who ran the winery with an iron hand, was found at 6 a.m. floating in Fermenter 3. She had a head wound sustained before she went in. The tank-monitoring computer logs temperature and density every five minutes; the gantry has a load-cell that records weight; the cellar door has CCTV. Roz had announced that day that she was changing her will and selling the old vineyard her son wanted to keep.',
    backgroundLocation:
      'Kellerhof is a century-old Barossa winery: a stone cellar with a row of open-top concrete fermenters, a gantry crane on rails above them for pumping over and plunging the cap, a lab, a barrel hall, and the family house up the hill. During vintage the ferments run day and night; a “pump-over” circulates juice over the floating cap of skins. Each fermenter has a temperature probe and a density (Baumé) probe logging to the cellar computer every five minutes. The gantry carries a load-cell. One CCTV camera covers the cellar roller door. CO₂ from active ferment pools above the must and at floor level in the pits.',
    backgroundGathering:
      'Vintage began that day. On the property overnight: Roz’s son (the vineyard manager), her daughter (the business manager), the chief winemaker, a visiting wine buyer staying in the cottage, the cellar hand, and a neighbour-grower delivering fruit late. At a tense family dinner Roz said she would sign a new will on Monday and had accepted an offer for the old “Drei Brüder” vineyard block. Her son had planted his life in that block.'
  },
  suspects: [
    {
      id: 'prosser',
      name: 'Dale Prosser',
      age: 52,
      role: 'Chief winemaker',
      hue: 25,
      bio: 'Prosser has made Kellerhof’s wine for eighteen years and built its reputation, but the labels say “Keller” and the acclaim goes to Roz. He had been promised, for years, a share of the business and a wine under his own name; Roz had just told him she was selling Drei Brüder — the source of his flagship wine — and that his own-label plan was “off the table.” He knows the cellar, the ferments and the CO₂ danger better than anyone alive, and he logged the tanks himself that night.',
      stakes: 'Eighteen years of unacknowledged work and a signature wine about to be sold out from under him.',
      openQuestion: 'He entered the tank readings by hand. The automatic log tells a different story.'
    },
    {
      id: 'mathias',
      name: 'Mathias Keller',
      age: 39,
      role: 'Son; vineyard manager',
      hue: 160,
      bio: 'Mathias runs the vineyards and has spent fifteen years restoring the old Drei Brüder block his great-grandfather planted — the block his mother announced she was selling. He is passionate, hot-tempered and in debt to the bank over machinery his mother refused to fund. He was out in the vineyard until late bringing in the last fruit, then in the cellar “checking the ferments.” He found his mother had changed the locks on the office that afternoon.',
      stakes: 'The vineyard block he has given his life to, sold out from under him.',
      openQuestion: 'He was in the cellar near midnight. The CCTV says when.'
    },
    {
      id: 'ingrid',
      name: 'Ingrid Keller',
      age: 43,
      role: 'Daughter; business manager',
      hue: 320,
      bio: 'Ingrid keeps the books and has been quietly steering the winery toward the sale her brother opposes, because the business is deeper in debt than the family admits. She stood to benefit from both the sale of Drei Brüder and a new will that, rumour said, favoured her over Mathias. She was in the winery office that evening doing vintage paperwork and had argued with her mother about money. She does not go into the cellar at night; she dislikes the smell and the CO₂.',
      stakes: 'A failing balance sheet that only a sale can fix, and a will that may favour her.',
      openQuestion: 'She controls the books. What do they show that the family does not?'
    },
    {
      id: 'okafor',
      name: 'Blessing Okafor',
      age: 34,
      role: 'Wine buyer; guest in the cottage',
      hue: 215,
      bio: 'Okafor buys for a large export group and came to taste the new vintage and negotiate a long-term contract that Kellerhof desperately needs. The contract depends on Drei Brüder fruit continuing — the very block Roz was selling to a rival. A sale to the rival would kill Okafor’s contract and the buyer’s plans. Okafor walked the property late “to clear her head” and knows the cellar from the day’s tour.',
      stakes: 'An export contract that the sale of Drei Brüder would destroy.',
      openQuestion: 'She toured the cellar by day. Was she there by night?'
    },
    {
      id: 'tran',
      name: 'Kevin Tran',
      age: 23,
      role: 'Cellar hand',
      hue: 60,
      bio: 'Tran is a seasonal cellar hand on his second vintage, doing the heavy work — plunging, pumping, hosing — under Prosser’s direction. He found the body. He had been caught the week before siphoning wine for a mate and Roz had threatened to sack him and report him. He slept in the cellar crib room on vintage nights to mind the ferments and do the night pump-overs on Prosser’s schedule. He is scared of the tanks and of losing the job.',
      stakes: 'A job and a clean record, both of which Roz had threatened.',
      openQuestion: 'He was asleep in the crib room twenty metres from the tank. Was he?'
    },
    {
      id: 'wagner',
      name: 'Otto Wagner',
      age: 61,
      role: 'Neighbour; grape grower',
      hue: 275,
      bio: 'Wagner grows fruit on the block adjoining Drei Brüder and has wanted to buy the Kellers’ old block for twenty years — and Roz had, that very day, agreed to sell it to him, not to his rival. His late fruit delivery brought him to the Kellerhof cellar near midnight. He and Roz had been friends and adversaries for forty years. A completed sale to him depended on Roz living to sign on Monday; a changed mind would ruin him.',
      stakes: 'The block he has coveted for twenty years, promised that day, unsigned until Monday.',
      openQuestion: 'He delivered fruit near midnight. The weighbridge and the gantry know when.'
    }
  ],
  story: [
    {
      paragraphs: [
        'Vintage is the one time of year a winery does not sleep. For six weeks in autumn the fruit comes in faster than it can be processed, the crushers run past midnight, and the open-top fermenters fill with purple must that begins, within hours, to boil quietly with its own yeast and throw off carbon dioxide — invisible, heavier than air, and lethal. Every cellar hand in the Barossa is taught it on day one: the gas pools above the must and in the pits, and a person who leans too far over a ferment can be unconscious before they know it and dead before anyone finds them.',
        'Kellerhof was a century old and famous, and the fame belonged to Rosalind Keller, who had run it for forty years with a tongue that could strip paint and a palate the whole valley respected. The wine was made by Dale Prosser, who had made it for eighteen years and whose name appeared nowhere on the label. The vineyards were run by her son Mathias, who had spent fifteen years bringing the old Drei Brüder block — three hectares of gnarled ancient shiraz his great-grandfather had planted — back from near death, and whose flagship fruit it was. The books were kept by her daughter Ingrid, who knew, as the others did not, exactly how much the bank was owed.',
        'On the first day of vintage Roz gathered the family at dinner and told them three things. She was changing her will on Monday. She had accepted Otto Wagner’s long-standing offer for the Drei Brüder block. And Dale Prosser’s own-label wine, the thing he had been promised for a decade, was off the table, because the fruit for it was being sold. Then she went down to the cellar, as she did every vintage night, to look at her ferments.'
      ]
    },
    {
      paragraphs: [
        'The cellar that night was a working machine. The row of open-top fermenters stood full and warm, the caps of floating skins rising on the gas, the air above them thick with CO₂. A gantry crane ran on rails the length of the tanks, carrying the pump-over hoses and a load-cell that weighed whatever it lifted. A computer in the corner logged the temperature and the density of each ferment every five minutes, a line of numbers climbing through the night. One camera watched the roller door. Kevin Tran, the cellar hand, had a bed in the crib room to mind the ferments and do the night pump-overs on Prosser’s written schedule.',
        'People came and went. Mathias was out in the dark on the harvester until late, bringing in the last of a block before rain, and came into the cellar, the CCTV shows, at 11:10, stayed nine minutes, and left. Otto Wagner’s truck crossed the weighbridge with a late load at 11:25 and he tipped it and talked to nobody and left by 11:50, the weighbridge and the gate camera agree. Blessing Okafor walked the property “to clear her head” and her phone put her near the cellar about eleven. Ingrid was in the office. Kevin Tran was in the crib room, or says he was.',
        'Dale Prosser was in the cellar through the evening, logging the tanks. The computer logged them too, automatically, every five minutes. Prosser also kept the old handwritten tank book, as he had for eighteen years, writing the readings in his own hand. On the night of the twenty-eighth his handwritten book and the computer agree until 11:30, and then they do not.',
        'Rosalind Keller came down to the cellar at about half past eleven. She was last seen alive by nobody. At six the next morning Kevin Tran came out of the crib room to start the first pump-over and found the gantry parked over Fermenter 3 and his employer floating face-up in the purple must, her reading glasses on the catwalk rail and a smear of blood on the steel edge of the tank.'
      ]
    },
    {
      paragraphs: [
        'Detective Senior Constable Priya Anand arrived from Nuriootpa at seven. SafeWork SA came with gas meters and confirmed what everyone already knew: the air above Fermenter 3 was thick with CO₂, and anyone who went into that tank, or far enough over it, without air would not come out. The easy answer was there for the taking — a careless old woman, a known killer gas, a confined-space tragedy of the kind that happens in the valley every few years.',
        'But the pathologist found a blow to the back of Roz Keller’s head that happened before she entered the tank, from a hard edge, and no way for a person to strike the back of their own head and then climb into a fermenter. And the tank behaved strangely in the night. The gantry, which hangs over the tanks and carries the load-cell, had been moved over Fermenter 3 at about midnight and had lifted something heavy for ninety seconds, according to the load-cell log, at a time when the pump-over schedule called for nothing. And the computer’s automatic temperature log for Fermenter 3 showed a sharp dip at eleven forty — the signature of something large and cool going into a warm ferment — which the handwritten book, in Prosser’s hand, did not record.',
        'Anand stood on the catwalk over the drowned vine and understood that the cellar had been writing down the murder in three different inks all night, and that she had only to make them agree.'
      ]
    }
  ],
  crimeSceneFindings: [
    {
      id: 'CS-01',
      icon: 'body',
      heading: 'The body in Fermenter 3',
      kind: 'tested',
      body: 'Roz Keller floated face-up in the fermenting must. The pathologist finds CO₂ asphyxiation and drowning as the cause of death, and a blow to the back of the head delivered before immersion, from a hard straight edge. She could not have struck the back of her own head and then entered the tank. Time of death: 23:30–00:30. Reading glasses on the catwalk rail; blood smear on the tank’s steel lip.'
    },
    {
      id: 'CS-02',
      icon: 'log',
      heading: 'The automatic tank log, Fermenter 3',
      kind: 'found',
      body: 'The cellar computer logs each fermenter’s temperature and density every five minutes. Fermenter 3 shows a steady climb until 23:40, then a sharp temperature dip of 1.8°C at 23:40–23:45 — the signature of a large, cooler mass entering a warm ferment — then recovery. No pump-over was scheduled. The density probe shows a disturbance at the same time, consistent with the cap being broken by something entering.'
    },
    {
      id: 'CS-03',
      icon: 'tool',
      heading: 'The gantry load-cell log',
      kind: 'found',
      body: 'The gantry crane over the tanks carries a load-cell that records weight lifted, time-stamped. At 23:58 the gantry was positioned over Fermenter 3 (rail position encoder) and lifted a load of about 70 kg for 90 seconds, then released it. The scheduled pump-overs that night were at 22:00 and 02:00; nothing was scheduled at 23:58. 70 kg is consistent with a human body.'
    },
    {
      id: 'CS-04',
      icon: 'document',
      heading: 'Prosser’s handwritten tank book',
      kind: 'found',
      body: 'The chief winemaker’s handwritten log, kept for eighteen years. For 28 March it records Fermenter 3 readings at 23:30 and 23:45 that are smooth and rising — no dip, no disturbance — in Prosser’s hand. The handwritten 23:45 figure contradicts the automatic log’s recorded dip at the same minute. One of the two records of the same tank at the same time is false.'
    },
    {
      id: 'CS-05',
      icon: 'door',
      heading: 'The cellar door CCTV',
      kind: 'found',
      body: 'One camera covers the roller door. For the night: 22:00 Prosser in; 23:10 Mathias in, 23:19 out; 23:28 Roz in (alive, alone); 23:25 Prosser still inside (not seen leaving). The door is the only entrance the camera covers, but the cellar also connects to the lab and crib room internally and has a second roller door to the crush pad, not covered. Prosser is not seen leaving before the body is found.'
    },
    {
      id: 'CS-06',
      icon: 'weather',
      heading: 'Weighbridge and gate',
      kind: 'found',
      body: 'Wagner’s truck: weighbridge in 23:25, out 23:48; gate camera out 23:50. Mathias’s harvester logged in the Drei Brüder block until 23:05 (GPS). Okafor’s phone pinged the cottage Wi-Fi until 22:50, then the cellar-area access point 23:00–23:15, then the cottage again from 23:20. The weighbridge and gate are independent of the cellar systems.'
    },
    {
      id: 'CS-07',
      icon: 'trace',
      heading: 'The blood and the catwalk',
      kind: 'tested',
      body: 'Blood on the steel lip of Fermenter 3 matches the victim and sits at the height of the catwalk rail — consistent with a head struck against the lip, not a fall from the catwalk, which is above it. A plunging pole (a long tool for breaking the cap) was found laid along the catwalk; its end bears must and a trace of the victim’s blood. CO₂ at the surface measured lethal by SafeWork SA.'
    },
    {
      id: 'CS-08',
      icon: 'negative',
      heading: 'What the systems rule out',
      kind: 'inference',
      body: 'The load-cell lift at 23:58 requires someone who can operate the gantry — a cellar skill. The dip at 23:40 and the lift at 23:58 bracket the time of death. Wagner left at 23:50; the lift is at 23:58. Okafor was back at the cottage by 23:20. Mathias left at 23:19. The person who used the gantry to put a body in a tank was in the cellar between 23:40 and midnight — and did not appear on the door camera leaving.'
    }
  ],
  witnessStatements: [
    {
      id: 'WS-01',
      suspectId: 'prosser',
      synopsis: 'I logged the tanks and went to the crib room about half eleven. Roz was alive when I left the cellar floor.',
      interviewedAt: '29 March, 09:00',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I was in the cellar from ten doing the vintage logs. Roz came down about half past eleven to look at the ferments, as she did every night. We did not speak much; after dinner there was not much to say. I finished my round, wrote up the book, and went to lie down in the office about twenty to twelve. I did not do the midnight gantry; there was no midnight gantry scheduled.',
        'The automatic log and my book should agree. If they do not at eleven forty-five, then a probe glitched — they do, the cables get coated in must. My handwritten figure is what I read off the gauge with my own eyes. I have kept that book eighteen years.',
        'I knew about the sale and the own-label being killed. I had given this place eighteen years and my name is on nothing and now the fruit I built my wine on was being sold to Otto Wagner. I was angry. I told Roz so at dinner, in front of everyone. Being angry at dinner is not the same as what happened in that tank.',
        'The CO₂ over a ferment will kill you in a minute. Everybody in this cellar knows that. It is the easiest way in the world to make a murder look like an accident, which is exactly why you should look at who knew the gas and who knew the gantry — and that is everyone who works here, not only me.'
      ],
      claims: ['In the cellar logging tanks from 22:00; to the office about 23:40.', 'Roz alive when he left the cellar floor.', 'Did not operate the gantry at midnight; attributes the log conflict to a probe glitch.']
    },
    {
      id: 'WS-02',
      suspectId: 'mathias',
      synopsis: 'I was on the harvester till eleven, came in to check the ferments, and left. I never saw my mother in the cellar.',
      interviewedAt: '29 March, 10:30',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I was harvesting Drei Brüder until about five past eleven — the GPS on the harvester will tell you — because rain was forecast and I was not going to lose that fruit after fifteen years, whatever she did with the block. I came into the cellar about ten past, checked my ferments were not getting too hot, and left about twenty past. My mother was not there then; Dale was, at the computer.',
        'She told us at dinner she was selling Drei Brüder to Otto and cutting me out of the will. Fifteen years I spent on those vines. I planted some of them myself. I shouted at her and I left the table and I went and sat on the harvester in the dark and brought in the fruit, because that is what I do when I cannot stand to be in the house. I did not come back to the cellar after twenty past.',
        'The office locks — she changed them that afternoon, shut me out of the business records. I don’t know what she didn’t want me to see. Ask Ingrid; Ingrid knows the money.',
        'I can run the gantry; everyone here can. But the camera shows me leaving at nineteen past, and the tank did its thing at forty, and the lift was at eight to twelve, and by then I was back on the harvester finishing the row. The harvester knows where I was.'
      ],
      claims: ['Harvesting Drei Brüder until about 23:05 (GPS); in the cellar 23:10–23:19 (CCTV).', 'Did not see his mother in the cellar; left at 23:19.', 'Back on the harvester after 23:20.']
    },
    {
      id: 'WS-03',
      suspectId: 'ingrid',
      synopsis: 'I was in the office with the books. I don’t go in the cellar at night. Mum and I argued about money, not the will.',
      interviewedAt: '29 March, 11:30',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I was in the winery office doing vintage intake paperwork from about nine until past midnight. The office is up near the house, not in the cellar; I do not go into the cellar during vintage because the gas gives me headaches and I am no use down there. The office computer will show me logging intake dockets through the evening.',
        'Mum and I argued, yes, but about the overdraft, not the will. The business is in more trouble than the family knows — we owe the bank more than Drei Brüder is worth, and selling the block to Otto was the only thing keeping us afloat. I supported the sale. A changed will that favoured me? I had heard the rumour too. I did not ask her to make it. I did not need it; I needed the sale, and the sale needed her alive to sign on Monday.',
        'Mathias is heartbroken about the block and I am sorry for him, but somebody had to keep the lights on, and it was never going to be him or Dale, who both think wine is made by love and not by money.',
        'I benefit from the sale, which cannot happen now until the estate is settled, which could take a year, during which the bank may foreclose. Her death is the worst thing that could happen to the business I have been trying to save. Please understand that.'
      ],
      claims: ['In the winery office (near the house) from about 21:00 to past midnight.', 'Does not enter the cellar at night.', 'Argued with her mother about the overdraft; supported the sale.']
    },
    {
      id: 'WS-04',
      suspectId: 'okafor',
      synopsis: 'I walked the property to clear my head, I was near the cellar about eleven, and I went back to the cottage.',
      interviewedAt: '29 March, 13:00',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I came to taste the new vintage and to finalise an export contract that this winery badly needs — a contract built on the Drei Brüder fruit. When I heard at dinner that Roz was selling the block to a neighbour who would not supply me, I knew the contract was dead, and I was upset, and I walked the property in the dark to think about how to tell my board I had wasted the trip.',
        'My walk took me near the cellar about eleven; my phone will show it, I suppose. I did not go inside. I looked at the lit doorway and the gantry and I thought about the wine I would not be buying, and I walked back to the cottage. I was there from about twenty past eleven and did not go out again.',
        'The sale of Drei Brüder killed my contract whether Roz lived or died. Her death does not save it; it just means I now negotiate with an estate instead of a person, which is worse. I had no reason to want her gone. I had a reason to want her to change her mind, which is a different thing.',
        'I toured the cellar by day and I know the ferments are dangerous. I am a wine buyer. I do not know how to work a gantry crane and I did not go into that cellar at night.'
      ],
      claims: ['Walked near the cellar about 23:00 (phone); did not enter.', 'Back at the cottage from about 23:20.', 'The Drei Brüder sale killed her contract regardless of the death.']
    },
    {
      id: 'WS-05',
      suspectId: 'tran',
      synopsis: 'I was asleep in the crib room. I did the ten o’clock pump-over and set the two a.m. alarm. I found her at six.',
      interviewedAt: '29 March, 07:30',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I sleep in the crib room on vintage nights to do the night pump-overs on Dale’s schedule. I did the ten o’clock one, logged it, set my alarm for the two a.m., and went to sleep. The crib room is off the lab, twenty metres from the tanks, with the door shut because of the gas. I didn’t hear anything. The ferments are loud — they hiss and bubble all night.',
        'My two a.m. alarm went off and I got up and did the pump-over on tanks one and two but not three, because the gantry was parked over three and I thought Dale had moved it for a reason and I didn’t want to touch it. I should have looked. I didn’t want to lean over three in the dark with the gas.',
        'At six I came out to start the morning round and the gantry was still over three and I looked and she was there. I rang triple zero and then I rang Dale in the office.',
        'Roz caught me the week before taking a couple of bottles for a mate and she went crook and said she’d sack me and call the police. I was terrified of her. But terrified isn’t the same as — I was asleep. I do the heavy work here; I don’t even like going near the open tanks.'
      ],
      claims: ['Did the 22:00 pump-over; asleep in the crib room from about 22:30.', 'At 02:00 skipped Fermenter 3 because the gantry was parked over it.', 'Found the body at 06:05.']
    },
    {
      id: 'WS-06',
      suspectId: 'wagner',
      synopsis: 'I tipped my late load, I didn’t see Roz, and I left before midnight. She was going to sign the block to me on Monday.',
      interviewedAt: '29 March, 14:00',
      interviewer: 'DSC Anand',
      paragraphs: [
        'I had a late load of my own fruit to deliver before the rain. I crossed the weighbridge at about twenty-five past eleven, tipped it on the crush pad, and left about ten to twelve. The weighbridge and the gate have the times. I did not go into the cellar; I tipped on the pad, which is outside, and I left.',
        'Roz agreed that afternoon to sell me the Drei Brüder block. Twenty years I have wanted it; it adjoins mine and it is the best dirt in the district. We shook on it and she said Monday with the solicitor. I did not see her that night and I did not need to; the deal was done bar the signing.',
        'And that is exactly why I am the last man who wanted her dead, Detective. A handshake is not a contract. She was to sign on Monday. Dead, she signs nothing, and the block goes into an estate that her son — who hates the sale — will tie up for years or break. Her death costs me the thing I have waited twenty years for. I needed Roz Keller alive until Monday more than anyone on this property.',
        'I have known that family forty years. I can tip a truck. I cannot work their gantry and I was not in their cellar.'
      ],
      claims: ['Weighbridge 23:25, gate out 23:50; tipped on the outside crush pad.', 'Did not enter the cellar or see Roz.', 'Roz had agreed that day to sell him Drei Brüder, to sign Monday.']
    }
  ],
  evidenceFiles: [
    {
      id: 'EV-01',
      icon: 'timeline',
      title: 'The three logs of Fermenter 3',
      summary: 'Automatic probe, gantry load-cell and handwritten book, side by side.',
      stamp: 'Technical',
      recordType: 'Instrument record comparison',
      origin: 'Cellar computer; gantry load-cell; Prosser’s tank book',
      custodian: 'DSC Anand; winery systems technician',
      date: '30 March',
      status: 'Complete',
      sections: [
        { label: 'Automatic probe', body: 'Fermenter 3 temperature climbs steadily to 23:40, then dips 1.8°C over five minutes (a large cooler mass entering), then recovers. Density probe shows the cap broken at the same time. Logged automatically every five minutes; no manual entry possible.' },
        { label: 'Gantry load-cell', body: 'At 23:58 the gantry is at Fermenter 3 (rail encoder) and lifts ~70 kg for 90 seconds, then releases. No pump-over scheduled. Operating the gantry requires the pendant control and cellar knowledge.' },
        { label: 'Handwritten book', body: 'Prosser’s book records smooth, rising 23:30 and 23:45 readings for Fermenter 3 — no dip, no disturbance — in his hand. His 23:45 figure directly contradicts the automatic dip at 23:40–23:45.' },
        { label: 'The conflict', body: 'The automatic log cannot be edited and shows a body-sized mass entering the tank at 23:40; the load-cell shows the gantry handling a body-weight load at 23:58; the handwritten book, alone, says nothing happened. The only false record is the one a human wrote.' },
        { label: 'Conclusion', body: 'Someone struck Roz at the catwalk, put her into Fermenter 3 at about 23:40 (the dip), used the gantry at 23:58 to settle or submerge the body, and then falsified the handwritten book to show a quiet tank. The falsifier is the keeper of the book.' }
      ]
    },
    {
      id: 'EV-02',
      icon: 'report',
      title: 'Pathology and the plunging pole',
      summary: 'The blow, the sequence, and the tool that struck it.',
      stamp: 'Pathology',
      recordType: 'Post-mortem and trace report',
      origin: 'Adelaide forensic pathology; cellar catwalk',
      custodian: 'Forensic pathologist',
      date: '30 March',
      status: 'Complete',
      sections: [
        { label: 'The blow', body: 'A single impact to the back of the head from a hard straight edge, delivered before immersion, hard enough to stun. Consistent with the steel lip of the tank or the plunging pole.' },
        { label: 'The pole', body: 'A long plunging pole on the catwalk bears must and a trace of the victim’s blood at its end. It is a two-handed cellar tool. Either she was struck with the pole, or her head was driven against the lip; both require an attacker on the catwalk with her.' },
        { label: 'Sequence', body: 'Struck at the catwalk (blood on the lip, glasses on the rail), then into the tank while stunned, where CO₂ and must completed it. The dip at 23:40 marks entry; the load-cell at 23:58 marks the gantry handling the body.' },
        { label: 'Not an accident', body: 'A person cannot strike the back of their own head and then climb into a fermenter, nor operate the gantry on themselves. The confined-space “accident” is staged by the blow and contradicted by the gantry.' }
      ]
    },
    {
      id: 'EV-03',
      icon: 'document',
      title: 'The will, the sale and the own-label promise',
      summary: 'What Roz announced, who it hurt, and what was signed.',
      stamp: 'Legal',
      recordType: 'Document review',
      origin: 'Family solicitor; Roz’s desk; Prosser’s file',
      custodian: 'DSC Anand',
      date: '31 March',
      status: 'Reviewed',
      sections: [
        { label: 'The will', body: 'Roz’s existing will divides the estate between Mathias and Ingrid. A draft new will, unsigned, on her desk, leaves the business to Ingrid and a cash legacy to Mathias — appointment Monday to sign. Her death leaves the old will in force; the new one never takes effect.' },
        { label: 'The sale', body: 'A heads-of-agreement to sell Drei Brüder to Wagner, initialled by both that afternoon, to be formalised Monday. Unsigned, it is unenforceable; her death voids it pending the estate.' },
        { label: 'The own-label promise', body: 'In Prosser’s personnel file, a letter from Roz dated five years ago promising him “a wine under your own name from the Drei Brüder fruit when the time is right.” On 28 March she told him, in writing (a note on his tank book), that the time would never come: the fruit was sold. The note survives.' },
        { label: 'Who gains, who loses', body: 'Mathias: the old will keeps him a half-owner and the block in the family (the sale voided) — he gains by the death. Ingrid: loses the sale and the favourable will; the business worsens. Wagner: loses the block. Okafor: loses the contract. Prosser: the own-label dies with the fruit either way — but the man who promised and then broke it is dead.' }
      ]
    },
    {
      id: 'EV-04',
      icon: 'drawing',
      title: 'Who can work the gantry, and who was where',
      summary: 'Cellar skills matched against the night’s movements.',
      stamp: 'Compiled',
      recordType: 'Access and movement analysis',
      origin: 'CCTV; weighbridge; GPS; phone; interviews',
      custodian: 'DSC Anand',
      date: '31 March',
      status: 'Verified where marked',
      sections: [
        { label: 'Gantry operation', body: 'Requires the pendant control and practice. Prosser and Tran operate it daily. Mathias can. Ingrid, Okafor and Wagner cannot (confirmed: Ingrid avoids the cellar; Okafor is a buyer; Wagner tips on the pad). A gantry lift of a body at 23:58 needs a competent operator present.' },
        { label: 'Mathias', body: 'Cellar 23:10–23:19 (CCTV, verified); harvester GPS logs him back in the block from 23:24 cutting the row until 00:40 (verified). He left the cellar before the 23:40 dip and was on the harvester at the 23:58 lift.' },
        { label: 'Wagner', body: 'Weighbridge/gate place him tipping on the outside pad 23:25–23:50 (verified). He left eight minutes before the gantry lift and cannot operate it.' },
        { label: 'Okafor', body: 'Phone at the cottage from 23:20 (verified); cannot operate the gantry.' },
        { label: 'Ingrid', body: 'Office computer logs intake dockets at 23:12, 23:41, 00:05 (verified) from the office terminal near the house, not the cellar. Cannot/does not operate the gantry.' },
        { label: 'Tran', body: 'Crib room; claims asleep from 22:30. No independent confirmation. Can operate the gantry.' },
        { label: 'Prosser', body: 'In the cellar from 22:00; not seen leaving on the door camera before the body is found. Operates the gantry daily. Keeps the handwritten book that alone denies the tank disturbance.' }
      ]
    },
    {
      id: 'EV-05',
      icon: 'ledger',
      title: 'The handwriting and timing of the tank book',
      summary: 'When Prosser’s 23:45 entry was actually written.',
      stamp: 'Examined',
      recordType: 'Document examination',
      origin: 'Prosser’s tank book',
      custodian: 'Document examiner, SAPOL',
      date: '01 April',
      status: 'Complete',
      sections: [
        { label: 'The entries', body: 'The 28 March entries are in Prosser’s hand throughout. The 23:30 and 23:45 Fermenter 3 figures are written in the same ink and pressure as the surrounding lines — no sign of later insertion between other entries.' },
        { label: 'The contradiction', body: 'The 23:45 figure is a smooth continuation of the rising curve, with no dip. The automatic probe, which cannot be edited, records a 1.8°C dip at exactly 23:40–23:45. Both describe Fermenter 3 at the same minute. They cannot both be true.' },
        { label: 'Which is false', body: 'The probe is a sealed instrument logging to a computer with a verified clock; the figure is impossible to fake without access to the raw data store, which only the systems technician has, and which shows no tampering. The handwritten figure is the one a human chose. It was written to say the tank was undisturbed when the probe says a body went in.' },
        { label: 'Why it matters', body: 'A false 23:45 entry is not a glitch; it is an account. The only reason to write that Fermenter 3 was quiet at 23:45 is to pre-empt the question of what entered it at 23:40 — a question only the person who put something in would think to answer in advance.' }
      ]
    }
  ],
  communications: [
    {
      id: 'MSG-01',
      suspectId: 'prosser',
      title: 'Roz’s note on Prosser’s tank book',
      subtitle: 'Written on the inside cover, dated 28 March',
      format: 'note',
      messages: [],
      noteText: [
        'Dale — the Drei Brüder block is going to Otto. That means no own-label; there is no fruit for it and there never will be. I know I promised you years ago. Things change. You are the best winemaker in the valley and you will make Kellerhof wine, which is more than most men get. Don’t sulk. — R.'
      ]
    },
    {
      id: 'MSG-02',
      suspectId: 'prosser',
      title: 'Prosser’s messages to a wine-industry contact',
      subtitle: 'Extracted with consent',
      format: 'chat',
      messages: [
        { from: 'Prosser → Contact', side: 'right', text: 'Been talking to those investors about my own label for a year. Finally close. All built on the old-vine Drei Brüder fruit.', time: 'Mon 24 Mar, 19:00' },
        { from: 'Contact → Prosser', side: 'left', text: 'Big news mate. That fruit is your whole story. Lock it in.', time: 'Mon 24 Mar, 19:10' },
        { from: 'Prosser → Contact', side: 'right', text: 'She’s selling the block. Out of nowhere. Everything I’ve built for eighteen years and she sells it to the neighbour over dinner. I can’t do this anymore.', time: 'Fri 28 Mar, 20:15' }
      ]
    },
    {
      id: 'MSG-03',
      suspectId: 'mathias',
      title: 'Mathias’s messages with the bank',
      subtitle: 'Extracted with consent',
      format: 'chat',
      messages: [
        { from: 'Bank → Mathias', side: 'left', text: 'Mr Keller, the machinery loan needs a guarantor or repayment by April 15. Has your mother agreed to guarantee?', time: 'Thu 27 Mar, 10:00' },
        { from: 'Mathias → Bank', side: 'right', text: 'She won’t. I’ll sort it. Don’t call the house.', time: 'Thu 27 Mar, 10:30' }
      ]
    },
    {
      id: 'MSG-04',
      suspectId: 'ingrid',
      title: 'Ingrid’s email to the bank manager',
      subtitle: 'From the office terminal, 28 March',
      format: 'note',
      messages: [],
      noteText: [
        '(28 March, 11:50 p.m., from the office terminal) David — confirming the Drei Brüder sale to Wagner is agreed in principle, signing Monday, which clears the seasonal overdraft. Please hold any action until then. I’ve attached tonight’s intake dockets. — Ingrid'
      ]
    }
  ],
  interrogations: [
    {
      suspectId: 'prosser',
      questions: [
        {
          id: 'Q-prosser-1',
          prompt: 'The probe logged a body-sized mass entering Fermenter 3 at 23:40. Your handwritten book says the tank was quiet at 23:45. Why does your book disagree with the probe?',
          answer:
            'Because probes glitch, Detective. The cables sit in must all vintage; they foul, they spike, they drop. I have eighteen years of logs full of probe nonsense that I corrected by hand off the gauge. My book is what I read with my eyes. If the computer says the temperature dipped two degrees, I say the probe hiccuped, because a ferment does not cool two degrees in five minutes on its own. I wrote the real figure. That is what the book is for — it is the human check on the machine.'
        },
        {
          id: 'Q-prosser-2',
          prompt: 'A probe glitch does not weigh 70 kilos. The gantry lifted a body-weight load over Fermenter 3 at 23:58, with no pump-over scheduled, and it takes a cellar hand to run it. You were in the cellar and never left on the camera.',
          answer:
            'The gantry— I don’t— I didn’t run the gantry at midnight. Kevin runs the gantry; Kevin was here; ask Kevin why it was parked over three in the morning. Or it drifted; the rail brakes are worn. Seventy kilos is— a pump-over hose full of juice is heavy, the pendant can be knocked. I was in the office from twenty to twelve lying down. I did not— look, I was angry with her, everyone knows I was angry with her, she destroyed eighteen years of my work over a dinner, but being angry is not— the camera shows me going in and it does not show me coming out because there is a second door to the crush pad with no camera, and half the valley goes in and out of it. That does not make me a murderer. It makes me someone who used the other door.'
        },
        {
          id: 'Q-prosser-3',
          prompt: 'She wrote on your own tank book that the own-label was dead. You told a friend that night you “can’t do this anymore.” And you are the only person who could falsify the one record that denies the body went in.',
          answer:
            'I said I can’t do this anymore because I was going to resign, Detective, not because I was going to— I had eighteen years and a promise in writing and she tore it up on the inside cover of my own book, in pencil, like a note to the milkman. “Don’t sulk.” Forty years I knew that woman and that is what she wrote. And yes, I keep the book, and yes, only I write in it, and that is precisely why you should ask whether someone wanted my book to be the thing that hanged me. Kevin has a key. Kevin was terrified of her. Kevin runs the gantry every day. I was asleep in the office. The book— I wrote what I read. If the tank disagrees, the tank is— the tank—. I would like to stop now.'
        }
      ]
    },
    {
      suspectId: 'mathias',
      questions: [
        {
          id: 'Q-mathias-1',
          prompt: 'You lose the most from the sale and the new will, and your mother’s death voids both. You were in the cellar near the time she arrived.',
          answer:
            'I was in the cellar from ten past eleven to nineteen past, and the camera shows me leaving, and the harvester GPS shows me back in Drei Brüder cutting the last row from twenty-four past until nearly one. The tank did its thing at forty and the gantry lifted at eight-to-twelve, and at both of those times I was on a harvester in the dark half a kilometre away with the lights on and the GPS pinging every thirty seconds. I had the best motive in the family and the best alibi on the property, which is the unluckiest combination a grieving man can have. Yes, her death keeps the block in the family. I would hand it back to get her to the dinner table so I could shout at her one more time.'
        },
        {
          id: 'Q-mathias-2',
          prompt: 'You can run the gantry. Walk us through the nine minutes you were in the cellar.',
          answer:
            'I came in, I looked at the gauges on my ferments — I watch the temperatures like a hawk during vintage — I saw tanks one, two and four were fine, three was warm but climbing normally, and Dale was at the computer and we didn’t speak because we’d both been at the dinner. I checked my fruit was processing and I left to finish the harvest before the rain. I did not touch the gantry; it was parked at the end of the rail where it lives. When I left, my mother was not in the cellar; she came in at twenty-eight past, after me, the camera says. I never saw her alive after she stood up from the table and told me I was losing the only thing I’ve ever cared about.'
        },
        {
          id: 'Q-mathias-3',
          prompt: 'Who, in your view, would falsify the tank book?',
          answer:
            'Only Dale writes in that book. Only Dale. He’s kept it eighteen years and he guards it like scripture and he’d sooner let you read his diary. If that book says the tank was quiet when the computer says a body went in, then the only hand that could have written the lie is his. I don’t want it to be Dale — he made this winery, he taught me more about vines than my father did — but Mum did to him exactly what she did to me, only worse, because mine was dirt and his was eighteen years and his name. She broke his promise on the cover of his own book and wrote “don’t sulk.” I read it. I’d have sulked with a plunging pole in my hand too.'
        }
      ]
    },
    {
      suspectId: 'ingrid',
      questions: [
        {
          id: 'Q-ingrid-1',
          prompt: 'A new will favouring you, a sale you wanted — both lost by her death. But the rumour of that will gives you a motive. Where were you?',
          answer:
            'In the office near the house, logging intake dockets, from nine until after midnight — the terminal timestamps every docket, 11:12, 11:41, five past twelve, and I emailed the bank at ten to midnight. I was nowhere near the cellar; I never go down during vintage, the gas gives me migraines. And think about what the death actually does to me: it voids the sale I needed, freezes the favourable will before it’s signed, and tips a business I’ve been bailing out for five years toward the bank. I needed Mum alive until Monday more than anyone except Otto. A rumoured will I didn’t ask for is not worth a solvent winery I was about to save.'
        },
        {
          id: 'Q-ingrid-2',
          prompt: 'You said the business is in worse trouble than the family knows. Did your mother know how bad?',
          answer:
            'She knew, which is why she finally agreed to sell Drei Brüder — it broke her heart and Mathias’s, but the numbers left no choice. We owe the bank more than the home block is worth. Selling the old vineyard to Otto cleared the seasonal overdraft and bought us a year. That is why I supported the sale and why her death is a catastrophe for me: unsigned, it’s worth nothing, and the bank was already circling. I spent that evening keeping the lights on. The last email I sent that night was to the bank manager begging him to hold off until Monday’s signing. You can read it. It is not the correspondence of a woman who knew her mother would be dead by morning.'
        },
        {
          id: 'Q-ingrid-3',
          prompt: 'Your mother changed the office locks that afternoon, shutting Mathias out. Why?',
          answer:
            'To stop Mathias seeing how bad the books were before the sale went through. He’d have fought it harder if he’d known the bank was about to foreclose; he’d convinced himself there was some other way to save the block. She shut him out of the records so he couldn’t arm himself with half-understood numbers at the signing. It was cruel and it was probably right. It had nothing to do with Dale and the cellar. If you want the person Mum truly wronged that day, it wasn’t Mathias, who lost dirt, or me, who agreed with her. It was Dale, who lost eighteen years and his name in a pencil note. I saw his face at dinner. I’ve never seen a man go so still.'
        }
      ]
    },
    {
      suspectId: 'okafor',
      questions: [
        {
          id: 'Q-okafor-1',
          prompt: 'Your contract died with the sale. You were near the cellar at eleven. Did you go in?',
          answer:
            'No. My phone has me near the cellar for fifteen minutes and back at the cottage by twenty past, and I stayed there. I looked at the lit doorway from outside and felt sorry for myself about a contract I’d lost, and I walked back. I am a wine buyer, Detective; I would not know how to start that gantry if my job depended on it, and it did not. The sale killed my contract whether Roz was alive or dead — in fact her death makes it worse, because now I can’t even go back to her and argue her out of it. There is no version of this where Roz dying helps me. I wanted her to change her mind, which is the opposite of wanting her gone.'
        },
        {
          id: 'Q-okafor-2',
          prompt: 'You toured the cellar by day. What do you remember about the ferments and the danger?',
          answer:
            'Dale walked me along the tanks in the afternoon and told me, the way winemakers love to, how the CO₂ sits over the ferment and kills people every few years, how you never lean over an open fermenter, how the gas is invisible and heavier than air. He was proud of it, in that grim cellar way. It struck me as a terrible way to die and I said so. I did not file it away as a method; I filed it away as a reason never to lean over a wine tank. The person who used that knowledge used it like someone who lives with it, not like a visitor who heard it once on a tour.'
        },
        {
          id: 'Q-okafor-3',
          prompt: 'From outside the cellar at eleven, did you see or hear anything?',
          answer:
            'The gantry was running — I heard the motor, that whine it makes, and I remember thinking they work hard here, even at eleven at night. I saw the lit doorway and a figure moving inside but I couldn’t tell who; just a shape at the tanks. I didn’t see Roz arrive; I was walking away by then. If the gantry was running near eleven, Detective, and your records say it lifted a body-weight load at eight-to-twelve, then whoever was moving it was comfortable with it in the dark — that is not a visitor and it is not the daughter who won’t go down there. It is someone who runs that machine in their sleep.'
        }
      ]
    },
    {
      suspectId: 'tran',
      questions: [
        {
          id: 'Q-tran-1',
          prompt: 'You can run the gantry, you feared being sacked, and you were alone twenty metres away with no one to confirm you slept.',
          answer:
            'I know, and I’ve been sick about how it looks since six this morning. But think about it — if I’d put her in that tank, why would I leave the gantry parked over three for everyone to find, why would I skip tank three at two a.m. and draw attention to it, why would I be the one to ring triple zero? I was terrified of her, yeah, she caught me taking bottles and she went off at me, but she hadn’t actually sacked me or called the cops, and I was hoping if I kept my head down through vintage she’d forget it. People like Roz threaten everybody. The one she really went after wasn’t me. She took Dale’s whole life off him on the cover of his book. I saw it on the bench. “Don’t sulk.” I’d never seen Dale like he was tonight.'
        },
        {
          id: 'Q-tran-2',
          prompt: 'At two a.m. you skipped Fermenter 3 because the gantry was over it. Why didn’t that alarm you?',
          answer:
            'Because Dale moves the gantry all the time and leaves it where he’s working. I thought he’d parked it over three to do something in the morning — maybe he was worried about that tank, it was the warm one. I didn’t want to climb up and move his gantry at two in the morning and I really didn’t want to lean over three in the dark with the gas, because that’s the one that kills you. So I did one and two and went back to bed and felt bad about three. If I’d gone up and looked I’d have found her four hours earlier. I’ll carry that. But I didn’t put her there, and I didn’t move that gantry at midnight — I was asleep, and the person who was definitely awake in that cellar all night, writing in his book, was Dale.'
        },
        {
          id: 'Q-tran-3',
          prompt: 'You slept twenty metres away. Did you hear the gantry at midnight?',
          answer:
            'The ferments hiss and roar all night and the crib room door’s shut for the gas, so honestly I sleep through the gantry most nights — it runs on the two a.m. schedule and I’ve learned to sleep through my own alarm until the second one. But now you ask, I think I half-heard the gantry motor earlier, before my two o’clock, in that way you hear things in your sleep and think they’re part of the schedule. I thought, Dale’s doing something, and rolled over. There wasn’t a midnight pump-over on the schedule. If I heard the gantry before two, then Dale was running it when there was nothing to run, and I slept through a murder twenty metres away because I thought it was the roster.'
        }
      ]
    },
    {
      suspectId: 'wagner',
      questions: [
        {
          id: 'Q-wagner-1',
          prompt: 'You got the block you wanted after twenty years that very day. Convince us her death doesn’t serve you.',
          answer:
            'It destroys me, Detective, that’s how it serves me. A handshake and an initialled page are not a sale; she was to sign with the solicitor on Monday. Dead, she signs nothing, and the block falls into an estate run by a son who would rather burn it than sell it to me, and it’ll be tied up in probate and family fighting for years, and I’m sixty-one and I don’t have years. I have waited twenty seasons for that dirt. I needed Rosalind Keller to walk into a solicitor’s office on Monday on her own two feet more than I have ever needed anything. The timing that looks so bad for me is exactly what clears me: no one murders the person they’re three days from buying their life’s dream from.'
        },
        {
          id: 'Q-wagner-2',
          prompt: 'You were on the property at the right time. Prove you stayed outside.',
          answer:
            'The weighbridge weighed my truck in at twenty-five past eleven and the gate camera filmed me leaving at ten to twelve, and in between I tipped a bin of my own fruit on the crush pad, which is outside, under the floodlight, where anyone could see me. I never went through the cellar roller door; I’ve got no reason to and I can’t work their gear. The tank took her in at twenty to twelve and the crane lifted at eight-to-twelve; at eight-to-twelve I was two minutes from the front gate with a tipped bin and an empty truck. I’m a grape grower, not a cellar rat. I tip on the pad and I go home.'
        },
        {
          id: 'Q-wagner-3',
          prompt: 'You’ve known this family forty years. Who do you think did this?',
          answer:
            'I don’t like to say it, because I’ve drunk with the man. But forty years I’ve watched Roz Keller take credit for wine she didn’t make, and the man who made it stood behind her and said nothing, because she’d always promised him his own label one day. That promise was the thing that kept Dale Prosser in that cellar for eighteen years for a Keller wage. And on the first night of vintage she wrote on the cover of his own book that the promise was dead and told him not to sulk. I saw him at the dinner. A man can swallow being overlooked for eighteen years if there’s a day coming when it ends. Take away the day, in pencil, over dinner — I don’t know what I’d do. I know I wouldn’t be asleep in the office.'
        }
      ]
    }
  ],
  accusation: {
    motiveOptions: [
      { id: 'm-ownlabel', label: 'To avenge eighteen years of unacknowledged work and a promised own-label wine killed by the sale of the vineyard' },
      { id: 'm-block', label: 'To stop the sale of the family vineyard block and keep it in the family' },
      { id: 'm-will', label: 'To secure a favourable will before it could be changed' },
      { id: 'm-contract', label: 'To save an export contract threatened by the sale' },
      { id: 'm-job', label: 'To avoid being sacked and reported for theft' }
    ],
    methodOptions: [
      { id: 'h-tank', label: 'Struck at the catwalk and put into the CO₂-laden fermenter, then the gantry used to submerge the body and the handwritten log falsified' },
      { id: 'h-accident', label: 'She leaned over the ferment and was overcome by CO₂ — an accident' },
      { id: 'h-poison', label: 'Poisoned and then placed in the tank' },
      { id: 'h-fall', label: 'She fell from the catwalk into the tank' }
    ],
    selectableEvidenceIds: ['CS-01', 'CS-02', 'CS-03', 'CS-04', 'CS-05', 'CS-07', 'CS-08', 'EV-01', 'EV-02', 'EV-03', 'EV-04', 'EV-05', 'MSG-01', 'MSG-02', 'Q-prosser-1', 'Q-tran-3', 'Q-mathias-3'],
    requiredEvidenceCount: 2
  },
  solution: {
    culpritSuspectId: 'prosser',
    motiveOptionId: 'm-ownlabel',
    methodOptionId: 'h-tank',
    decisiveEvidenceIds: ['EV-01', 'EV-05', 'CS-03', 'MSG-01', 'CS-02'],
    reveal: 'Dale Prosser struck Roz Keller on the catwalk, put her into Fermenter 3, used the gantry to submerge her, and falsified the one record — his own tank book — that could deny a body had gone in.',
    reconstruction: [
      'For eighteen years Prosser had made Kellerhof’s acclaimed wine for a Keller wage and a Keller label, kept there by a written promise of his own wine from the old Drei Brüder vines. He was a year into closing a deal with investors built entirely on that fruit. At the vintage dinner Roz announced she was selling the block to Wagner, and she wrote the end of his dream in pencil on the inside cover of his own tank book: no own-label, no fruit, “don’t sulk.” At 8:15 that night he told a friend, “I can’t do this anymore.”',
      'Roz came down to the cellar at 11:28, as she did every vintage night. Prosser was there, logging the tanks. On the catwalk over Fermenter 3 — the warm tank — he struck her from behind, against the steel lip or with the plunging pole, hard enough to stun. He tipped her into the ferment; the automatic probe recorded the 1.8°C dip at 23:40 as her cooler body hit the warm must and broke the cap. The CO₂ above the tank did the rest within a minute.',
      'The body floated. To make the “accident” look like a woman overcome leaning in — and perhaps to be sure — he brought the gantry over Fermenter 3 at 23:58 and lifted and released a seventy-kilo load, which the load-cell recorded. Okafor, outside, heard the motor. Then he did the one thing only he could do: he wrote smooth, rising, untroubled readings for Fermenter 3 at 23:30 and 23:45 in his own book, to pre-empt the question of what had entered the tank at 23:40.',
      'He left by the uncovered crush-pad door, so the cellar camera never saw him go, and lay down in the office to be “found” there. But the probe cannot be edited and the load-cell does not lie, and the only false account of Fermenter 3 that night was the one written in the hand of the man who had kept that book for eighteen years — and who had the only motive that the death did not also ruin.'
    ],
    chronology: [
      { time: '28 Mar, dinner', event: 'Roz announces the sale and kills the own-label; writes “don’t sulk” on Prosser’s book.', refs: ['MSG-01', 'EV-03'] },
      { time: '20:15', event: 'Prosser to a friend: “I can’t do this anymore.”', refs: ['MSG-02'] },
      { time: '22:00', event: 'Prosser in the cellar logging tanks; Tran does the 22:00 pump-over then sleeps.', refs: ['CS-05', 'WS-05'] },
      { time: '23:10–23:19', event: 'Mathias in the cellar, then back to the harvester (GPS).', refs: ['CS-05', 'EV-04'] },
      { time: '23:28', event: 'Roz enters the cellar alive, alone.', refs: ['CS-05'] },
      { time: '23:40', event: 'Probe dip in Fermenter 3: a body enters the warm must.', refs: ['CS-02', 'EV-01'] },
      { time: '23:45', event: 'Prosser writes a smooth, false reading in his book.', refs: ['CS-04', 'EV-05'] },
      { time: '23:58', event: 'Gantry lifts ~70 kg over Fermenter 3; Okafor hears the motor.', refs: ['CS-03', 'EV-01', 'Q-okafor-3'] },
      { time: 'after 00:00', event: 'Prosser leaves by the uncovered crush-pad door to the office.', refs: ['CS-05', 'Q-prosser-2'] },
      { time: '02:00', event: 'Tran skips Fermenter 3 because the gantry is parked over it.', refs: ['WS-05'] },
      { time: '06:05', event: 'Tran finds the body.', refs: ['CS-01'] }
    ],
    evidenceChain: [
      { title: 'The false record only he could write', body: 'The automatic probe (uneditable) shows a body entering Fermenter 3 at 23:40; Prosser’s handwritten book alone says the tank was quiet at 23:45. The only false account is the one in the hand of the book’s sole keeper.', refs: ['EV-01', 'EV-05', 'CS-02', 'CS-04'] },
      { title: 'The gantry: a cellar skill', body: 'The load-cell shows a body-weight lift over Fermenter 3 at 23:58 with nothing scheduled. It takes a competent operator; Prosser runs it daily and was in the cellar, unseen leaving by the one camera.', refs: ['CS-03', 'EV-04', 'CS-05'] },
      { title: 'The blow and the staging', body: 'A blow to the back of the head before immersion, blood at catwalk-rail height, the plunging pole with her blood — a struck victim placed in the tank, not an accident.', refs: ['CS-01', 'CS-07', 'EV-02'] },
      { title: 'Motive the death did not ruin', body: 'The sale and the broken own-label promise — written on his own book — destroyed eighteen years and his investor deal. Every other suspect’s motive is wrecked by her death; only Prosser’s grievance is answered by it.', refs: ['MSG-01', 'MSG-02', 'EV-03', 'EV-04'] }
    ],
    alternateSuspectExplanations: [
      { title: 'Mathias Keller', body: 'The strongest family motive, and he can run the gantry — but the door camera and harvester GPS put him in Drei Brüder from 23:24 to 00:40, across both the 23:40 dip and the 23:58 lift. Her death keeps the block in the family; he would trade it back in a heartbeat.', refs: ['EV-04', 'CS-05', 'Q-mathias-1'] },
      { title: 'Ingrid Keller', body: 'A rumoured favourable will, but she was at the office terminal (dockets at 23:12, 23:41, 00:05; email at 23:50) near the house, cannot work the gantry, and the death voids the sale she needed to save the business.', refs: ['EV-04', 'MSG-04', 'Q-ingrid-1'] },
      { title: 'Blessing Okafor', body: 'Her contract died with the sale, but her phone places her back at the cottage from 23:20, she cannot operate the gantry, and the death makes her contract worse, not better. She heard the motor from outside.', refs: ['EV-04', 'Q-okafor-1', 'Q-okafor-3'] },
      { title: 'Kevin Tran', body: 'He feared being sacked and can run the gantry, but leaving it parked, skipping tank three, and calling 000 are not a killer’s acts; his fear was of a threat Roz never carried out, unlike the eighteen-year promise she broke to Prosser.', refs: ['Q-tran-1', 'Q-tran-2'] },
      { title: 'Otto Wagner', body: 'He got the block that day, but a handshake is not a sale; the weighbridge and gate hold him on the outside pad 23:25–23:50, he cannot work the gantry, and the death ties up the block he has coveted for twenty years.', refs: ['CS-06', 'EV-04', 'Q-wagner-1'] }
    ],
    redHerringResolutions: [
      { title: 'The confined-space “accident”', body: 'The CO₂ made a tragic accident the easy answer; the pre-immersion blow and the gantry lift prove it was staged.', refs: ['CS-01', 'EV-02', 'CS-03'] },
      { title: 'Everyone’s motive', body: 'The sale and the will gave the whole family and the buyers reasons — but her death wrecks every one of those interests except the winemaker’s. Her death only helps the man whose grievance was for what she had already done, not for what she was about to do.', refs: ['EV-03', 'EV-04'] },
      { title: 'The cellar hand who found her', body: 'Tran’s fear and access made him the obvious suspect; his leaving the gantry parked and raising the alarm are the opposite of concealment.', refs: ['Q-tran-1', 'WS-05'] }
    ],
    epilogue: 'Prosser was charged after the systems technician confirmed the probe data could not have been altered. Kellerhof passed to Mathias and Ingrid; the Drei Brüder sale lapsed and the old vines stayed in the family. Mathias, the following vintage, released a wine from the block under his own name — the own-label that had cost a man eighteen years of patience, and then everything.'
  }
};
