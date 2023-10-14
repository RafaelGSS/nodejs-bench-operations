## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|48,520,283|80|
|Using Object.getOwnPropertyNames()|40,511,650|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using Object.keys()","hz":48520283.20799226,"cycles":7,"stats":{"deviation":2.3746320581610813e-9,"mean":2.060993740933647e-8,"moe":5.203641929526444e-10,"rme":2.524821801336064,"sem":2.654919351799206e-10,"variance":5.6388774116463324e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":40511649.718843706,"cycles":7,"stats":{"deviation":2.519938619007112e-9,"mean":2.468425766267566e-8,"moe":5.295249249700359e-10,"rme":2.1451928277783088,"sem":2.701657780459367e-10,"variance":6.3500906435634694e-18}}]}-->
