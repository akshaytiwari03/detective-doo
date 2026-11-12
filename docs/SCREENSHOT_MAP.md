# Reference screenshot → implementation map

The 17 reference screenshots were used as visual inspiration only. Each is recreated in real, accessible HTML/CSS. No screenshot is embedded as UI.

| Screenshot | Stage | Component | Notes |
|---|---|---|---|
| 01 case dossier | Case Dossier | `DossierStage` (stages.tsx) | Parchment panel, magenta CTA, hairline label/value rows, source-status tags (confirmed/reported/under review) |
| 02 persons of interest | Persons of Interest | `SuspectsStage` + `PersonPortrait` | Lilac field, white cards with blue-violet borders, two columns on wide screens, one on mobile |
| 03–05 full story | The Full Story | `StoryStage` | One scrollable parchment reading column, serif body, centred scene-break ornaments |
| 06–07 crime scene | Crime Scene Findings | `SceneStage` + `Icon` | Warm hazard-striped field, stacked finding cards, small icons, stable clue IDs (CS-0n) |
| 08 witness statement index | Witness Statements (index + detail) | `StatementsStage` | Portrait rows; detail shows signed statement + "claims to test"; read markers |
| 09 evidence files index | Evidence Files (index) | `EvidenceStage` | Cyan-bordered rows with icons, one-line descriptions |
| 10–11 evidence detail | Evidence detail | `EvidenceStage` (detail) | Cyan panel, document stamp, metadata grid, 4–7 labelled sections, breadcrumb back |
| 12–13 intercepted messages | Secret Notes & Messages | `MessagesStage` + `PhoneTranscript` | Phone-style chat (blue right / neutral left) and handwritten-note cards |
| 14 interrogation selection | Interrogation Room (roster) | `InterrogationStage` (roster) | Six selectable suspect rows, per-suspect n/3 progress |
| 15–16 interrogation question | Interrogation Room (suspect) | `InterrogationStage` (panel) | Header with LIVE label, conversation area, three question buttons |
| 17 interrogation answer | Interrogation Room (answered) | `InterrogationStage` (panel) | Detective prompt bubble + suspect answer bubble; answered questions marked ✓ |
| (not pictured) | Final Accusation | `AccusationStage` (finale.tsx) | Culprit / decisive-evidence / method / motive form; confirm step; no pre-submission hints |
| (not pictured) | The Answer / Case Closed | `AnswerStage` (finale.tsx) | Reveal, your-theory-vs-findings, chronology, evidence chain, alternates, red herrings, epilogue |

Navigation chrome (progress strip, Previous/Next, reset dialog) lives in `components/ui.tsx`.
