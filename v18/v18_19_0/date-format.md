## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,082|84|
|Intl.DateTimeFormat().format(new Date())|13,818|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,948|73|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,285|81|
|Reusing Intl.DateTimeFormat()|712,963|96|
|Date.toLocaleDateString()|732,657|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,900|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15082.49585147802,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13817.790465175427,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17947.646555409538,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16284.513205905036,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":712962.8377960159,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":732657.3660158613,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16900.453688701244,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->
