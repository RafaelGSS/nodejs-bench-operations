## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,606|10304|
|Intl.DateTimeFormat().format(new Date())|20,415|10208|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,424|10213|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,343|9672|
|Reusing Intl.DateTimeFormat()|548,880|274442|
|Date.toLocaleDateString()|1,116,519|558262|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,888|12445|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:36:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10304,"opsSec":20606.018731298984},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10208,"opsSec":20415.707851220646},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10213,"opsSec":20424.929733681955},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9672,"opsSec":19343.190564847624},{"name":"Reusing Intl.DateTimeFormat()","samples":274442,"opsSec":548880.3279906057},{"name":"Date.toLocaleDateString()","samples":558262,"opsSec":1116519.6031458026},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12445,"opsSec":24888.766164306173}]}-->
