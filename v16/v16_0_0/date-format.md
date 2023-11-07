## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,084|80|
|Intl.DateTimeFormat().format(new Date())|11,378|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,422|85|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,025|95|
|Reusing Intl.DateTimeFormat()|538,518|99|
|Date.toLocaleDateString()|634,101|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,024|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12083.821931871369,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11378.067789535595,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12422.337305368856,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16025.248160802828,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":538518.4357623901,"samples":7},{"name":"Date.toLocaleDateString()","opsSec":634100.7504488296,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14024.481102567877,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
