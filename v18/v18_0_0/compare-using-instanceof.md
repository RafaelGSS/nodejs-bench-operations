## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|170,693|52|
|[True conditional] Using constructor name|128,914|96|
|[True conditional] Check if property is valid then instanceof |131,162|93|
|[False conditional] Using instanceof only|591,347,364|95|
|[False conditional] Using constructor name|592,043,927|98|
|[False conditional] Check if property is valid then instanceof |591,427,571|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:38:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"[True conditional] Using instanceof only","hz":170693.30795527372,"cycles":3,"stats":{"deviation":0.0000013960730222954928,"mean":0.0000058584604866994975,"moe":3.794569699119087e-7,"rme":6.477076542094845,"sem":1.9360049485301465e-7,"variance":1.9490198835812715e-12}},{"name":"[True conditional] Using constructor name","hz":128914.42123322304,"cycles":3,"stats":{"deviation":4.1526221698928426e-7,"mean":0.000007757084044079671,"moe":8.306974418825343e-8,"rme":1.0708887994020584,"sem":4.2382522545027264e-8,"variance":1.7244270885885542e-13}},{"name":"[True conditional] Check if property is valid then instanceof ","hz":131161.70479843926,"cycles":3,"stats":{"deviation":2.5004979817530967e-7,"mean":0.000007624176595880137,"moe":5.082075414903808e-8,"rme":0.6665736753330189,"sem":2.5928956198488817e-8,"variance":6.252490156751309e-14}},{"name":"[False conditional] Using instanceof only","hz":591347364.1138763,"cycles":6,"stats":{"deviation":1.2295703133331015e-11,"mean":1.6910534496056856e-9,"moe":2.4725645467387915e-12,"rme":0.14621445273154057,"sem":1.2615125238463221e-12,"variance":1.5118431554300615e-22}},{"name":"[False conditional] Using constructor name","hz":592043927.3954532,"cycles":6,"stats":{"deviation":9.181394924477442e-12,"mean":1.6890638578107637e-9,"moe":1.8178234513179297e-12,"rme":0.10762313354298247,"sem":9.274609445499641e-13,"variance":8.429801275922015e-23}},{"name":"[False conditional] Check if property is valid then instanceof ","hz":591427570.6685528,"cycles":6,"stats":{"deviation":1.827909172199069e-11,"mean":1.690824117092808e-9,"moe":3.63768271368159e-12,"rme":0.21514258502156913,"sem":1.855960568204893e-12,"variance":3.3412519418094854e-22}}]}-->
