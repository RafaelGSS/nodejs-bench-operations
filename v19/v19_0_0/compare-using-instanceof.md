## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,814|57|
|[True conditional] Using constructor name|118,671|87|
|[True conditional] Check if property is valid then instanceof |117,142|89|
|[False conditional] Using instanceof only|730,016,338|89|
|[False conditional] Using constructor name|731,447,370|86|
|[False conditional] Check if property is valid then instanceof |745,644,911|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":144814.15669697482,"cycles":3,"stats":{"deviation":0.0000011061188364397512,"mean":0.0000069054022259198785,"moe":2.871576771662231e-7,"rme":4.158449685788874,"sem":1.4650901896235872e-7,"variance":1.2234988803268288e-12}},{"name":"[True conditional] Using constructor name","hz":118671.19928050732,"cycles":3,"stats":{"deviation":5.485828501019481e-7,"mean":0.00000842664442647339,"moe":1.1527593979830295e-7,"rme":1.3679934024052174,"sem":5.881425499913416e-8,"variance":3.009431434259765e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":117141.71844094328,"cycles":3,"stats":{"deviation":6.14969944833105e-7,"mean":0.000008536668347614754,"moe":1.27765900206981e-7,"rme":1.4966717108399827,"sem":6.518668377907195e-8,"variance":3.7818803304803226e-13}},{"name":"[False conditional] Using instanceof only","hz":730016337.6706562,"cycles":7,"stats":{"deviation":7.396399196265115e-11,"mean":1.3698323563426135e-9,"moe":1.5366728236734664e-11,"rme":1.12179626693613,"sem":7.840167467721768e-12,"variance":5.4706721070511245e-21}},{"name":"[False conditional] Using constructor name","hz":731447370.262966,"cycles":6,"stats":{"deviation":6.520775716528024e-11,"mean":1.3671523620906388e-9,"moe":1.3781805247436758e-11,"rme":1.0080665205713961,"sem":7.03153328950855e-12,"variance":4.2520515945261574e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":745644911.132739,"cycles":7,"stats":{"deviation":5.1168287682620786e-11,"mean":1.3411209344684725e-9,"moe":1.0571477759124278e-11,"rme":0.7882568594243948,"sem":5.393611101594019e-12,"variance":2.6181936643714423e-21}}]}-->
