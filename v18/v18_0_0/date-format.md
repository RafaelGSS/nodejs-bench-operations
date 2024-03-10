## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,729|79|
|Intl.DateTimeFormat().format(new Date())|9,360|95|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,194|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,046|86|
|Reusing Intl.DateTimeFormat()|622,911|93|
|Date.toLocaleDateString()|627,023|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,164|77|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10729.13188654966,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9359.986839125171,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12193.749972451466,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14045.671671956847,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":622911.1592700528,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":627023.3641963374,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13164.414946373108,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
