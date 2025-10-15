## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,167|6084|
|Intl.DateTimeFormat().format(new Date())|11,857|5929|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,891|6447|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,724|6363|
|Reusing Intl.DateTimeFormat()|619,972|310032|
|Date.toLocaleDateString()|617,923|308980|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,722|6510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6084,"opsSec":12167.514126825889},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5929,"opsSec":11857.555768530687},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6447,"opsSec":12891.202480149781},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6363,"opsSec":12724.526398046894},{"name":"Reusing Intl.DateTimeFormat()","samples":310032,"opsSec":619972.687942629},{"name":"Date.toLocaleDateString()","samples":308980,"opsSec":617923.6512591384},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6510,"opsSec":12722.143129316317}]}-->
