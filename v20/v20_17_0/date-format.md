## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,715|8859|
|Intl.DateTimeFormat().format(new Date())|16,864|8497|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,796|8899|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,039|9020|
|Reusing Intl.DateTimeFormat()|520,153|275979|
|Date.toLocaleDateString()|933,617|466820|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,222|10612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:14:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17715.206205690127,"samples":8859},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16864.218171134147,"samples":8497},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17796.263760914957,"samples":8899},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18039.546594035906,"samples":9020},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520153.42874158116,"samples":275979},{"name":"Date.toLocaleDateString()","opsSec":933617.5707714797,"samples":466820},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21222.572272672925,"samples":10612}]}-->
