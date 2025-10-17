## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,585|9822|
|Intl.DateTimeFormat().format(new Date())|19,228|9615|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,931|9980|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,895|9448|
|Reusing Intl.DateTimeFormat()|424,291|212148|
|Date.toLocaleDateString()|964,520|482382|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,454|11728|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:06:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9822,"opsSec":19585.418290376674},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9615,"opsSec":19228.140408084855},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9980,"opsSec":19931.746549947984},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9448,"opsSec":18895.43725608764},{"name":"Reusing Intl.DateTimeFormat()","samples":212148,"opsSec":424291.27763807983},{"name":"Date.toLocaleDateString()","samples":482382,"opsSec":964520.250300425},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11728,"opsSec":23454.330567658853}]}-->
