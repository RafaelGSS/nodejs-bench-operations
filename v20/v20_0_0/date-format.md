## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,413|84|
|Intl.DateTimeFormat().format(new Date())|8,575|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,959|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,235|92|
|Reusing Intl.DateTimeFormat()|567,246|96|
|Date.toLocaleDateString()|672,371|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,437|82|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10413.140995740121,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8575.38494101811,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11958.7204771467,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14235.249895481908,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":567245.684903137,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":672370.6180612766,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13437.322031010237,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
