## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,360|82|
|Intl.DateTimeFormat().format(new Date())|7,681|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,327|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,835|89|
|Reusing Intl.DateTimeFormat()|453,595|85|
|Date.toLocaleDateString()|468,965|89|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,475|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7360.390332306133,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7680.972570099218,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7326.667020333126,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8835.432616243752,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":453595.3069313207,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":468965.2657166706,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8474.506643035857,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
