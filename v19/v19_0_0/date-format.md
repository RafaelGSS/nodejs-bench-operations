## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|6,540|86|
|Intl.DateTimeFormat().format(new Date())|7,277|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|6,825|88|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|8,924|92|
|Reusing Intl.DateTimeFormat()|336,384|79|
|Date.toLocaleDateString()|408,537|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|8,609|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:41:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":6539.501257115978,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":7276.593387639408,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":6825.391339516855,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":8923.684417669208,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":336383.5061551366,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":408536.5094256579,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":8608.81329783993,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
