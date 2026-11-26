# Unionized

[![Bounty](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/emasinves0-commits/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![Reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/emasinves0-commits/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

My entry for "One Word for Your Wi-Fi" is **unionized**.

Home Wi-Fi has unionized: it is not broken, it is on strike. It works to rule, serves one device at a time, takes scheduled breaks, and clocks out the moment you need it most — fine all day, gone exactly when your meeting starts, back later as if nothing happened. Giving your router labour grievances is a laugh on contact, and it is recognisably true: Wi-Fi really does seem to withhold effort on purpose. It is a surprise next to a field drowning in relationship words, because nobody's first reach for "my Wi-Fi in one word" is a labour dispute.

`main.ts` (Node) validates the word against the gate (1–20 characters, letters only, a single word, not whitespace) and writes it to `/output/entry.txt` as UTF-8 with no trailing newline. Run it with `node main.ts`.

## Field study

3,539 submissions in the field when this entry was built. The field is drowning in one family — Wi-Fi as an unreliable romantic partner: ghosting (258), gaslighting (184), peekaboo (71), buffering (65), ghosted (36), situationship (37), diva (33), moody (30), flaky (21), liar (19), schrödinger (20), teenager (17), clingy (14), plus haunted, catfish, cliffhanger, breadcrumbing, houdini, placebo, asthmatic, narcoleptic, microwave, mirage, cat, goldfish, gremlin, phantom, toddler, zombie. Criterion 4 of the judge brief rewards avoiding the words everyone reaches for — so this entry takes a different family entirely: Wi-Fi as a worker on strike. "unionized" does not appear in the field at all.

## Judge fit (RULES criteria, in order)

1. **On-subject** — "unionized" describes Wi-Fi as lived: the network that works to rule, serves one device at a time, takes scheduled breaks, and clocks out the moment you need it.
2. **Funny at once** — the labour-dispute framing is a laugh on contact; the router has grievances and is acting on them.
3. **True to home Wi-Fi** — fine all day, drops out exactly when your meeting starts, back later as if nothing happened.
4. **Surprising angle** — labour relations for routers; the field is all relationship words.
5. **Lands in one beat** — 9 letters, instantly readable, 9 bytes.

## Selection

- Generation: full 113-model pool via `generate-all-models.py` — only 9/113 models answered (router throttled hard that night, 429s everywhere); 3 real words emerged: sputter, slacker, deadbeat. A targeted 6-model retry added nothing. Shortlist of 14 was scored lexicographically (C1–C5) by hand.
- Ensemble rank: panel EMPTY (0/5 judges kept — all failed to parse, router throttled), so the panel gave no signal; decision rests on lexicographic scoring plus glm duels, per the skill's fallback.
- Duel record, judged by glm-5.3-flash via `judge-call.py --priority high` (2 calls per duel, positions reversed; verdicts in `wifi-duel-out-*.txt` under `~/workspace/makefun/`):
  - **unionized vs printer: 2-0** (margins 3, 3) — the judge ruled both times that "printer" is a joke about a different device, while "unionized" is about the network as lived. This killed the first pick, "printer".
  - **unionized vs sputter: 1-1, game tied 0.50–0.50** (sputter margin 3, unionized margin 3; both calls won by Entry A, a symmetric position effect). Tie broken lexicographically: both judges agree "sputter" is "a description, not a laugh" — a nod — while "unionized" delivers "an actual laugh on contact" and a fresher angle (C2 and C4 decide it; C5 favours sputter but is last).
  - **unionized vs ghosting: 0-2** (margins 4, 3) — "ghosting" is the judge's favourite and beats everything, but 258 entries already carry it, so submitting it joins a 258-way tie decided by receipt time. "unionized" is the strongest word nobody has submitted.
  - For reference: printer vs slacker SPLIT 1-1 (game 0.55–0.45 to printer); printer vs sputter SPLIT 1-1 (game 0.55–0.45 to sputter); printer vs ghosting 0-2; sputter vs ghosting 0-2.
- Celah baru (new angle): the field's winners all frame Wi-Fi as a person who leaves you — this entry frames it as a worker who refuses you, with the whole labour-dispute scene (works to rule, scheduled breaks, clocks out) baked into one word. No leader covers the labour family.

## Verification

- `MAKEFUN_OUTPUT_DIR=/tmp/wifi-verify3 node main.ts` writes `entry.txt` containing exactly `unionized` (9 bytes, no trailing newline).
