## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,061|11031|
|Intl.DateTimeFormat().format(new Date())|21,772|10887|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,365|10683|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,501|10254|
|Reusing Intl.DateTimeFormat()|461,849|230931|
|Date.toLocaleDateString()|1,042,457|521233|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,447|13225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:22:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11031,"opsSec":22061.24912332484},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10887,"opsSec":21772.87395050503},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10683,"opsSec":21365.462231315636},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10254,"opsSec":20501.75893655157},{"name":"Reusing Intl.DateTimeFormat()","samples":230931,"opsSec":461849.7194159607},{"name":"Date.toLocaleDateString()","samples":521233,"opsSec":1042457.9730736073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13225,"opsSec":26447.905484573053}]}-->
