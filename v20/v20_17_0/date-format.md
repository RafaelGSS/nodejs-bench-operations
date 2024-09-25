## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,666|9334|
|Intl.DateTimeFormat().format(new Date())|21,048|10526|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,773|10887|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,109|10055|
|Reusing Intl.DateTimeFormat()|903,005|451503|
|Date.toLocaleDateString()|908,747|454374|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,319|10660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:40:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18666.536095573014,"samples":9334},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21048.30008771838,"samples":10526},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21773.929670206882,"samples":10887},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20109.208179819943,"samples":10055},{"name":"Reusing Intl.DateTimeFormat()","opsSec":903005.911504678,"samples":451503},{"name":"Date.toLocaleDateString()","opsSec":908747.2221131889,"samples":454374},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21319.18279308859,"samples":10660}]}-->
