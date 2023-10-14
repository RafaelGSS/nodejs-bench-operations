## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|714,402,088|95|
|Using dot notation|684,969,452|94|
|Using define property (writable)|3,081,939|93|
|Using define property initialized (writable)|4,041,423|95|
|Using define property (getter)|1,593,880|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 01:29:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759754180908203},"benchmarks":[{"name":"Directly in the object","hz":714402087.853775,"cycles":7,"stats":{"deviation":2.596069319615998e-11,"mean":1.3997719449620108e-9,"moe":5.220481407979361e-12,"rme":0.3729522817462271,"sem":2.6635109224384494e-12,"variance":6.739575912251471e-22}},{"name":"Using dot notation","hz":684969452.2765539,"cycles":8,"stats":{"deviation":2.651273827152204e-10,"mean":1.4599191200080754e-9,"moe":5.3597771037503083e-11,"rme":3.671283587080263,"sem":2.7345801549746472e-11,"variance":7.029252906542295e-20}},{"name":"Using define property (writable)","hz":3081939.3216443267,"cycles":6,"stats":{"deviation":6.464367913890573e-9,"mean":3.2447102153408513e-7,"moe":1.3138345036792834e-9,"rme":0.4049158219022241,"sem":6.703237263669814e-10,"variance":4.178805252613796e-17}},{"name":"Using define property initialized (writable)","hz":4041422.9092966584,"cycles":4,"stats":{"deviation":4.583567324033552e-9,"mean":2.474376036468881e-7,"moe":9.217176065575274e-10,"rme":0.37250506510436754,"sem":4.702640849783303e-10,"variance":2.1009089413948093e-17}},{"name":"Using define property (getter)","hz":1593879.6658226606,"cycles":4,"stats":{"deviation":5.207690574030328e-8,"mean":6.273999357936867e-7,"moe":1.0880776937227935e-8,"rme":1.7342649108599772,"sem":5.55141680470813e-9,"variance":2.7120041114844326e-15}}]}-->
