## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,827|2914|
|new Blob (1024)|789|395|
|text (128)|6,496|3249|
|text (1024)|828|415|
|arrayBuffer (128)|6,502|3252|
|arrayBuffer (1024)|810|406|
|slice (0, 64)|247,613|130524|
|slice (0, 512)|38,619|19310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:55:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5827.352767582675,"samples":2914},{"name":"new Blob (1024)","opsSec":789.0291989883241,"samples":395},{"name":"text (128)","opsSec":6496.429527140306,"samples":3249},{"name":"text (1024)","opsSec":828.7488064344759,"samples":415},{"name":"arrayBuffer (128)","opsSec":6502.5312992655445,"samples":3252},{"name":"arrayBuffer (1024)","opsSec":810.3278673771508,"samples":406},{"name":"slice (0, 64)","opsSec":247613.37013558764,"samples":130524},{"name":"slice (0, 512)","opsSec":38619.80303899978,"samples":19310}]}-->
