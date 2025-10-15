## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,503,388|18251759|
|Object.create({})|1,964,190|987607|
|new Function with empty prototype|83,251,167|41626944|
|Empty class|83,618,785|41811084|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:54:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18251759,"opsSec":36503388.77800372},{"name":"Object.create({})","samples":987607,"opsSec":1964190.0970035926},{"name":"new Function with empty prototype","samples":41626944,"opsSec":83251167.18535404},{"name":"Empty class","samples":41811084,"opsSec":83618785.28566004}]}-->
