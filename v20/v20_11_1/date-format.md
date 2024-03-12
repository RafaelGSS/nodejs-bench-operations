## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|14,801|82|
|Intl.DateTimeFormat().format(new Date())|14,459|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,056|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,402|77|
|Reusing Intl.DateTimeFormat()|769,776|94|
|Date.toLocaleDateString()|742,029|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,779|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":14800.77357299722,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14458.69158249088,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16056.272123913235,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15401.964852944197,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":769775.7999331811,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":742029.4677370186,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17778.81771990698,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
