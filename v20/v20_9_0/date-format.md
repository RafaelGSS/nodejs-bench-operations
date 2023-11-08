## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,129|85|
|Intl.DateTimeFormat().format(new Date())|19,820|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,547|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,626|83|
|Reusing Intl.DateTimeFormat()|620,552|95|
|Date.toLocaleDateString()|714,838|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,786|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:26:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19129.137298380698,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19820.03233560034,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21546.732422979476,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21626.353939318127,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":620552.1236722392,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":714838.4692849489,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19785.95554479332,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
