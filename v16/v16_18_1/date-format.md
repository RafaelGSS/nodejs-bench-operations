## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|5,031|82|
|Intl.DateTimeFormat().format(new Date())|5,127|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,383|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|5,452|73|
|Reusing Intl.DateTimeFormat()|378,093|74|
|Date.toLocaleDateString()|386,146|90|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,053|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":5030.7795510497945,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5126.59223732081,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5382.799320503527,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":5452.415862181339,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":378093.22215500183,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":386145.5196160076,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6053.482862658436,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
