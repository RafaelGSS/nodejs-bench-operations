## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,546|77|
|Intl.DateTimeFormat().format(new Date())|8,541|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|7,149|71|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,672|81|
|Reusing Intl.DateTimeFormat()|413,724|85|
|Date.toLocaleDateString()|488,134|88|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,837|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7545.5440896061145,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8541.164904270965,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":7149.105888115374,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8671.923667417248,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":413723.5554711957,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":488133.9129696268,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9836.879589277612,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
