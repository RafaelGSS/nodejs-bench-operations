## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,059|9530|
|Intl.DateTimeFormat().format(new Date())|18,949|9475|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,109|9555|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,572|9314|
|Reusing Intl.DateTimeFormat()|393,558|205605|
|Date.toLocaleDateString()|718,524|359427|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,424|11713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19059.373404039972,"samples":9530},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18949.234071958814,"samples":9475},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19109.744617372933,"samples":9555},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18572.460468476016,"samples":9314},{"name":"Reusing Intl.DateTimeFormat()","opsSec":393558.45163889317,"samples":205605},{"name":"Date.toLocaleDateString()","opsSec":718524.1815931167,"samples":359427},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23424.210015567453,"samples":11713}]}-->
