## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,669,906|15834957|
|Object.create({})|2,101,289|1050651|
|new Function with empty prototype|74,691,032|37361443|
|Empty class|72,097,488|36049277|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:07:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15834957,"opsSec":31669906.58924186},{"name":"Object.create({})","samples":1050651,"opsSec":2101289.131705357},{"name":"new Function with empty prototype","samples":37361443,"opsSec":74691032.36604479},{"name":"Empty class","samples":36049277,"opsSec":72097488.68750715}]}-->
