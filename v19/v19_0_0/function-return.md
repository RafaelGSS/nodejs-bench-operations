## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,440,684|89|
|Function returning explicitly undefined|1,496,780|94|
|Function returning implicitly undefined|1,541,244|94|
|Function returning string|1,482,511|89|
|Function returning integer|1,510,927|94|
|Function returning float|1,532,791|94|
|Function returning functions|1,479,323|94|
|Function returning arrow functions|1,521,650|93|
|Function returning empty object|1,526,697|94|
|Function returning empty array|1,509,968|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1440683.9226294146,"cycles":6,"stats":{"deviation":4.815278031213511e-8,"mean":6.941147772197558e-7,"moe":1.0004201629265942e-8,"rme":1.4412892446026437,"sem":5.1041845047275215e-9,"variance":2.3186902517887466e-15}},{"name":"Function returning explicitly undefined","hz":1496780.1046662733,"cycles":8,"stats":{"deviation":3.071976525347175e-8,"mean":6.681008097865939e-7,"moe":6.210263638252629e-9,"rme":0.9295399058468921,"sem":3.168501856251341e-9,"variance":9.437039772284104e-16}},{"name":"Function returning implicitly undefined","hz":1541243.9033945552,"cycles":5,"stats":{"deviation":3.1170016255607107e-8,"mean":6.48826573002185e-7,"moe":6.301285734403965e-9,"rme":0.9711818221697194,"sem":3.214941701226513e-9,"variance":9.715699133748112e-16}},{"name":"Function returning string","hz":1482510.5625119992,"cycles":4,"stats":{"deviation":4.018418578040319e-8,"mean":6.745314504239198e-7,"moe":8.348649740453782e-9,"rme":1.2376961422935793,"sem":4.25951517370091e-9,"variance":1.6147687868339583e-15}},{"name":"Function returning integer","hz":1510927.3280078003,"cycles":6,"stats":{"deviation":4.21196907968993e-8,"mean":6.618452002708349e-7,"moe":8.514856218859489e-9,"rme":1.286532895513197,"sem":4.344314397377291e-9,"variance":1.7740683528264034e-15}},{"name":"Function returning float","hz":1532790.6220090806,"cycles":6,"stats":{"deviation":2.694177057118392e-8,"mean":6.524048266222207e-7,"moe":5.4465096574740044e-9,"rme":0.8348358925658044,"sem":2.7788314578949e-9,"variance":7.258590015103119e-16}},{"name":"Function returning functions","hz":1479323.463852579,"cycles":5,"stats":{"deviation":3.9228373039627274e-8,"mean":6.759846811296534e-7,"moe":7.930351572210494e-9,"rme":1.1731555157371172,"sem":4.046097740923721e-9,"variance":1.538865251336156e-15}},{"name":"Function returning arrow functions","hz":1521650.3791992601,"cycles":6,"stats":{"deviation":2.3042338828172843e-8,"mean":6.571811854219963e-7,"moe":4.683183290491596e-9,"rme":0.7126167629836176,"sem":2.389379229842651e-9,"variance":5.309493786723218e-16}},{"name":"Function returning empty object","hz":1526696.753617783,"cycles":6,"stats":{"deviation":2.761737589605985e-8,"mean":6.550089254007516e-7,"moe":5.583089059961876e-9,"rme":0.8523683943002754,"sem":2.848514826511161e-9,"variance":7.627194513842676e-16}},{"name":"Function returning empty array","hz":1509967.6335567066,"cycles":5,"stats":{"deviation":3.3199858677734315e-8,"mean":6.622658511192817e-7,"moe":6.747623345254694e-9,"rme":1.018869285476622,"sem":3.4426649720687214e-9,"variance":1.1022306162215307e-15}}]}-->
