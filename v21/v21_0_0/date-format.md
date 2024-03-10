## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,200|81|
|Intl.DateTimeFormat().format(new Date())|16,696|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,591|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,434|81|
|Reusing Intl.DateTimeFormat()|785,965|93|
|Date.toLocaleDateString()|797,209|93|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,820|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17200.3231260596,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16695.772979064783,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15590.983960744436,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17433.93611009695,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":785965.1932518678,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":797209.1827879155,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19820.38495585699,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
