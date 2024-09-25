## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,993|11285|
|Intl.DateTimeFormat().format(new Date())|23,096|11549|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,214|11608|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,709|11355|
|Reusing Intl.DateTimeFormat()|623,536|311769|
|Date.toLocaleDateString()|627,537|313769|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,289|11645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:42:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19993.503785513058,"samples":11285},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":23096.882942347613,"samples":11549},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23214.058376155375,"samples":11608},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22709.723395565292,"samples":11355},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623536.378805177,"samples":311769},{"name":"Date.toLocaleDateString()","opsSec":627537.1515696802,"samples":313769},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23289.270626620368,"samples":11645}]}-->
