## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|7,602|85|
|Intl.DateTimeFormat().format(new Date())|8,266|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,302|63|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,639|97|
|Reusing Intl.DateTimeFormat()|360,898|74|
|Date.toLocaleDateString()|464,063|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|9,409|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":7601.741081670525,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8266.301403712936,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6301.656552907621,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10639.264810939765,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":360897.8904655501,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":464062.6386751792,"samples":3},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":9409.440879578859,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
