## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,140|11071|
|Intl.DateTimeFormat().format(new Date())|21,679|10840|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,696|10849|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,316|10159|
|Reusing Intl.DateTimeFormat()|447,818|223911|
|Date.toLocaleDateString()|1,032,494|516551|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,712|13357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:04:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11071,"opsSec":22140.733550040935},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10840,"opsSec":21679.72592490486},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10849,"opsSec":21696.417550089565},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10159,"opsSec":20316.729676160267},{"name":"Reusing Intl.DateTimeFormat()","samples":223911,"opsSec":447818.20697978686},{"name":"Date.toLocaleDateString()","samples":516551,"opsSec":1032494.1294062533},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13357,"opsSec":26712.124755417917}]}-->
