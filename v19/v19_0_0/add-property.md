## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|595,555,714|97|
|Using dot notation|596,471,122|97|
|Using define property (writable)|3,163,788|98|
|Using define property initialized (writable)|4,361,472|96|
|Using define property (getter)|1,663,738|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Directly in the object","hz":595555713.8000968,"cycles":7,"stats":{"deviation":4.299449143677617e-11,"mean":1.6791040314586895e-9,"moe":8.556241232431379e-12,"rme":0.509571835462649,"sem":4.365429200220091e-12,"variance":1.8485262939070196e-21}},{"name":"Using dot notation","hz":596471121.984627,"cycles":6,"stats":{"deviation":7.660166058257041e-11,"mean":1.6765270993719175e-9,"moe":1.5244331653814474e-11,"rme":0.9092803605456485,"sem":7.777720231537998e-12,"variance":5.867814404007322e-21}},{"name":"Using define property (writable)","hz":3163788.1397338696,"cycles":7,"stats":{"deviation":2.2436651272362915e-9,"mean":3.160767901747421e-7,"moe":4.442230313305567e-10,"rme":0.14054275579202424,"sem":2.2664440374007996e-10,"variance":5.034033203176245e-18}},{"name":"Using define property initialized (writable)","hz":4361472.398087336,"cycles":4,"stats":{"deviation":3.1376009150194913e-9,"mean":2.2928036881272855e-7,"moe":6.276509027601343e-10,"rme":0.27374820880229245,"sem":3.202300524286399e-10,"variance":9.844539501931149e-18}},{"name":"Using define property (getter)","hz":1663737.9572259483,"cycles":4,"stats":{"deviation":4.025372932155702e-8,"mean":6.010561913652321e-7,"moe":8.270685317582153e-9,"rme":1.3760253095132777,"sem":4.21973740692967e-9,"variance":1.6203627242931793e-15}}]}-->
