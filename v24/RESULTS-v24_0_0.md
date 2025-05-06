## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|68,316,754|34169422|
|Using dot notation|69,522,456|34763564|
|Using define property (writable)|4,923,027|2463540|
|Using define property initialized (writable)|7,124,418|3563080|
|Using define property (getter)|2,272,143|1137439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:00:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":34169422,"opsSec":68316754.59720205},{"name":"Using dot notation","samples":34763564,"opsSec":69522456.64709297},{"name":"Using define property (writable)","samples":2463540,"opsSec":4923027.117925168},{"name":"Using define property initialized (writable)","samples":3563080,"opsSec":7124418.478649405},{"name":"Using define property (getter)","samples":1137439,"opsSec":2272143.770351073}]}-->
