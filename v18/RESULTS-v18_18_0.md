## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|660,166,844|87|
|Using dot notation|635,660,830|86|
|Using define property (writable)|2,537,449|91|
|Using define property initialized (writable)|3,346,301|88|
|Using define property (getter)|1,389,947|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":660166843.8399377,"cycles":8,"stats":{"deviation":7.336904156047068e-11,"mean":1.5147685911994353e-9,"moe":1.5417334348699085e-11,"rme":1.0178012957405735,"sem":7.865986912601574e-12,"variance":5.383016259502074e-21}},{"name":"Using dot notation","hz":635660830.2048651,"cycles":6,"stats":{"deviation":9.766837172523297e-11,"mean":1.5731659911744337e-9,"moe":2.0642428699696482e-11,"rme":1.3121583364693798,"sem":1.0531851377396164e-11,"variance":9.539110835458288e-21}},{"name":"Using define property (writable)","hz":2537448.8167411312,"cycles":5,"stats":{"deviation":2.9376520371421074e-8,"mean":3.940966191721294e-7,"moe":6.035812328758596e-9,"rme":1.531556485168003,"sem":3.0794960861013246e-9,"variance":8.629799491325174e-16}},{"name":"Using define property initialized (writable)","hz":3346300.9773303135,"cycles":6,"stats":{"deviation":1.236880943678366e-8,"mean":2.988374347599188e-7,"moe":2.5842982517405445e-9,"rme":0.8647839765512404,"sem":1.3185195161941553e-9,"variance":1.5298744688346853e-16}},{"name":"Using define property (getter)","hz":1389947.2769589713,"cycles":4,"stats":{"deviation":6.097119456482759e-8,"mean":7.194517494130234e-7,"moe":1.3117217782107631e-8,"rme":1.82322411375183,"sem":6.69245805209573e-9,"variance":3.7174865666620615e-15}}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.003ms
array.push|100|0.044ms
new Array(length)|100|0.014ms
array.push|1,000|0.069ms
new Array(length)|1,000|0.034ms
array.push|10,000|0.466ms
new Array(length)|10,000|0.245ms
array.push|1,000,000|45.491ms
new Array(length)|1,000,000|7.596ms
array.push|100,000,000|2,151.642ms
new Array(length)|100,000,000|4,947.681ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.042ms
array.push|100|0.018ms
new Array(length)|100|0.013ms
array.push|1,000|0.068ms
new Array(length)|1,000|0.037ms
array.push|10,000|0.746ms
new Array(length)|10,000|4.445ms
array.push|1,000,000|377.83ms
new Array(length)|1,000,000|4.587ms
array.push|100,000,000|2,876.191ms
new Array(length)|100,000,000|5,670.299ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|246|80|
|Array.from|12|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:32:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"new Array","hz":245.9124393738427,"cycles":3,"stats":{"deviation":0.0004803697556465623,"mean":0.004066488066021634,"moe":0.00010526566394014633,"rme":2.5886136201828536,"sem":0.00005370697139803384,"variance":2.3075510213993797e-7}},{"name":"Array.from","hz":11.852383189800479,"cycles":1,"stats":{"deviation":0.0038323257399697237,"mean":0.0843712175,"moe":0.0012881873467316507,"rme":1.5268090053715897,"sem":0.0006572384422100259,"variance":0.00001468672057723449}}]}-->
