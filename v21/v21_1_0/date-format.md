## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,246|82|
|Intl.DateTimeFormat().format(new Date())|18,133|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,936|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,552|88|
|Reusing Intl.DateTimeFormat()|894,994|98|
|Date.toLocaleDateString()|910,448|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,425|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:35:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18246.214243981613,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18132.84236478236,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":20935.828022864174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15552.24095045049,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":894993.9756774461,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":910447.8030634733,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21424.57987479227,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
