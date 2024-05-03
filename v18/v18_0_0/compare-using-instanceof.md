## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|282,464|53|
|[True conditional] Using constructor name|217,096|94|
|[True conditional] Check if property is valid then instanceof |221,825|98|
|[False conditional] Using instanceof only|911,031,780|95|
|[False conditional] Using constructor name|911,700,850|99|
|[False conditional] Check if property is valid then instanceof |912,391,181|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":282463.9810966396,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217096.20964387385,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":221825.02678540227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911031779.9659613,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":911700850.3458937,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912391180.7573806,"samples":9}]}-->
