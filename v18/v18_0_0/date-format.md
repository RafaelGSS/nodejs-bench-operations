## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,032|82|
|Intl.DateTimeFormat().format(new Date())|9,472|95|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,302|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,934|80|
|Reusing Intl.DateTimeFormat()|630,291|80|
|Date.toLocaleDateString()|644,957|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,070|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10031.624076137003,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9472.137862218739,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14301.92230117457,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11934.045440145903,"samples":2},{"name":"Reusing Intl.DateTimeFormat()","opsSec":630291.231607622,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":644956.7054507355,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13069.504482067865,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
