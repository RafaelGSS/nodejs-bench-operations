## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,669|7835|
|Intl.DateTimeFormat().format(new Date())|15,393|7697|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,304|8153|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,167|8084|
|Reusing Intl.DateTimeFormat()|562,882|281442|
|Date.toLocaleDateString()|563,761|281881|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,045|8023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:38:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15669.373914982094,"samples":7835},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15393.851972051056,"samples":7697},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16304.115700498578,"samples":8153},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16167.082679835556,"samples":8084},{"name":"Reusing Intl.DateTimeFormat()","opsSec":562882.6670994217,"samples":281442},{"name":"Date.toLocaleDateString()","opsSec":563761.3325970576,"samples":281881},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16045.035051148145,"samples":8023}]}-->
