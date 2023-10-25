## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,462|80|
|Intl.DateTimeFormat().format(new Date())|6,699|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,143|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,641|85|
|Reusing Intl.DateTimeFormat()|375,408|75|
|Date.toLocaleDateString()|469,992|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,528|78|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7461.508680166917,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":6699.351997848606,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8142.811670478267,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10640.997367712687,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":375408.1042860747,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":469992.3769740235,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9528.24627829317,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
