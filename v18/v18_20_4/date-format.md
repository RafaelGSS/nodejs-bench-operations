## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,847|8925|
|Intl.DateTimeFormat().format(new Date())|17,532|8767|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,476|9240|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,185|9093|
|Reusing Intl.DateTimeFormat()|433,102|277488|
|Date.toLocaleDateString()|758,489|379253|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,719|10361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:53:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17847.903835086185,"samples":8925},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17532.535647557645,"samples":8767},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18476.716613550907,"samples":9240},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18185.39515375719,"samples":9093},{"name":"Reusing Intl.DateTimeFormat()","opsSec":433102.6650007793,"samples":277488},{"name":"Date.toLocaleDateString()","opsSec":758489.0568714476,"samples":379253},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20719.981583714,"samples":10361}]}-->
