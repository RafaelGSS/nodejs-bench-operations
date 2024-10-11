## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,421|2711|
|new Blob (1024)|638|321|
|text (128)|4,106|2054|
|text (1024)|515|258|
|arrayBuffer (128)|4,120|2061|
|arrayBuffer (1024)|518|260|
|slice (0, 64)|175,794|89691|
|slice (0, 512)|30,167|15084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:47:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":5421.564333933254,"samples":2711},{"name":"new Blob (1024)","opsSec":638.2770931147973,"samples":321},{"name":"text (128)","opsSec":4106.7884563374955,"samples":2054},{"name":"text (1024)","opsSec":515.1013480070508,"samples":258},{"name":"arrayBuffer (128)","opsSec":4120.542020375846,"samples":2061},{"name":"arrayBuffer (1024)","opsSec":518.3074452685628,"samples":260},{"name":"slice (0, 64)","opsSec":175794.06941240325,"samples":89691},{"name":"slice (0, 512)","opsSec":30167.100899724785,"samples":15084}]}-->
