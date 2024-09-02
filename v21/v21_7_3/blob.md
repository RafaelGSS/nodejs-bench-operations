## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,577|2289|
|new Blob (1024)|581|291|
|text (128)|4,885|2443|
|text (1024)|630|316|
|arrayBuffer (128)|4,934|2468|
|arrayBuffer (1024)|629|315|
|slice (0, 64)|216,414|108208|
|slice (0, 512)|38,566|19284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:40:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4577.124908642896,"samples":2289},{"name":"new Blob (1024)","opsSec":581.6356424946907,"samples":291},{"name":"text (128)","opsSec":4885.218960963375,"samples":2443},{"name":"text (1024)","opsSec":630.3996435097961,"samples":316},{"name":"arrayBuffer (128)","opsSec":4934.9407051070375,"samples":2468},{"name":"arrayBuffer (1024)","opsSec":629.1204016017199,"samples":315},{"name":"slice (0, 64)","opsSec":216414.8261660382,"samples":108208},{"name":"slice (0, 512)","opsSec":38566.43474268335,"samples":19284}]}-->
