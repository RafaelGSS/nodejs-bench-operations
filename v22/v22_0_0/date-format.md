## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,705|9853|
|Intl.DateTimeFormat().format(new Date())|19,392|9697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,457|9729|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,387|9194|
|Reusing Intl.DateTimeFormat()|384,463|192235|
|Date.toLocaleDateString()|704,138|352070|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,462|11732|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9853,"opsSec":19705.537038112827},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9697,"opsSec":19392.07801236404},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9729,"opsSec":19457.791295730563},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9194,"opsSec":18387.48548138126},{"name":"Reusing Intl.DateTimeFormat()","samples":192235,"opsSec":384463.5210207438},{"name":"Date.toLocaleDateString()","samples":352070,"opsSec":704138.2312047632},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11732,"opsSec":23462.49516248527}]}-->
