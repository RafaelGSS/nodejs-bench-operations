## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,688|9892|
|Intl.DateTimeFormat().format(new Date())|18,905|9453|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,602|9802|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,579|9291|
|Reusing Intl.DateTimeFormat()|428,259|214132|
|Date.toLocaleDateString()|971,836|486249|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,621|11812|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9892,"opsSec":19688.83264917194},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9453,"opsSec":18905.011872839434},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9802,"opsSec":19602.574187163926},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9291,"opsSec":18579.946432840563},{"name":"Reusing Intl.DateTimeFormat()","samples":214132,"opsSec":428259.6146215463},{"name":"Date.toLocaleDateString()","samples":486249,"opsSec":971836.4922801078},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11812,"opsSec":23621.547138545135}]}-->
