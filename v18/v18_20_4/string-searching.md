## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|154,305,542|77152812|
|Using indexof|15,858,142|7929225|
|Using RegExp.test|13,808,300|6912123|
|Using RegExp.text with cached regex pattern|14,704,721|7352363|
|Using new RegExp.test|4,378,841|2189573|
|Using new RegExp.test with cached regex pattern|4,940,824|2470647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:51:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":154305542.52667356,"samples":77152812},{"name":"Using indexof","opsSec":15858142.320322702,"samples":7929225},{"name":"Using RegExp.test","opsSec":13808300.147373213,"samples":6912123},{"name":"Using RegExp.text with cached regex pattern","opsSec":14704721.294489184,"samples":7352363},{"name":"Using new RegExp.test","opsSec":4378841.959487385,"samples":2189573},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4940824.137506171,"samples":2470647}]}-->
