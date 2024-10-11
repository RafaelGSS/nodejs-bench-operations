## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,420|9211|
|Intl.DateTimeFormat().format(new Date())|18,446|9224|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,379|9190|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,109|9055|
|Reusing Intl.DateTimeFormat()|476,467|238235|
|Date.toLocaleDateString()|937,911|468956|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,327|11166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:08:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18420.016900980438,"samples":9211},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18446.736656793324,"samples":9224},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18379.421121752348,"samples":9190},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18109.969430371602,"samples":9055},{"name":"Reusing Intl.DateTimeFormat()","opsSec":476467.3641825413,"samples":238235},{"name":"Date.toLocaleDateString()","opsSec":937911.1258668306,"samples":468956},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22327.15938253723,"samples":11166}]}-->
