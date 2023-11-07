## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,705|80|
|Intl.DateTimeFormat().format(new Date())|13,963|92|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,359|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,480|87|
|Reusing Intl.DateTimeFormat()|626,808|96|
|Date.toLocaleDateString()|627,307|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,910|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:07:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11705.340019647907,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13962.646797172014,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15359.032911634986,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14479.758278227595,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":626807.5692898304,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":627307.419236547,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13909.591519880092,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
