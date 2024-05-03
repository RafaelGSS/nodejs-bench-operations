## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,181,884|96|
|Using delete property (proto: null)|23,221,542|94|
|Using delete property (cached proto: null)|4,231,215|98|
|Using undefined assignment|936,983,689|100|
|Using undefined assignment (proto: null)|25,693,625|97|
|Using undefined property (cached proto: null)|932,475,894|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:51:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4181883.60531899,"samples":4},{"name":"Using delete property (proto: null)","opsSec":23221542.14206413,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4231215.2569704335,"samples":7},{"name":"Using undefined assignment","opsSec":936983688.7781489,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25693624.564266164,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":932475893.7782047,"samples":6}]}-->
