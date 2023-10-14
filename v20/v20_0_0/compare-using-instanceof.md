## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|178,764|61|
|[True conditional] Using constructor name|141,504|94|
|[True conditional] Check if property is valid then instanceof |141,697|91|
|[False conditional] Using instanceof only|715,240,336|96|
|[False conditional] Using constructor name|714,246,265|92|
|[False conditional] Check if property is valid then instanceof |715,676,018|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":178764.0214495332,"cycles":3,"stats":{"deviation":0.0000010330977918833343,"mean":0.000005593966794276384,"moe":2.5925825115908064e-7,"rme":4.634604757117035,"sem":1.3227461793830644e-7,"variance":1.067291047594221e-12}},{"name":"[True conditional] Using constructor name","hz":141503.59130695037,"cycles":3,"stats":{"deviation":0.0000011429891818837818,"mean":0.0000070669584479364525,"moe":2.3106505198202222e-7,"rme":3.269653468098331,"sem":1.1789033264388888e-7,"variance":1.3064242699033568e-12}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":141697.4142331915,"cycles":3,"stats":{"deviation":6.428795344414114e-7,"mean":0.000007057291803182093,"moe":1.3208849008758047e-7,"rme":1.87165974953767,"sem":6.739208677937779e-8,"variance":4.1329409580360586e-13}},{"name":"[False conditional] Using instanceof only","hz":715240336.035075,"cycles":5,"stats":{"deviation":3.090096007104819e-11,"mean":1.398131438648282e-9,"moe":6.1814794201217824e-12,"rme":0.4421243417641804,"sem":3.1538160306743787e-12,"variance":9.548693333125143e-22}},{"name":"[False conditional] Using constructor name","hz":714246264.6172684,"cycles":5,"stats":{"deviation":3.4645519435230866e-11,"mean":1.400077325620812e-9,"moe":7.079608381045357e-12,"rme":0.5056583841114753,"sem":3.61204509237008e-12,"variance":1.2003120169369597e-21}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":715676018.2873827,"cycles":6,"stats":{"deviation":2.1135384115183183e-11,"mean":1.3972802978546163e-9,"moe":4.250151526775748e-12,"rme":0.3041731521800908,"sem":2.168444656518239e-12,"variance":4.467044616963376e-22}}]}-->
