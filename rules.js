// based on https://github.com/mistval/jp-verb-deconjugator/blob/master/derivations.js

const rules = [

  // Negative
  {unconjugatedEnding: 'う', conjugatedEnding: 'わない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'さない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ない', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},

  // Desu
  {unconjugatedEnding: 'う', conjugatedEnding: 'うです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'くです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぐです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'すです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'つです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ぬです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぶです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'むです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'るです', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'POLITE_DESU_VERB'},

  // Past form
  {unconjugatedEnding: 'う', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いた', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いだ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'した', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んだ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'った', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'た', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'PLAIN_PAST'},

  // Te form
  {unconjugatedEnding: 'う', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'いて', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'いで', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'して', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'んで', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'って', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'て', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'TE_FORM'},

  {unconjugatedEnding: 'て', conjugatedEnding: 'てござい', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'GOZAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でござい', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'GOZAI'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てください', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'KUDASAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でください', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'KUDASAI'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てない', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'NEGATIVE_ARU_OR_IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でない', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'NEGATIVE_ARU_OR_IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ている', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'SHORT_IRU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'SHORT_IRU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てある', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'ARU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'である', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'ARU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てくる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_KURU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_KURU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'ていく', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_IKU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でいく', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_IKU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てく', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_IKU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でく', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_IKU'},
  {unconjugatedEnding: 'て', conjugatedEnding: 'てすまない', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'SUMANAI'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'ですまない', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'SUMANAI'},

  {unconjugatedEnding: 'て', conjugatedEnding: 'てくる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_KURU'},
  {unconjugatedEnding: 'で', conjugatedEnding: 'でくる', unconjugatedWordType: 'TE_FORM', conjugatedWordType: 'TE_KURU'},

  {unconjugatedEnding: 'すまない', conjugatedEnding: 'すみません', unconjugatedWordType: 'SUMANAI', conjugatedWordType: 'SUMIMASEN'},
    
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いった', unconjugatedWordType: 'TE_IKU', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'いく', conjugatedEnding: 'いく', unconjugatedWordType: 'TE_IKU', conjugatedWordType: 'GODAN_VERB'},

  {unconjugatedEnding: 'くる', conjugatedEnding: 'きた', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こい', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こない', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こさせる', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'こよう', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'くる', conjugatedEnding: 'き', unconjugatedWordType: 'TE_KURU', conjugatedWordType: 'MASU_STEM'},

  // Potentional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'える', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'ける', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'てる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ねる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'める', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'POTENTIAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れる', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'POTENTIAL'},

  // Passive form
  {unconjugatedEnding: 'う', conjugatedEnding: 'われる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'される', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'まれる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},

  // Imperative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'え', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'け', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'げ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'せ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'て', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'ね', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'べ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'め', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'れ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろ', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'IMPERATIVE'},

  // Volitional form
  {unconjugatedEnding: 'う', conjugatedEnding: 'おう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'こう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ごう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'そう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'とう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'のう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ぼう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'もう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'ろう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'よう', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'VOLITIONAL'},

  // Masu stem form
  {unconjugatedEnding: 'る', conjugatedEnding: '', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'う', conjugatedEnding: 'い', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'き', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'ぎ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'し', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'ち', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'に', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'び', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'み', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'り', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},

  {unconjugatedEnding: '', conjugatedEnding: 'ます', unconjugatedWordType: 'MASU_STEM', conjugatedWordType: 'POLITE_MASU'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ました', unconjugatedWordType: 'POLITE_MASU', conjugatedWordType: 'POLITE_MASHITA'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'まして', unconjugatedWordType: 'POLITE_MASU', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'ます', conjugatedEnding: 'ましょう', unconjugatedWordType: 'POLITE_MASU', conjugatedWordType: 'POLITE_MASHOU'},

  {unconjugatedEnding: '', conjugatedEnding: 'ません', unconjugatedWordType: 'MASU_STEM', conjugatedWordType: 'POLITE_MASEN'},
  {unconjugatedEnding: 'ません', conjugatedEnding: 'ませんでした', unconjugatedWordType: 'POLITE_MASEN', conjugatedWordType: 'POLITE_MASEN_DESHITA'},

  // Causative form
  {unconjugatedEnding: 'う', conjugatedEnding: 'わせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'く', conjugatedEnding: 'かせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぐ', conjugatedEnding: 'がせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'す', conjugatedEnding: 'させる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'つ', conjugatedEnding: 'たせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぬ', conjugatedEnding: 'なせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'ぶ', conjugatedEnding: 'ばせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'む', conjugatedEnding: 'ませる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'らせる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'る', conjugatedEnding: 'させる', unconjugatedWordType: 'ICHIDAN_VERB', conjugatedWordType: 'CAUSATIVE'},

  // SURU
  {unconjugatedEnding: 'する', conjugatedEnding: 'し', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'MASU_STEM'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'して', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'TE_FORM'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'した', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しない', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しよう', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'VOLITIONAL'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'させる', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'CAUSATIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'される', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'PASSIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'しろ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},
  {unconjugatedEnding: 'する', conjugatedEnding: 'せよ', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},

  // KURU
  {unconjugatedEnding: '来る', conjugatedEnding: '来い', unconjugatedWordType: 'GODAN_VERB', conjugatedWordType: 'IMPERATIVE'},

  // Da rules
  {unconjugatedEnding: 'だ', conjugatedEnding: 'です', unconjugatedWordType: 'DA', conjugatedWordType: 'POLITE_DESU_VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'じゃない', unconjugatedWordType: 'DA', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'ではない', unconjugatedWordType: 'DA', conjugatedWordType: 'NEGATIVE_NAI_VERB'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'だった', unconjugatedWordType: 'DA', conjugatedWordType: 'PLAIN_PAST'},
  {unconjugatedEnding: 'だ', conjugatedEnding: 'である', unconjugatedWordType: 'DA', conjugatedWordType: 'DE_ARU'},

  // Aru / iru rules
  {unconjugatedEnding: 'である', conjugatedEnding: 'である', unconjugatedWordType: 'DE_ARU', conjugatedWordType: 'GODAN_VERB'},
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ある', unconjugatedWordType: 'ARU', conjugatedWordType: 'GODAN_VERB'},
  {unconjugatedEnding: 'いる', conjugatedEnding: 'いる', unconjugatedWordType: 'IRU', conjugatedWordType: 'ICHIDAN_VERB'},
  {unconjugatedEnding: 'ある', conjugatedEnding: 'ない', unconjugatedWordType: 'ARU', conjugatedWordType: 'NEGATIVE_NAI_VERB'}

];
