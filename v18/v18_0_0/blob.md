## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,527|84|
|new Blob (1024)|582|77|
|text (128)|37,787|87|
|text (1024)|16,110|82|
|arrayBuffer (128)|43,362|88|
|arrayBuffer (1024)|17,620|82|
|slice (0, 64)|74,190|85|
|slice (0, 512)|21,941|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:27:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4526.756416746185,"samples":5},{"name":"new Blob (1024)","opsSec":582.0777593726007,"samples":2},{"name":"text (128)","opsSec":37786.95236175153,"samples":4},{"name":"text (1024)","opsSec":16109.974370661848,"samples":3},{"name":"arrayBuffer (128)","opsSec":43362.30134442238,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17620.427349138965,"samples":4},{"name":"slice (0, 64)","opsSec":74189.76495523694,"samples":3},{"name":"slice (0, 512)","opsSec":21941.328938736657,"samples":6}]}-->
