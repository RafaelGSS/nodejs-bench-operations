## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,582|83|
|Intl.DateTimeFormat().format(new Date())|18,996|83|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,605|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,041|85|
|Reusing Intl.DateTimeFormat()|742,911|88|
|Date.toLocaleDateString()|879,322|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,834|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:30:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16581.506119407422,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18995.856911407725,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16604.871940537745,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19040.958222207882,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":742911.0473206537,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":879322.2725463231,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19833.502849719152,"samples":7},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
