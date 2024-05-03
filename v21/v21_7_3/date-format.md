## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,762|80|
|Intl.DateTimeFormat().format(new Date())|18,022|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,764|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,702|80|
|Reusing Intl.DateTimeFormat()|760,059|86|
|Date.toLocaleDateString()|895,802|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,795|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17761.556230266116,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18022.190238890733,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17764.494935234354,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18701.961362642913,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":760059.0476413654,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":895801.8336038354,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21795.282111332435,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
