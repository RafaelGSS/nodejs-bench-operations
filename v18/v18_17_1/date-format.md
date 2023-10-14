## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,123|81|
|Intl.DateTimeFormat().format(new Date())|9,881|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,731|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,492|86|
|Reusing Intl.DateTimeFormat()|380,379|95|
|Date.toLocaleDateString()|463,088|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,395|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":10123.04153055097,"cycles":3,"stats":{"deviation":0.000011735420526098644,"mean":0.00009878453990157369,"moe":0.0000025557138034614828,"rme":2.587159697264297,"sem":0.0000013039356140109605,"variance":1.3772009492437737e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":9880.759695491915,"cycles":4,"stats":{"deviation":0.000010089470023916462,"mean":0.00010120679288013135,"moe":0.0000022391187381751028,"rme":2.212419418158127,"sem":0.0000011424075194770933,"variance":1.0179740536350884e-10}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":9730.83213884513,"cycles":3,"stats":{"deviation":0.00014445560010920247,"mean":0.00010276613405014318,"moe":0.000032058496657616194,"rme":31.19558495989908,"sem":0.00001635637584572255,"variance":2.0867420402909815e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":11491.88132215141,"cycles":5,"stats":{"deviation":0.000010769504184022306,"mean":0.0000870179539769898,"moe":0.0000022761587842907503,"rme":2.615734661944173,"sem":0.0000011613055021891584,"variance":1.1598222036967394e-10}},{"name":"Reusing Intl.DateTimeFormat()","hz":380378.8167243656,"cycles":5,"stats":{"deviation":0.0000039893910704221,"mean":0.0000026289581754617826,"moe":8.022336597459594e-7,"rme":30.515269023062537,"sem":4.093028876254895e-7,"variance":1.591524111276359e-11}},{"name":"Date.toLocaleDateString()","hz":463087.66594120034,"cycles":3,"stats":{"deviation":9.538848826508791e-8,"mean":0.0000021594183424590993,"moe":1.9283599835243374e-8,"rme":0.8929997238646971,"sem":9.838571344511926e-9,"variance":9.098963693498815e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":11394.997872793681,"cycles":4,"stats":{"deviation":0.0000343193889961965,"mean":0.00008775780488626214,"moe":0.00000729602235166143,"rme":8.313815917703714,"sem":0.0000037224603835007294,"variance":1.1778204610722537e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
