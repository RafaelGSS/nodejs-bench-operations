## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,134|11068|
|Intl.DateTimeFormat().format(new Date())|21,076|10539|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,797|10399|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,988|9995|
|Reusing Intl.DateTimeFormat()|459,739|229872|
|Date.toLocaleDateString()|1,026,874|513620|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,677|13339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:24:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11068,"opsSec":22134.51871373864},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10539,"opsSec":21076.13084226012},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10399,"opsSec":20797.617240652304},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9995,"opsSec":19988.66711569939},{"name":"Reusing Intl.DateTimeFormat()","samples":229872,"opsSec":459739.4200758972},{"name":"Date.toLocaleDateString()","samples":513620,"opsSec":1026874.0097804263},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13339,"opsSec":26677.669090192605}]}-->
