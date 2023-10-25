## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,003|78|
|Intl.DateTimeFormat().format(new Date())|10,404|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,329|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,071|73|
|Reusing Intl.DateTimeFormat()|519,317|86|
|Date.toLocaleDateString()|495,587|83|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,070|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11002.68760808246,"samples":9},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10404.349408668168,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13329.296346602649,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11071.198531327878,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":519317.21100407187,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":495586.9213459659,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13070.273333776035,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
