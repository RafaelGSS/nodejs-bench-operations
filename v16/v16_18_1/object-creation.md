## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,159,284|92|
|Object.create({})|1,446,761|82|
|Cached Empty.prototype|593,114,752|95|
|Empty.prototype|1,492,909|81|
|Empty class|903,982|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48159284.209858686,"cycles":7,"stats":{"deviation":9.969472377675147e-10,"mean":2.076442821787808e-8,"moe":2.0372031174633428e-10,"rme":0.9811024392712727,"sem":1.0393893456445627e-10,"variance":9.939037948922775e-19}},{"name":"Object.create({})","hz":1446761.0999522172,"cycles":3,"stats":{"deviation":7.010052962488449e-8,"mean":6.911991205963634e-7,"moe":1.5172964591656727e-8,"rme":2.195165494216133,"sem":7.741308465130983e-9,"variance":4.914084253689308e-15}},{"name":"Cached Empty.prototype","hz":593114752.2474494,"cycles":7,"stats":{"deviation":2.3430796450329618e-11,"mean":1.6860143778430194e-9,"moe":4.711740026309765e-12,"rme":0.2794602518359107,"sem":2.4039489930151862e-12,"variance":5.49002222296779e-22}},{"name":"Empty.prototype","hz":1492908.885186573,"cycles":3,"stats":{"deviation":7.141142072224353e-8,"mean":6.698332429544267e-7,"moe":1.5551820512844146e-8,"rme":2.321745102445183,"sem":7.934602302471503e-9,"variance":5.099591009569272e-15}},{"name":"Empty class","hz":903982.3606406092,"cycles":3,"stats":{"deviation":5.7519633433865695e-8,"mean":0.0000011062162753832362,"moe":1.2086833920729614e-8,"rme":1.0926284660332144,"sem":6.166752000372252e-9,"variance":3.3085082303662805e-15}}]}-->
