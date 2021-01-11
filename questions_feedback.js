questions = [
    //Valid questionTypes: customNumber, smallSelection, bigSelection, customText
    {
    "id": 1,
    "question": "Где вы себя видите на политическом компасе?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Authoritarian Left",
        "color": "#990000",
        "effect": "AuthLeft"
        },
        {
        "label": "Authoritarian Right",
        "color": "#003399",
        "effect": "AuthRight"
        },
        {
        "label": "Centrist",
        "color": "#999999",
        "effect": "Centrist"
        },
        {
        "label": "Libertarian Left",
        "color": "#339900",
        "effect": "LibLeft"
        },
        {
        "label": "Libertarian Right",
        "color": "#999900",
        "effect": "LibRight"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 2,
    "question": "Как бы вы себя классифицировали?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Авторитарный",
        "color": "#6d4cb0",
        "effect": "Auth"
        },
        {
        "label": "Правый",
        "color": "#4c96af",
        "effect": "Right"
        },
        {
        "label": "Центрист",
        "color": "#999999",
        "effect": "Centrist"
        },
        {
        "label": "Левый",
        "color": "#af4c4c",
        "effect": "Left"
        },
        {
        "label": "Либертарианец",
        "color": "#4caf50",
        "effect": "Lib"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 3,
    "question": "Каковы ваши культурные ценности?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Радикально прогрессивные",
        "color": "#1b5e20",
        "effect": 3
        },
        {
        "label": "Прогрессивные",
        "color": "#4caf50",
        "effect": 2
        },
        {
        "label": "Умеренно прогрессивные",
        "color": "#7ae67e",
        "effect": 1
        },
        {
        "label": "Нейтральные",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Умеренно консервативные",
        "color": "#7acbe6",
        "effect": -1
        },
        {
        "label": "Консервативные",
        "color": "#4c96af",
        "effect": -2
        },
        {
        "label": "Радикально консервативные",
        "color": "#1b4e5e",
        "effect": -3
        },
        {
        "label": "Пропустить",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 4,
    "question": "Каковы ваши взгляды на экономику?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Радикально правые",
        "color": "#5e5e1b",
        "effect": 3
        },
        {
        "label": "Правые",
        "color": "#afaf4c",
        "effect": 2
        },
        {
        "label": "Умеренно правые",
        "color": "#d1d16d",
        "effect": 1
        },
        {
        "label": "Нейтральные",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Умеренно левые",
        "color": "#e67a7a",
        "effect": -1
        },
        {
        "label": "Левые",
        "color": "#af4c4c",
        "effect": -2
        },
        {
        "label": "Радикально левые",
        "color": "#5e1b1b",
        "effect": -3
        },
        {
        "label": "Пропустить",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 5,
    "question": "Каковы ваши взгляды на власть?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Радикально авторитарные",
        "color": "#321b5e",
        "effect": 3
        },
        {
        "label": "Авторитарные",
        "color": "#6d4cb0",
        "effect": 2
        },
        {
        "label": "Умеренно авторитарные",
        "color": "#9e7ae6",
        "effect": 1
        },
        {
        "label": "Нейтральные",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "Умеренно либертарные",
        "color": "#7ae683",
        "effect": -1
        },
        {
        "label": "Либертарные",
        "color": "#4cb054",
        "effect": -2
        },
        {
        "label": "Радикально либертарные",
        "color": "#1b5e21",
        "effect": -3
        },
        {
        "label": "Пропустить",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 6,
    "question": "Как бы вы назвали свою идеологию?",
    "questionType": "customText"
    },
    {
    "id": 7,
    "question": "Ваш гендер",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Мужской",
        "color": "#003399",
        "effect": "Male"
        },
        {
        "label": "Женский",
        "color": "#990000",
        "effect": "Female"
        },
        {
        "label": "Female-to-Male",
        "color": "#7acbe6",
        "effect": "FtM"
        },
        {
        "label": "Male-to-Female",
        "color": "#e67a7a",
        "effect": "FtM"
        },
        {
        "label": "Другой",
        "color": "#6d4cb0",
        "effect": "Other"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 8,
    "question": "Ваш возраст (13-99)",
    "questionType": "customNumber",
    "range":[13,99]
    },
    {
    "id": 9,
    "question": "Какой религии вы придерживаетесь?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Агностик",
        "color": "#4c96af",
        "effect": "Agnostic"
        },
        {
        "label": "Атеист",
        "color": "#4c96af",
        "effect": "Atheist"
        },
        {
        "label": "Христианство",
        "color": "#afaf4c",
        "effect": "Christian"
        },
        {
        "label": "Ислам",
        "color": "#4caf50",
        "effect": "Islam"
        },
        {
        "label": "Буддизм",
        "color": "#afaf4c",
        "effect": "Buddhist"
        },
        {
        "label": "Язычество",
        "color": "#af4c4c",
        "effect": "Pagan"
        },
        {
        "label": "Other",
        "color": "#6d4cb0",
        "effect": "Other"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 10,
    "question": "Где вы живёте?",
    "questionType": "bigSelection",
    "answers": {"AF":"Afghanistan","AX":"\u00c5land Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua & Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia & Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","VG":"British Virgin Islands","BN":"Brunei","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","BQ":"Caribbean Netherlands","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo - Brazzaville","CD":"Congo - Kinshasa","CK":"Cook Islands","CR":"Costa Rica","CI":"C\u00f4te d\u2019Ivoire","HR":"Croatia","CU":"Cuba","CW":"Cura\u00e7ao","CY":"Cyprus","CZ":"Czechia","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","SZ":"Eswatini","ET":"Ethiopia","FK":"Falkland Islands","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GG":"Guernsey","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard & McDonald Islands","HN":"Honduras","HK":"Hong Kong SAR China","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Laos","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao SAR China","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia","MD":"Moldova","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar (Burma)","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","KP":"North Korea","MK":"North Macedonia","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territories","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn Islands","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"R\u00e9union","RO":"Romania","RU":"Russia","RW":"Rwanda","WS":"Samoa","SM":"San Marino","ST":"S\u00e3o Tom\u00e9 & Pr\u00edncipe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SX":"Sint Maarten","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia & South Sandwich Islands","KR":"South Korea","SS":"South Sudan","ES":"Spain","LK":"Sri Lanka","BL":"St. Barth\u00e9lemy","SH":"St. Helena","KN":"St. Kitts & Nevis","LC":"St. Lucia","MF":"St. Martin","PM":"St. Pierre & Miquelon","VC":"St. Vincent & Grenadines","SD":"Sudan","SR":"Suriname","SJ":"Svalbard & Jan Mayen","SE":"Sweden","CH":"Switzerland","SY":"Syria","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad & Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks & Caicos Islands","TV":"Tuvalu","UM":"U.S. Outlying Islands","VI":"U.S. Virgin Islands","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VA":"Vatican City","VE":"Venezuela","VN":"Vietnam","WF":"Wallis & Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"}
    },
    {
    "id": 11,
    "question": "На каких науках вы фокусируетесь?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "На естественных",
        "color": "#4c96af",
        "effect": 2
        },
        {
        "label": "В основном на естественных",
        "color": "#7acbe6",
        "effect": 1
        },
        {
        "label": "Поровну",
        "color": "#a9a9a9",
        "effect": 0
        },
        {
        "label": "В основном на гуманитарных",
        "color": "#e67a7a",
        "effect": -1
        },
        {
        "label": "На гуманитарных",
        "color": "#af4c4c",
        "effect": -2
        },
        {
        "label": "Пропустить",
        "color": "#a9a9a9",
        "effect": null
        }]
    },
    {
    "id": 12,
    "question": "Что лучше всего описывает ваш статус?",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Безработный студент",
        "color": "#4c96af",
        "effect": "Student"
        },
        {
        "label": "Работающий студент",
        "color": "#6d4cb0",
        "effect": "StudentWorker"
        },
        {
        "label": "Работник частного сектора",
        "color": "#afaf4c",
        "effect": "Private"
        },
        {
        "label": "Работник государственного сектора",
        "color": "#4caf50",
        "effect": "Public"
        },
        {
        "label": "Не в сфере занятости, образования или обучения",
        "color": "#af4c4c",
        "effect": "NEET"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 13,
    "question": "Ваш уровень образования",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Начальная школа или ниже",
        "color": "#af4c4c",
        "effect": "Primary"
        },
        {
        "label": "Старшая школа / колледж",
        "color": "#4c96af",
        "effect": "Middle"
        },
        {
        "label": "ПТУ",
        "color": "#4caf50",
        "effect": "Trade"
        },
        {
        "label": "Бакалавриат",
        "color": "#d1d16d",
        "effect": "Bachelor"
        },
        {
        "label": "Магистратура",
        "color": "#afaf4c",
        "effect": "Master"
        },
        {
        "label": "Докторская степень",
        "color": "#5e5e1b",
        "effect": "Doctor"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 14,
    "question": "Среда вашего проживания",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Большой город",
        "color": "#6d4cb0",
        "effect": "City"
        },
        {
        "label": "Маленький город",
        "color": "#4c96af",
        "effect": "Town"
        },
        {
        "label": "Деревня",
        "color": "#d1d16d",
        "effect": "Village"
        },
        {
        "label": "Изолированное жилище (например, дом в лесу)",
        "color": "#4caf50",
        "effect": "Isolated"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
    {
    "id": 15,
    "question": "Ваша физическая активность",
    "questionType": "smallSelection",
    "answers":[
        {
        "label": "Регулярно тренируюсь",
        "color": "#4caf50",
        "effect": "Regular"
        },
        {
        "label": "Я активен, но не тренируюсь",
        "color": "#4c96af",
        "effect": "Occasional"
        },
        {
        "label": "Я выхожу из дома только в случае необходимости",
        "color": "#d1d16d",
        "effect": "Rare"
        },
        {
        "label": "Пропустить",
        "color": "#999999",
        "effect": null
        }]
    },
]
