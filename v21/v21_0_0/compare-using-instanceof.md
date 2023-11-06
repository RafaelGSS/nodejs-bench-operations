## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|229,090|48|
|[True conditional] Using constructor name|184,917|95|
|[True conditional] Check if property is valid then instanceof |186,354|97|
|[False conditional] Using instanceof only|846,165,206|99|
|[False conditional] Using constructor name|847,730,353|96|
|[False conditional] Check if property is valid then instanceof |846,248,001|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:43:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":229089.6200611203,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":184916.86946981438,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":186354.02139866166,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":846165206.1373404,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":847730353.0335109,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":846248001.3815929,"samples":8}]}-->
