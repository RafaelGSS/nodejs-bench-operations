## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,307|9654|
|Intl.DateTimeFormat().format(new Date())|21,028|10515|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,699|11350|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,120|11061|
|Reusing Intl.DateTimeFormat()|926,094|463048|
|Date.toLocaleDateString()|925,165|462583|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,035|11518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19307.5721055875,"samples":9654},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21028.63166693291,"samples":10515},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22699.739543185533,"samples":11350},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22120.36145634186,"samples":11061},{"name":"Reusing Intl.DateTimeFormat()","opsSec":926094.9646257048,"samples":463048},{"name":"Date.toLocaleDateString()","opsSec":925165.7594574775,"samples":462583},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23035.45180232274,"samples":11518}]}-->
