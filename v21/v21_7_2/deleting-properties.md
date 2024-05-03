## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,512,978|94|
|Using delete property (proto: null)|23,321,160|96|
|Using delete property (cached proto: null)|4,564,277|98|
|Using undefined assignment|910,282,867|99|
|Using undefined assignment (proto: null)|26,485,986|97|
|Using undefined property (cached proto: null)|908,394,383|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4512977.769378374,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23321160.25266621,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4564277.180619957,"samples":6},{"name":"Using undefined assignment","opsSec":910282866.7115643,"samples":11},{"name":"Using undefined assignment (proto: null)","opsSec":26485985.713527564,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":908394383.2545786,"samples":6}]}-->
