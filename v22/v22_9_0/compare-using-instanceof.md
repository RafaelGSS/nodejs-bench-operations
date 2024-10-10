## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|450,375|225190|
|[True conditional] Using constructor name|353,069|176535|
|[True conditional] Check if property is valid then instanceof |353,118|176576|
|[False conditional] Using instanceof only|93,844,952|46935007|
|[False conditional] Using constructor name|93,902,546|46951281|
|[False conditional] Check if property is valid then instanceof |93,800,025|46900016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":450375.3016848528,"samples":225190},{"name":"[True conditional] Using constructor name","opsSec":353069.9357412717,"samples":176535},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":353118.292034079,"samples":176576},{"name":"[False conditional] Using instanceof only","opsSec":93844952.33010043,"samples":46935007},{"name":"[False conditional] Using constructor name","opsSec":93902546.59998235,"samples":46951281},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":93800025.62159824,"samples":46900016}]}-->
