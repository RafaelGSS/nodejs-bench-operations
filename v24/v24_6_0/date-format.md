## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,718|10870|
|Intl.DateTimeFormat().format(new Date())|21,047|10524|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,694|10348|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,693|9848|
|Reusing Intl.DateTimeFormat()|369,517|184761|
|Date.toLocaleDateString()|970,183|485093|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,235|13119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10870,"opsSec":21718.318645932402},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10524,"opsSec":21047.850897024247},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10348,"opsSec":20694.246162637715},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9848,"opsSec":19693.99243379928},{"name":"Reusing Intl.DateTimeFormat()","samples":184761,"opsSec":369517.691423718},{"name":"Date.toLocaleDateString()","samples":485093,"opsSec":970183.826788228},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13119,"opsSec":26235.04425497406}]}-->
