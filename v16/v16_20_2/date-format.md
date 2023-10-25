## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,390|81|
|Intl.DateTimeFormat().format(new Date())|8,577|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,588|69|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,518|90|
|Reusing Intl.DateTimeFormat()|362,536|75|
|Date.toLocaleDateString()|452,016|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,865|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8389.928459050892,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8576.644191183335,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7587.950075972596,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10517.620389418931,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":362535.774685518,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":452015.9701095497,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9865.017323255144,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
