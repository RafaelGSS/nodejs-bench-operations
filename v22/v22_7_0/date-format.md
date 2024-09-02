## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,196|10099|
|Intl.DateTimeFormat().format(new Date())|19,365|9683|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,066|11534|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,309|11155|
|Reusing Intl.DateTimeFormat()|909,059|454530|
|Date.toLocaleDateString()|930,324|465163|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,306|11654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:08:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20196.970116101595,"samples":10099},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19365.31253140524,"samples":9683},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23066.19280992575,"samples":11534},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22309.63372043424,"samples":11155},{"name":"Reusing Intl.DateTimeFormat()","opsSec":909059.8036435484,"samples":454530},{"name":"Date.toLocaleDateString()","opsSec":930324.4296126706,"samples":465163},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23306.724283143158,"samples":11654}]}-->
