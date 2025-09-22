// https://flagpedia.net/the-united-kingdom/download/api

const currencies = {
  "AED": {
    "name": "united arab emirates dirham",
    "country_code": "AE",
    "flag": "https://flagcdn.com/40x30/ae.png"
  },
  "AFN": {
    "name": "afghan afghani",
    "country_code": "AF",
    "flag": "https://flagcdn.com/40x30/af.png"
  },
  "ALL": {
    "name": "albanian lek",
    "country_code": "AL",
    "flag": "https://flagcdn.com/40x30/al.png"
  },
  "AMD": {
    "name": "armenian dram",
    "country_code": "AM",
    "flag": "https://flagcdn.com/40x30/am.png"
  },
  "ANG": {
    "name": "netherlands antillean guilder",
    "country_code": "CW",
    "flag": "https://flagcdn.com/40x30/cw.png"
  },
  "AOA": {
    "name": "angolan kwanza",
    "country_code": "AO",
    "flag": "https://flagcdn.com/40x30/ao.png"
  },
  "ARS": {
    "name": "argentine peso",
    "country_code": "AR",
    "flag": "https://flagcdn.com/40x30/ar.png"
  },
  "AUD": {
    "name": "australian dollar",
    "country_code": "AU",
    "flag": "https://flagcdn.com/40x30/au.png"
  },
  "AWG": {
    "name": "aruban florin",
    "country_code": "AW",
    "flag": "https://flagcdn.com/40x30/aw.png"
  },
  "AZN": {
    "name": "azerbaijani manat",
    "country_code": "AZ",
    "flag": "https://flagcdn.com/40x30/az.png"
  },
  "BAM": {
    "name": "bosnia and herzegovina convertible mark",
    "country_code": "BA",
    "flag": "https://flagcdn.com/40x30/ba.png"
  },
  "BBD": {
    "name": "barbadian dollar",
    "country_code": "BB",
    "flag": "https://flagcdn.com/40x30/bb.png"
  },
  "BDT": {
    "name": "bangladeshi taka",
    "country_code": "BD",
    "flag": "https://flagcdn.com/40x30/bd.png"
  },
  "BGN": {
    "name": "bulgarian lev",
    "country_code": "BG",
    "flag": "https://flagcdn.com/40x30/bg.png"
  },
  "BHD": {
    "name": "bahraini dinar",
    "country_code": "BH",
    "flag": "https://flagcdn.com/40x30/bh.png"
  },
  "BIF": {
    "name": "burundian franc",
    "country_code": "BI",
    "flag": "https://flagcdn.com/40x30/bi.png"
  },
  "BMD": {
    "name": "bermudian dollar",
    "country_code": "BM",
    "flag": "https://flagcdn.com/40x30/bm.png"
  },
  "BND": {
    "name": "brunei dollar",
    "country_code": "BN",
    "flag": "https://flagcdn.com/40x30/bn.png"
  },
  "BOB": {
    "name": "bolivian boliviano",
    "country_code": "BO",
    "flag": "https://flagcdn.com/40x30/bo.png"
  },
  "BRL": {
    "name": "brazilian real",
    "country_code": "BR",
    "flag": "https://flagcdn.com/40x30/br.png"
  },
  "BSD": {
    "name": "bahamian dollar",
    "country_code": "BS",
    "flag": "https://flagcdn.com/40x30/bs.png"
  },
  "BTN": {
    "name": "bhutanese ngultrum",
    "country_code": "BT",
    "flag": "https://flagcdn.com/40x30/bt.png"
  },
  "BWP": {
    "name": "botswana pula",
    "country_code": "BW",
    "flag": "https://flagcdn.com/40x30/bw.png"
  },
  "BYN": {
    "name": "belarusian ruble",
    "country_code": "BY",
    "flag": "https://flagcdn.com/40x30/by.png"
  },
  "BZD": {
    "name": "belize dollar",
    "country_code": "BZ",
    "flag": "https://flagcdn.com/40x30/bz.png"
  },
  "CAD": {
    "name": "canadian dollar",
    "country_code": "CA",
    "flag": "https://flagcdn.com/40x30/ca.png"
  },
  "CDF": {
    "name": "congolese franc",
    "country_code": "CD",
    "flag": "https://flagcdn.com/40x30/cd.png"
  },
  "CHF": {
    "name": "swiss franc",
    "country_code": "CH",
    "flag": "https://flagcdn.com/40x30/ch.png"
  },
  "CLP": {
    "name": "chilean peso",
    "country_code": "CL",
    "flag": "https://flagcdn.com/40x30/cl.png"
  },
  "CNY": {
    "name": "chinese yuan",
    "country_code": "CN",
    "flag": "https://flagcdn.com/40x30/cn.png"
  },
  "COP": {
    "name": "colombian peso",
    "country_code": "CO",
    "flag": "https://flagcdn.com/40x30/co.png"
  },
  "CRC": {
    "name": "costa rican colón",
    "country_code": "CR",
    "flag": "https://flagcdn.com/40x30/cr.png"
  },
  "CUP": {
    "name": "cuban peso",
    "country_code": "CU",
    "flag": "https://flagcdn.com/40x30/cu.png"
  },
  "CVE": {
    "name": "cape verdean escudo",
    "country_code": "CV",
    "flag": "https://flagcdn.com/40x30/cv.png"
  },
  "CZK": {
    "name": "czech koruna",
    "country_code": "CZ",
    "flag": "https://flagcdn.com/40x30/cz.png"
  },
  "DJF": {
    "name": "djiboutian franc",
    "country_code": "DJ",
    "flag": "https://flagcdn.com/40x30/dj.png"
  },
  "DKK": {
    "name": "danish krone",
    "country_code": "DK",
    "flag": "https://flagcdn.com/40x30/dk.png"
  },
  "DOP": {
    "name": "dominican peso",
    "country_code": "DO",
    "flag": "https://flagcdn.com/40x30/do.png"
  },
  "DZD": {
    "name": "algerian dinar",
    "country_code": "DZ",
    "flag": "https://flagcdn.com/40x30/dz.png"
  },
  "EGP": {
    "name": "egyptian pound",
    "country_code": "EG",
    "flag": "https://flagcdn.com/40x30/eg.png"
  },
  "ERN": {
    "name": "eritrean nakfa",
    "country_code": "ER",
    "flag": "https://flagcdn.com/40x30/er.png"
  },
  "ETB": {
    "name": "ethiopian birr",
    "country_code": "ET",
    "flag": "https://flagcdn.com/40x30/et.png"
  },
  "EUR": {
    "name": "euro",
    "country_code": "EU",
    "flag": "https://flagcdn.com/40x30/eu.png"
  },
  "FJD": {
    "name": "fijian dollar",
    "country_code": "FJ",
    "flag": "https://flagcdn.com/40x30/fj.png"
  },
  "FKP": {
    "name": "falkland islands pound",
    "country_code": "FK",
    "flag": "https://flagcdn.com/40x30/fk.png"
  },
  "GBP": {
    "name": "great british pound",
    "country_code": "GB",
    "flag": "https://flagcdn.com/40x30/gb.png"
  },
  "GEL": {
    "name": "georgian lari",
    "country_code": "GE",
    "flag": "https://flagcdn.com/40x30/ge.png"
  },
  "GHS": {
    "name": "ghanaian cedi",
    "country_code": "GH",
    "flag": "https://flagcdn.com/40x30/gh.png"
  },
  "GIP": {
    "name": "gibraltar pound",
    "country_code": "GI",
    "flag": "https://flagcdn.com/40x30/gi.png"
  },
  "GMD": {
    "name": "gambian dalasi",
    "country_code": "GM",
    "flag": "https://flagcdn.com/40x30/gm.png"
  },
  "GNF": {
    "name": "guinean franc",
    "country_code": "GN",
    "flag": "https://flagcdn.com/40x30/gn.png"
  },
  "GTQ": {
    "name": "guatemalan quetzal",
    "country_code": "GT",
    "flag": "https://flagcdn.com/40x30/gt.png"
  },
  "GYD": {
    "name": "guyanese dollar",
    "country_code": "GY",
    "flag": "https://flagcdn.com/40x30/gy.png"
  },
  "HKD": {
    "name": "hong kong dollar",
    "country_code": "HK",
    "flag": "https://flagcdn.com/40x30/hk.png"
  },
  "HNL": {
    "name": "honduran lempira",
    "country_code": "HN",
    "flag": "https://flagcdn.com/40x30/hn.png"
  },
  "HTG": {
    "name": "haitian gourde",
    "country_code": "HT",
    "flag": "https://flagcdn.com/40x30/ht.png"
  },
  "HUF": {
    "name": "hungarian forint",
    "country_code": "HU",
    "flag": "https://flagcdn.com/40x30/hu.png"
  },
  "IDR": {
    "name": "indonesian rupiah",
    "country_code": "ID",
    "flag": "https://flagcdn.com/40x30/id.png"
  },
  "ILS": {
    "name": "israeli new shekel",
    "country_code": "IL",
    "flag": "https://flagcdn.com/40x30/il.png"
  },
  "INR": {
    "name": "indian rupee",
    "country_code": "IN",
    "flag": "https://flagcdn.com/40x30/in.png"
  },
  "IQD": {
    "name": "iraqi dinar",
    "country_code": "IQ",
    "flag": "https://flagcdn.com/40x30/iq.png"
  },
  "IRR": {
    "name": "iranian rial",
    "country_code": "IR",
    "flag": "https://flagcdn.com/40x30/ir.png"
  },
  "ISK": {
    "name": "icelandic króna",
    "country_code": "IS",
    "flag": "https://flagcdn.com/40x30/is.png"
  },
  "JMD": {
    "name": "jamaican dollar",
    "country_code": "JM",
    "flag": "https://flagcdn.com/40x30/jm.png"
  },
  "JOD": {
    "name": "jordanian dinar",
    "country_code": "JO",
    "flag": "https://flagcdn.com/40x30/jo.png"
  },
  "JPY": {
    "name": "japanese yen",
    "country_code": "JP",
    "flag": "https://flagcdn.com/40x30/jp.png"
  },
  "KES": {
    "name": "kenyan shilling",
    "country_code": "KE",
    "flag": "https://flagcdn.com/40x30/ke.png"
  },
  "KGS": {
    "name": "kyrgyzstani som",
    "country_code": "KG",
    "flag": "https://flagcdn.com/40x30/kg.png"
  },
  "KHR": {
    "name": "cambodian riel",
    "country_code": "KH",
    "flag": "https://flagcdn.com/40x30/kh.png"
  },
  "KMF": {
    "name": "comorian franc",
    "country_code": "KM",
    "flag": "https://flagcdn.com/40x30/km.png"
  },
  "KPW": {
    "name": "north korean won",
    "country_code": "KP",
    "flag": "https://flagcdn.com/40x30/kp.png"
  },
  "KRW": {
    "name": "south korean won",
    "country_code": "KR",
    "flag": "https://flagcdn.com/40x30/kr.png"
  },
  "KWD": {
    "name": "kuwaiti dinar",
    "country_code": "KW",
    "flag": "https://flagcdn.com/40x30/kw.png"
  },
  "KYD": {
    "name": "cayman islands dollar",
    "country_code": "KY",
    "flag": "https://flagcdn.com/40x30/ky.png"
  },
  "KZT": {
    "name": "kazakhstani tenge",
    "country_code": "KZ",
    "flag": "https://flagcdn.com/40x30/kz.png"
  },
  "LAK": {
    "name": "lao kip",
    "country_code": "LA",
    "flag": "https://flagcdn.com/40x30/la.png"
  },
  "LBP": {
    "name": "lebanese pound",
    "country_code": "LB",
    "flag": "https://flagcdn.com/40x30/lb.png"
  },
  "LKR": {
    "name": "sri lankan rupee",
    "country_code": "LK",
    "flag": "https://flagcdn.com/40x30/lk.png"
  },
  "LRD": {
    "name": "liberian dollar",
    "country_code": "LR",
    "flag": "https://flagcdn.com/40x30/lr.png"
  },
  "LSL": {
    "name": "lesotho loti",
    "country_code": "LS",
    "flag": "https://flagcdn.com/40x30/ls.png"
  },
  "LYD": {
    "name": "libyan dinar",
    "country_code": "LY",
    "flag": "https://flagcdn.com/40x30/ly.png"
  },
  "MAD": {
    "name": "moroccan dirham",
    "country_code": "MA",
    "flag": "https://flagcdn.com/40x30/ma.png"
  },
  "MDL": {
    "name": "moldovan leu",
    "country_code": "MD",
    "flag": "https://flagcdn.com/40x30/md.png"
  },
  "MGA": {
    "name": "malagasy ariary",
    "country_code": "MG",
    "flag": "https://flagcdn.com/40x30/mg.png"
  },
  "MKD": {
    "name": "macedonian denar",
    "country_code": "MK",
    "flag": "https://flagcdn.com/40x30/mk.png"
  },
  "MMK": {
    "name": "myanmar kyat",
    "country_code": "MM",
    "flag": "https://flagcdn.com/40x30/mm.png"
  },
  "MNT": {
    "name": "mongolian tögrög",
    "country_code": "MN",
    "flag": "https://flagcdn.com/40x30/mn.png"
  },
  "MOP": {
    "name": "macanese pataca",
    "country_code": "MO",
    "flag": "https://flagcdn.com/40x30/mo.png"
  },
  "MRU": {
    "name": "mauritanian ouguiya",
    "country_code": "MR",
    "flag": "https://flagcdn.com/40x30/mr.png"
  },
  "MUR": {
    "name": "mauritian rupee",
    "country_code": "MU",
    "flag": "https://flagcdn.com/40x30/mu.png"
  },
  "MVR": {
    "name": "maldivian rufiyaa",
    "country_code": "MV",
    "flag": "https://flagcdn.com/40x30/mv.png"
  },
  "MWK": {
    "name": "malawian kwacha",
    "country_code": "MW",
    "flag": "https://flagcdn.com/40x30/mw.png"
  },
  "MXN": {
    "name": "mexican peso",
    "country_code": "MX",
    "flag": "https://flagcdn.com/40x30/mx.png"
  },
  "MYR": {
    "name": "malaysian ringgit",
    "country_code": "MY",
    "flag": "https://flagcdn.com/40x30/my.png"
  },
  "MZN": {
    "name": "mozambican metical",
    "country_code": "MZ",
    "flag": "https://flagcdn.com/40x30/mz.png"
  },
  "NAD": {
    "name": "namibian dollar",
    "country_code": "NA",
    "flag": "https://flagcdn.com/40x30/na.png"
  },
  "NGN": {
    "name": "nigerian naira",
    "country_code": "NG",
    "flag": "https://flagcdn.com/40x30/ng.png"
  },
  "NIO": {
    "name": "nicaraguan córdoba",
    "country_code": "NI",
    "flag": "https://flagcdn.com/40x30/ni.png"
  },
  "NOK": {
    "name": "norwegian krone",
    "country_code": "NO",
    "flag": "https://flagcdn.com/40x30/no.png"
  },
  "NPR": {
    "name": "nepalese rupee",
    "country_code": "NP",
    "flag": "https://flagcdn.com/40x30/np.png"
  },
  "NZD": {
    "name": "new zealand dollar",
    "country_code": "NZ",
    "flag": "https://flagcdn.com/40x30/nz.png"
  },
  "OMR": {
    "name": "omani rial",
    "country_code": "OM",
    "flag": "https://flagcdn.com/40x30/om.png"
  },
  "PAB": {
    "name": "panamanian balboa",
    "country_code": "PA",
    "flag": "https://flagcdn.com/40x30/pa.png"
  },
  "PEN": {
    "name": "peruvian sol",
    "country_code": "PE",
    "flag": "https://flagcdn.com/40x30/pe.png"
  },
  "PGK": {
    "name": "papua new guinean kina",
    "country_code": "PG",
    "flag": "https://flagcdn.com/40x30/pg.png"
  },
  "PHP": {
    "name": "philippine peso",
    "country_code": "PH",
    "flag": "https://flagcdn.com/40x30/ph.png"
  },
  "PKR": {
    "name": "pakistani rupee",
    "country_code": "PK",
    "flag": "https://flagcdn.com/40x30/pk.png"
  },
  "PLN": {
    "name": "polish złoty",
    "country_code": "PL",
    "flag": "https://flagcdn.com/40x30/pl.png"
  },
  "PYG": {
    "name": "paraguayan guaraní",
    "country_code": "PY",
    "flag": "https://flagcdn.com/40x30/py.png"
  },
  "QAR": {
    "name": "qatari riyal",
    "country_code": "QA",
    "flag": "https://flagcdn.com/40x30/qa.png"
  },
  "RON": {
    "name": "romanian leu",
    "country_code": "RO",
    "flag": "https://flagcdn.com/40x30/ro.png"
  },
  "RSD": {
    "name": "serbian dinar",
    "country_code": "RS",
    "flag": "https://flagcdn.com/40x30/rs.png"
  },
  "RUB": {
    "name": "russian ruble",
    "country_code": "RU",
    "flag": "https://flagcdn.com/40x30/ru.png"
  },
  "RWF": {
    "name": "rwandan franc",
    "country_code": "RW",
    "flag": "https://flagcdn.com/40x30/rw.png"
  },
  "SAR": {
    "name": "saudi riyal",
    "country_code": "SA",
    "flag": "https://flagcdn.com/40x30/sa.png"
  },
  "SBD": {
    "name": "solomon islands dollar",
    "country_code": "SB",
    "flag": "https://flagcdn.com/40x30/sb.png"
  },
  "SCR": {
    "name": "seychellois rupee",
    "country_code": "SC",
    "flag": "https://flagcdn.com/40x30/sc.png"
  },
  "SDG": {
    "name": "sudanese pound",
    "country_code": "SD",
    "flag": "https://flagcdn.com/40x30/sd.png"
  },
  "SEK": {
    "name": "swedish krona",
    "country_code": "SE",
    "flag": "https://flagcdn.com/40x30/se.png"
  },
  "SGD": {
    "name": "singapore dollar",
    "country_code": "SG",
    "flag": "https://flagcdn.com/40x30/sg.png"
  },
  "SLL": {
    "name": "sierra leonean leone",
    "country_code": "SL",
    "flag": "https://flagcdn.com/40x30/sl.png"
  },
  "SOS": {
    "name": "somali shilling",
    "country_code": "SO",
    "flag": "https://flagcdn.com/40x30/so.png"
  },
  "SRD": {
    "name": "surinamese dollar",
    "country_code": "SR",
    "flag": "https://flagcdn.com/40x30/sr.png"
  },
  "SSP": {
    "name": "south sudanese pound",
    "country_code": "SS",
    "flag": "https://flagcdn.com/40x30/ss.png"
  },
  "STN": {
    "name": "são tomé and príncipe dobra",
    "country_code": "ST",
    "flag": "https://flagcdn.com/40x30/st.png"
  },
  "SYP": {
    "name": "syrian pound",
    "country_code": "SY",
    "flag": "https://flagcdn.com/40x30/sy.png"
  },
  "SZL": {
    "name": "swazi lilangeni",
    "country_code": "SZ",
    "flag": "https://flagcdn.com/40x30/sz.png"
  },
  "THB": {
    "name": "thai baht",
    "country_code": "TH",
    "flag": "https://flagcdn.com/40x30/th.png"
  },
  "TJS": {
    "name": "tajikistani somoni",
    "country_code": "TJ",
    "flag": "https://flagcdn.com/40x30/tj.png"
  },
  "TMT": {
    "name": "turkmenistan manat",
    "country_code": "TM",
    "flag": "https://flagcdn.com/40x30/tm.png"
  },
  "TND": {
    "name": "tunisian dinar",
    "country_code": "TN",
    "flag": "https://flagcdn.com/40x30/tn.png"
  },
  "TOP": {
    "name": "tongan pa'anga",
    "country_code": "TO",
    "flag": "https://flagcdn.com/40x30/to.png"
  },
  "TRY": {
    "name": "turkish lira",
    "country_code": "TR",
    "flag": "https://flagcdn.com/40x30/tr.png"
  },
  "TTD": {
    "name": "trinidad and tobago dollar",
    "country_code": "TT",
    "flag": "https://flagcdn.com/40x30/tt.png"
  },
  "TWD": {
    "name": "new taiwan dollar",
    "country_code": "TW",
    "flag": "https://flagcdn.com/40x30/tw.png"
  },
  "TZS": {
    "name": "tanzanian shilling",
    "country_code": "TZ",
    "flag": "https://flagcdn.com/40x30/tz.png"
  },
  "UAH": {
    "name": "ukrainian hryvnia",
    "country_code": "UA",
    "flag": "https://flagcdn.com/40x30/ua.png"
  },
  "UGX": {
    "name": "ugandan shilling",
    "country_code": "UG",
    "flag": "https://flagcdn.com/40x30/ug.png"
  },
  "USD": {
    "name": "united states dollar",
    "country_code": "US",
    "flag": "https://flagcdn.com/40x30/us.png"
  },
  "UYU": {
    "name": "uruguayan peso",
    "country_code": "UY",
    "flag": "https://flagcdn.com/40x30/uy.png"
  },
  "UZS": {
    "name": "uzbekistani som",
    "country_code": "UZ",
    "flag": "https://flagcdn.com/40x30/uz.png"
  },
  "VND": {
    "name": "vietnamese đồng",
    "country_code": "VN",
    "flag": "https://flagcdn.com/40x30/vn.png"
  },
  "VUV": {
    "name": "vanuatu vatu",
    "country_code": "VU",
    "flag": "https://flagcdn.com/40x30/vu.png"
  },
  "WST": {
    "name": "samoan tālā",
    "country_code": "WS",
    "flag": "https://flagcdn.com/40x30/ws.png"
  },
  "XAF": {
    "name": "central african cfa franc",
    "country_code": "CM",
    "flag": "https://flagcdn.com/40x30/cm.png"
  },
  "XCD": {
    "name": "east caribbean dollar",
    "country_code": "AG",
    "flag": "https://flagcdn.com/40x30/ag.png"
  },
  "XOF": {
    "name": "west african cfa franc",
    "country_code": "BJ",
    "flag": "https://flagcdn.com/40x30/bj.png"
  },
  "XPF": {
    "name": "cfp franc",
    "country_code": "PF",
    "flag": "https://flagcdn.com/40x30/pf.png"
  },
  "YER": {
    "name": "yemeni rial",
    "country_code": "YE",
    "flag": "https://flagcdn.com/40x30/ye.png"
  },
  "ZAR": {
    "name": "south african rand",
    "country_code": "ZA",
    "flag": "https://flagcdn.com/40x30/za.png"
  },
  "ZMW": {
    "name": "zambian kwacha",
    "country_code": "ZM",
    "flag": "https://flagcdn.com/40x30/zm.png"
  },
  "ZWL": {
    "name": "zimbabwean dollar",
    "country_code": "ZW",
    "flag": "https://flagcdn.com/40x30/zw.png"
  }
}

export default currencies;