## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,489|9246|
|Intl.DateTimeFormat().format(new Date())|18,565|9283|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,393|9197|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,376|9189|
|Reusing Intl.DateTimeFormat()|518,997|259500|
|Date.toLocaleDateString()|960,373|480196|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,678|11341|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:10:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18489.916704105115,"samples":9246},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18565.14618892677,"samples":9283},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18393.232303270128,"samples":9197},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18376.664788289814,"samples":9189},{"name":"Reusing Intl.DateTimeFormat()","opsSec":518997.30536599056,"samples":259500},{"name":"Date.toLocaleDateString()","opsSec":960373.3764394841,"samples":480196},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22678.807912428707,"samples":11341}]}-->
