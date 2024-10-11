## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,878,344|1953130|
|Using delete property (proto: null)|15,878,847|7939633|
|Using delete property (cached proto: null)|3,735,200|1867639|
|Using undefined assignment|65,618,528|32810305|
|Using undefined assignment (proto: null)|17,793,105|8897751|
|Using undefined property (cached proto: null)|65,215,951|32609083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:18:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3878344.1211472126,"samples":1953130},{"name":"Using delete property (proto: null)","opsSec":15878847.433581652,"samples":7939633},{"name":"Using delete property (cached proto: null)","opsSec":3735200.726167377,"samples":1867639},{"name":"Using undefined assignment","opsSec":65618528.05534186,"samples":32810305},{"name":"Using undefined assignment (proto: null)","opsSec":17793105.16197605,"samples":8897751},{"name":"Using undefined property (cached proto: null)","opsSec":65215951.527149945,"samples":32609083}]}-->
