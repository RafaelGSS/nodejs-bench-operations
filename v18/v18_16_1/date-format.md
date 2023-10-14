## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,220|90|
|Intl.DateTimeFormat().format(new Date())|8,605|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,072|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,655|84|
|Reusing Intl.DateTimeFormat()|411,910|96|
|Date.toLocaleDateString()|416,440|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,140|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:44:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","hz":9219.98006823209,"cycles":6,"stats":{"deviation":0.000017141847110252578,"mean":0.00010846010431687926,"moe":0.0000035415423044905426,"rme":3.2652949458203544,"sem":0.0000018069093390257872,"variance":2.9384292235127466e-10}},{"name":"Intl.DateTimeFormat().format(new Date())","hz":8604.914452456791,"cycles":6,"stats":{"deviation":0.0000045552084754205675,"mean":0.00011621266027978813,"moe":0.0000010174638001554026,"rme":0.8755188958808832,"sem":5.191141837527564e-7,"variance":2.074992425454337e-11}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","hz":8071.594244074925,"cycles":5,"stats":{"deviation":0.00021962829689800415,"mean":0.00012389126234065408,"moe":0.0000507315483051635,"rme":40.94844732929667,"sem":0.00002588344301283852,"variance":4.823658879831786e-8}},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","hz":11655.013136565349,"cycles":4,"stats":{"deviation":0.000008963223486317721,"mean":0.00008579998909333645,"moe":0.0000019168170045199904,"rme":2.234052736807233,"sem":9.779678594489747e-7,"variance":8.033937526567762e-11}},{"name":"Reusing Intl.DateTimeFormat()","hz":411909.73544675513,"cycles":6,"stats":{"deviation":7.974474004097964e-8,"mean":0.000002427716351290909,"moe":1.5952270359655404e-8,"rme":0.6570895463620771,"sem":8.138913448803777e-9,"variance":6.359223564203421e-15}},{"name":"Date.toLocaleDateString()","hz":416439.58605155523,"cycles":7,"stats":{"deviation":3.985461121233467e-8,"mean":0.0000024013086975746825,"moe":7.931380424837728e-9,"rme":0.33029407809368316,"sem":4.046622665733535e-9,"variance":1.5883900348863525e-15}},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","hz":10140.21076479013,"cycles":5,"stats":{"deviation":0.00006344653060066338,"mean":0.00009861727958084476,"moe":0.000013903334025241181,"rme":14.098273734922353,"sem":0.000007093537767980194,"variance":4.025462245260916e-9}},{"name":"Format using date.get*","hz":0,"cycles":0,"stats":{"deviation":0,"mean":0,"moe":0,"rme":0,"sem":0,"variance":0}}]}-->
