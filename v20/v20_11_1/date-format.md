## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,988|82|
|Intl.DateTimeFormat().format(new Date())|16,760|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,599|74|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,579|82|
|Reusing Intl.DateTimeFormat()|773,430|96|
|Date.toLocaleDateString()|733,582|91|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,728|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:48:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15987.901077176793,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16759.7129151989,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17598.815672600544,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19579.244480133162,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":773429.841817145,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":733582.0711842473,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17727.96428808991,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
