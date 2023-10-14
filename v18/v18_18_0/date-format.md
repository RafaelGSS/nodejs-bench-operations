## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,944|82|
|Intl.DateTimeFormat().format(new Date())|7,666|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,862|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,826|86|
|Reusing Intl.DateTimeFormat()|430,603|77|
|Date.toLocaleDateString()|491,721|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,396|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":7944.4613513048225,"cycles":6,"stats":{"deviation":0.000015779563541602495,"mean":0.00012587385799740306,"moe":0.0000034154201140805802,"rme":2.713367309478228,"sem":0.0000017425612826941736,"variance":2.4899462556347064e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":7666.119237991691,"cycles":3,"stats":{"deviation":0.000009491155288929803,"mean":0.0001304440968050964,"moe":0.0000020543206150289434,"rme":1.5748666787876306,"sem":0.000001048122762769869,"variance":9.008202871858017e-11}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":7862.180806411928,"cycles":3,"stats":{"deviation":0.000017925039098917123,"mean":0.00012719117311375737,"moe":0.000004199205832674815,"rme":3.3014915499828947,"sem":0.0000021424519554463344,"variance":3.2130702669770754e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":8825.932529979014,"cycles":4,"stats":{"deviation":0.000006169983984539028,"mean":0.00011330247501930288,"moe":0.0000013040399080003427,"rme":1.1509368244411065,"sem":6.653264836736443e-7,"variance":3.80687023694681e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":430602.6032347564,"cycles":5,"stats":{"deviation":0.0000027610192515459207,"mean":0.000002322326879790875,"moe":6.167087972237692e-7,"rme":26.55564135223305,"sem":3.146473455223312e-7,"variance":7.623227307407196e-12}},{"name":"Date.toLocaleDateString()","hz":491720.65430414723,"cycles":4,"stats":{"deviation":9.74900811524331e-8,"mean":0.0000020336749966607328,"moe":2.003068526536544e-8,"rme":0.9849501664845937,"sem":1.021973738028849e-8,"variance":9.504315923107992e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":8395.541905661717,"cycles":5,"stats":{"deviation":0.00003498595184675237,"mean":0.0001191108342066196,"moe":0.000007619162846626072,"rme":6.396700096491001,"sem":0.000003887327982972485,"variance":1.2240168266232753e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
