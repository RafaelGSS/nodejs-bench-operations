## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,744,454|96|
|Using delete property (proto: null)|14,866,876|95|
|Using delete property (cached proto: null)|2,764,277|99|
|Using undefined assignment|596,938,140|95|
|Using undefined assignment (proto: null)|15,781,740|98|
|Using undefined property (cached proto: null)|601,322,020|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2744453.621034274,"samples":5},{"name":"Using delete property (proto: null)","opsSec":14866876.000449091,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2764276.617822917,"samples":6},{"name":"Using undefined assignment","opsSec":596938140.399758,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":15781739.704478145,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":601322019.8550787,"samples":7}]}-->
