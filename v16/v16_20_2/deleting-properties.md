## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,361,756|94|
|Using delete property (proto: null)|21,296,636|94|
|Using delete property (cached proto: null)|3,371,760|95|
|Using undefined assignment|846,397,002|100|
|Using undefined assignment (proto: null)|23,182,153|95|
|Using undefined property (cached proto: null)|844,707,588|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3361755.7968024868,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21296636.250180107,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":3371759.637190949,"samples":5},{"name":"Using undefined assignment","opsSec":846397002.294037,"samples":10},{"name":"Using undefined assignment (proto: null)","opsSec":23182153.057241373,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":844707587.6997187,"samples":7}]}-->
