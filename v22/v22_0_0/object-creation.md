## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,698,664|15849697|
|Object.create({})|2,015,853|1013708|
|new Function with empty prototype|75,969,299|37984928|
|Empty class|76,559,929|38288313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15849697,"opsSec":31698664.423539624},{"name":"Object.create({})","samples":1013708,"opsSec":2015853.9126474059},{"name":"new Function with empty prototype","samples":37984928,"opsSec":75969299.60084972},{"name":"Empty class","samples":38288313,"opsSec":76559929.81050692}]}-->
