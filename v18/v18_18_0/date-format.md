## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,750|83|
|Intl.DateTimeFormat().format(new Date())|14,795|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,218|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,395|89|
|Reusing Intl.DateTimeFormat()|602,439|97|
|Date.toLocaleDateString()|735,295|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,784|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14749.598519930274,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14795.065862873163,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15218.176485246457,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18395.309390553757,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":602438.572633572,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":735294.7688892613,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16784.183658580085,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
