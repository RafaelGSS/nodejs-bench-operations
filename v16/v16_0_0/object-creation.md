## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|48,192,236|94|
|Object.create({})|1,282,535|86|
|Cached Empty.prototype|597,024,648|99|
|Empty.prototype|1,434,279|76|
|Empty class|857,171|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":48192236.35575131,"cycles":8,"stats":{"deviation":5.120225970667954e-10,"mean":2.0750230236631443e-8,"moe":1.0350975309514242e-10,"rme":0.4988366486286565,"sem":5.2811098517929806e-11,"variance":2.6216713990702586e-19}},{"name":"Object.create({})","hz":1282534.5315501776,"cycles":3,"stats":{"deviation":6.608212123766349e-8,"mean":7.797061017852807e-7,"moe":1.3966604048757253e-8,"rme":1.7912651981019698,"sem":7.125818392223088e-9,"variance":4.366846747269257e-15}},{"name":"Cached Empty.prototype","hz":597024648.2352159,"cycles":7,"stats":{"deviation":9.092936063792004e-12,"mean":1.6749727217393205e-9,"moe":1.7911939407856622e-12,"rme":0.106938693241861,"sem":9.138744595845215e-13,"variance":8.26814862602092e-23}},{"name":"Empty.prototype","hz":1434279.0793175034,"cycles":3,"stats":{"deviation":7.515174111394131e-8,"mean":6.972143806739805e-7,"moe":1.6896172002519205e-8,"rme":2.4233826023763423,"sem":8.620495919652656e-9,"variance":5.647784192456856e-15}},{"name":"Empty class","hz":857171.0404723857,"cycles":5,"stats":{"deviation":7.991518603585607e-8,"mean":0.0000011666283072849748,"moe":1.7512187264250177e-8,"rme":1.5010939778244587,"sem":8.934789420535805e-9,"variance":6.386436959145485e-15}}]}-->
