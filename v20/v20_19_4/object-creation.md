## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,331,309|17702749|
|Object.create({})|1,922,290|967491|
|new Function with empty prototype|105,944,784|53026809|
|Empty class|80,891,728|40447483|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:31:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17702749,"opsSec":35331309.73978412},{"name":"Object.create({})","samples":967491,"opsSec":1922290.3127296208},{"name":"new Function with empty prototype","samples":53026809,"opsSec":105944784.73665228},{"name":"Empty class","samples":40447483,"opsSec":80891728.06590898}]}-->
