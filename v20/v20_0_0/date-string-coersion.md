## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|698,752|96|
|Using brackets {}|707,194|95|
|Using '' + |690,094|96|
|Using date.toString()|758,797|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Using String()","hz":698752.039933027,"cycles":6,"stats":{"deviation":1.4085317253882681e-8,"mean":0.0000014311228344976947,"moe":2.8176502778739917e-9,"rme":0.19688388794823122,"sem":1.4375766723846897e-9,"variance":1.9839616214252515e-16}},{"name":"Using brackets {}","hz":707193.5031129564,"cycles":6,"stats":{"deviation":3.170677393145866e-8,"mean":0.0000014140401397893995,"moe":6.375970878954357e-9,"rme":0.4509045181633927,"sem":3.253046366813448e-9,"variance":1.0053195131406265e-15}},{"name":"Using '' + ","hz":690093.5100569098,"cycles":6,"stats":{"deviation":2.4605735490636483e-8,"mean":0.0000014490789804957493,"moe":4.92217223033259e-9,"rme":0.33967591115348655,"sem":2.5113123624145868e-9,"variance":6.054422190351678e-16}},{"name":"Using date.toString()","hz":758796.6620598554,"cycles":4,"stats":{"deviation":1.8214584635851253e-8,"mean":0.0000013178761188608365,"moe":3.68223427869841e-9,"rme":0.27940670795987327,"sem":1.878690958519597e-9,"variance":3.317710934565886e-16}}]}-->
