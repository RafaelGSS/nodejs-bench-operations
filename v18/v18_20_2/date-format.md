## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,739|77|
|Intl.DateTimeFormat().format(new Date())|15,190|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,265|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,138|78|
|Reusing Intl.DateTimeFormat()|790,446|96|
|Date.toLocaleDateString()|816,010|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,452|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:26:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15738.69911268256,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15190.387540603751,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16264.753115342603,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17137.822299471347,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":790445.616167678,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":816009.529963813,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17452.247095664567,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
