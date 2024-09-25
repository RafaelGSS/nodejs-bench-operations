## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,147|11574|
|Intl.DateTimeFormat().format(new Date())|22,494|11248|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,915|10958|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,953|7477|
|Reusing Intl.DateTimeFormat()|653,931|326966|
|Date.toLocaleDateString()|644,721|322361|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,078|11540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23147.395204856795,"samples":11574},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22494.871882171774,"samples":11248},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21915.11230646057,"samples":10958},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14953.522743366058,"samples":7477},{"name":"Reusing Intl.DateTimeFormat()","opsSec":653931.1747386138,"samples":326966},{"name":"Date.toLocaleDateString()","opsSec":644721.4210405848,"samples":322361},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23078.885843707565,"samples":11540}]}-->
