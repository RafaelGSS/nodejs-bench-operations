## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|10,313|80|
|Intl.DateTimeFormat().format(new Date())|11,290|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,283|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,607|76|
|Reusing Intl.DateTimeFormat()|481,251|86|
|Date.toLocaleDateString()|464,119|87|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,703|88|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:11:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":10312.688792421455,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11289.86064729094,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12282.55434950144,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11606.844633386112,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":481251.2479674371,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":464118.5076270662,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12703.219418464932,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
