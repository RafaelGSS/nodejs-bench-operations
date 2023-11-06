## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|226,088|52|
|[True conditional] Using constructor name|170,282|94|
|[True conditional] Check if property is valid then instanceof |172,951|93|
|[False conditional] Using instanceof only|845,686,614|98|
|[False conditional] Using constructor name|845,304,754|100|
|[False conditional] Check if property is valid then instanceof |847,083,835|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Nov 06 2023 15:38:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":226087.85737713147,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":170281.88257192037,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":172951.3137386825,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":845686613.6200991,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":845304754.2748299,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847083834.7466255,"samples":7}]}-->
