## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,393|82|
|Intl.DateTimeFormat().format(new Date())|7,296|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,056|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,669|96|
|Reusing Intl.DateTimeFormat()|360,388|75|
|Date.toLocaleDateString()|459,265|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,856|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8392.97672293384,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7296.325519604895,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9056.200030131107,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10669.192123029083,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":360388.3646887235,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":459265.19104777824,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9856.469077954785,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
