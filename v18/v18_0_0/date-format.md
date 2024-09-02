## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,777|7889|
|Intl.DateTimeFormat().format(new Date())|15,477|7739|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,422|8212|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,092|8047|
|Reusing Intl.DateTimeFormat()|616,637|308319|
|Date.toLocaleDateString()|627,635|313818|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,141|8071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:03:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15777.352213602264,"samples":7889},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15477.62590629913,"samples":7739},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16422.32410130758,"samples":8212},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16092.23114347081,"samples":8047},{"name":"Reusing Intl.DateTimeFormat()","opsSec":616637.5547495509,"samples":308319},{"name":"Date.toLocaleDateString()","opsSec":627635.5480036859,"samples":313818},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16141.28971872064,"samples":8071}]}-->
