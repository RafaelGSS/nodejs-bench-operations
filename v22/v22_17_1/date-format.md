## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,462|10242|
|Intl.DateTimeFormat().format(new Date())|19,935|9970|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,645|9832|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,081|9543|
|Reusing Intl.DateTimeFormat()|445,955|223461|
|Date.toLocaleDateString()|978,505|489253|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,330|12168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10242,"opsSec":20462.866074695252},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9970,"opsSec":19935.517618476595},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9832,"opsSec":19645.24480265837},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9543,"opsSec":19081.397719521232},{"name":"Reusing Intl.DateTimeFormat()","samples":223461,"opsSec":445955.385458643},{"name":"Date.toLocaleDateString()","samples":489253,"opsSec":978505.0097529301},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12168,"opsSec":24330.966117757966}]}-->
