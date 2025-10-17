## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,691,195|18478586|
|Object.create({})|1,931,102|965564|
|new Function with empty prototype|71,160,287|35580556|
|Empty class|79,174,296|39591942|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":18478586,"opsSec":36691195.90646145},{"name":"Object.create({})","samples":965564,"opsSec":1931102.5248954918},{"name":"new Function with empty prototype","samples":35580556,"opsSec":71160287.5369086},{"name":"Empty class","samples":39591942,"opsSec":79174296.46774353}]}-->
