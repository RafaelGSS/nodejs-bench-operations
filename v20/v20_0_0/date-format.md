## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,925|85|
|Intl.DateTimeFormat().format(new Date())|13,741|91|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,611|98|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|13,260|78|
|Reusing Intl.DateTimeFormat()|639,797|99|
|Date.toLocaleDateString()|589,206|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,733|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:14:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12924.582507096327,"samples":7},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13741.349825613985,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16611.129144266837,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":13260.106853244306,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":639796.6256481508,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":589205.97531079,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14733.27883882984,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
