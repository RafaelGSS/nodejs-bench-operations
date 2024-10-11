## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,479|9240|
|Intl.DateTimeFormat().format(new Date())|18,572|9287|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,604|9303|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,279|9140|
|Reusing Intl.DateTimeFormat()|509,249|254642|
|Date.toLocaleDateString()|945,041|472742|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,651|11327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:15:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18479.917099091894,"samples":9240},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18572.31504528983,"samples":9287},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18604.295958116014,"samples":9303},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18279.52758388912,"samples":9140},{"name":"Reusing Intl.DateTimeFormat()","opsSec":509249.92099528696,"samples":254642},{"name":"Date.toLocaleDateString()","opsSec":945041.7091396222,"samples":472742},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22651.908005688045,"samples":11327}]}-->
