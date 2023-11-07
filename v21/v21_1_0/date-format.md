## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,340|83|
|Intl.DateTimeFormat().format(new Date())|19,438|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,305|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,151|84|
|Reusing Intl.DateTimeFormat()|731,954|100|
|Date.toLocaleDateString()|735,633|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,919|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:18:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20340.0109767972,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19438.01535174621,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19304.6855601913,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15150.932124841887,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":731954.3902071255,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":735632.5074795183,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20918.947798744386,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
