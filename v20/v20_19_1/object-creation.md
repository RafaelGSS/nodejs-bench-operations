## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,978,559|15991159|
|Object.create({})|1,914,240|966731|
|new Function with empty prototype|78,208,966|39214013|
|Empty class|78,284,639|39144545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15991159,"opsSec":31978559.623844527},{"name":"Object.create({})","samples":966731,"opsSec":1914240.8132015578},{"name":"new Function with empty prototype","samples":39214013,"opsSec":78208966.43903464},{"name":"Empty class","samples":39144545,"opsSec":78284639.36168301}]}-->
