## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,209|76|
|Intl.DateTimeFormat().format(new Date())|18,732|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,580|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,444|84|
|Reusing Intl.DateTimeFormat()|744,347|84|
|Date.toLocaleDateString()|895,068|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,807|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:29:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17208.550744962617,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18731.9186775536,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17580.49115391782,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19443.712258192743,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":744346.6980253495,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":895067.9267469503,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19807.365504248104,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
