## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,148|11076|
|Intl.DateTimeFormat().format(new Date())|21,462|10732|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,589|10795|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,604|10304|
|Reusing Intl.DateTimeFormat()|463,907|231958|
|Date.toLocaleDateString()|1,042,247|521125|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,644|13323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:22:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11076,"opsSec":22148.69005546073},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10732,"opsSec":21462.66764051821},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10795,"opsSec":21589.374167221642},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10304,"opsSec":20604.53011471056},{"name":"Reusing Intl.DateTimeFormat()","samples":231958,"opsSec":463907.75914256653},{"name":"Date.toLocaleDateString()","samples":521125,"opsSec":1042247.1692566883},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13323,"opsSec":26644.734161969434}]}-->
