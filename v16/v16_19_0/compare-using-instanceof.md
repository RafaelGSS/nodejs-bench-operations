## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|194,631|58|
|[True conditional] Using constructor name|149,408|93|
|[True conditional] Check if property is valid then instanceof |154,359|92|
|[False conditional] Using instanceof only|712,432,185|96|
|[False conditional] Using constructor name|709,340,316|98|
|[False conditional] Check if property is valid then instanceof |713,979,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":194631.44927594444,"cycles":4,"stats":{"deviation":9.587521065477565e-7,"mean":0.000005137915808160174,"moe":2.467450254507598e-7,"rme":4.802434190511118,"sem":1.2589031910753053e-7,"variance":9.192056018097607e-13}},{"name":"[True conditional] Using constructor name","hz":149408.1457830001,"cycles":3,"stats":{"deviation":8.558177870592015e-7,"mean":0.0000066930754997280855,"moe":1.739385741156103e-7,"rme":2.598783983875227,"sem":8.874417046714812e-8,"variance":7.324240846469087e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":154358.68677321242,"cycles":3,"stats":{"deviation":1.6647464728642073e-7,"mean":0.000006478417385535448,"moe":3.401811626360049e-8,"rme":0.5250991752947831,"sem":1.7356181767143107e-8,"variance":2.7713808189138192e-14}},{"name":"[False conditional] Using instanceof only","hz":712432185.1018635,"cycles":8,"stats":{"deviation":1.2462899710253757e-11,"mean":1.4036423689323077e-9,"moe":2.4930991754574982e-12,"rme":0.17761640932468398,"sem":1.2719893752334176e-12,"variance":1.553238691878432e-22}},{"name":"[False conditional] Using constructor name","hz":709340316.2030004,"cycles":10,"stats":{"deviation":2.5707313955569287e-11,"mean":1.4097605580250396e-9,"moe":5.089788486740891e-12,"rme":0.3610392174591175,"sem":2.5968308605820873e-12,"variance":6.608659908102075e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":713979205.428328,"cycles":6,"stats":{"deviation":8.96373023307248e-12,"mean":1.4006010152635794e-9,"moe":1.8218112302330077e-12,"rme":0.13007353346021677,"sem":9.294955256290857e-13,"variance":8.034845969129761e-23}}]}-->
