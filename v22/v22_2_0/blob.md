## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,201|3112|
|new Blob (1024)|821|412|
|text (128)|6,467|3234|
|text (1024)|815|408|
|arrayBuffer (128)|6,475|3238|
|arrayBuffer (1024)|804|403|
|slice (0, 64)|200,831|100416|
|slice (0, 512)|38,431|19216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:56:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6201.487508880918,"samples":3112},{"name":"new Blob (1024)","opsSec":821.988725107854,"samples":412},{"name":"text (128)","opsSec":6467.896927594568,"samples":3234},{"name":"text (1024)","opsSec":815.0912059090612,"samples":408},{"name":"arrayBuffer (128)","opsSec":6475.923894942443,"samples":3238},{"name":"arrayBuffer (1024)","opsSec":804.0718774496106,"samples":403},{"name":"slice (0, 64)","opsSec":200831.728475525,"samples":100416},{"name":"slice (0, 512)","opsSec":38431.22807035604,"samples":19216}]}-->
