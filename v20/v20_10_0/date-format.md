## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,047|84|
|Intl.DateTimeFormat().format(new Date())|16,439|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|14,830|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,761|82|
|Reusing Intl.DateTimeFormat()|778,705|94|
|Date.toLocaleDateString()|779,579|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,183|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15046.606612331389,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16439.328940111754,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":14829.562429552323,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16761.498649867528,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":778704.8433350296,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":779579.1842503572,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17183.43276577993,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
