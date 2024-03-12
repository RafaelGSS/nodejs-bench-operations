## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|261,492|55|
|[True conditional] Using constructor name|204,829|95|
|[True conditional] Check if property is valid then instanceof |207,851|96|
|[False conditional] Using instanceof only|819,775,360|96|
|[False conditional] Using constructor name|815,010,673|90|
|[False conditional] Check if property is valid then instanceof |820,281,907|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":261491.90293942794,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":204829.13889423557,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207850.81729145406,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819775359.9137529,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":815010672.9061419,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":820281907.4632835,"samples":7}]}-->
