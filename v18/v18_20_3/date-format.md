## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,583|8792|
|Intl.DateTimeFormat().format(new Date())|17,278|8640|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,447|9225|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,980|8991|
|Reusing Intl.DateTimeFormat()|437,739|277579|
|Date.toLocaleDateString()|701,054|350552|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,116|10559|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:25:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17583.083710341685,"samples":8792},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17278.167892189384,"samples":8640},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18447.572188814516,"samples":9225},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17980.277489416516,"samples":8991},{"name":"Reusing Intl.DateTimeFormat()","opsSec":437739.71660141676,"samples":277579},{"name":"Date.toLocaleDateString()","opsSec":701054.3625469143,"samples":350552},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21116.70119617623,"samples":10559}]}-->
