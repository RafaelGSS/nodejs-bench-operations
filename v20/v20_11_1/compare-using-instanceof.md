## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|236,715|53|
|[True conditional] Using constructor name|193,229|94|
|[True conditional] Check if property is valid then instanceof |195,109|96|
|[False conditional] Using instanceof only|846,815,897|99|
|[False conditional] Using constructor name|848,374,154|98|
|[False conditional] Check if property is valid then instanceof |845,738,960|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:33:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":236714.8943339792,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":193229.14220010306,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":195108.97492671965,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846815896.7302669,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848374154.3364139,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845738960.3682193,"samples":6}]}-->
