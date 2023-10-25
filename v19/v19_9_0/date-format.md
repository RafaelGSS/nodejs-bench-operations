## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,263|77|
|Intl.DateTimeFormat().format(new Date())|8,435|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,077|70|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,228|87|
|Reusing Intl.DateTimeFormat()|483,594|98|
|Date.toLocaleDateString()|478,931|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,754|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8262.796841149953,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8435.455800217904,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7076.545006394732,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8227.729160432798,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":483593.9861800774,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":478930.7313012001,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9753.881449856915,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
