## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,230|79|
|Intl.DateTimeFormat().format(new Date())|14,249|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,039|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,706|75|
|Reusing Intl.DateTimeFormat()|617,348|99|
|Date.toLocaleDateString()|599,097|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,589|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:09:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11229.52213063676,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14249.240388381157,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15039.485082712883,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11705.56616998861,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":617348.4056867491,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":599096.7645265983,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13589.063432172135,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
