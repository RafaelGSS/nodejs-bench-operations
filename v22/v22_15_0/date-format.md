## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,394|9202|
|Intl.DateTimeFormat().format(new Date())|18,776|9394|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,350|9676|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,270|9136|
|Reusing Intl.DateTimeFormat()|515,529|258211|
|Date.toLocaleDateString()|977,020|488530|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,729|11618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:33:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9202,"opsSec":18394.35425814799},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9394,"opsSec":18776.834505575935},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9676,"opsSec":19350.290556631648},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9136,"opsSec":18270.137651788606},{"name":"Reusing Intl.DateTimeFormat()","samples":258211,"opsSec":515529.49368828814},{"name":"Date.toLocaleDateString()","samples":488530,"opsSec":977020.0633278915},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11618,"opsSec":22729.69628794244}]}-->
