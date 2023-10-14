## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|768,129|93|
|Using brackets {}|790,632|89|
|Using '' + |784,797|99|
|Using date.toString()|854,884|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using String()","hz":768128.7626582164,"cycles":4,"stats":{"deviation":2.96424459177325e-8,"mean":0.0000013018650630128222,"moe":6.024605767948147e-9,"rme":0.46276729740375633,"sem":3.073778453034769e-9,"variance":8.786745999856961e-16}},{"name":"Using brackets {}","hz":790631.9268113072,"cycles":3,"stats":{"deviation":3.123795730198027e-8,"mean":0.0000012648110531446585,"moe":6.489985029102343e-9,"rme":0.5131189368535723,"sem":3.311216851582828e-9,"variance":9.758099764003427e-16}},{"name":"Using '' + ","hz":784797.1348636753,"cycles":5,"stats":{"deviation":5.757734502196418e-8,"mean":0.0000012742146416904374,"moe":1.1342012173662947e-8,"rme":0.8901178657479608,"sem":5.786740904930075e-9,"variance":3.3151506597783038e-15}},{"name":"Using date.toString()","hz":854883.9750128763,"cycles":5,"stats":{"deviation":2.036170709575817e-8,"mean":0.000001169749380300336,"moe":4.160795235788321e-9,"rme":0.35569971703853576,"sem":2.1228547121368983e-9,"variance":4.1459911585344863e-16}}]}-->
