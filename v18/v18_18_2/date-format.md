## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,984|82|
|Intl.DateTimeFormat().format(new Date())|7,926|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|8,517|68|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,092|86|
|Reusing Intl.DateTimeFormat()|453,692|73|
|Date.toLocaleDateString()|532,514|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,221|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7983.626178657142,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7926.209938821381,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":8516.62091539255,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9091.675415527143,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":453692.18708741054,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":532513.909880408,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9221.470492896502,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
