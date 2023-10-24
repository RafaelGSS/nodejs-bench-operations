## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,020|83|
|Intl.DateTimeFormat().format(new Date())|9,992|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|11,698|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,889|85|
|Reusing Intl.DateTimeFormat()|379,900|96|
|Date.toLocaleDateString()|464,073|94|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,919|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:12:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10020.448718728576,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9992.131544466682,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":11697.696181193474,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10888.53362269811,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":379899.61678800656,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":464072.68197089166,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10918.777730983153,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
