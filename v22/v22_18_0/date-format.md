## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,780|10391|
|Intl.DateTimeFormat().format(new Date())|19,841|9945|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,981|9991|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,783|9394|
|Reusing Intl.DateTimeFormat()|414,154|207080|
|Date.toLocaleDateString()|1,023,438|511889|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,620|12311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:49:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10391,"opsSec":20780.08789943185},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9945,"opsSec":19841.16458446729},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9991,"opsSec":19981.921910649173},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9394,"opsSec":18783.231763917338},{"name":"Reusing Intl.DateTimeFormat()","samples":207080,"opsSec":414154.5936259348},{"name":"Date.toLocaleDateString()","samples":511889,"opsSec":1023438.8282785532},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12311,"opsSec":24620.823026176055}]}-->
