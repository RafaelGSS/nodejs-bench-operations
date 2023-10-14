## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,450,173|91|
|Function returning explicitly undefined|1,448,794|91|
|Function returning implicitly undefined|1,482,957|91|
|Function returning string|1,424,356|89|
|Function returning integer|1,451,627|86|
|Function returning float|1,429,319|85|
|Function returning functions|1,423,102|91|
|Function returning arrow functions|1,330,269|88|
|Function returning empty object|1,418,782|91|
|Function returning empty array|1,390,542|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:57:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Function returning null","hz":1450172.8290742391,"cycles":6,"stats":{"deviation":4.052021591622116e-8,"mean":6.895729805104539e-7,"moe":8.325438673431865e-9,"rme":1.2073324954334768,"sem":4.247672792567278e-9,"variance":1.6418878978971825e-15}},{"name":"Function returning explicitly undefined","hz":1448794.0559414302,"cycles":6,"stats":{"deviation":4.713434693752688e-8,"mean":6.902292260925915e-7,"moe":9.684403351946324e-9,"rme":1.4030706011639096,"sem":4.941022118339961e-9,"variance":2.2216466612271496e-15}},{"name":"Function returning implicitly undefined","hz":1482957.188009763,"cycles":7,"stats":{"deviation":5.066766362725891e-8,"mean":6.743283002944092e-7,"moe":1.0410372124546108e-8,"rme":1.5438136171952117,"sem":5.3114143492582184e-9,"variance":2.5672121374450552e-15}},{"name":"Function returning string","hz":1424355.5088058985,"cycles":6,"stats":{"deviation":5.989341691817223e-8,"mean":7.020719152048952e-7,"moe":1.2443431412081527e-8,"rme":1.7723870080246684,"sem":6.348689495959963e-9,"variance":3.587221390134e-15}},{"name":"Function returning integer","hz":1451627.3552932492,"cycles":5,"stats":{"deviation":6.159555079591456e-8,"mean":6.888820304698555e-7,"moe":1.3018357356260783e-8,"rme":1.8897803659331258,"sem":6.642019059316726e-9,"variance":3.79401187785209e-15}},{"name":"Function returning float","hz":1429318.6747250592,"cycles":6,"stats":{"deviation":5.826158469147705e-8,"mean":6.996340408078401e-7,"moe":1.2385937995555277e-8,"rme":1.7703452481033826,"sem":6.3193561201812635e-9,"variance":3.3944122507621527e-15}},{"name":"Function returning functions","hz":1423101.9077506994,"cycles":6,"stats":{"deviation":3.6597731183350034e-8,"mean":7.026903657100438e-7,"moe":7.519509944954427e-9,"rme":1.0701028948015001,"sem":3.836484665793075e-9,"variance":1.3393939277687514e-15}},{"name":"Function returning arrow functions","hz":1330268.8603705075,"cycles":4,"stats":{"deviation":9.433324545617566e-8,"mean":7.517277369940685e-7,"moe":1.9709677197258156e-8,"rme":2.6219169823467183,"sem":1.0055957753703142e-8,"variance":8.898761198295085e-15}},{"name":"Function returning empty object","hz":1418781.5733193888,"cycles":6,"stats":{"deviation":4.2596428786170325e-8,"mean":7.048301294612917e-7,"moe":8.752025317429285e-9,"rme":1.2417212249593446,"sem":4.465319039504738e-9,"variance":1.81445574533528e-15}},{"name":"Function returning empty array","hz":1390541.557664484,"cycles":4,"stats":{"deviation":7.317151863494269e-8,"mean":7.191442747526173e-7,"moe":1.5935130724943076e-8,"rme":2.215846149984952,"sem":8.130168737215855e-9,"variance":5.3540711393437644e-15}}]}-->
