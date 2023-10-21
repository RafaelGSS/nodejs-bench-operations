## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,861|85|
|Intl.DateTimeFormat().format(new Date())|8,496|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,367|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,006|71|
|Reusing Intl.DateTimeFormat()|501,396|97|
|Date.toLocaleDateString()|523,421|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,517|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7861.1039752781835,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8496.47469132082,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10367.312532799635,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8006.360094441306,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":501396.0285387245,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":523421.1830258163,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9517.471174649498,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
