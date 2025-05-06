## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,491|6247|
|Intl.DateTimeFormat().format(new Date())|12,152|6077|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,792|6397|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,973|6487|
|Reusing Intl.DateTimeFormat()|634,448|317225|
|Date.toLocaleDateString()|646,399|323200|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,666|6334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6247,"opsSec":12491.975675341811},{"name":"Intl.DateTimeFormat().format(new Date())","samples":6077,"opsSec":12152.670862387778},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6397,"opsSec":12792.555285561382},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6487,"opsSec":12973.269163854924},{"name":"Reusing Intl.DateTimeFormat()","samples":317225,"opsSec":634448.6194398041},{"name":"Date.toLocaleDateString()","samples":323200,"opsSec":646399.3833349883},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6334,"opsSec":12666.046237035845}]}-->
