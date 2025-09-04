## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,288|6145|
|Intl.DateTimeFormat().format(new Date())|11,803|5902|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,611|6306|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,402|6202|
|Reusing Intl.DateTimeFormat()|642,483|321242|
|Date.toLocaleDateString()|671,254|335661|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,148|6077|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:47:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6145,"opsSec":12288.813220152077},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5902,"opsSec":11803.559703615936},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6306,"opsSec":12611.32360426981},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6202,"opsSec":12402.24914968304},{"name":"Reusing Intl.DateTimeFormat()","samples":321242,"opsSec":642483.4860132112},{"name":"Date.toLocaleDateString()","samples":335661,"opsSec":671254.0744576975},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6077,"opsSec":12148.92782263405}]}-->
