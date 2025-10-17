## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,404|6203|
|Intl.DateTimeFormat().format(new Date())|12,377|6189|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,206|6604|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,039|6520|
|Reusing Intl.DateTimeFormat()|631,283|315659|
|Date.toLocaleDateString()|637,832|319089|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,741|6371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:04:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6203,"opsSec":12404.261592354878},{"name":"Intl.DateTimeFormat().format(new Date())","samples":6189,"opsSec":12377.277315532101},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6604,"opsSec":13206.163735757198},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6520,"opsSec":13039.524448543361},{"name":"Reusing Intl.DateTimeFormat()","samples":315659,"opsSec":631283.0610077055},{"name":"Date.toLocaleDateString()","samples":319089,"opsSec":637832.0730508451},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6371,"opsSec":12741.641373761893}]}-->
