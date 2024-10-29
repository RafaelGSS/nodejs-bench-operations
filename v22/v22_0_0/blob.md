## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,892|2488|
|new Blob (1024)|575|290|
|text (128)|4,204|2103|
|text (1024)|583|292|
|arrayBuffer (128)|4,699|2350|
|arrayBuffer (1024)|592|297|
|slice (0, 64)|146,439|91342|
|slice (0, 512)|33,393|16697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4892.029334023587,"samples":2488},{"name":"new Blob (1024)","opsSec":575.7913624366283,"samples":290},{"name":"text (128)","opsSec":4204.706716308197,"samples":2103},{"name":"text (1024)","opsSec":583.5948439483476,"samples":292},{"name":"arrayBuffer (128)","opsSec":4699.026587244399,"samples":2350},{"name":"arrayBuffer (1024)","opsSec":592.9668667125244,"samples":297},{"name":"slice (0, 64)","opsSec":146439.2424926377,"samples":91342},{"name":"slice (0, 512)","opsSec":33393.72563715017,"samples":16697}]}-->
