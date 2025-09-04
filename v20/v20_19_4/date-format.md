## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,302|9664|
|Intl.DateTimeFormat().format(new Date())|18,786|9394|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,428|9747|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,440|9223|
|Reusing Intl.DateTimeFormat()|420,379|210192|
|Date.toLocaleDateString()|993,051|496527|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,317|11159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9664,"opsSec":19302.48643668766},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9394,"opsSec":18786.464244120973},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9747,"opsSec":19428.595769487554},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9223,"opsSec":18440.248117807096},{"name":"Reusing Intl.DateTimeFormat()","samples":210192,"opsSec":420379.78359077056},{"name":"Date.toLocaleDateString()","samples":496527,"opsSec":993051.1261100409},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11159,"opsSec":22317.89827501966}]}-->
