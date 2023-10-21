## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,412,852|96|
|Using delete property (proto: null)|12,473,045|97|
|Using delete property (cached proto: null)|2,413,285|96|
|Using undefined assignment|711,764,486|94|
|Using undefined assignment (proto: null)|15,091,142|94|
|Using undefined property (cached proto: null)|709,315,951|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2412851.7847624985,"samples":8},{"name":"Using delete property (proto: null)","opsSec":12473044.80008667,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":2413285.3514511767,"samples":7},{"name":"Using undefined assignment","opsSec":711764485.5116663,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":15091141.759529714,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":709315951.2398508,"samples":7}]}-->
