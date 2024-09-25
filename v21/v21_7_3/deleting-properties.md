## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,713,669|1356835|
|Using delete property (proto: null)|7,788,392|3894197|
|Using delete property (cached proto: null)|2,712,139|1356070|
|Using undefined assignment|13,745,504|6872753|
|Using undefined assignment (proto: null)|7,898,145|3949073|
|Using undefined property (cached proto: null)|14,240,995|7120498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:56:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2713669.131617844,"samples":1356835},{"name":"Using delete property (proto: null)","opsSec":7788392.270944002,"samples":3894197},{"name":"Using delete property (cached proto: null)","opsSec":2712139.4467241946,"samples":1356070},{"name":"Using undefined assignment","opsSec":13745504.872803612,"samples":6872753},{"name":"Using undefined assignment (proto: null)","opsSec":7898145.857854186,"samples":3949073},{"name":"Using undefined property (cached proto: null)","opsSec":14240995.54417173,"samples":7120498}]}-->
