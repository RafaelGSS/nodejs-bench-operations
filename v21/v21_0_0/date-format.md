## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,654|8828|
|Intl.DateTimeFormat().format(new Date())|17,366|8684|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,360|11181|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,195|9599|
|Reusing Intl.DateTimeFormat()|769,939|390970|
|Date.toLocaleDateString()|802,392|401197|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,848|11925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17654.84586776975,"samples":8828},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17366.69881790128,"samples":8684},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22360.9808332326,"samples":11181},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19195.86396104558,"samples":9599},{"name":"Reusing Intl.DateTimeFormat()","opsSec":769939.0767637903,"samples":390970},{"name":"Date.toLocaleDateString()","opsSec":802392.1286443996,"samples":401197},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23848.551104965703,"samples":11925}]}-->
