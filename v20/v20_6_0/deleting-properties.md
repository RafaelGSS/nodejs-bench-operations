## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,301,582|91|
|Using delete property (proto: null)|12,346,623|91|
|Using delete property (cached proto: null)|2,317,052|91|
|Using undefined assignment|691,051,498|92|
|Using undefined assignment (proto: null)|12,832,432|87|
|Using undefined property (cached proto: null)|657,958,404|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","hz":2301581.6139410236,"cycles":10,"stats":{"deviation":2.2398711678560465e-8,"mean":4.3448383231029076e-7,"moe":4.602125043689252e-9,"rme":1.0592166385612711,"sem":2.348022981474108e-9,"variance":5.01702284859281e-16}},{"name":"Using delete property (proto: null)","hz":12346623.036372328,"cycles":7,"stats":{"deviation":3.4191369600092482e-9,"mean":8.099380673193525e-8,"moe":7.025089682512215e-10,"rme":0.8673613410668688,"sem":3.584229429853171e-10,"variance":1.1690497551301282e-17}},{"name":"Using delete property (cached proto: null)","hz":2317052.249113562,"cycles":5,"stats":{"deviation":2.215172367536214e-8,"mean":4.3158284427231685e-7,"moe":4.551377943082666e-9,"rme":1.0545780499585549,"sem":2.3221316036136053e-9,"variance":4.906988617895996e-16}},{"name":"Using undefined assignment","hz":691051498.0454774,"cycles":5,"stats":{"deviation":6.861158450481643e-11,"mean":1.4470701573302877e-9,"moe":1.4020374253738284e-11,"rme":0.9688800631204083,"sem":7.153252170274635e-12,"variance":4.707549528261566e-21}},{"name":"Using undefined assignment (proto: null)","hz":12832431.73394019,"cycles":5,"stats":{"deviation":5.918778078270212e-9,"mean":7.792755268318506e-8,"moe":1.2437368490527832e-9,"rme":1.5960168210455716,"sem":6.345596168636649e-10,"variance":3.503193393981203e-17}},{"name":"Using undefined property (cached proto: null)","hz":657958404.1892625,"cycles":6,"stats":{"deviation":6.748975406996231e-11,"mean":1.5198529171949733e-9,"moe":1.410108663609234e-11,"rme":0.9277928460417852,"sem":7.194431957189969e-12,"variance":4.554866904423994e-21}}]}-->
