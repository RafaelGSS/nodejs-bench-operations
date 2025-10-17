## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,838|10920|
|Intl.DateTimeFormat().format(new Date())|21,739|10870|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,574|10788|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,547|10275|
|Reusing Intl.DateTimeFormat()|441,285|220645|
|Date.toLocaleDateString()|994,660|497331|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,613|13307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10920,"opsSec":21838.93426000811},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10870,"opsSec":21739.437774660273},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10788,"opsSec":21574.468514778007},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10275,"opsSec":20547.45363626067},{"name":"Reusing Intl.DateTimeFormat()","samples":220645,"opsSec":441285.62156406284},{"name":"Date.toLocaleDateString()","samples":497331,"opsSec":994660.6472615198},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13307,"opsSec":26613.00105439242}]}-->
