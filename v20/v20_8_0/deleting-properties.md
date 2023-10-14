## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,113,122|91|
|Using delete property (proto: null)|12,537,133|86|
|Using delete property (cached proto: null)|2,147,971|89|
|Using undefined assignment|730,630,695|85|
|Using undefined assignment (proto: null)|13,347,425|83|
|Using undefined property (cached proto: null)|618,736,014|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using delete property","hz":2113122.3805717905,"cycles":5,"stats":{"deviation":1.9560342319032244e-8,"mean":4.7323335798914285e-7,"moe":4.0189428098097825e-9,"rme":0.849251799764713,"sem":2.0504810254131544e-9,"variance":3.826069916377237e-16}},{"name":"Using delete property (proto: null)","hz":12537133.41758982,"cycles":6,"stats":{"deviation":4.836224465943139e-9,"mean":7.97630500284046e-8,"moe":1.0221468521540547e-9,"rme":1.2814791457824841,"sem":5.215034959969666e-10,"variance":2.3389067084987006e-17}},{"name":"Using delete property (cached proto: null)","hz":2147970.515616346,"cycles":6,"stats":{"deviation":2.5093025572033354e-8,"mean":4.6555573865177406e-7,"moe":5.213316566222944e-9,"rme":1.1198050272821136,"sem":2.6598553909300735e-9,"variance":6.296599323587199e-16}},{"name":"Using undefined assignment","hz":730630694.5048171,"cycles":8,"stats":{"deviation":5.226950992564449e-11,"mean":1.3686805215290704e-9,"moe":1.1112071743764315e-11,"rme":0.8118820695533876,"sem":5.6694243590634264e-12,"variance":2.732101667867048e-21}},{"name":"Using undefined assignment (proto: null)","hz":13347424.80428067,"cycles":5,"stats":{"deviation":4.417185180534823e-9,"mean":7.492081915901026e-8,"moe":9.503041626545099e-10,"rme":1.2684113352225979,"sem":4.848490625788316e-10,"variance":1.951152491913646e-17}},{"name":"Using undefined property (cached proto: null)","hz":618736013.8763041,"cycles":9,"stats":{"deviation":6.078699239827718e-11,"mean":1.6161981484399534e-9,"moe":1.2558722741873271e-11,"rme":0.7770534048684355,"sem":6.407511602996567e-12,"variance":3.695058444828208e-21}}]}-->
