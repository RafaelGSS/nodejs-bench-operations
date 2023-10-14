## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|180,299|56|
|[True conditional] Using constructor name|147,242|95|
|[True conditional] Check if property is valid then instanceof |147,167|93|
|[False conditional] Using instanceof only|719,847,313|95|
|[False conditional] Using constructor name|718,899,985|90|
|[False conditional] Check if property is valid then instanceof |721,144,123|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":180298.6255550923,"cycles":3,"stats":{"deviation":0.0000010934115985159995,"mean":0.000005546353983128056,"moe":2.863820109060185e-7,"rme":5.163428295005859,"sem":1.461132708704176e-7,"variance":1.195548923769313e-12}},{"name":"[True conditional] Using constructor name","hz":147242.15038565546,"cycles":3,"stats":{"deviation":3.413014595489097e-7,"mean":0.000006791533520671954,"moe":6.863291017032066e-8,"rme":1.0105657280703537,"sem":3.501679090322483e-8,"variance":1.1648668629021607e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":147166.68462510008,"cycles":3,"stats":{"deviation":3.739602416656947e-7,"mean":0.000006795016158361187,"moe":7.600462644598014e-8,"rme":1.11853488902241,"sem":3.877787063570415e-8,"variance":1.3984626234666477e-13}},{"name":"[False conditional] Using instanceof only","hz":719847313.3213313,"cycles":6,"stats":{"deviation":1.3138047650264948e-11,"mean":1.3891834858507167e-9,"moe":2.6419530856556726e-12,"rme":0.19018028306302368,"sem":1.3479352477835064e-12,"variance":1.7260829606063232e-22}},{"name":"[False conditional] Using constructor name","hz":718899985.2412457,"cycles":7,"stats":{"deviation":3.1553636268971065e-11,"mean":1.391014077798908e-9,"moe":6.519048792602468e-12,"rme":0.4686544080788875,"sem":3.326045302348198e-12,"variance":9.956319617945264e-22}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":721144122.715221,"cycles":6,"stats":{"deviation":2.224116880592709e-11,"mean":1.3866853635787015e-9,"moe":4.426167149216759e-12,"rme":0.31919044258128504,"sem":2.2582485455187547e-12,"variance":4.946695898537443e-22}}]}-->
