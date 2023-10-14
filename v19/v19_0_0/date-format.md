## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,565|84|
|Intl.DateTimeFormat().format(new Date())|8,847|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,002|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,854|82|
|Reusing Intl.DateTimeFormat()|451,159|97|
|Date.toLocaleDateString()|458,316|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,690|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":8564.777369647561,"cycles":4,"stats":{"deviation":0.00006064961822872876,"mean":0.00011675726721676009,"moe":0.000012970135098821742,"rme":11.108631957565999,"sem":0.000006617415866745787,"variance":3.6783761912905474e-9}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8846.65910812446,"cycles":4,"stats":{"deviation":0.000009521757564633962,"mean":0.00011303702197382457,"moe":0.0000021407521794395116,"rme":1.8938504766475845,"sem":0.0000010922204997140365,"variance":9.066386711966406e-11}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8001.979801554531,"cycles":3,"stats":{"deviation":0.00021000824926136448,"mean":0.00012496907325431286,"moe":0.000048176028571834034,"rme":38.55036075509299,"sem":0.00002457960641420104,"variance":4.4103464757823395e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":9854.17509692562,"cycles":3,"stats":{"deviation":0.0001390278129016874,"mean":0.00010147982861721095,"moe":0.00003009198494933989,"rme":29.65316887048457,"sem":0.000015353053545581577,"variance":1.9328732760226597e-8}},{"name":"Reusing Intl.DateTimeFormat()","hz":451158.77963218716,"cycles":5,"stats":{"deviation":1.490152554461419e-7,"mean":0.000002216514551296691,"moe":2.965520536007478e-8,"rme":1.3379206259993233,"sem":1.5130206816364683e-8,"variance":2.220554635567892e-14}},{"name":"Date.toLocaleDateString()","hz":458315.72374987404,"cycles":5,"stats":{"deviation":1.3915567020564573e-7,"mean":0.000002181902012477648,"moe":2.907472680133297e-8,"rme":1.3325404456782781,"sem":1.4834044286394373e-8,"variance":1.9364300550382436e-14}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10689.916047712792,"cycles":4,"stats":{"deviation":0.00005488763907019597,"mean":0.00009354610415429404,"moe":0.000012181010582809703,"rme":13.02139805065368,"sem":0.000006214801317760053,"variance":3.012652922700103e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
