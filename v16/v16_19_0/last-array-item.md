## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,993,733|96|
|Length = 10_000 - Array.at|15,889,521|97|
|Length = 1_000_000 - Array.at|15,898,657|97|
|Length = 100 - Array[length - 1]|711,409,285|96|
|Length = 10_000 - Array[length - 1]|710,472,204|95|
|Length = 1_000_000 - Array[length - 1]|710,351,871|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Length = 100 - Array.at","hz":15993733.200491024,"cycles":5,"stats":{"deviation":5.56938979787662e-10,"mean":6.252448927741892e-8,"moe":1.1141099933159048e-10,"rme":0.1781877798909542,"sem":5.684234659775024e-11,"variance":3.101810272069217e-19}},{"name":"Length = 10_000 - Array.at","hz":15889520.663961211,"cycles":8,"stats":{"deviation":1.7468099911360886e-9,"mean":6.293456052881981e-8,"moe":3.476288978405553e-10,"rme":0.5523656555627564,"sem":1.7736168257171187e-10,"variance":3.0513451451328618e-18}},{"name":"Length = 1_000_000 - Array.at","hz":15898657.378578423,"cycles":9,"stats":{"deviation":6.34055149683528e-10,"mean":6.289839300187592e-8,"moe":1.2618195108402102e-10,"rme":0.20061236076453923,"sem":6.43785464714393e-11,"variance":4.020259328402011e-19}},{"name":"Length = 100 - Array[length - 1]","hz":711409284.6342038,"cycles":8,"stats":{"deviation":1.3848694718441504e-11,"mean":1.4056605973510528e-9,"moe":2.7703159125402397e-12,"rme":0.1970828461551003,"sem":1.4134264859899183e-12,"variance":1.917863454045896e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":710472203.655582,"cycles":8,"stats":{"deviation":1.0716424292980717e-11,"mean":1.4075146006482942e-9,"moe":2.1549845899261034e-12,"rme":0.15310566504486192,"sem":1.099481933635767e-12,"variance":1.1484174962718725e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":710351870.7988243,"cycles":6,"stats":{"deviation":1.0292878833535733e-11,"mean":1.407753032135261e-9,"moe":2.0378860379148873e-12,"rme":0.1447616159507644,"sem":1.0397377744463711e-12,"variance":1.0594335468184791e-22}}]}-->
