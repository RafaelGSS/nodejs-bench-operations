## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,813|5407|
|Intl.DateTimeFormat().format(new Date())|10,271|5136|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,092|5547|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,570|5286|
|Reusing Intl.DateTimeFormat()|690,825|345413|
|Date.toLocaleDateString()|700,138|350070|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|15,892|7947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:11:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10813.484391796277,"samples":5407},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10271.730243990438,"samples":5136},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11092.35358413656,"samples":5547},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10570.356838123436,"samples":5286},{"name":"Reusing Intl.DateTimeFormat()","opsSec":690825.9818347573,"samples":345413},{"name":"Date.toLocaleDateString()","opsSec":700138.4806882542,"samples":350070},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":15892.045755978463,"samples":7947}]}-->
