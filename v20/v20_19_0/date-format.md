## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,144|9074|
|Intl.DateTimeFormat().format(new Date())|17,402|8702|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,592|9297|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,448|8941|
|Reusing Intl.DateTimeFormat()|473,779|237004|
|Date.toLocaleDateString()|1,013,663|506848|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,930|10685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9074,"opsSec":18144.421412053744},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8702,"opsSec":17402.942318777634},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9297,"opsSec":18592.554428893152},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8941,"opsSec":17448.106489956397},{"name":"Reusing Intl.DateTimeFormat()","samples":237004,"opsSec":473779.61074840184},{"name":"Date.toLocaleDateString()","samples":506848,"opsSec":1013663.3600398068},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10685,"opsSec":20930.30633843172}]}-->
