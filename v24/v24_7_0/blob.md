## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,958|2480|
|new Blob (1024)|580|294|
|text (128)|4,284|2143|
|text (1024)|550|276|
|arrayBuffer (128)|4,362|2182|
|arrayBuffer (1024)|554|279|
|slice (0, 64)|161,583|86851|
|slice (0, 512)|31,747|15878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2480,"opsSec":4958.334049342761},{"name":"new Blob (1024)","samples":294,"opsSec":580.3059623315031},{"name":"text (128)","samples":2143,"opsSec":4284.196173474728},{"name":"text (1024)","samples":276,"opsSec":550.8135838939888},{"name":"arrayBuffer (128)","samples":2182,"opsSec":4362.411593589835},{"name":"arrayBuffer (1024)","samples":279,"opsSec":554.4670876415302},{"name":"slice (0, 64)","samples":86851,"opsSec":161583.9027508069},{"name":"slice (0, 512)","samples":15878,"opsSec":31747.445841202763}]}-->
