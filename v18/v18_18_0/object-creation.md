## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|39,202,090|93|
|Object.create({})|779,147|71|
|Cached Empty.prototype|579,263,004|91|
|Empty.prototype|857,966|75|
|Empty class|612,126|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Object.create(null)","hz":39202090.34309239,"cycles":6,"stats":{"deviation":6.752717697444371e-10,"mean":2.5508843820523595e-8,"moe":1.3724394438386108e-10,"rme":0.538024950677847,"sem":7.002242060401076e-11,"variance":4.55991963013784e-19}},{"name":"Object.create({})","hz":779147.32565691,"cycles":3,"stats":{"deviation":1.6844668078706863e-7,"mean":0.000001283454318677005,"moe":3.918224850377869e-8,"rme":3.052874413494363,"sem":1.99909431141728e-8,"variance":2.8374284268180597e-14}},{"name":"Cached Empty.prototype","hz":579263004.1979669,"cycles":8,"stats":{"deviation":1.5420885131019678e-10,"mean":1.726331550181726e-9,"moe":3.1684340901289706e-11,"rme":1.8353566496513596,"sem":1.616548005167842e-11,"variance":2.378036982241038e-20}},{"name":"Empty.prototype","hz":857966.414308959,"cycles":3,"stats":{"deviation":1.459047180989027e-7,"mean":0.0000011655467898535872,"moe":3.3021346282011665e-8,"rme":2.8331206065232024,"sem":1.6847625654087586e-8,"variance":2.128818676352027e-14}},{"name":"Empty class","hz":612126.3635638624,"cycles":3,"stats":{"deviation":1.6566267601185228e-7,"mean":0.0000016336496179937384,"moe":3.774547403214595e-8,"rme":2.31049997602917,"sem":1.925789491436018e-8,"variance":2.7444122223407936e-14}}]}-->
