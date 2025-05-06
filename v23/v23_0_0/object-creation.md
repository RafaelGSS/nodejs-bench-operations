## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,296,796|15672908|
|Object.create({})|2,046,030|1037103|
|new Function with empty prototype|75,332,605|37668250|
|Empty class|73,504,762|36753121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15672908,"opsSec":31296796.578641992},{"name":"Object.create({})","samples":1037103,"opsSec":2046030.914413788},{"name":"new Function with empty prototype","samples":37668250,"opsSec":75332605.00299092},{"name":"Empty class","samples":36753121,"opsSec":73504762.49614048}]}-->
