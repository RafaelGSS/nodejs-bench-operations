## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,203|86|
|Intl.DateTimeFormat().format(new Date())|10,290|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,724|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,556|96|
|Reusing Intl.DateTimeFormat()|532,034|100|
|Date.toLocaleDateString()|644,606|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,052|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13203.188589158699,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10289.707978855853,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13723.920220780174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15556.429773724463,"samples":7},{"name":"Reusing Intl.DateTimeFormat()","opsSec":532033.6480908742,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":644605.7265612734,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14052.361807136815,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
