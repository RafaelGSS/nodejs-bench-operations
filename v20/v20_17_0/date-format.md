## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,113|9557|
|Intl.DateTimeFormat().format(new Date())|20,031|10016|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,892|10947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,341|10671|
|Reusing Intl.DateTimeFormat()|910,799|455400|
|Date.toLocaleDateString()|951,531|475766|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,653|10827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:04:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19113.841011069493,"samples":9557},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20031.911939711903,"samples":10016},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21892.505530003345,"samples":10947},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21341.580040381898,"samples":10671},{"name":"Reusing Intl.DateTimeFormat()","opsSec":910799.0582317917,"samples":455400},{"name":"Date.toLocaleDateString()","opsSec":951531.016118777,"samples":475766},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21653.671210653345,"samples":10827}]}-->
