## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|9,495|78|
|Intl.DateTimeFormat().format(new Date())|11,311|72|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,785|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|9,594|71|
|Reusing Intl.DateTimeFormat()|503,552|85|
|Date.toLocaleDateString()|574,569|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,846|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:44:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":9495.216919678534,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11310.955821206308,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11785.188482904721,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":9593.79770966804,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":503551.578784614,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":574568.9567447116,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12845.955892729029,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
