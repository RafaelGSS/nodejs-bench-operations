## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,713|84|
|Intl.DateTimeFormat().format(new Date())|8,710|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,149|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,992|76|
|Reusing Intl.DateTimeFormat()|422,277|97|
|Date.toLocaleDateString()|423,355|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|11,175|86|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8712.859097031851,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8710.313802791254,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10149.132105762517,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8992.277568939322,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":422277.28255833144,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":423354.68888506765,"samples":8},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":11174.946354381002,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
