## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,426|56|
|[True conditional] Using constructor name|130,901|96|
|[True conditional] Check if property is valid then instanceof |131,601|98|
|[False conditional] Using instanceof only|597,454,542|95|
|[False conditional] Using constructor name|596,862,933|97|
|[False conditional] Check if property is valid then instanceof |598,456,639|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":165426.23394401622,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":130900.97325429757,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":131600.98633036827,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":597454542.1131063,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":596862932.9248109,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":598456638.6070374,"samples":6}]}-->
