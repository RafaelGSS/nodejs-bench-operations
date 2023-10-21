## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,465|83|
|Intl.DateTimeFormat().format(new Date())|8,916|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,979|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,197|83|
|Reusing Intl.DateTimeFormat()|442,330|99|
|Date.toLocaleDateString()|447,774|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,058|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8464.780757689852,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8915.62960615865,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10979.132374236102,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10196.620179693678,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":442330.2153303844,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":447773.7974742581,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10058.03346774484,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
