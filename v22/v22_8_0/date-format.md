## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,848|9426|
|Intl.DateTimeFormat().format(new Date())|18,203|9123|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,764|8883|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,606|9305|
|Reusing Intl.DateTimeFormat()|519,535|259770|
|Date.toLocaleDateString()|963,224|481666|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,767|11384|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:10:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18848.865509061307,"samples":9426},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18203.22478816703,"samples":9123},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17764.013592472063,"samples":8883},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18606.706724549993,"samples":9305},{"name":"Reusing Intl.DateTimeFormat()","opsSec":519535.8852757886,"samples":259770},{"name":"Date.toLocaleDateString()","opsSec":963224.0091034434,"samples":481666},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22767.097193527887,"samples":11384}]}-->
