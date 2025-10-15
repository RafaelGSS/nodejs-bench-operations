## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,953,295|17994572|
|Object.create({})|2,018,703|1069274|
|new Function with empty prototype|76,090,131|38046640|
|Empty class|78,494,844|39258103|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":17994572,"opsSec":35953295.616100505},{"name":"Object.create({})","samples":1069274,"opsSec":2018703.0618296585},{"name":"new Function with empty prototype","samples":38046640,"opsSec":76090131.08601514},{"name":"Empty class","samples":39258103,"opsSec":78494844.41304143}]}-->
