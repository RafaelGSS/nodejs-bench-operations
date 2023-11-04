## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,381|83|
|Intl.DateTimeFormat().format(new Date())|11,090|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,700|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,580|89|
|Reusing Intl.DateTimeFormat()|464,228|83|
|Date.toLocaleDateString()|566,259|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,207|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:11:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13380.956702883317,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11089.904460825488,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13700.003243888168,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14579.690785106692,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":464228.19243604207,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":566259.484443638,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14206.570509589184,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
