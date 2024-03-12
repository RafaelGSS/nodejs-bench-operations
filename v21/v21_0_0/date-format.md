## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,355|84|
|Intl.DateTimeFormat().format(new Date())|18,516|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,947|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,139|94|
|Reusing Intl.DateTimeFormat()|685,020|87|
|Date.toLocaleDateString()|794,914|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,737|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:41:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16354.595651126214,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18516.129698131655,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15946.868327133328,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20138.673371198623,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":685019.9981068947,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":794913.5896547472,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19736.66571433676,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
