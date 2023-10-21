## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,665|81|
|Intl.DateTimeFormat().format(new Date())|7,942|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,595|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,511|78|
|Reusing Intl.DateTimeFormat()|432,060|90|
|Date.toLocaleDateString()|495,581|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,976|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7665.355496494934,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7942.493962029965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8595.41907732375,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8510.697249872626,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":432060.0389791531,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":495581.2962201482,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8975.726530300342,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
