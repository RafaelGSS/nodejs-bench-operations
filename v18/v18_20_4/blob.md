## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,332|2167|
|new Blob (1024)|579|290|
|text (128)|48,243|24125|
|text (1024)|33,326|16672|
|arrayBuffer (128)|48,802|24415|
|arrayBuffer (1024)|30,227|15114|
|slice (0, 64)|78,309|39155|
|slice (0, 512)|31,761|15895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:47:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4332.877646037592,"samples":2167},{"name":"new Blob (1024)","opsSec":579.3251707575424,"samples":290},{"name":"text (128)","opsSec":48243.7916029462,"samples":24125},{"name":"text (1024)","opsSec":33326.14285287514,"samples":16672},{"name":"arrayBuffer (128)","opsSec":48802.179536720214,"samples":24415},{"name":"arrayBuffer (1024)","opsSec":30227.73194047315,"samples":15114},{"name":"slice (0, 64)","opsSec":78309.56741794957,"samples":39155},{"name":"slice (0, 512)","opsSec":31761.891551785848,"samples":15895}]}-->
