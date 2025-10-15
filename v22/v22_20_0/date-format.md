## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,915|10458|
|Intl.DateTimeFormat().format(new Date())|19,893|9947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,051|10026|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,015|9511|
|Reusing Intl.DateTimeFormat()|443,872|222456|
|Date.toLocaleDateString()|963,252|481650|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,967|12484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10458,"opsSec":20915.9405987287},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9947,"opsSec":19893.123986392136},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10026,"opsSec":20051.700186978807},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9511,"opsSec":19015.44841740227},{"name":"Reusing Intl.DateTimeFormat()","samples":222456,"opsSec":443872.3754384194},{"name":"Date.toLocaleDateString()","samples":481650,"opsSec":963252.1398541791},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12484,"opsSec":24967.711822670142}]}-->
