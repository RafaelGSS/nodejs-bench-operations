## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,265,528|1632767|
|Using delete property (proto: null)|18,361,126|9180749|
|Using delete property (cached proto: null)|3,270,598|1635300|
|Using undefined assignment|82,671,059|41427233|
|Using undefined assignment (proto: null)|20,349,405|10174706|
|Using undefined property (cached proto: null)|83,391,593|41710284|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:44:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1632767,"opsSec":3265528.7098434903},{"name":"Using delete property (proto: null)","samples":9180749,"opsSec":18361126.29735924},{"name":"Using delete property (cached proto: null)","samples":1635300,"opsSec":3270598.3974067857},{"name":"Using undefined assignment","samples":41427233,"opsSec":82671059.92287685},{"name":"Using undefined assignment (proto: null)","samples":10174706,"opsSec":20349405.650985435},{"name":"Using undefined property (cached proto: null)","samples":41710284,"opsSec":83391593.9242574}]}-->
