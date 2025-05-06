## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,492|9747|
|Intl.DateTimeFormat().format(new Date())|19,093|9547|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,004|9503|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,064|9036|
|Reusing Intl.DateTimeFormat()|518,915|259540|
|Date.toLocaleDateString()|1,025,014|512509|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,925|11463|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:35:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9747,"opsSec":19492.012165615328},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9547,"opsSec":19093.95757322627},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9503,"opsSec":19004.617338070184},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9036,"opsSec":18064.082620971723},{"name":"Reusing Intl.DateTimeFormat()","samples":259540,"opsSec":518915.6625231729},{"name":"Date.toLocaleDateString()","samples":512509,"opsSec":1025014.7015026906},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11463,"opsSec":22925.052324187025}]}-->
