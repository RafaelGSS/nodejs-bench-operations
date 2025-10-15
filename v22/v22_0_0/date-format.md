## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,780|9895|
|Intl.DateTimeFormat().format(new Date())|18,930|9466|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,015|9508|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,116|9062|
|Reusing Intl.DateTimeFormat()|383,089|191562|
|Date.toLocaleDateString()|691,984|345993|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,717|11860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:22:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9895,"opsSec":19780.764993808873},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9466,"opsSec":18930.546134056905},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9508,"opsSec":19015.657337854773},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9062,"opsSec":18116.5112864286},{"name":"Reusing Intl.DateTimeFormat()","samples":191562,"opsSec":383089.22086199484},{"name":"Date.toLocaleDateString()","samples":345993,"opsSec":691984.3586131014},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11860,"opsSec":23717.04978874268}]}-->
