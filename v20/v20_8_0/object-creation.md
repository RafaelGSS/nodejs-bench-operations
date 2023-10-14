## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,627,991|96|
|Object.create({})|1,322,354|72|
|Cached Empty.prototype|711,925,056|96|
|Empty.prototype|1,344,542|71|
|Empty class|951,005|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48627991.31797011,"cycles":6,"stats":{"deviation":9.815997819680536e-10,"mean":2.056428762317512e-8,"moe":1.9636085212499773e-10,"rme":0.9548633812323604,"sem":1.0018410822703965e-10,"variance":9.635381319597303e-19}},{"name":"Object.create({})","hz":1322354.1990874482,"cycles":3,"stats":{"deviation":1.3607376152750757e-7,"mean":7.56227038633141e-7,"moe":3.143143530910284e-8,"rme":4.156349046433762,"sem":1.603644658627696e-8,"variance":1.8516068576244997e-14}},{"name":"Cached Empty.prototype","hz":711925055.5346539,"cycles":6,"stats":{"deviation":8.122958728863064e-11,"mean":1.4046422333724474e-9,"moe":1.6249301671377615e-11,"rme":1.1568284994794853,"sem":8.29046003641715e-12,"variance":6.598245851081265e-21}},{"name":"Empty.prototype","hz":1344542.487627896,"cycles":3,"stats":{"deviation":9.601832596842078e-8,"mean":7.437474153488791e-7,"moe":2.2334746469520864e-8,"rme":3.0030015578667952,"sem":1.1395278810980033e-8,"variance":9.21951892177791e-15}},{"name":"Empty class","hz":951004.5566284336,"cycles":3,"stats":{"deviation":1.0069023410244462e-7,"mean":0.0000010515196725715683,"moe":2.1928095426754608e-8,"rme":2.085371866902675,"sem":1.1187803789160514e-8,"variance":1.0138523243605101e-14}}]}-->
