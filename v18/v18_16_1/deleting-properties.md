## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,370,939|94|
|Using delete property (proto: null)|17,253,987|91|
|Using delete property (cached proto: null)|2,390,184|93|
|Using undefined assignment|590,896,100|98|
|Using undefined assignment (proto: null)|19,124,828|94|
|Using undefined property (cached proto: null)|595,033,980|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:48:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using delete property","hz":2370939.2646672605,"cycles":6,"stats":{"deviation":1.6760103120213115e-8,"mean":4.217737733321232e-7,"moe":3.3881983837445157e-9,"rme":0.8033212584502023,"sem":1.7286726447676101e-9,"variance":2.8090105660017737e-16}},{"name":"Using delete property (proto: null)","hz":17253987.254074972,"cycles":6,"stats":{"deviation":6.717792094223642e-10,"mean":5.7957617869679626e-8,"moe":1.3802632793705046e-10,"rme":0.23815045029526405,"sem":7.042159588625024e-11,"variance":4.512873062121367e-19}},{"name":"Using delete property (cached proto: null)","hz":2390184.343150913,"cycles":6,"stats":{"deviation":6.628534605941402e-9,"mean":4.183777719344141e-7,"moe":1.3472001578692009e-9,"rme":0.3220056724429402,"sem":6.873470193210209e-10,"variance":4.393747102216273e-17}},{"name":"Using undefined assignment","hz":590896100.4046123,"cycles":6,"stats":{"deviation":7.869206792655838e-12,"mean":1.6923448967005474e-9,"moe":1.5580234559809319e-12,"rme":0.09206299844780498,"sem":7.949099265208836e-13,"variance":6.192441554558078e-23}},{"name":"Using undefined assignment (proto: null)","hz":19124828.23118458,"cycles":6,"stats":{"deviation":6.630087212185249e-10,"mean":5.228805131799402e-8,"moe":1.3403289117785331e-10,"rme":0.25633560211054995,"sem":6.838412815196598e-11,"variance":4.395805644118237e-19}},{"name":"Using undefined property (cached proto: null)","hz":595033979.7718706,"cycles":9,"stats":{"deviation":9.929285524242374e-12,"mean":1.6805762931108385e-9,"moe":1.9966974719108527e-12,"rme":0.11881028431115476,"sem":1.0187231999545167e-12,"variance":9.859071102192914e-23}}]}-->
