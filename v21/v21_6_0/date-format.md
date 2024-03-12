## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,207|82|
|Intl.DateTimeFormat().format(new Date())|15,727|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,867|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,829|95|
|Reusing Intl.DateTimeFormat()|679,251|83|
|Date.toLocaleDateString()|786,507|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,500|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16206.880457573357,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15727.09278987326,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15867.276108055521,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19829.076283191433,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":679250.9822273682,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":786506.6740915033,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19499.627406290037,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
