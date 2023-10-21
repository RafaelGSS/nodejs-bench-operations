## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,163|82|
|Intl.DateTimeFormat().format(new Date())|11,078|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,731|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,753|74|
|Reusing Intl.DateTimeFormat()|594,243|99|
|Date.toLocaleDateString()|548,351|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,248|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12163.35852829241,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11077.888661067645,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13730.665629938809,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":13753.365408648624,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":594243.3229724745,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":548351.4226388264,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14247.989598081624,"samples":8},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
