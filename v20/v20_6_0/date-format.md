## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,865|85|
|Intl.DateTimeFormat().format(new Date())|11,211|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,640|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,199|93|
|Reusing Intl.DateTimeFormat()|520,167|84|
|Date.toLocaleDateString()|590,474|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,576|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12865.134575299155,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11210.594471121263,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13639.908042010687,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15198.884212152852,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520167.39963347965,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":590474.2530933486,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14575.81146967258,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
