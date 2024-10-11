## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,390|8696|
|Intl.DateTimeFormat().format(new Date())|17,292|8647|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,954|8978|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,785|8894|
|Reusing Intl.DateTimeFormat()|535,886|317872|
|Date.toLocaleDateString()|931,813|465907|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,009|10505|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:07:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17390.60871652146,"samples":8696},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17292.0869764178,"samples":8647},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17954.035864384507,"samples":8978},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17785.318898746653,"samples":8894},{"name":"Reusing Intl.DateTimeFormat()","opsSec":535886.5146004277,"samples":317872},{"name":"Date.toLocaleDateString()","opsSec":931813.4241393039,"samples":465907},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21009.4385017466,"samples":10505}]}-->
