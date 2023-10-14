## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|49,248,340|91|
|Object.create({})|1,585,919|78|
|Cached Empty.prototype|717,546,525|98|
|Empty.prototype|1,428,725|70|
|Empty class|989,923|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":49248340.44906952,"cycles":8,"stats":{"deviation":2.5880444545465675e-9,"mean":2.0305252743169208e-8,"moe":5.317495206588293e-10,"rme":2.6187781427035555,"sem":2.7130077584634145e-10,"variance":6.69797409870924e-18}},{"name":"Object.create({})","hz":1585918.5042472777,"cycles":3,"stats":{"deviation":7.70588333048756e-8,"mean":6.3054942440099e-7,"moe":1.7101381656901117e-8,"rme":2.712139761787445,"sem":8.725194722908734e-9,"variance":5.9380637903086065e-15}},{"name":"Cached Empty.prototype","hz":717546525.420857,"cycles":6,"stats":{"deviation":2.5179181655652585e-11,"mean":1.3936378542331842e-9,"moe":4.985223626163162e-12,"rme":0.3577129891399342,"sem":2.5434814419199806e-12,"variance":6.339911888483516e-22}},{"name":"Empty.prototype","hz":1428724.8454566433,"cycles":3,"stats":{"deviation":6.288774007134127e-8,"mean":6.9992483379848e-7,"moe":1.47323843174918e-8,"rme":2.1048523507216346,"sem":7.516522610965204e-9,"variance":3.9548678512805815e-15}},{"name":"Empty class","hz":989923.2681118546,"cycles":6,"stats":{"deviation":1.0128329589002468e-7,"mean":0.0000010101793060257746,"moe":2.1406451003011323e-8,"rme":2.1190743935577254,"sem":1.0921658675005777e-8,"variance":1.025830602634629e-14}}]}-->
