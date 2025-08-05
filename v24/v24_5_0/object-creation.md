## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,031,235|20015664|
|Object.create({})|2,078,111|1039868|
|new Function with empty prototype|73,693,881|36867731|
|Empty class|76,778,988|38389859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:30:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":20015664,"opsSec":40031235.12753451},{"name":"Object.create({})","samples":1039868,"opsSec":2078111.3574780598},{"name":"new Function with empty prototype","samples":36867731,"opsSec":73693881.25921382},{"name":"Empty class","samples":38389859,"opsSec":76778988.75316481}]}-->
