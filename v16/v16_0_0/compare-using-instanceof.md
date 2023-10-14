## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|301,827|89|
|[True conditional] Using constructor name|294,720|83|
|[True conditional] Check if property is valid then instanceof |298,838|84|
|[False conditional] Using instanceof only|598,748,199|100|
|[False conditional] Using constructor name|597,061,516|97|
|[False conditional] Check if property is valid then instanceof |598,419,073|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":301826.6767479086,"cycles":4,"stats":{"deviation":6.357249977988125e-8,"mean":0.000003313159760345568,"moe":1.3207796138702268e-8,"rme":0.3986465215708365,"sem":6.738671499337892e-9,"variance":4.041462728263002e-15}},{"name":"[True conditional] Using constructor name","hz":294720.2864189824,"cycles":3,"stats":{"deviation":1.1289656718464556e-7,"mean":0.0000033930477340076035,"moe":2.4288335978702e-8,"rme":0.7158265336283528,"sem":1.2392008152398979e-8,"variance":1.2745634882077187e-14}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":298837.724014583,"cycles":3,"stats":{"deviation":8.031814208676835e-8,"mean":0.000003346297738337751,"moe":1.7176318403572272e-8,"rme":0.5132931898673333,"sem":8.763427756924629e-9,"variance":6.451003948270309e-15}},{"name":"[False conditional] Using instanceof only","hz":598748198.5938001,"cycles":9,"stats":{"deviation":6.283707004844558e-12,"mean":1.6701511626232303e-9,"moe":1.2316065729495332e-12,"rme":0.07374222169298165,"sem":6.283707004844558e-13,"variance":3.9484973722732564e-23}},{"name":"[False conditional] Using constructor name","hz":597061516.4525758,"cycles":7,"stats":{"deviation":1.630637808282619e-11,"mean":1.674869293103116e-9,"moe":3.245097216908828e-12,"rme":0.1937522665363618,"sem":1.6556618453616468e-12,"variance":2.6589796618007425e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":598419072.5177687,"cycles":8,"stats":{"deviation":2.301635769067156e-11,"mean":1.6710697334438773e-9,"moe":4.557006328360922e-12,"rme":0.2726999500475345,"sem":2.325003228755572e-12,"variance":5.297527213449359e-22}}]}-->
