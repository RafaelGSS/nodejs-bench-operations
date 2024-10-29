## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,463|8733|
|Intl.DateTimeFormat().format(new Date())|16,999|8688|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,452|9227|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,111|9057|
|Reusing Intl.DateTimeFormat()|436,878|277606|
|Date.toLocaleDateString()|766,003|383004|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,894|10448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:24:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17463.803123422284,"samples":8733},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16999.505458793024,"samples":8688},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18452.027441362465,"samples":9227},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18111.073286779003,"samples":9057},{"name":"Reusing Intl.DateTimeFormat()","opsSec":436878.3471352039,"samples":277606},{"name":"Date.toLocaleDateString()","opsSec":766003.842131145,"samples":383004},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20894.129097892317,"samples":10448}]}-->
