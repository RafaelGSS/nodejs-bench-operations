## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|227,621|56|
|[True conditional] Using constructor name|186,488|94|
|[True conditional] Check if property is valid then instanceof |186,795|92|
|[False conditional] Using instanceof only|843,010,413|99|
|[False conditional] Using constructor name|843,350,298|93|
|[False conditional] Check if property is valid then instanceof |845,393,668|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Wed Mar 13 2024 15:45:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":227620.8549725511,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":186488.24001015464,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":186795.20464174703,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":843010412.9589269,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":843350297.9634844,"samples":9},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":845393667.8249674,"samples":5}]}-->
