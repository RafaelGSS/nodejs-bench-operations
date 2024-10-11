## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,019|9510|
|Intl.DateTimeFormat().format(new Date())|18,825|9413|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,320|9161|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,387|9209|
|Reusing Intl.DateTimeFormat()|538,374|269330|
|Date.toLocaleDateString()|950,811|475407|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,430|11407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:13:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19019.631437582004,"samples":9510},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18825.859107270444,"samples":9413},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18320.989890543377,"samples":9161},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18387.615788817315,"samples":9209},{"name":"Reusing Intl.DateTimeFormat()","opsSec":538374.6259155395,"samples":269330},{"name":"Date.toLocaleDateString()","opsSec":950811.9633607744,"samples":475407},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22430.802532564438,"samples":11407}]}-->
