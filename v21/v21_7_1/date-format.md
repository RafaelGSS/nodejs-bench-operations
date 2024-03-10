## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,868|81|
|Intl.DateTimeFormat().format(new Date())|17,115|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,817|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,364|81|
|Reusing Intl.DateTimeFormat()|681,753|84|
|Date.toLocaleDateString()|782,947|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,052|89|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:45:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16868.142315007135,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17115.29548717906,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15817.297327150287,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20364.04063439477,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":681752.9054480148,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":782947.172481649,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20051.55665147416,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
