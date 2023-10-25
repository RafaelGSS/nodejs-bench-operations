## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|4,723|82|
|Intl.DateTimeFormat().format(new Date())|5,930|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|5,571|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|4,554|64|
|Reusing Intl.DateTimeFormat()|433,198|84|
|Date.toLocaleDateString()|388,640|81|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|6,121|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":4722.754051548831,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":5929.8826718697,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":5570.7324146711935,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":4554.330642714435,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":433197.74731315306,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":388640.31821695424,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":6121.304853934307,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
