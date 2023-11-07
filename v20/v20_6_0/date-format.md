## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,327|84|
|Intl.DateTimeFormat().format(new Date())|19,970|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,060|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,694|84|
|Reusing Intl.DateTimeFormat()|732,132|98|
|Date.toLocaleDateString()|742,528|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,783|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18326.78091198963,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19969.862506247813,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19059.871605293127,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18694.045097944338,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":732131.8540976663,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":742528.263338057,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19782.517955133866,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
