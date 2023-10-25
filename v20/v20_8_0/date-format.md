## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,328|86|
|Intl.DateTimeFormat().format(new Date())|10,883|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,373|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,295|96|
|Reusing Intl.DateTimeFormat()|528,092|88|
|Date.toLocaleDateString()|608,502|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,386|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:49:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12328.174886313074,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10883.065742652376,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12373.172426669045,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15295.118322951455,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":528092.0123634248,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":608502.0031385712,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14385.974942111146,"samples":10},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
