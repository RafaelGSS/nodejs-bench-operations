## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,702|10854|
|Intl.DateTimeFormat().format(new Date())|21,384|10693|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,340|10671|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,983|9992|
|Reusing Intl.DateTimeFormat()|419,135|209603|
|Date.toLocaleDateString()|1,065,602|532889|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,032|13021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10854,"opsSec":21702.324885447106},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10693,"opsSec":21384.031514362978},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10671,"opsSec":21340.83969854559},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9992,"opsSec":19983.664554206793},{"name":"Reusing Intl.DateTimeFormat()","samples":209603,"opsSec":419135.4670453347},{"name":"Date.toLocaleDateString()","samples":532889,"opsSec":1065602.239566606},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13021,"opsSec":26032.966404459858}]}-->
