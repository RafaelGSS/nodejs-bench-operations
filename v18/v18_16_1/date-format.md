## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,398|86|
|Intl.DateTimeFormat().format(new Date())|12,515|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,783|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,571|93|
|Reusing Intl.DateTimeFormat()|481,464|81|
|Date.toLocaleDateString()|580,893|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,078|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:10:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12397.902183421056,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12514.745166826524,"samples":7},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15782.70105611353,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15571.14621660142,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481463.9323479556,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":580892.6591167705,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14078.180027627785,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
