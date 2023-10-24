## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|172,604|53|
|[True conditional] Using constructor name|133,056|97|
|[True conditional] Check if property is valid then instanceof |135,577|91|
|[False conditional] Using instanceof only|590,623,084|96|
|[False conditional] Using constructor name|592,547,160|97|
|[False conditional] Check if property is valid then instanceof |593,698,527|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:06:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":172604.0974240875,"samples":4},{"name":"[True conditional] Using constructor name","opsSec":133056.48413338538,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":135577.16672990547,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":590623084.4277028,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":592547160.3739338,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":593698526.8541032,"samples":7}]}-->
