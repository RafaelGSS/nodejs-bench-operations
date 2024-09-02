## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,831|9916|
|Intl.DateTimeFormat().format(new Date())|19,495|9748|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,597|11299|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,177|11089|
|Reusing Intl.DateTimeFormat()|665,939|332970|
|Date.toLocaleDateString()|657,424|328713|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,245|11623|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19831.705023215472,"samples":9916},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19495.437478652806,"samples":9748},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22597.74166261938,"samples":11299},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22177.100452455357,"samples":11089},{"name":"Reusing Intl.DateTimeFormat()","opsSec":665939.366025349,"samples":332970},{"name":"Date.toLocaleDateString()","opsSec":657424.9560084745,"samples":328713},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23245.401430918126,"samples":11623}]}-->
