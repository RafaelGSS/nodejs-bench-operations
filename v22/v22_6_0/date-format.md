## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,135|10068|
|Intl.DateTimeFormat().format(new Date())|23,033|11517|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|23,053|11527|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,660|11331|
|Reusing Intl.DateTimeFormat()|906,734|453368|
|Date.toLocaleDateString()|957,805|478903|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,488|11745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:07:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":20135.37080993309,"samples":10068},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":23033.196924556574,"samples":11517},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":23053.28806835798,"samples":11527},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22660.812346829596,"samples":11331},{"name":"Reusing Intl.DateTimeFormat()","opsSec":906734.3588119043,"samples":453368},{"name":"Date.toLocaleDateString()","opsSec":957805.3257041464,"samples":478903},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23488.427402808673,"samples":11745}]}-->
