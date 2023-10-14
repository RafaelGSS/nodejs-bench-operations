## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,350,649|95|
|using Array.includes (first item)|117,946,100|92|
|Using raw comparison|712,449,683|95|
|Using raw comparison (first item)|710,184,842|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:00:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"using Array.includes","hz":66350648.758662686,"cycles":7,"stats":{"deviation":7.071797007755662e-10,"mean":1.5071442686827397e-8,"moe":1.4220800854983844e-10,"rme":0.943559362595923,"sem":7.255510640297879e-11,"variance":5.001031291890194e-19}},{"name":"using Array.includes (first item)","hz":117946100.25716592,"cycles":6,"stats":{"deviation":1.459357636657044e-10,"mean":8.47844903578526e-9,"moe":2.982111604571157e-11,"rme":0.3517284342908076,"sem":1.5214855125363047e-11,"variance":2.1297247116692324e-20}},{"name":"Using raw comparison","hz":712449683.2607338,"cycles":7,"stats":{"deviation":1.2479644944871073e-11,"mean":1.4036078946982026e-9,"moe":2.509553728808743e-12,"rme":0.17879307592155827,"sem":1.280384555514665e-12,"variance":1.5574153795004612e-22}},{"name":"Using raw comparison (first item)","hz":710184841.7830142,"cycles":7,"stats":{"deviation":9.88837147176004e-12,"mean":1.4080841228452103e-9,"moe":1.9884699932108347e-12,"rme":0.1412181247518708,"sem":1.0145255067402218e-12,"variance":9.777989036351783e-23}}]}-->
