## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|697,561,397|95|
|Length = 10_000 - Array.at|711,838,782|97|
|Length = 1_000_000 - Array.at|712,076,815|95|
|Length = 100 - Array[length - 1]|712,085,602|96|
|Length = 10_000 - Array[length - 1]|712,127,236|97|
|Length = 1_000_000 - Array[length - 1]|711,426,256|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":697561396.5941687,"cycles":8,"stats":{"deviation":2.0973972974547369e-10,"mean":1.4335655683965347e-9,"moe":4.2176930769045146e-11,"rme":2.9420998731310695,"sem":2.1518842229104667e-11,"variance":4.399075423370434e-20}},{"name":"Length = 10_000 - Array.at","hz":711838781.7560861,"cycles":6,"stats":{"deviation":3.189180879670411e-11,"mean":1.4048124738764983e-9,"moe":6.346720249137994e-12,"rme":0.4517841610293073,"sem":3.2381225760908135e-12,"variance":1.0170874683255337e-21}},{"name":"Length = 1_000_000 - Array.at","hz":712076814.5515221,"cycles":6,"stats":{"deviation":9.255867687304638e-12,"mean":1.4043428736404185e-9,"moe":1.8612786958800516e-12,"rme":0.13253734047548787,"sem":9.49631987693904e-13,"variance":8.567108664489011e-23}},{"name":"Length = 100 - Array[length - 1]","hz":712085602.2476928,"cycles":8,"stats":{"deviation":1.4037915452965269e-11,"mean":1.4043255429452688e-9,"moe":2.808167942821165e-12,"rme":0.19996559607764738,"sem":1.4327387463373292e-12,"variance":1.970630702646011e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":712127236.2998004,"cycles":6,"stats":{"deviation":2.0631376514490043e-11,"mean":1.4042434399728636e-9,"moe":4.105805848981395e-12,"rme":0.2923856172018676,"sem":2.094798902541528e-12,"variance":4.256536968826513e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":711426256.3666325,"cycles":7,"stats":{"deviation":1.2271806071232667e-11,"mean":1.405627064015264e-9,"moe":2.4808506963200567e-12,"rme":0.17649423234875314,"sem":1.2657401511837024e-12,"variance":1.5059722424994294e-22}}]}-->
