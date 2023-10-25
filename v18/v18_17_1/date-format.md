## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,686|89|
|Intl.DateTimeFormat().format(new Date())|9,762|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,615|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,455|77|
|Reusing Intl.DateTimeFormat()|475,250|90|
|Date.toLocaleDateString()|499,943|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,703|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10685.574335868647,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9761.769974798895,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11614.50577784418,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9454.64677365822,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":475249.5293657673,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":499943.42694623687,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11703.047863825377,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
