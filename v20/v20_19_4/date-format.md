## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,524|9766|
|Intl.DateTimeFormat().format(new Date())|18,547|9277|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,478|9740|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,572|9291|
|Reusing Intl.DateTimeFormat()|405,562|202784|
|Date.toLocaleDateString()|956,062|478033|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,958|11480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9766,"opsSec":19524.713650211732},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9277,"opsSec":18547.835033495896},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9740,"opsSec":19478.99854572677},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9291,"opsSec":18572.010858239788},{"name":"Reusing Intl.DateTimeFormat()","samples":202784,"opsSec":405562.56140605157},{"name":"Date.toLocaleDateString()","samples":478033,"opsSec":956062.1317726149},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11480,"opsSec":22958.741815031055}]}-->
