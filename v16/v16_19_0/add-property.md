## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|593,612,132|97|
|Using dot notation|596,552,285|91|
|Using define property (writable)|3,124,421|99|
|Using define property initialized (writable)|3,978,762|95|
|Using define property (getter)|1,551,219|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":593612132.2334692,"cycles":6,"stats":{"deviation":1.7518262265314876e-11,"mean":1.6846016880374292e-9,"moe":3.486271680534919e-12,"rme":0.20694931658274937,"sem":1.7787100410892445e-12,"variance":3.0688951279635505e-22}},{"name":"Using dot notation","hz":596552285.1900151,"cycles":6,"stats":{"deviation":5.819608478795625e-11,"mean":1.6762990014889944e-9,"moe":1.1957190355000336e-11,"rme":0.7133089230727457,"sem":6.1006073239797635e-12,"variance":3.3867842846469926e-21}},{"name":"Using define property (writable)","hz":3124421.1077466365,"cycles":3,"stats":{"deviation":1.6885143137344666e-8,"mean":3.20059289549868e-7,"moe":3.3261606443428082e-9,"rme":1.0392326524940823,"sem":1.6970207369095961e-9,"variance":2.851080587686177e-16}},{"name":"Using define property initialized (writable)","hz":3978762.0403719735,"cycles":5,"stats":{"deviation":6.325837596581485e-9,"mean":2.513344577667958e-7,"moe":1.2720737968482009e-9,"rme":0.5061278935451471,"sem":6.490172432898984e-10,"variance":4.001622129832382e-17}},{"name":"Using define property (getter)","hz":1551218.9781849182,"cycles":3,"stats":{"deviation":4.223555087712194e-8,"mean":6.446543099737603e-7,"moe":8.774840500567402e-9,"rme":1.3611699115025804,"sem":4.476959439065001e-9,"variance":1.7838417578939555e-15}}]}-->
