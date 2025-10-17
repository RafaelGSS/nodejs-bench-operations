## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,673|9838|
|Intl.DateTimeFormat().format(new Date())|19,449|9726|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,476|9739|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,400|9201|
|Reusing Intl.DateTimeFormat()|380,722|190577|
|Date.toLocaleDateString()|690,527|345264|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,575|11788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9838,"opsSec":19673.99974444598},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9726,"opsSec":19449.837372582544},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9739,"opsSec":19476.180262573347},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9201,"opsSec":18400.87070176329},{"name":"Reusing Intl.DateTimeFormat()","samples":190577,"opsSec":380722.2366174527},{"name":"Date.toLocaleDateString()","samples":345264,"opsSec":690527.0180705803},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11788,"opsSec":23575.144882344826}]}-->
