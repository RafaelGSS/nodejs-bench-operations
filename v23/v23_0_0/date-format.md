## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,985|9994|
|Intl.DateTimeFormat().format(new Date())|19,583|9792|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,996|9499|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,182|9592|
|Reusing Intl.DateTimeFormat()|597,926|298989|
|Date.toLocaleDateString()|1,078,626|539315|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,719|12361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19985.44430135363,"samples":9994},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19583.67267849485,"samples":9792},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18996.714872238892,"samples":9499},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19182.04803479198,"samples":9592},{"name":"Reusing Intl.DateTimeFormat()","opsSec":597926.3439472937,"samples":298989},{"name":"Date.toLocaleDateString()","opsSec":1078626.9755299606,"samples":539315},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24719.638681234614,"samples":12361}]}-->
