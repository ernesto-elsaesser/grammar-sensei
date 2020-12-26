// based on https://github.com/mistval/jp-verb-deconjugator/blob/master/derivations.js

const rules = [

  // Negative
  {unconjugatedEnding: 'う', conjugatedEnding: 'わない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'さない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ない', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},

  // Desu
  {unconjugatedEnding: 'う', conjugatedEnding: 'うです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'POLITE DESU VERB'},

  // Past form
  {unconjugatedEnding: 'う', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いた', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いだ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'した', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'た', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'PLAIN PAST'},

  // Te form
  {unconjugatedEnding: 'う', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いて', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いで', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'して', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'て', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'TE FORM'},

  {unconjugatedEnding: 'て', conjugatedEnding: 'てござい', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'GOZAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でござい', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'GOZAI'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てください', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'KUDASAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でください', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'KUDASAI'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てない', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'NEGATIVE ARU OR IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でない', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'NEGATIVE ARU OR IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ている', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'SHORT IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'SHORT IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てある', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'ARU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'である', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'ARU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てくる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE KURU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE KURU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ていく', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE IKU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいく', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE IKU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てく', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE IKU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でく', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE IKU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てすまない', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'SUMANAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ですまない', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'SUMANAI'},

  {unconjugatedEnding: 'て', conjugatedEnding: 'てくる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE KURU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくる', unconjugatedWordType: 'TE FORM', conjugatedWordType: 'TE KURU'},

  {unconjugatedEnding: 'すまない', conjugatedEnding: 'すみません', unconjugatedWordType: 'SUMANAI', conjugatedWordType: 'SUMIMASEN'},
    
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いった', unconjugatedWordType: 'TE IKU', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いく', unconjugatedWordType: 'TE IKU', conjugatedWordType: 'GODAN VERB'},

  {unconjugatedEnding: 'くる', conjugatedEnding: 'きた', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こい', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こない', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こさせる', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'き', unconjugatedWordType: 'TE KURU', conjugatedWordType: 'MASU STEM'},

  // Potentional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'える', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'ける', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'てる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ねる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'める', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'POTENTIAL'},

  // Passive form
  {unconjugatedEnding: 'う', conjugatedEnding: 'われる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'される', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まれる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},

  // Imperative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'え', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'け', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'て', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ね', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'め', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろ', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'IMPERATIVE'},

  // Volitional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'おう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'こう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ごう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'そう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'とう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'のう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぼう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'もう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'よう', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'VOLITIONAL'},

  // Masu stem form
  {unconjugatedEnding: 'る', conjugatedEnding: '', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'う', conjugatedEnding: 'い', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'き', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぎ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'し', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'ち', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'に', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'び', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'み', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'り', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},

  {unconjugatedEnding: '', conjugatedEnding: 'ます', unconjugatedWordType: 'MASU STEM', conjugatedWordType: 'POLITE MASU'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ました', unconjugatedWordType: 'POLITE MASU', conjugatedWordType: 'POLITE MASHITA'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'まして', unconjugatedWordType: 'POLITE MASU', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ましょう', unconjugatedWordType: 'POLITE MASU', conjugatedWordType: 'POLITE MASHOU'},

  {unconjugatedEnding: '', conjugatedEnding: 'ません', unconjugatedWordType: 'MASU STEM', conjugatedWordType: 'POLITE MASEN'},
  {unconjugatedEnding: 'ません', conjugatedEnding: 'ませんでした', unconjugatedWordType: 'POLITE MASEN', conjugatedWordType: 'POLITE MASEN DESHITA'},

  // Causative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'わせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'させる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'ませる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らせる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'させる', unconjugatedWordType: 'ICHIDAN VERB', conjugatedWordType: 'CAUSATIVE'},

  // SURU
  {unconjugatedEnding: 'する', conjugatedEnding: 'し', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'MASU STEM'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'して', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'TE FORM'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'した', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しない', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しよう', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'させる', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'される', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しろ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'せよ', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},

  // KURU
  {unconjugatedEnding: '来る', conjugatedEnding: '来い', unconjugatedWordType: 'GODAN VERB', conjugatedWordType: 'IMPERATIVE'},

  // Da rules
  {unconjugatedEnding: 'だ', conjugatedEnding: 'です', unconjugatedWordType: 'DA', conjugatedWordType: 'POLITE DESU VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'じゃない', unconjugatedWordType: 'DA', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'ではない', unconjugatedWordType: 'DA', conjugatedWordType: 'NEGATIVE NAI VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'だった', unconjugatedWordType: 'DA', conjugatedWordType: 'PLAIN PAST'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'である', unconjugatedWordType: 'DA', conjugatedWordType: 'DE ARU'},

  // Aru / iru rules
  {unconjugatedEnding: 'である', conjugatedEnding: 'である', unconjugatedWordType: 'DE ARU', conjugatedWordType: 'GODAN VERB'},
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ある', unconjugatedWordType: 'ARU', conjugatedWordType: 'GODAN VERB'},
  {unconjugatedEnding: 'いる', conjugatedEnding: 'いる', unconjugatedWordType: 'IRU', conjugatedWordType: 'ICHIDAN VERB'},
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ない', unconjugatedWordType: 'ARU', conjugatedWordType: 'NEGATIVE NAI VERB'}

];
