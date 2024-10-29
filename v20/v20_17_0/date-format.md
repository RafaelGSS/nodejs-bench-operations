## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,097|8075|
|Intl.DateTimeFormat().format(new Date())|17,590|8796|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,094|9048|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,902|8952|
|Reusing Intl.DateTimeFormat()|557,312|320733|
|Date.toLocaleDateString()|933,139|466600|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,193|10598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:26:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16097.71744693064,"samples":8075},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17590.257931215525,"samples":8796},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18094.16966617325,"samples":9048},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17902.609253702733,"samples":8952},{"name":"Reusing Intl.DateTimeFormat()","opsSec":557312.6377068497,"samples":320733},{"name":"Date.toLocaleDateString()","opsSec":933139.644527792,"samples":466600},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21193.92786967218,"samples":10598}]}-->
