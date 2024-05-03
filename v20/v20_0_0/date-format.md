## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,012|85|
|Intl.DateTimeFormat().format(new Date())|9,409|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,334|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,557|89|
|Reusing Intl.DateTimeFormat()|623,141|96|
|Date.toLocaleDateString()|759,018|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,954|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:28:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11011.741119083226,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9409.061016327247,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13334.160735805095,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14556.928886775604,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623141.3847792421,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":759017.5279646413,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13953.886349435648,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
