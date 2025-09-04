## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,661|9834|
|Intl.DateTimeFormat().format(new Date())|19,013|9524|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,803|9404|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,613|8860|
|Reusing Intl.DateTimeFormat()|373,182|186638|
|Date.toLocaleDateString()|697,193|348598|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,199|11602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9834,"opsSec":19661.376318254894},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9524,"opsSec":19013.048958543175},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9404,"opsSec":18803.683915216203},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8860,"opsSec":17613.76945413501},{"name":"Reusing Intl.DateTimeFormat()","samples":186638,"opsSec":373182.683430912},{"name":"Date.toLocaleDateString()","samples":348598,"opsSec":697193.7885013028},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11602,"opsSec":23199.61304597146}]}-->
