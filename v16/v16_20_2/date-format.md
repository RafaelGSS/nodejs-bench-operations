## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,945|82|
|Intl.DateTimeFormat().format(new Date())|9,724|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|9,801|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|7,369|72|
|Reusing Intl.DateTimeFormat()|423,422|98|
|Date.toLocaleDateString()|403,380|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,325|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8944.508847031371,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9724.198516029357,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":9800.739136107439,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":7368.913152455417,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":423422.3028967557,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":403379.69717151154,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10325.132520495741,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
