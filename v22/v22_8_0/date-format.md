## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,747|8874|
|Intl.DateTimeFormat().format(new Date())|18,146|9074|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,908|8955|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,313|9158|
|Reusing Intl.DateTimeFormat()|512,660|256377|
|Date.toLocaleDateString()|949,399|474708|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,859|11430|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17747.282228917535,"samples":8874},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18146.458639803135,"samples":9074},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17908.39662543333,"samples":8955},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18313.853213498605,"samples":9158},{"name":"Reusing Intl.DateTimeFormat()","opsSec":512660.2528955146,"samples":256377},{"name":"Date.toLocaleDateString()","opsSec":949399.3475354442,"samples":474708},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22859.031874282064,"samples":11430}]}-->
