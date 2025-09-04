## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,479|6240|
|Intl.DateTimeFormat().format(new Date())|11,697|5922|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,614|6308|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,496|6249|
|Reusing Intl.DateTimeFormat()|636,235|318119|
|Date.toLocaleDateString()|627,150|313698|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,210|6106|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6240,"opsSec":12479.526401973044},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5922,"opsSec":11697.73112549305},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6308,"opsSec":12614.196321296411},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6249,"opsSec":12496.72330975323},{"name":"Reusing Intl.DateTimeFormat()","samples":318119,"opsSec":636235.7095514456},{"name":"Date.toLocaleDateString()","samples":313698,"opsSec":627150.3790626416},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6106,"opsSec":12210.632775448132}]}-->
