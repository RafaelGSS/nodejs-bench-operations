## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,927|10968|
|Intl.DateTimeFormat().format(new Date())|21,377|10689|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,906|10454|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,006|10004|
|Reusing Intl.DateTimeFormat()|436,887|218447|
|Date.toLocaleDateString()|1,041,754|520878|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,584|13293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10968,"opsSec":21927.022901407978},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10689,"opsSec":21377.676598508417},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10454,"opsSec":20906.8640464489},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10004,"opsSec":20006.2455322918},{"name":"Reusing Intl.DateTimeFormat()","samples":218447,"opsSec":436887.87832704885},{"name":"Date.toLocaleDateString()","samples":520878,"opsSec":1041754.5769632478},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13293,"opsSec":26584.167500165877}]}-->
