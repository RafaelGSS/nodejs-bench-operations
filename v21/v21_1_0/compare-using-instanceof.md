## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,484|51|
|[True conditional] Using constructor name|230,785|93|
|[True conditional] Check if property is valid then instanceof |231,499|92|
|[False conditional] Using instanceof only|912,007,475|96|
|[False conditional] Using constructor name|913,369,355|98|
|[False conditional] Check if property is valid then instanceof |913,663,294|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:31:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279483.6244066246,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":230785.0230823704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":231499.32351916222,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912007474.9715859,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913369354.8466684,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913663294.3579303,"samples":7}]}-->
