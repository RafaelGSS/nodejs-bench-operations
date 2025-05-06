## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,982,517|7991259|
|Using indexof|15,806,868|7903437|
|Using RegExp.test|13,326,521|6663410|
|Using RegExp.text with cached regex pattern|14,075,478|7037812|
|Using new RegExp.test|4,709,352|2362169|
|Using new RegExp.test with cached regex pattern|5,244,999|2622528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:13:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7991259,"opsSec":15982517.296769237},{"name":"Using indexof","samples":7903437,"opsSec":15806868.341141133},{"name":"Using RegExp.test","samples":6663410,"opsSec":13326521.246046707},{"name":"Using RegExp.text with cached regex pattern","samples":7037812,"opsSec":14075478.656607393},{"name":"Using new RegExp.test","samples":2362169,"opsSec":4709352.642100027},{"name":"Using new RegExp.test with cached regex pattern","samples":2622528,"opsSec":5244999.448415947}]}-->
