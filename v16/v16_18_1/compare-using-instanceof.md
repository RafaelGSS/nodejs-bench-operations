## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,084|54|
|[True conditional] Using constructor name|185,984|95|
|[True conditional] Check if property is valid then instanceof |188,999|98|
|[False conditional] Using instanceof only|846,507,147|98|
|[False conditional] Using constructor name|847,172,468|101|
|[False conditional] Check if property is valid then instanceof |848,164,023|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:36:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239083.59092729495,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185984.22732209566,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":188998.92741839503,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846507146.5014391,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":847172468.4008707,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":848164022.6720287,"samples":6}]}-->
