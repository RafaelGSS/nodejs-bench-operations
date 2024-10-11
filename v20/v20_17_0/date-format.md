## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,319|8661|
|Intl.DateTimeFormat().format(new Date())|17,200|8601|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,804|8903|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,762|8882|
|Reusing Intl.DateTimeFormat()|540,193|319083|
|Date.toLocaleDateString()|931,344|465688|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,977|10489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:54:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17319.886488891534,"samples":8661},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17200.18489888799,"samples":8601},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17804.947442726974,"samples":8903},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17762.980582544365,"samples":8882},{"name":"Reusing Intl.DateTimeFormat()","opsSec":540193.8430507651,"samples":319083},{"name":"Date.toLocaleDateString()","opsSec":931344.9973877269,"samples":465688},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20977.5781828579,"samples":10489}]}-->
